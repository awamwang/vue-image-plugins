import directiveInstall from './directives'

const inBrowser = typeof window !== 'undefined'

let install = (Vue, Options = {}) => {
  const $ImageHandler = {
    images: {
      loading: [],
      previewed: [],
      error: []
    }
  }

  const InitOptions = {
    errorImage: Options.errorImage,
    attempt: Options.attempt || 3,
    scale: Options.scale || inBrowser ? window.devicePixelRatio : 1
  }

  directiveInstall(Vue, InitOptions)

  Vue.$ImageHandler = $ImageHandler
}

export default ImagePlugins = {
  install: install
}