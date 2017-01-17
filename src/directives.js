export default (Vue, Options) => {
  const isVueOld = Vue.version.split('.')[0] === '1'

  const addListener = (el, binding, vnode) => {
  }

  if (isVueOld) {
    Vue.directive('image', {
      bind: lazyLoadHandler,
      update (newValue, oldValue) {
        addListener(this.el, {
          modifiers: this.modifiers,
          arg: this.arg,
          value: newValue,
          oldValue: oldValue
        })
      },
      unbind () {
        componentWillUnmount(this.el)
      }
    })
  } else {
    Vue.directive('image', {
      bind: addListener,
      update: addListener,
      inserted: addListener,
      componentUpdated: lazyLoadHandler,
      unbind: componentWillUnmount
    })
  }
}