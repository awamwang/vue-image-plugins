# getting started

> vue-image-plugins

安装
```
npm install --save vue-image-plugins
```
使用
```
<img v-image="{
       url: item.url,
       lazy: true,
       styleConfig: {
         imageViewMode: 1,
         originWidth: item.width,
         originHeight: item.height,
         styleWidth: htmlFontSize * 1.5,
         styleHeight: htmlFontSize * 1.5
       },
       view: {
         imageViewMode: 1,
         format: 'jpg',
         imageViewWidth: htmlFontSize * 1.5 * 2,
         imageViewHeight: htmlFontSize * 1.5 * 2,
         interlace: true
       },
       preview: {
         list: moment.imgs,
         index: $index,
       },
       defaultImage: {
         type: normal
       },
       placeHolder: {
       }
     }"
     v-lazy="item.url"/>
```

与vue-lazyload的配合（初步验证未通过，应该是vue-lazyload的使用或版本问题）

在vue-lazyload的filter中获取处理过的url，并替换
参考：
> https://github.com/hilongjw/vue-lazyload#image-url-filter

```
Vue.use(vueLazy, {
    filter: {
      imageUrl ({ el, src }) {
        let url = el.getAttribute('image-url')
        return (url ? url : src)
      }
    }
})
```

# note

+ 对应属性不赋值，即不使用对应功能
+ view参数控制生成七牛的图片处理链接，见http://developer.qiniu.com/code/v6/api/kodo-api/image/imageview2.html
+ 默认的preview方法是微信jssdk提供的preview，需要以微信jssdk;需要保证在wx.ready后执行

# params


# properties


# methods


# others
