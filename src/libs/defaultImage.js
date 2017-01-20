// const DEFAULT_type = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
let DEFAULT_IMAGE = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQDAwQDAwQEBAQFBQQFBwsHBwYGBw4KCggLEA4RERAOEA8SFBoWEhMYEw8QFh8XGBsbHR0dERYgIh8cIhocHRz/wgALCABkAGQBAREA/8QAHAABAAEFAQEAAAAAAAAAAAAAAAMBAgUGBwgE/9oACAEBAAAAANotVraqpVLHaAEtloASx0DnHDMx6dlSx0Hw+WOs4Dc+kJbLSL4fP82meos8litu5txnOZDYtp3gljo8f9Owm/8ATgmio8j9Z5B6M3IJY6MZy/fNluCWy0AJUNLgCW755qgEv//EADgQAAEDAgMGAwUGBwEAAAAAAAIBAwQABQYHEhETMTJRUhAhcSAiQWGhCDBCcoGRFBU0U2KCscH/2gAIAQEAAT8AIy1l7xca1l3VrLurWXUq1r3FWsvLzKtZd1ay61rLrWsu6tZdSrWXWmlXTxL96LnL1X2ents8lFzl6rXn921yr60XMvr7WZubUPAIhBistzr86moY6rsBgO9xU+g8VpMf5m4pN1+BPvD4Nc6W2LsbD5e6P/q1g7Pm/wBjn7jEpnc7ahoDym0gSY3Uk2Imr5oSVGkszI7UiO6Lsd4EcacAtqGKptRU9U8BpnkouZfX2bzdG7HZ7hdH/NuFHN8k66RVdlZd4Auua97lXi7Out2xx5XZsvgT7nxbbX6KvAUpM7MJ4dvkPDFrhGVnjmMX+MiEKMNEq7E0jxMdvEq+0jYITTFnvrYAE831iOknF8NCqil+XTWRExyXlnbBc4R3XmA/ILi7PFnkoucvVfDu8Hn2owbx55tpvucNBT61c7dCxTY5dude3sCe2TJnHNPMV8l0klZqZqQ2beWEMHkEayxg3EmVH90TFOLTa9vcf4qyvy0iWK3pjbGmiHChij8SI+nJ0dcHr2hWO8a3PNbE0SNChubhDVm2wPxqpczhr1VOPwEawXhscIYVtdlFzeFEa2G6I7NbiqqkX7r4s8lFzF6+Oa+aTeA4gQoKA/f5YKTQFyRg4bw0/wCJ8awNgO9ZwXs7nfpkt60tnskTHuZ4v7TScE+ap5DWaWaUJi3lhDCBNRbLGBWJMqL7on1abXt7j/FWTeTn9NiTEkbSPkcC3OfR1wV+g1mFl3jPMS9ID9ztkDD8dzbGYQzcJV4bwxRE2n+uxKwBldZ8ANm7HVZl1dTS5OfRELTt5BFOQfYZ5KLmX18B812daOMeZOcD8eU4TYXC4m0ZIvvAw1tTSP8AqGys977Mwbh2z4csbH8vssxs2nXo6cADgynTV8fitZZZZQ7Lb0xrjXREgxBR6LEkJydHXB69oVllmFPzDxBiSTujjWSELIRWDRNepVJVM17lRPRE8PPw2qXgzyL60XMvr4CulazFs9xy4zJO4w03IvSVuNueVNoL8TD9FVUVOi1bvtEYVk24HLlGmxZqIinFBnfDqTtPh++ysc4+vWal7iQYsN5Im82QbY2uojPvNU4l9ASsssDBgLDLUE1A7lJLfzHQ4K4qbEEf8RTyT2meSi5l9fG+4eteJrc5brvBalwzVC0OfAu4STzRfmlPfZuwwb+tq43dpjirOsC/RCUdtYSy/wAPYIA1s8BG33U0uSXiVx406KS8PRNie2zycKLnL1WvL7tnkp3mJa8q7vumeSng9/itaaRlNnFa3I1uR6rW5Hqtbka3I9Vrcj1WtyPVa3I1uR6rTUcdK+8Vf//Z'
let DEFAULT_AVATAR = DEFAULT_IMAGE
let DEFAULT_LINK_IMAGE = DEFAULT_IMAGE

const setDefaultImage = (el, defaultImage, initOptions) => {
  if (!defaultImage) {
    return
  }

  let url
  let type = defaultImage.type

  switch (type) {
    case 'normal':
      url = defaultImage.default || initOptions.defaultImage || DEFAULT_IMAGE
      break
    case 'link':
      url = defaultImage.default || initOptions.defaultLinkImage || DEFAULT_LINK_IMAGE
      break
    case 'avatar':
      url = defaultImage.default || initOptions.defaultAvatar || DEFAULT_AVATAR
      break
    default:
      url = defaultImage.default || initOptions.defaultImage || DEFAULT_IMAGE
  }

  if (el.nodeName === 'IMG') {
    let otherHandler = el.onerror

    el.onerror = () => {
      otherHandler && otherHandler()
      el.setAttribute('src', url)
    }
  } else {
    let src = el.getAttribute('src')
    el.setAttribute('style', `background-image: ${(src ? 'type(' + src + '), ' : '')}type(${url})`)
  }
}

export default setDefaultImage
