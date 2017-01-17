// 七牛云基本图像处理

const getImageUrl = (url, imageViewMode, w, h) => {
  let wPath = w ? '/w/' + w : ''
  let hPath = h ? '/h/' + h : ''
  if (w || h) {
    return url + `?imageView2/${imageViewMode}${wPath}${hPath}`
  } else {
    return url
  }
}

const imageViewUrl = (url, view) => {
  let imageViewMode = view.imageViewMode
  let imageViewWidth = Math.floor(view.imageViewWidth)
  let imageViewHeight = Math.floor(view.imageViewHeight)

  switch (imageViewMode) {
    case 0:
      url = getImageUrl(url, 0, imageViewWidth, imageViewHeight)
      break
    case 1:
      url = getImageUrl(url, 1, imageViewWidth, imageViewHeight)
      break
    default:
      url = getImageUrl(url, 0, imageViewWidth, imageViewHeight)
  }

  if (view.format) {
    let formatRegEx = new RegExp(view.format)
    if (!formatRegEx.test(url)) {
      url = url + `/format/${view.format}`
    }
  }

  if (view.interlace) {
    if (/jpg/.test(url)) {
      url = url + `/interlace/1`
    }
  }

  if (!view.showError) {
    url = url + `/ignore-error/1`
  }

  return url
}

const getEnhancedUrl = (url, view) => {
  if (view) {
    url = imageViewUrl(url, view)
  }

  return url
}

export default getEnhancedUrl
