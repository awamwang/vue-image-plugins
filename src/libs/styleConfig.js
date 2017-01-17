import {extendStyle} from './utils'

const setCssStyle = (el, styleConfig) => {
  if (!styleConfig) {
    return
  }

  let imageViewMode = styleConfig.imageViewMode
  let originWidth = styleConfig.originWidth
  let originHeight = styleConfig.originHeight
  let styleWidth = styleConfig.styleWidth
  let styleHeight = styleConfig.styleHeight
  let styleMaxWidth = styleConfig.styleMaxWidth
  let styleMaxHeight = styleConfig.styleMaxHeight

  if (originWidth && originHeight) {
    styleConfig.realStyleWidth = null
    styleConfig.realStyleHeight = null
    if (styleMaxWidth || styleMaxHeight) {
      let wRatio = styleMaxWidth ? originWidth / styleMaxWidth : 0
      let hRatio = styleMaxHeight ? originHeight / styleMaxHeight : 0

      if (wRatio < 1 && hRatio < 1) {
        styleConfig.realStyleWidth = originWidth
        styleConfig.realStyleHeight = originHeight
      } else {
        switch (imageViewMode) {
          // 规定最大值，等比缩放，不裁剪
          case 0:
            if (wRatio > hRatio) {
              styleConfig.realStyleWidth = styleMaxWidth
              styleConfig.realStyleHeight = originHeight * (styleMaxWidth / originWidth)
            } else {
              styleConfig.realStyleHeight = styleMaxHeight
              styleConfig.realStyleWidth = originWidth * (styleMaxHeight / originHeight)
            }
            break
          // 规定最小值，等比缩放，居中裁剪
          case 1:
            if (wRatio > 0 && hRatio > 0) {
              styleConfig.realStyleWidth = styleMaxWidth
              styleConfig.realStyleHeight = styleMaxHeight
            } else {
              if (wRatio > 0) {
                styleConfig.realStyleWidth = styleMaxWidth
                styleConfig.realStyleHeight = styleMaxWidth
              } else {
                styleConfig.realStyleWidth = styleMaxHeight
                styleConfig.realStyleHeight = styleMaxHeight
              }
            }
            break
          default:
            if (wRatio > hRatio) {
              styleConfig.realStyleWidth = styleMaxWidth
              styleConfig.realStyleHeight = originHeight * (styleMaxWidth / originWidth)
            } else {
              styleConfig.realStyleHeight = styleMaxHeight
              styleConfig.realStyleWidth = originWidth * (styleMaxHeight / originHeight)
            }
        }
      }
    } else {
      styleConfig.realStyleWidth = originWidth
      styleConfig.realStyleHeight = originHeight
    }

    if (!styleWidth) {
      el.setAttribute('style', extendStyle(el.getAttribute('style'), `width: ${styleConfig.realStyleWidth}px`))
    }
    if (!styleHeight) {
      el.setAttribute('style', extendStyle(el.getAttribute('style'), `height: ${styleConfig.realStyleHeight}px`))
    }
  }

  if (styleMaxWidth) {
    el.setAttribute('style', extendStyle(el.getAttribute('style'), `max-width: ${styleMaxWidth}px`))
  }
  if (styleMaxHeight) {
    el.setAttribute('style', extendStyle(el.getAttribute('style'), `max-height: ${styleMaxHeight}px`))
  }

  if (styleWidth) {
    el.setAttribute('style', extendStyle(el.getAttribute('style'), `width: ${styleWidth}px`))
  }
  if (styleHeight) {
    el.setAttribute('style', extendStyle(el.getAttribute('style'), `height: ${styleHeight}px`))
  }
}

export default setCssStyle
