const wxPreviewImage = ({ current, urls = [] }) => {
  /* eslint-disable */
  wx.previewImage({
    current: current, // 当前显示图片的http链接
    urls: urls // 需要预览的图片http链接列表
  })
  /* eslint-enable */
}

var handleNoHostUrl = (url) => {
  if (/\/\//.test(url)) {
    return url
  } else {
    return window.location.origin + url
  }
}

const handleError = function (el) {
  let otherHandler = el.onerror

  el.onerror = () => {
    removeListener.bind(this)(el)
    otherHandler && otherHandler()
  }
}

export const addListener = function (el) {
  this.wxPreviewListener = function () {
    if (this.wxPreviewCurrent) {
      wxPreviewImage({current: this.wxPreviewCurrent, urls: this.wxPreviewUrls})
    }
  }.bind(this)
  el.addEventListener('click', this.wxPreviewListener, false)
}

export const setPreview = function (el, preview) {
  if (!preview) {
    this.wxPreviewCurrent = null
    removeListener.bind(this)(el)
    return
  }
  let cur = preview.list[preview.index]

  if (el.nodeName === 'IMG') {
    if (cur) {
      el.setAttribute('src', cur)
    }
  } else {
    el.setAttribute('style', `background-image: url(${cur})`)
  }

  this.wxPreviewCurrent = handleNoHostUrl(cur)
  this.wxPreviewUrls = preview.list.map((ele) => {
    return handleNoHostUrl(ele)
  })

  handleError.bind(this)(el)
}

export const removeListener = function (el) {
  el.removeEventListener('click', this.wxPreviewListener, false)
}
