import {extendStyle} from './utils'

const setPlaceHolder = (el, placeHolder) => {
  if (!placeHolder) {
    return
  }

  if (placeHolder.color) {
    el.setAttribute('style', extendStyle(el.getAttribute('style'), `background-color: ${placeHolder.color}`))
  }

  if (placeHolder.loadingImage) {
    el.setAttribute('style', extendStyle(el.getAttribute('style'), `background-image: url(${placeHolder.loadingImage})`))
  }
}

export default setPlaceHolder
