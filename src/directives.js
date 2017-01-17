import getEnhancedUrl from './libs/enhancedUrl'
import setCssStyle from './libs/styleConfig'
import setPlaceHolder from './libs/placeHolder'
import * as preview from './libs/preview'
import setDefaultImage from './libs/defaultImage'

import {extendStyle} from './libs/utils'

let mixinProperties = {
  wxPreviewCurrent: null,
  wxPreviewUrls: []
}

const setImageSrc = (el, url, config) => {
  if (!url) {
    return
  }

  el.setAttribute('image-url', url)

  if (!config.lazy) {
    if (el.nodeName === 'IMG') {
      if (url) {
        el.setAttribute('src', url)
      }
    } else {
      el.setAttribute('style', extendStyle(el.getAttribute('style'), `background-image: url(${url})`))
    }
  }
}

const setErrorHandler = (el) => {
  let otherHandler = el.onerror

  el.onerror = () => {
    otherHandler && otherHandler()
    el.onerror = null
  }
}

export default (Vue, Options) => {
  const isVueOld = Vue.version.split('.')[0] === '1'

  const imageHandlerOneTime = function (el, binding, vnode) {
    preview.addListener.bind(this)(el)
  }

  const imageHandler = function (el, binding, vnode) {
    let url

    setCssStyle(el, binding.value.styleConfig)
    setPlaceHolder(el, binding.value.placeHolder)
    url = getEnhancedUrl(binding.value.url, binding.value.view)
    preview.setPreview.bind(this)(el, binding.value.preview)
    setDefaultImage(el, binding.value.defaultImage, Options)
    setImageSrc(el, url, binding.value)
    setErrorHandler(el)
  }

  const unbind = function (el, binding, vnode, OldVnode) {
    preview.removeListener(el)
  }

  if (isVueOld) {
    Vue.directive('image', Object.assign(mixinProperties, {
      bind () {
        imageHandlerOneTime.bind(this)(this.el)
      },
      update (newValue, oldValue) {
        imageHandler.bind(this)(this.el, {
          modifiers: this.modifiers,
          arg: this.arg,
          value: newValue,
          oldValue: oldValue
        })
      },
      unbind () {
        unbind(this.el)
      }
    }))
  } else {
    Vue.directive('image', Object.assign(mixinProperties, {
      bind: imageHandler.bind(this),
      update: imageHandler.bind(this),
      inserted: imageHandler.bind(this),
      componentUpdated: imageHandlerOneTime.bind(this),
      unbind: unbind
    }))
  }
}
