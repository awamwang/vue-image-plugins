(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _directives = __webpack_require__(1);

	var _directives2 = _interopRequireDefault(_directives);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var inBrowser = typeof window !== 'undefined';

	var install = function install(Vue) {
	  var Options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  var $ImageHandler = {
	    images: {
	      loading: [],
	      previewed: [],
	      error: []
	    }
	  };

	  var InitOptions = {
	    errorImage: Options.errorImage,
	    attempt: Options.attempt || 3,
	    scale: Options.scale || inBrowser ? window.devicePixelRatio : 1
	  };

	  (0, _directives2.default)(Vue, InitOptions);

	  Vue.$ImageHandler = $ImageHandler;
	};

	var ImagePlugins = {
	  install: install
	};

	exports.default = ImagePlugins;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcaW5kZXguanMiXSwibmFtZXMiOlsiaW5Ccm93c2VyIiwid2luZG93IiwiaW5zdGFsbCIsIlZ1ZSIsIk9wdGlvbnMiLCIkSW1hZ2VIYW5kbGVyIiwiaW1hZ2VzIiwibG9hZGluZyIsInByZXZpZXdlZCIsImVycm9yIiwiSW5pdE9wdGlvbnMiLCJlcnJvckltYWdlIiwiYXR0ZW1wdCIsInNjYWxlIiwiZGV2aWNlUGl4ZWxSYXRpbyIsIkltYWdlUGx1Z2lucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVksT0FBT0MsTUFBUCxLQUFrQixXQUFwQzs7QUFFQSxJQUFNQyxVQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsR0FBRCxFQUF1QjtBQUFBLE1BQWpCQyxPQUFpQix1RUFBUCxFQUFPOztBQUNyQyxNQUFNQyxnQkFBZ0I7QUFDcEJDLFlBQVE7QUFDTkMsZUFBUyxFQURIO0FBRU5DLGlCQUFXLEVBRkw7QUFHTkMsYUFBTztBQUhEO0FBRFksR0FBdEI7O0FBUUEsTUFBTUMsY0FBYztBQUNsQkMsZ0JBQVlQLFFBQVFPLFVBREY7QUFFbEJDLGFBQVNSLFFBQVFRLE9BQVIsSUFBbUIsQ0FGVjtBQUdsQkMsV0FBT1QsUUFBUVMsS0FBUixJQUFpQmIsU0FBakIsR0FBNkJDLE9BQU9hLGdCQUFwQyxHQUF1RDtBQUg1QyxHQUFwQjs7QUFNQSw0QkFBaUJYLEdBQWpCLEVBQXNCTyxXQUF0Qjs7QUFFQVAsTUFBSUUsYUFBSixHQUFvQkEsYUFBcEI7QUFDRCxDQWxCRDs7QUFvQkEsSUFBTVUsZUFBZTtBQUNuQmIsV0FBU0E7QUFEVSxDQUFyQjs7a0JBSWVhLFkiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiRTovMDJQcm9qZWN0L015R2l0SHViLzAwX21pbmUvdnVlLWltYWdlLXBsdWdpbnMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGlyZWN0aXZlSW5zdGFsbCBmcm9tICcuL2RpcmVjdGl2ZXMnXHJcblxyXG5jb25zdCBpbkJyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xyXG5cclxuY29uc3QgaW5zdGFsbCA9IChWdWUsIE9wdGlvbnMgPSB7fSkgPT4ge1xyXG4gIGNvbnN0ICRJbWFnZUhhbmRsZXIgPSB7XHJcbiAgICBpbWFnZXM6IHtcclxuICAgICAgbG9hZGluZzogW10sXHJcbiAgICAgIHByZXZpZXdlZDogW10sXHJcbiAgICAgIGVycm9yOiBbXVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgSW5pdE9wdGlvbnMgPSB7XHJcbiAgICBlcnJvckltYWdlOiBPcHRpb25zLmVycm9ySW1hZ2UsXHJcbiAgICBhdHRlbXB0OiBPcHRpb25zLmF0dGVtcHQgfHwgMyxcclxuICAgIHNjYWxlOiBPcHRpb25zLnNjYWxlIHx8IGluQnJvd3NlciA/IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIDogMVxyXG4gIH1cclxuXHJcbiAgZGlyZWN0aXZlSW5zdGFsbChWdWUsIEluaXRPcHRpb25zKVxyXG5cclxuICBWdWUuJEltYWdlSGFuZGxlciA9ICRJbWFnZUhhbmRsZXJcclxufVxyXG5cclxuY29uc3QgSW1hZ2VQbHVnaW5zID0ge1xyXG4gIGluc3RhbGw6IGluc3RhbGxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VQbHVnaW5zXHJcbiJdfQ==

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign = __webpack_require__(2);

	var _assign2 = _interopRequireDefault(_assign);

	var _enhancedUrl = __webpack_require__(39);

	var _enhancedUrl2 = _interopRequireDefault(_enhancedUrl);

	var _styleConfig = __webpack_require__(40);

	var _styleConfig2 = _interopRequireDefault(_styleConfig);

	var _placeHolder = __webpack_require__(42);

	var _placeHolder2 = _interopRequireDefault(_placeHolder);

	var _preview = __webpack_require__(43);

	var preview = _interopRequireWildcard(_preview);

	var _defaultImage = __webpack_require__(44);

	var _defaultImage2 = _interopRequireDefault(_defaultImage);

	var _utils = __webpack_require__(41);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mixinProperties = {
	  wxPreviewCurrent: null,
	  wxPreviewUrls: []
	};

	var setImageSrc = function setImageSrc(el, url, config) {
	  if (!url) {
	    return;
	  }

	  el.setAttribute('image-url', url);

	  if (!config.lazy) {
	    if (el.nodeName === 'IMG') {
	      if (url) {
	        el.setAttribute('src', url);
	      }
	    } else {
	      el.setAttribute('style', (0, _utils.extendStyle)(el.getAttribute('style'), 'background-image: url(' + url + ')'));
	    }
	  }
	};

	var setErrorHandler = function setErrorHandler(el) {
	  var otherHandler = el.onerror;

	  el.onerror = function () {
	    otherHandler && otherHandler();
	    el.onerror = null;
	  };
	};

	exports.default = function (Vue, Options) {
	  var isVueOld = Vue.version.split('.')[0] === '1';

	  var imageHandlerOneTime = function imageHandlerOneTime(el, binding, vnode) {
	    preview.addListener.bind(this)(el);
	  };

	  var imageHandler = function imageHandler(el, binding, vnode) {
	    var url = void 0;

	    (0, _styleConfig2.default)(el, binding.value.styleConfig);
	    (0, _placeHolder2.default)(el, binding.value.placeHolder);
	    url = (0, _enhancedUrl2.default)(binding.value.url, binding.value.view);
	    preview.setPreview.bind(this)(el, binding.value.preview);
	    (0, _defaultImage2.default)(el, binding.value.defaultImage, Options);
	    setImageSrc(el, url, binding.value);
	    setErrorHandler(el);
	  };

	  var _unbind = function _unbind(el, binding, vnode, OldVnode) {
	    preview.removeListener(el);
	  };

	  if (isVueOld) {
	    Vue.directive('image', (0, _assign2.default)(mixinProperties, {
	      bind: function bind() {
	        imageHandlerOneTime.bind(this)(this.el);
	      },
	      update: function update(newValue, oldValue) {
	        imageHandler.bind(this)(this.el, {
	          modifiers: this.modifiers,
	          arg: this.arg,
	          value: newValue,
	          oldValue: oldValue
	        });
	      },
	      unbind: function unbind() {
	        _unbind(this.el);
	      }
	    }));
	  } else {
	    Vue.directive('image', (0, _assign2.default)(mixinProperties, {
	      bind: imageHandler.bind(undefined),
	      update: imageHandler.bind(undefined),
	      inserted: imageHandler.bind(undefined),
	      componentUpdated: imageHandlerOneTime.bind(undefined),
	      unbind: _unbind
	    }));
	  }
	};

	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcZGlyZWN0aXZlcy5qcyJdLCJuYW1lcyI6WyJwcmV2aWV3IiwibWl4aW5Qcm9wZXJ0aWVzIiwid3hQcmV2aWV3Q3VycmVudCIsInd4UHJldmlld1VybHMiLCJzZXRJbWFnZVNyYyIsImVsIiwidXJsIiwiY29uZmlnIiwic2V0QXR0cmlidXRlIiwibGF6eSIsIm5vZGVOYW1lIiwiZ2V0QXR0cmlidXRlIiwic2V0RXJyb3JIYW5kbGVyIiwib3RoZXJIYW5kbGVyIiwib25lcnJvciIsIlZ1ZSIsIk9wdGlvbnMiLCJpc1Z1ZU9sZCIsInZlcnNpb24iLCJzcGxpdCIsImltYWdlSGFuZGxlck9uZVRpbWUiLCJiaW5kaW5nIiwidm5vZGUiLCJhZGRMaXN0ZW5lciIsImJpbmQiLCJpbWFnZUhhbmRsZXIiLCJ2YWx1ZSIsInN0eWxlQ29uZmlnIiwicGxhY2VIb2xkZXIiLCJ2aWV3Iiwic2V0UHJldmlldyIsImRlZmF1bHRJbWFnZSIsInVuYmluZCIsIk9sZFZub2RlIiwicmVtb3ZlTGlzdGVuZXIiLCJkaXJlY3RpdmUiLCJ1cGRhdGUiLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwibW9kaWZpZXJzIiwiYXJnIiwiaW5zZXJ0ZWQiLCJjb21wb25lbnRVcGRhdGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0lBQVlBLE87O0FBQ1o7Ozs7QUFFQTs7Ozs7O0FBRUEsSUFBSUMsa0JBQWtCO0FBQ3BCQyxvQkFBa0IsSUFERTtBQUVwQkMsaUJBQWU7QUFGSyxDQUF0Qjs7QUFLQSxJQUFNQyxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsRUFBRCxFQUFLQyxHQUFMLEVBQVVDLE1BQVYsRUFBcUI7QUFDdkMsTUFBSSxDQUFDRCxHQUFMLEVBQVU7QUFDUjtBQUNEOztBQUVERCxLQUFHRyxZQUFILENBQWdCLFdBQWhCLEVBQTZCRixHQUE3Qjs7QUFFQSxNQUFJLENBQUNDLE9BQU9FLElBQVosRUFBa0I7QUFDaEIsUUFBSUosR0FBR0ssUUFBSCxLQUFnQixLQUFwQixFQUEyQjtBQUN6QixVQUFJSixHQUFKLEVBQVM7QUFDUEQsV0FBR0csWUFBSCxDQUFnQixLQUFoQixFQUF1QkYsR0FBdkI7QUFDRDtBQUNGLEtBSkQsTUFJTztBQUNMRCxTQUFHRyxZQUFILENBQWdCLE9BQWhCLEVBQXlCLHdCQUFZSCxHQUFHTSxZQUFILENBQWdCLE9BQWhCLENBQVosNkJBQStETCxHQUEvRCxPQUF6QjtBQUNEO0FBQ0Y7QUFDRixDQWhCRDs7QUFrQkEsSUFBTU0sa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDUCxFQUFELEVBQVE7QUFDOUIsTUFBSVEsZUFBZVIsR0FBR1MsT0FBdEI7O0FBRUFULEtBQUdTLE9BQUgsR0FBYSxZQUFNO0FBQ2pCRCxvQkFBZ0JBLGNBQWhCO0FBQ0FSLE9BQUdTLE9BQUgsR0FBYSxJQUFiO0FBQ0QsR0FIRDtBQUlELENBUEQ7O2tCQVNlLFVBQUNDLEdBQUQsRUFBTUMsT0FBTixFQUFrQjtBQUMvQixNQUFNQyxXQUFXRixJQUFJRyxPQUFKLENBQVlDLEtBQVosQ0FBa0IsR0FBbEIsRUFBdUIsQ0FBdkIsTUFBOEIsR0FBL0M7O0FBRUEsTUFBTUMsc0JBQXNCLFNBQXRCQSxtQkFBc0IsQ0FBVWYsRUFBVixFQUFjZ0IsT0FBZCxFQUF1QkMsS0FBdkIsRUFBOEI7QUFDeER0QixZQUFRdUIsV0FBUixDQUFvQkMsSUFBcEIsQ0FBeUIsSUFBekIsRUFBK0JuQixFQUEvQjtBQUNELEdBRkQ7O0FBSUEsTUFBTW9CLGVBQWUsU0FBZkEsWUFBZSxDQUFVcEIsRUFBVixFQUFjZ0IsT0FBZCxFQUF1QkMsS0FBdkIsRUFBOEI7QUFDakQsUUFBSWhCLFlBQUo7O0FBRUEsK0JBQVlELEVBQVosRUFBZ0JnQixRQUFRSyxLQUFSLENBQWNDLFdBQTlCO0FBQ0EsK0JBQWV0QixFQUFmLEVBQW1CZ0IsUUFBUUssS0FBUixDQUFjRSxXQUFqQztBQUNBdEIsVUFBTSwyQkFBZWUsUUFBUUssS0FBUixDQUFjcEIsR0FBN0IsRUFBa0NlLFFBQVFLLEtBQVIsQ0FBY0csSUFBaEQsQ0FBTjtBQUNBN0IsWUFBUThCLFVBQVIsQ0FBbUJOLElBQW5CLENBQXdCLElBQXhCLEVBQThCbkIsRUFBOUIsRUFBa0NnQixRQUFRSyxLQUFSLENBQWMxQixPQUFoRDtBQUNBLGdDQUFnQkssRUFBaEIsRUFBb0JnQixRQUFRSyxLQUFSLENBQWNLLFlBQWxDLEVBQWdEZixPQUFoRDtBQUNBWixnQkFBWUMsRUFBWixFQUFnQkMsR0FBaEIsRUFBcUJlLFFBQVFLLEtBQTdCO0FBQ0FkLG9CQUFnQlAsRUFBaEI7QUFDRCxHQVZEOztBQVlBLE1BQU0yQixVQUFTLFNBQVRBLE9BQVMsQ0FBVTNCLEVBQVYsRUFBY2dCLE9BQWQsRUFBdUJDLEtBQXZCLEVBQThCVyxRQUE5QixFQUF3QztBQUNyRGpDLFlBQVFrQyxjQUFSLENBQXVCN0IsRUFBdkI7QUFDRCxHQUZEOztBQUlBLE1BQUlZLFFBQUosRUFBYztBQUNaRixRQUFJb0IsU0FBSixDQUFjLE9BQWQsRUFBdUIsc0JBQWNsQyxlQUFkLEVBQStCO0FBQ3BEdUIsVUFEb0Qsa0JBQzVDO0FBQ05KLDRCQUFvQkksSUFBcEIsQ0FBeUIsSUFBekIsRUFBK0IsS0FBS25CLEVBQXBDO0FBQ0QsT0FIbUQ7QUFJcEQrQixZQUpvRCxrQkFJNUNDLFFBSjRDLEVBSWxDQyxRQUprQyxFQUl4QjtBQUMxQmIscUJBQWFELElBQWIsQ0FBa0IsSUFBbEIsRUFBd0IsS0FBS25CLEVBQTdCLEVBQWlDO0FBQy9Ca0MscUJBQVcsS0FBS0EsU0FEZTtBQUUvQkMsZUFBSyxLQUFLQSxHQUZxQjtBQUcvQmQsaUJBQU9XLFFBSHdCO0FBSS9CQyxvQkFBVUE7QUFKcUIsU0FBakM7QUFNRCxPQVhtRDtBQVlwRE4sWUFab0Qsb0JBWTFDO0FBQ1JBLGdCQUFPLEtBQUszQixFQUFaO0FBQ0Q7QUFkbUQsS0FBL0IsQ0FBdkI7QUFnQkQsR0FqQkQsTUFpQk87QUFDTFUsUUFBSW9CLFNBQUosQ0FBYyxPQUFkLEVBQXVCLHNCQUFjbEMsZUFBZCxFQUErQjtBQUNwRHVCLFlBQU1DLGFBQWFELElBQWIsV0FEOEM7QUFFcERZLGNBQVFYLGFBQWFELElBQWIsV0FGNEM7QUFHcERpQixnQkFBVWhCLGFBQWFELElBQWIsV0FIMEM7QUFJcERrQix3QkFBa0J0QixvQkFBb0JJLElBQXBCLFdBSmtDO0FBS3BEUSxjQUFRQTtBQUw0QyxLQUEvQixDQUF2QjtBQU9EO0FBQ0YsQyIsImZpbGUiOiJkaXJlY3RpdmVzLmpzIiwic291cmNlUm9vdCI6IkU6LzAyUHJvamVjdC9NeUdpdEh1Yi8wMF9taW5lL3Z1ZS1pbWFnZS1wbHVnaW5zIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldEVuaGFuY2VkVXJsIGZyb20gJy4vbGlicy9lbmhhbmNlZFVybCdcbmltcG9ydCBzZXRDc3NTdHlsZSBmcm9tICcuL2xpYnMvc3R5bGVDb25maWcnXG5pbXBvcnQgc2V0UGxhY2VIb2xkZXIgZnJvbSAnLi9saWJzL3BsYWNlSG9sZGVyJ1xuaW1wb3J0ICogYXMgcHJldmlldyBmcm9tICcuL2xpYnMvcHJldmlldydcbmltcG9ydCBzZXREZWZhdWx0SW1hZ2UgZnJvbSAnLi9saWJzL2RlZmF1bHRJbWFnZSdcblxuaW1wb3J0IHtleHRlbmRTdHlsZX0gZnJvbSAnLi9saWJzL3V0aWxzJ1xuXG5sZXQgbWl4aW5Qcm9wZXJ0aWVzID0ge1xuICB3eFByZXZpZXdDdXJyZW50OiBudWxsLFxuICB3eFByZXZpZXdVcmxzOiBbXVxufVxuXG5jb25zdCBzZXRJbWFnZVNyYyA9IChlbCwgdXJsLCBjb25maWcpID0+IHtcbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGVsLnNldEF0dHJpYnV0ZSgnaW1hZ2UtdXJsJywgdXJsKVxuXG4gIGlmICghY29uZmlnLmxhenkpIHtcbiAgICBpZiAoZWwubm9kZU5hbWUgPT09ICdJTUcnKSB7XG4gICAgICBpZiAodXJsKSB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnc3JjJywgdXJsKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgZXh0ZW5kU3R5bGUoZWwuZ2V0QXR0cmlidXRlKCdzdHlsZScpLCBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7dXJsfSlgKSlcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgc2V0RXJyb3JIYW5kbGVyID0gKGVsKSA9PiB7XG4gIGxldCBvdGhlckhhbmRsZXIgPSBlbC5vbmVycm9yXG5cbiAgZWwub25lcnJvciA9ICgpID0+IHtcbiAgICBvdGhlckhhbmRsZXIgJiYgb3RoZXJIYW5kbGVyKClcbiAgICBlbC5vbmVycm9yID0gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChWdWUsIE9wdGlvbnMpID0+IHtcbiAgY29uc3QgaXNWdWVPbGQgPSBWdWUudmVyc2lvbi5zcGxpdCgnLicpWzBdID09PSAnMSdcblxuICBjb25zdCBpbWFnZUhhbmRsZXJPbmVUaW1lID0gZnVuY3Rpb24gKGVsLCBiaW5kaW5nLCB2bm9kZSkge1xuICAgIHByZXZpZXcuYWRkTGlzdGVuZXIuYmluZCh0aGlzKShlbClcbiAgfVxuXG4gIGNvbnN0IGltYWdlSGFuZGxlciA9IGZ1bmN0aW9uIChlbCwgYmluZGluZywgdm5vZGUpIHtcbiAgICBsZXQgdXJsXG5cbiAgICBzZXRDc3NTdHlsZShlbCwgYmluZGluZy52YWx1ZS5zdHlsZUNvbmZpZylcbiAgICBzZXRQbGFjZUhvbGRlcihlbCwgYmluZGluZy52YWx1ZS5wbGFjZUhvbGRlcilcbiAgICB1cmwgPSBnZXRFbmhhbmNlZFVybChiaW5kaW5nLnZhbHVlLnVybCwgYmluZGluZy52YWx1ZS52aWV3KVxuICAgIHByZXZpZXcuc2V0UHJldmlldy5iaW5kKHRoaXMpKGVsLCBiaW5kaW5nLnZhbHVlLnByZXZpZXcpXG4gICAgc2V0RGVmYXVsdEltYWdlKGVsLCBiaW5kaW5nLnZhbHVlLmRlZmF1bHRJbWFnZSwgT3B0aW9ucylcbiAgICBzZXRJbWFnZVNyYyhlbCwgdXJsLCBiaW5kaW5nLnZhbHVlKVxuICAgIHNldEVycm9ySGFuZGxlcihlbClcbiAgfVxuXG4gIGNvbnN0IHVuYmluZCA9IGZ1bmN0aW9uIChlbCwgYmluZGluZywgdm5vZGUsIE9sZFZub2RlKSB7XG4gICAgcHJldmlldy5yZW1vdmVMaXN0ZW5lcihlbClcbiAgfVxuXG4gIGlmIChpc1Z1ZU9sZCkge1xuICAgIFZ1ZS5kaXJlY3RpdmUoJ2ltYWdlJywgT2JqZWN0LmFzc2lnbihtaXhpblByb3BlcnRpZXMsIHtcbiAgICAgIGJpbmQgKCkge1xuICAgICAgICBpbWFnZUhhbmRsZXJPbmVUaW1lLmJpbmQodGhpcykodGhpcy5lbClcbiAgICAgIH0sXG4gICAgICB1cGRhdGUgKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpbWFnZUhhbmRsZXIuYmluZCh0aGlzKSh0aGlzLmVsLCB7XG4gICAgICAgICAgbW9kaWZpZXJzOiB0aGlzLm1vZGlmaWVycyxcbiAgICAgICAgICBhcmc6IHRoaXMuYXJnLFxuICAgICAgICAgIHZhbHVlOiBuZXdWYWx1ZSxcbiAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWVcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICB1bmJpbmQgKCkge1xuICAgICAgICB1bmJpbmQodGhpcy5lbClcbiAgICAgIH1cbiAgICB9KSlcbiAgfSBlbHNlIHtcbiAgICBWdWUuZGlyZWN0aXZlKCdpbWFnZScsIE9iamVjdC5hc3NpZ24obWl4aW5Qcm9wZXJ0aWVzLCB7XG4gICAgICBiaW5kOiBpbWFnZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgIHVwZGF0ZTogaW1hZ2VIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICBpbnNlcnRlZDogaW1hZ2VIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICBjb21wb25lbnRVcGRhdGVkOiBpbWFnZUhhbmRsZXJPbmVUaW1lLmJpbmQodGhpcyksXG4gICAgICB1bmJpbmQ6IHVuYmluZFxuICAgIH0pKVxuICB9XG59XG4iXX0=

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	module.exports = __webpack_require__(7).Object.assign;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(5);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(20)});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , core      = __webpack_require__(7)
	  , ctx       = __webpack_require__(8)
	  , hide      = __webpack_require__(10)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 6 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 7 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(9);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(11)
	  , createDesc = __webpack_require__(19);
	module.exports = __webpack_require__(15) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(12)
	  , IE8_DOM_DEFINE = __webpack_require__(14)
	  , toPrimitive    = __webpack_require__(18)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(15) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(15) && !__webpack_require__(16)(function(){
	  return Object.defineProperty(__webpack_require__(17)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(16)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13)
	  , document = __webpack_require__(6).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(13);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(21)
	  , gOPS     = __webpack_require__(36)
	  , pIE      = __webpack_require__(37)
	  , toObject = __webpack_require__(38)
	  , IObject  = __webpack_require__(25)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(16)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(22)
	  , enumBugKeys = __webpack_require__(35);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(23)
	  , toIObject    = __webpack_require__(24)
	  , arrayIndexOf = __webpack_require__(28)(false)
	  , IE_PROTO     = __webpack_require__(32)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(25)
	  , defined = __webpack_require__(27);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(26);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(24)
	  , toLength  = __webpack_require__(29)
	  , toIndex   = __webpack_require__(31);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(30)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(30)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(33)('keys')
	  , uid    = __webpack_require__(34);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(6)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 36 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 37 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(27);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});


	var getImageUrl = function getImageUrl(url, imageViewMode, w, h) {
	  var wPath = w ? '/w/' + w : '';
	  var hPath = h ? '/h/' + h : '';
	  if (w || h) {
	    return url + ('?imageView2/' + imageViewMode + wPath + hPath);
	  } else {
	    return url;
	  }
	};

	var imageViewUrl = function imageViewUrl(url, view) {
	  var imageViewMode = view.imageViewMode;
	  var imageViewWidth = Math.floor(view.imageViewWidth);
	  var imageViewHeight = Math.floor(view.imageViewHeight);

	  switch (imageViewMode) {
	    case 0:
	      url = getImageUrl(url, 0, imageViewWidth, imageViewHeight);
	      break;
	    case 1:
	      url = getImageUrl(url, 1, imageViewWidth, imageViewHeight);
	      break;
	    default:
	      url = getImageUrl(url, 0, imageViewWidth, imageViewHeight);
	  }

	  if (view.format) {
	    var formatRegEx = new RegExp(view.format);
	    if (!formatRegEx.test(url)) {
	      url = url + ('/format/' + view.format);
	    }
	  }

	  if (view.interlace) {
	    if (/jpg/.test(url)) {
	      url = url + '/interlace/1';
	    }
	  }

	  if (!view.showError) {
	    url = url + '/ignore-error/1';
	  }

	  return url;
	};

	var getEnhancedUrl = function getEnhancedUrl(url, view) {
	  if (view) {
	    url = imageViewUrl(url, view);
	  }

	  return url;
	};

	exports.default = getEnhancedUrl;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcbGlic1xcZW5oYW5jZWRVcmwuanMiXSwibmFtZXMiOlsiZ2V0SW1hZ2VVcmwiLCJ1cmwiLCJpbWFnZVZpZXdNb2RlIiwidyIsImgiLCJ3UGF0aCIsImhQYXRoIiwiaW1hZ2VWaWV3VXJsIiwidmlldyIsImltYWdlVmlld1dpZHRoIiwiTWF0aCIsImZsb29yIiwiaW1hZ2VWaWV3SGVpZ2h0IiwiZm9ybWF0IiwiZm9ybWF0UmVnRXgiLCJSZWdFeHAiLCJ0ZXN0IiwiaW50ZXJsYWNlIiwic2hvd0Vycm9yIiwiZ2V0RW5oYW5jZWRVcmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQSxJQUFNQSxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsR0FBRCxFQUFNQyxhQUFOLEVBQXFCQyxDQUFyQixFQUF3QkMsQ0FBeEIsRUFBOEI7QUFDaEQsTUFBSUMsUUFBUUYsSUFBSSxRQUFRQSxDQUFaLEdBQWdCLEVBQTVCO0FBQ0EsTUFBSUcsUUFBUUYsSUFBSSxRQUFRQSxDQUFaLEdBQWdCLEVBQTVCO0FBQ0EsTUFBSUQsS0FBS0MsQ0FBVCxFQUFZO0FBQ1YsV0FBT0gsd0JBQXFCQyxhQUFyQixHQUFxQ0csS0FBckMsR0FBNkNDLEtBQTdDLENBQVA7QUFDRCxHQUZELE1BRU87QUFDTCxXQUFPTCxHQUFQO0FBQ0Q7QUFDRixDQVJEOztBQVVBLElBQU1NLGVBQWUsU0FBZkEsWUFBZSxDQUFDTixHQUFELEVBQU1PLElBQU4sRUFBZTtBQUNsQyxNQUFJTixnQkFBZ0JNLEtBQUtOLGFBQXpCO0FBQ0EsTUFBSU8saUJBQWlCQyxLQUFLQyxLQUFMLENBQVdILEtBQUtDLGNBQWhCLENBQXJCO0FBQ0EsTUFBSUcsa0JBQWtCRixLQUFLQyxLQUFMLENBQVdILEtBQUtJLGVBQWhCLENBQXRCOztBQUVBLFVBQVFWLGFBQVI7QUFDRSxTQUFLLENBQUw7QUFDRUQsWUFBTUQsWUFBWUMsR0FBWixFQUFpQixDQUFqQixFQUFvQlEsY0FBcEIsRUFBb0NHLGVBQXBDLENBQU47QUFDQTtBQUNGLFNBQUssQ0FBTDtBQUNFWCxZQUFNRCxZQUFZQyxHQUFaLEVBQWlCLENBQWpCLEVBQW9CUSxjQUFwQixFQUFvQ0csZUFBcEMsQ0FBTjtBQUNBO0FBQ0Y7QUFDRVgsWUFBTUQsWUFBWUMsR0FBWixFQUFpQixDQUFqQixFQUFvQlEsY0FBcEIsRUFBb0NHLGVBQXBDLENBQU47QUFSSjs7QUFXQSxNQUFJSixLQUFLSyxNQUFULEVBQWlCO0FBQ2YsUUFBSUMsY0FBYyxJQUFJQyxNQUFKLENBQVdQLEtBQUtLLE1BQWhCLENBQWxCO0FBQ0EsUUFBSSxDQUFDQyxZQUFZRSxJQUFaLENBQWlCZixHQUFqQixDQUFMLEVBQTRCO0FBQzFCQSxZQUFNQSxvQkFBaUJPLEtBQUtLLE1BQXRCLENBQU47QUFDRDtBQUNGOztBQUVELE1BQUlMLEtBQUtTLFNBQVQsRUFBb0I7QUFDbEIsUUFBSSxNQUFNRCxJQUFOLENBQVdmLEdBQVgsQ0FBSixFQUFxQjtBQUNuQkEsWUFBTUEsb0JBQU47QUFDRDtBQUNGOztBQUVELE1BQUksQ0FBQ08sS0FBS1UsU0FBVixFQUFxQjtBQUNuQmpCLFVBQU1BLHVCQUFOO0FBQ0Q7O0FBRUQsU0FBT0EsR0FBUDtBQUNELENBbENEOztBQW9DQSxJQUFNa0IsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDbEIsR0FBRCxFQUFNTyxJQUFOLEVBQWU7QUFDcEMsTUFBSUEsSUFBSixFQUFVO0FBQ1JQLFVBQU1NLGFBQWFOLEdBQWIsRUFBa0JPLElBQWxCLENBQU47QUFDRDs7QUFFRCxTQUFPUCxHQUFQO0FBQ0QsQ0FORDs7a0JBUWVrQixjIiwiZmlsZSI6ImVuaGFuY2VkVXJsLmpzIiwic291cmNlUm9vdCI6IkU6LzAyUHJvamVjdC9NeUdpdEh1Yi8wMF9taW5lL3Z1ZS1pbWFnZS1wbHVnaW5zIiwic291cmNlc0NvbnRlbnQiOlsiLy8g5LiD54mb5LqR5Z+65pys5Zu+5YOP5aSE55CGXG5cbmNvbnN0IGdldEltYWdlVXJsID0gKHVybCwgaW1hZ2VWaWV3TW9kZSwgdywgaCkgPT4ge1xuICBsZXQgd1BhdGggPSB3ID8gJy93LycgKyB3IDogJydcbiAgbGV0IGhQYXRoID0gaCA/ICcvaC8nICsgaCA6ICcnXG4gIGlmICh3IHx8IGgpIHtcbiAgICByZXR1cm4gdXJsICsgYD9pbWFnZVZpZXcyLyR7aW1hZ2VWaWV3TW9kZX0ke3dQYXRofSR7aFBhdGh9YFxuICB9IGVsc2Uge1xuICAgIHJldHVybiB1cmxcbiAgfVxufVxuXG5jb25zdCBpbWFnZVZpZXdVcmwgPSAodXJsLCB2aWV3KSA9PiB7XG4gIGxldCBpbWFnZVZpZXdNb2RlID0gdmlldy5pbWFnZVZpZXdNb2RlXG4gIGxldCBpbWFnZVZpZXdXaWR0aCA9IE1hdGguZmxvb3Iodmlldy5pbWFnZVZpZXdXaWR0aClcbiAgbGV0IGltYWdlVmlld0hlaWdodCA9IE1hdGguZmxvb3Iodmlldy5pbWFnZVZpZXdIZWlnaHQpXG5cbiAgc3dpdGNoIChpbWFnZVZpZXdNb2RlKSB7XG4gICAgY2FzZSAwOlxuICAgICAgdXJsID0gZ2V0SW1hZ2VVcmwodXJsLCAwLCBpbWFnZVZpZXdXaWR0aCwgaW1hZ2VWaWV3SGVpZ2h0KVxuICAgICAgYnJlYWtcbiAgICBjYXNlIDE6XG4gICAgICB1cmwgPSBnZXRJbWFnZVVybCh1cmwsIDEsIGltYWdlVmlld1dpZHRoLCBpbWFnZVZpZXdIZWlnaHQpXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB1cmwgPSBnZXRJbWFnZVVybCh1cmwsIDAsIGltYWdlVmlld1dpZHRoLCBpbWFnZVZpZXdIZWlnaHQpXG4gIH1cblxuICBpZiAodmlldy5mb3JtYXQpIHtcbiAgICBsZXQgZm9ybWF0UmVnRXggPSBuZXcgUmVnRXhwKHZpZXcuZm9ybWF0KVxuICAgIGlmICghZm9ybWF0UmVnRXgudGVzdCh1cmwpKSB7XG4gICAgICB1cmwgPSB1cmwgKyBgL2Zvcm1hdC8ke3ZpZXcuZm9ybWF0fWBcbiAgICB9XG4gIH1cblxuICBpZiAodmlldy5pbnRlcmxhY2UpIHtcbiAgICBpZiAoL2pwZy8udGVzdCh1cmwpKSB7XG4gICAgICB1cmwgPSB1cmwgKyBgL2ludGVybGFjZS8xYFxuICAgIH1cbiAgfVxuXG4gIGlmICghdmlldy5zaG93RXJyb3IpIHtcbiAgICB1cmwgPSB1cmwgKyBgL2lnbm9yZS1lcnJvci8xYFxuICB9XG5cbiAgcmV0dXJuIHVybFxufVxuXG5jb25zdCBnZXRFbmhhbmNlZFVybCA9ICh1cmwsIHZpZXcpID0+IHtcbiAgaWYgKHZpZXcpIHtcbiAgICB1cmwgPSBpbWFnZVZpZXdVcmwodXJsLCB2aWV3KVxuICB9XG5cbiAgcmV0dXJuIHVybFxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRFbmhhbmNlZFVybFxuIl19

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(41);

	var setCssStyle = function setCssStyle(el, styleConfig) {
	  if (!styleConfig) {
	    return;
	  }

	  var imageViewMode = styleConfig.imageViewMode;
	  var originWidth = styleConfig.originWidth;
	  var originHeight = styleConfig.originHeight;
	  var styleWidth = styleConfig.styleWidth;
	  var styleHeight = styleConfig.styleHeight;
	  var styleMaxWidth = styleConfig.styleMaxWidth;
	  var styleMaxHeight = styleConfig.styleMaxHeight;

	  if (originWidth && originHeight) {
	    styleConfig.realStyleWidth = null;
	    styleConfig.realStyleHeight = null;
	    if (styleMaxWidth || styleMaxHeight) {
	      var wRatio = styleMaxWidth ? originWidth / styleMaxWidth : 0;
	      var hRatio = styleMaxHeight ? originHeight / styleMaxHeight : 0;

	      if (wRatio < 1 && hRatio < 1) {
	        styleConfig.realStyleWidth = originWidth;
	        styleConfig.realStyleHeight = originHeight;
	      } else {
	        switch (imageViewMode) {
	          case 0:
	            if (wRatio > hRatio) {
	              styleConfig.realStyleWidth = styleMaxWidth;
	              styleConfig.realStyleHeight = originHeight * (styleMaxWidth / originWidth);
	            } else {
	              styleConfig.realStyleHeight = styleMaxHeight;
	              styleConfig.realStyleWidth = originWidth * (styleMaxHeight / originHeight);
	            }
	            break;

	          case 1:
	            if (wRatio > 0 && hRatio > 0) {
	              styleConfig.realStyleWidth = styleMaxWidth;
	              styleConfig.realStyleHeight = styleMaxHeight;
	            } else {
	              if (wRatio > 0) {
	                styleConfig.realStyleWidth = styleMaxWidth;
	                styleConfig.realStyleHeight = styleMaxWidth;
	              } else {
	                styleConfig.realStyleWidth = styleMaxHeight;
	                styleConfig.realStyleHeight = styleMaxHeight;
	              }
	            }
	            break;
	          default:
	            if (wRatio > hRatio) {
	              styleConfig.realStyleWidth = styleMaxWidth;
	              styleConfig.realStyleHeight = originHeight * (styleMaxWidth / originWidth);
	            } else {
	              styleConfig.realStyleHeight = styleMaxHeight;
	              styleConfig.realStyleWidth = originWidth * (styleMaxHeight / originHeight);
	            }
	        }
	      }
	    } else {
	      styleConfig.realStyleWidth = originWidth;
	      styleConfig.realStyleHeight = originHeight;
	    }

	    if (!styleWidth) {
	      el.setAttribute('style', (0, _utils.extendStyle)(el.getAttribute('style'), 'width: ' + styleConfig.realStyleWidth + 'px'));
	    }
	    if (!styleHeight) {
	      el.setAttribute('style', (0, _utils.extendStyle)(el.getAttribute('style'), 'height: ' + styleConfig.realStyleHeight + 'px'));
	    }
	  }

	  if (styleMaxWidth) {
	    el.setAttribute('style', (0, _utils.extendStyle)(el.getAttribute('style'), 'max-width: ' + styleMaxWidth + 'px'));
	  }
	  if (styleMaxHeight) {
	    el.setAttribute('style', (0, _utils.extendStyle)(el.getAttribute('style'), 'max-height: ' + styleMaxHeight + 'px'));
	  }

	  if (styleWidth) {
	    el.setAttribute('style', (0, _utils.extendStyle)(el.getAttribute('style'), 'width: ' + styleWidth + 'px'));
	  }
	  if (styleHeight) {
	    el.setAttribute('style', (0, _utils.extendStyle)(el.getAttribute('style'), 'height: ' + styleHeight + 'px'));
	  }
	};

	exports.default = setCssStyle;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcbGlic1xcc3R5bGVDb25maWcuanMiXSwibmFtZXMiOlsic2V0Q3NzU3R5bGUiLCJlbCIsInN0eWxlQ29uZmlnIiwiaW1hZ2VWaWV3TW9kZSIsIm9yaWdpbldpZHRoIiwib3JpZ2luSGVpZ2h0Iiwic3R5bGVXaWR0aCIsInN0eWxlSGVpZ2h0Iiwic3R5bGVNYXhXaWR0aCIsInN0eWxlTWF4SGVpZ2h0IiwicmVhbFN0eWxlV2lkdGgiLCJyZWFsU3R5bGVIZWlnaHQiLCJ3UmF0aW8iLCJoUmF0aW8iLCJzZXRBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBLElBQU1BLGNBQWMsU0FBZEEsV0FBYyxDQUFDQyxFQUFELEVBQUtDLFdBQUwsRUFBcUI7QUFDdkMsTUFBSSxDQUFDQSxXQUFMLEVBQWtCO0FBQ2hCO0FBQ0Q7O0FBRUQsTUFBSUMsZ0JBQWdCRCxZQUFZQyxhQUFoQztBQUNBLE1BQUlDLGNBQWNGLFlBQVlFLFdBQTlCO0FBQ0EsTUFBSUMsZUFBZUgsWUFBWUcsWUFBL0I7QUFDQSxNQUFJQyxhQUFhSixZQUFZSSxVQUE3QjtBQUNBLE1BQUlDLGNBQWNMLFlBQVlLLFdBQTlCO0FBQ0EsTUFBSUMsZ0JBQWdCTixZQUFZTSxhQUFoQztBQUNBLE1BQUlDLGlCQUFpQlAsWUFBWU8sY0FBakM7O0FBRUEsTUFBSUwsZUFBZUMsWUFBbkIsRUFBaUM7QUFDL0JILGdCQUFZUSxjQUFaLEdBQTZCLElBQTdCO0FBQ0FSLGdCQUFZUyxlQUFaLEdBQThCLElBQTlCO0FBQ0EsUUFBSUgsaUJBQWlCQyxjQUFyQixFQUFxQztBQUNuQyxVQUFJRyxTQUFTSixnQkFBZ0JKLGNBQWNJLGFBQTlCLEdBQThDLENBQTNEO0FBQ0EsVUFBSUssU0FBU0osaUJBQWlCSixlQUFlSSxjQUFoQyxHQUFpRCxDQUE5RDs7QUFFQSxVQUFJRyxTQUFTLENBQVQsSUFBY0MsU0FBUyxDQUEzQixFQUE4QjtBQUM1Qlgsb0JBQVlRLGNBQVosR0FBNkJOLFdBQTdCO0FBQ0FGLG9CQUFZUyxlQUFaLEdBQThCTixZQUE5QjtBQUNELE9BSEQsTUFHTztBQUNMLGdCQUFRRixhQUFSO0FBRUUsZUFBSyxDQUFMO0FBQ0UsZ0JBQUlTLFNBQVNDLE1BQWIsRUFBcUI7QUFDbkJYLDBCQUFZUSxjQUFaLEdBQTZCRixhQUE3QjtBQUNBTiwwQkFBWVMsZUFBWixHQUE4Qk4sZ0JBQWdCRyxnQkFBZ0JKLFdBQWhDLENBQTlCO0FBQ0QsYUFIRCxNQUdPO0FBQ0xGLDBCQUFZUyxlQUFaLEdBQThCRixjQUE5QjtBQUNBUCwwQkFBWVEsY0FBWixHQUE2Qk4sZUFBZUssaUJBQWlCSixZQUFoQyxDQUE3QjtBQUNEO0FBQ0Q7O0FBRUYsZUFBSyxDQUFMO0FBQ0UsZ0JBQUlPLFNBQVMsQ0FBVCxJQUFjQyxTQUFTLENBQTNCLEVBQThCO0FBQzVCWCwwQkFBWVEsY0FBWixHQUE2QkYsYUFBN0I7QUFDQU4sMEJBQVlTLGVBQVosR0FBOEJGLGNBQTlCO0FBQ0QsYUFIRCxNQUdPO0FBQ0wsa0JBQUlHLFNBQVMsQ0FBYixFQUFnQjtBQUNkViw0QkFBWVEsY0FBWixHQUE2QkYsYUFBN0I7QUFDQU4sNEJBQVlTLGVBQVosR0FBOEJILGFBQTlCO0FBQ0QsZUFIRCxNQUdPO0FBQ0xOLDRCQUFZUSxjQUFaLEdBQTZCRCxjQUE3QjtBQUNBUCw0QkFBWVMsZUFBWixHQUE4QkYsY0FBOUI7QUFDRDtBQUNGO0FBQ0Q7QUFDRjtBQUNFLGdCQUFJRyxTQUFTQyxNQUFiLEVBQXFCO0FBQ25CWCwwQkFBWVEsY0FBWixHQUE2QkYsYUFBN0I7QUFDQU4sMEJBQVlTLGVBQVosR0FBOEJOLGdCQUFnQkcsZ0JBQWdCSixXQUFoQyxDQUE5QjtBQUNELGFBSEQsTUFHTztBQUNMRiwwQkFBWVMsZUFBWixHQUE4QkYsY0FBOUI7QUFDQVAsMEJBQVlRLGNBQVosR0FBNkJOLGVBQWVLLGlCQUFpQkosWUFBaEMsQ0FBN0I7QUFDRDtBQWpDTDtBQW1DRDtBQUNGLEtBNUNELE1BNENPO0FBQ0xILGtCQUFZUSxjQUFaLEdBQTZCTixXQUE3QjtBQUNBRixrQkFBWVMsZUFBWixHQUE4Qk4sWUFBOUI7QUFDRDs7QUFFRCxRQUFJLENBQUNDLFVBQUwsRUFBaUI7QUFDZkwsU0FBR2EsWUFBSCxDQUFnQixPQUFoQixFQUF5Qix3QkFBWWIsR0FBR2MsWUFBSCxDQUFnQixPQUFoQixDQUFaLGNBQWdEYixZQUFZUSxjQUE1RCxRQUF6QjtBQUNEO0FBQ0QsUUFBSSxDQUFDSCxXQUFMLEVBQWtCO0FBQ2hCTixTQUFHYSxZQUFILENBQWdCLE9BQWhCLEVBQXlCLHdCQUFZYixHQUFHYyxZQUFILENBQWdCLE9BQWhCLENBQVosZUFBaURiLFlBQVlTLGVBQTdELFFBQXpCO0FBQ0Q7QUFDRjs7QUFFRCxNQUFJSCxhQUFKLEVBQW1CO0FBQ2pCUCxPQUFHYSxZQUFILENBQWdCLE9BQWhCLEVBQXlCLHdCQUFZYixHQUFHYyxZQUFILENBQWdCLE9BQWhCLENBQVosa0JBQW9EUCxhQUFwRCxRQUF6QjtBQUNEO0FBQ0QsTUFBSUMsY0FBSixFQUFvQjtBQUNsQlIsT0FBR2EsWUFBSCxDQUFnQixPQUFoQixFQUF5Qix3QkFBWWIsR0FBR2MsWUFBSCxDQUFnQixPQUFoQixDQUFaLG1CQUFxRE4sY0FBckQsUUFBekI7QUFDRDs7QUFFRCxNQUFJSCxVQUFKLEVBQWdCO0FBQ2RMLE9BQUdhLFlBQUgsQ0FBZ0IsT0FBaEIsRUFBeUIsd0JBQVliLEdBQUdjLFlBQUgsQ0FBZ0IsT0FBaEIsQ0FBWixjQUFnRFQsVUFBaEQsUUFBekI7QUFDRDtBQUNELE1BQUlDLFdBQUosRUFBaUI7QUFDZk4sT0FBR2EsWUFBSCxDQUFnQixPQUFoQixFQUF5Qix3QkFBWWIsR0FBR2MsWUFBSCxDQUFnQixPQUFoQixDQUFaLGVBQWlEUixXQUFqRCxRQUF6QjtBQUNEO0FBQ0YsQ0F0RkQ7O2tCQXdGZVAsVyIsImZpbGUiOiJzdHlsZUNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJFOi8wMlByb2plY3QvTXlHaXRIdWIvMDBfbWluZS92dWUtaW1hZ2UtcGx1Z2lucyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZXh0ZW5kU3R5bGV9IGZyb20gJy4vdXRpbHMnXG5cbmNvbnN0IHNldENzc1N0eWxlID0gKGVsLCBzdHlsZUNvbmZpZykgPT4ge1xuICBpZiAoIXN0eWxlQ29uZmlnKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBsZXQgaW1hZ2VWaWV3TW9kZSA9IHN0eWxlQ29uZmlnLmltYWdlVmlld01vZGVcbiAgbGV0IG9yaWdpbldpZHRoID0gc3R5bGVDb25maWcub3JpZ2luV2lkdGhcbiAgbGV0IG9yaWdpbkhlaWdodCA9IHN0eWxlQ29uZmlnLm9yaWdpbkhlaWdodFxuICBsZXQgc3R5bGVXaWR0aCA9IHN0eWxlQ29uZmlnLnN0eWxlV2lkdGhcbiAgbGV0IHN0eWxlSGVpZ2h0ID0gc3R5bGVDb25maWcuc3R5bGVIZWlnaHRcbiAgbGV0IHN0eWxlTWF4V2lkdGggPSBzdHlsZUNvbmZpZy5zdHlsZU1heFdpZHRoXG4gIGxldCBzdHlsZU1heEhlaWdodCA9IHN0eWxlQ29uZmlnLnN0eWxlTWF4SGVpZ2h0XG5cbiAgaWYgKG9yaWdpbldpZHRoICYmIG9yaWdpbkhlaWdodCkge1xuICAgIHN0eWxlQ29uZmlnLnJlYWxTdHlsZVdpZHRoID0gbnVsbFxuICAgIHN0eWxlQ29uZmlnLnJlYWxTdHlsZUhlaWdodCA9IG51bGxcbiAgICBpZiAoc3R5bGVNYXhXaWR0aCB8fCBzdHlsZU1heEhlaWdodCkge1xuICAgICAgbGV0IHdSYXRpbyA9IHN0eWxlTWF4V2lkdGggPyBvcmlnaW5XaWR0aCAvIHN0eWxlTWF4V2lkdGggOiAwXG4gICAgICBsZXQgaFJhdGlvID0gc3R5bGVNYXhIZWlnaHQgPyBvcmlnaW5IZWlnaHQgLyBzdHlsZU1heEhlaWdodCA6IDBcblxuICAgICAgaWYgKHdSYXRpbyA8IDEgJiYgaFJhdGlvIDwgMSkge1xuICAgICAgICBzdHlsZUNvbmZpZy5yZWFsU3R5bGVXaWR0aCA9IG9yaWdpbldpZHRoXG4gICAgICAgIHN0eWxlQ29uZmlnLnJlYWxTdHlsZUhlaWdodCA9IG9yaWdpbkhlaWdodFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpdGNoIChpbWFnZVZpZXdNb2RlKSB7XG4gICAgICAgICAgLy8g6KeE5a6a5pyA5aSn5YC877yM562J5q+U57yp5pS+77yM5LiN6KOB5YmqXG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgaWYgKHdSYXRpbyA+IGhSYXRpbykge1xuICAgICAgICAgICAgICBzdHlsZUNvbmZpZy5yZWFsU3R5bGVXaWR0aCA9IHN0eWxlTWF4V2lkdGhcbiAgICAgICAgICAgICAgc3R5bGVDb25maWcucmVhbFN0eWxlSGVpZ2h0ID0gb3JpZ2luSGVpZ2h0ICogKHN0eWxlTWF4V2lkdGggLyBvcmlnaW5XaWR0aClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHN0eWxlQ29uZmlnLnJlYWxTdHlsZUhlaWdodCA9IHN0eWxlTWF4SGVpZ2h0XG4gICAgICAgICAgICAgIHN0eWxlQ29uZmlnLnJlYWxTdHlsZVdpZHRoID0gb3JpZ2luV2lkdGggKiAoc3R5bGVNYXhIZWlnaHQgLyBvcmlnaW5IZWlnaHQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIC8vIOinhOWumuacgOWwj+WAvO+8jOetieavlOe8qeaUvu+8jOWxheS4reijgeWJqlxuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGlmICh3UmF0aW8gPiAwICYmIGhSYXRpbyA+IDApIHtcbiAgICAgICAgICAgICAgc3R5bGVDb25maWcucmVhbFN0eWxlV2lkdGggPSBzdHlsZU1heFdpZHRoXG4gICAgICAgICAgICAgIHN0eWxlQ29uZmlnLnJlYWxTdHlsZUhlaWdodCA9IHN0eWxlTWF4SGVpZ2h0XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAod1JhdGlvID4gMCkge1xuICAgICAgICAgICAgICAgIHN0eWxlQ29uZmlnLnJlYWxTdHlsZVdpZHRoID0gc3R5bGVNYXhXaWR0aFxuICAgICAgICAgICAgICAgIHN0eWxlQ29uZmlnLnJlYWxTdHlsZUhlaWdodCA9IHN0eWxlTWF4V2lkdGhcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHlsZUNvbmZpZy5yZWFsU3R5bGVXaWR0aCA9IHN0eWxlTWF4SGVpZ2h0XG4gICAgICAgICAgICAgICAgc3R5bGVDb25maWcucmVhbFN0eWxlSGVpZ2h0ID0gc3R5bGVNYXhIZWlnaHRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgaWYgKHdSYXRpbyA+IGhSYXRpbykge1xuICAgICAgICAgICAgICBzdHlsZUNvbmZpZy5yZWFsU3R5bGVXaWR0aCA9IHN0eWxlTWF4V2lkdGhcbiAgICAgICAgICAgICAgc3R5bGVDb25maWcucmVhbFN0eWxlSGVpZ2h0ID0gb3JpZ2luSGVpZ2h0ICogKHN0eWxlTWF4V2lkdGggLyBvcmlnaW5XaWR0aClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHN0eWxlQ29uZmlnLnJlYWxTdHlsZUhlaWdodCA9IHN0eWxlTWF4SGVpZ2h0XG4gICAgICAgICAgICAgIHN0eWxlQ29uZmlnLnJlYWxTdHlsZVdpZHRoID0gb3JpZ2luV2lkdGggKiAoc3R5bGVNYXhIZWlnaHQgLyBvcmlnaW5IZWlnaHQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVDb25maWcucmVhbFN0eWxlV2lkdGggPSBvcmlnaW5XaWR0aFxuICAgICAgc3R5bGVDb25maWcucmVhbFN0eWxlSGVpZ2h0ID0gb3JpZ2luSGVpZ2h0XG4gICAgfVxuXG4gICAgaWYgKCFzdHlsZVdpZHRoKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgZXh0ZW5kU3R5bGUoZWwuZ2V0QXR0cmlidXRlKCdzdHlsZScpLCBgd2lkdGg6ICR7c3R5bGVDb25maWcucmVhbFN0eWxlV2lkdGh9cHhgKSlcbiAgICB9XG4gICAgaWYgKCFzdHlsZUhlaWdodCkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsIGV4dGVuZFN0eWxlKGVsLmdldEF0dHJpYnV0ZSgnc3R5bGUnKSwgYGhlaWdodDogJHtzdHlsZUNvbmZpZy5yZWFsU3R5bGVIZWlnaHR9cHhgKSlcbiAgICB9XG4gIH1cblxuICBpZiAoc3R5bGVNYXhXaWR0aCkge1xuICAgIGVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBleHRlbmRTdHlsZShlbC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJyksIGBtYXgtd2lkdGg6ICR7c3R5bGVNYXhXaWR0aH1weGApKVxuICB9XG4gIGlmIChzdHlsZU1heEhlaWdodCkge1xuICAgIGVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBleHRlbmRTdHlsZShlbC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJyksIGBtYXgtaGVpZ2h0OiAke3N0eWxlTWF4SGVpZ2h0fXB4YCkpXG4gIH1cblxuICBpZiAoc3R5bGVXaWR0aCkge1xuICAgIGVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBleHRlbmRTdHlsZShlbC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJyksIGB3aWR0aDogJHtzdHlsZVdpZHRofXB4YCkpXG4gIH1cbiAgaWYgKHN0eWxlSGVpZ2h0KSB7XG4gICAgZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsIGV4dGVuZFN0eWxlKGVsLmdldEF0dHJpYnV0ZSgnc3R5bGUnKSwgYGhlaWdodDogJHtzdHlsZUhlaWdodH1weGApKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNldENzc1N0eWxlXG4iXX0=

/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var extendStyle = exports.extendStyle = function extendStyle(origin, val) {
	  if (origin && val) {
	    return origin + ';' + val;
	  } else if (!origin) {
	    return val;
	  } else if (!val) {
	    return origin;
	  } else {
	    return null;
	  }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcbGlic1xcdXRpbHMuanMiXSwibmFtZXMiOlsiZXh0ZW5kU3R5bGUiLCJvcmlnaW4iLCJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sSUFBTUEsb0NBQWMsU0FBZEEsV0FBYyxDQUFDQyxNQUFELEVBQVNDLEdBQVQsRUFBaUI7QUFDMUMsTUFBSUQsVUFBVUMsR0FBZCxFQUFtQjtBQUNqQixXQUFPRCxTQUFTLEdBQVQsR0FBZUMsR0FBdEI7QUFDRCxHQUZELE1BRU8sSUFBSSxDQUFDRCxNQUFMLEVBQWE7QUFDbEIsV0FBT0MsR0FBUDtBQUNELEdBRk0sTUFFQSxJQUFJLENBQUNBLEdBQUwsRUFBVTtBQUNmLFdBQU9ELE1BQVA7QUFDRCxHQUZNLE1BRUE7QUFDTCxXQUFPLElBQVA7QUFDRDtBQUNGLENBVk0iLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiRTovMDJQcm9qZWN0L015R2l0SHViLzAwX21pbmUvdnVlLWltYWdlLXBsdWdpbnMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZXh0ZW5kU3R5bGUgPSAob3JpZ2luLCB2YWwpID0+IHtcbiAgaWYgKG9yaWdpbiAmJiB2YWwpIHtcbiAgICByZXR1cm4gb3JpZ2luICsgJzsnICsgdmFsXG4gIH0gZWxzZSBpZiAoIW9yaWdpbikge1xuICAgIHJldHVybiB2YWxcbiAgfSBlbHNlIGlmICghdmFsKSB7XG4gICAgcmV0dXJuIG9yaWdpblxuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cbiJdfQ==

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(41);

	var setPlaceHolder = function setPlaceHolder(el, placeHolder) {
	  if (!placeHolder) {
	    return;
	  }

	  if (placeHolder.color) {
	    el.setAttribute('style', (0, _utils.extendStyle)(el.getAttribute('style'), 'background-color: ' + placeHolder.color));
	  }

	  if (placeHolder.loadingImage) {
	    el.setAttribute('style', (0, _utils.extendStyle)(el.getAttribute('style'), 'background-image: url(' + placeHolder.loadingImage + ')'));
	  }
	};

	exports.default = setPlaceHolder;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcbGlic1xccGxhY2VIb2xkZXIuanMiXSwibmFtZXMiOlsic2V0UGxhY2VIb2xkZXIiLCJlbCIsInBsYWNlSG9sZGVyIiwiY29sb3IiLCJzZXRBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJsb2FkaW5nSW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBLElBQU1BLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBQ0MsRUFBRCxFQUFLQyxXQUFMLEVBQXFCO0FBQzFDLE1BQUksQ0FBQ0EsV0FBTCxFQUFrQjtBQUNoQjtBQUNEOztBQUVELE1BQUlBLFlBQVlDLEtBQWhCLEVBQXVCO0FBQ3JCRixPQUFHRyxZQUFILENBQWdCLE9BQWhCLEVBQXlCLHdCQUFZSCxHQUFHSSxZQUFILENBQWdCLE9BQWhCLENBQVoseUJBQTJESCxZQUFZQyxLQUF2RSxDQUF6QjtBQUNEOztBQUVELE1BQUlELFlBQVlJLFlBQWhCLEVBQThCO0FBQzVCTCxPQUFHRyxZQUFILENBQWdCLE9BQWhCLEVBQXlCLHdCQUFZSCxHQUFHSSxZQUFILENBQWdCLE9BQWhCLENBQVosNkJBQStESCxZQUFZSSxZQUEzRSxPQUF6QjtBQUNEO0FBQ0YsQ0FaRDs7a0JBY2VOLGMiLCJmaWxlIjoicGxhY2VIb2xkZXIuanMiLCJzb3VyY2VSb290IjoiRTovMDJQcm9qZWN0L015R2l0SHViLzAwX21pbmUvdnVlLWltYWdlLXBsdWdpbnMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2V4dGVuZFN0eWxlfSBmcm9tICcuL3V0aWxzJ1xuXG5jb25zdCBzZXRQbGFjZUhvbGRlciA9IChlbCwgcGxhY2VIb2xkZXIpID0+IHtcbiAgaWYgKCFwbGFjZUhvbGRlcikge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyLmNvbG9yKSB7XG4gICAgZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsIGV4dGVuZFN0eWxlKGVsLmdldEF0dHJpYnV0ZSgnc3R5bGUnKSwgYGJhY2tncm91bmQtY29sb3I6ICR7cGxhY2VIb2xkZXIuY29sb3J9YCkpXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXIubG9hZGluZ0ltYWdlKSB7XG4gICAgZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsIGV4dGVuZFN0eWxlKGVsLmdldEF0dHJpYnV0ZSgnc3R5bGUnKSwgYGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3BsYWNlSG9sZGVyLmxvYWRpbmdJbWFnZX0pYCkpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2V0UGxhY2VIb2xkZXJcbiJdfQ==

/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var wxPreviewImage = function wxPreviewImage(_ref) {
	  var current = _ref.current,
	      _ref$urls = _ref.urls,
	      urls = _ref$urls === undefined ? [] : _ref$urls;

	  wx.previewImage({
	    current: current,
	    urls: urls });
	};

	var handleNoHostUrl = function handleNoHostUrl(url) {
	  if (/\/\//.test(url)) {
	    return url;
	  } else {
	    return window.location.origin + url;
	  }
	};

	var handleError = function handleError(el) {
	  var _this = this;

	  var otherHandler = el.onerror;

	  el.onerror = function () {
	    removeListener.bind(_this)(el);
	    otherHandler && otherHandler();
	  };
	};

	var addListener = exports.addListener = function addListener(el) {
	  this.wxPreviewListener = function () {
	    if (this.wxPreviewCurrent) {
	      wxPreviewImage({ current: this.wxPreviewCurrent, urls: this.wxPreviewUrls });
	    }
	  }.bind(this);
	  el.addEventListener('click', this.wxPreviewListener, false);
	};

	var setPreview = exports.setPreview = function setPreview(el, preview) {
	  if (!preview) {
	    this.wxPreviewCurrent = null;
	    removeListener.bind(this)(el);
	    return;
	  }
	  var cur = preview.list[preview.index];

	  if (el.nodeName === 'IMG') {
	    if (cur) {
	      el.setAttribute('src', cur);
	    }
	  } else {
	    el.setAttribute('style', 'background-image: url(' + cur + ')');
	  }

	  this.wxPreviewCurrent = handleNoHostUrl(cur);
	  this.wxPreviewUrls = preview.list.map(function (ele) {
	    return handleNoHostUrl(ele);
	  });

	  handleError.bind(this)(el);
	};

	var removeListener = exports.removeListener = function removeListener(el) {
	  el.removeEventListener('click', this.wxPreviewListener, false);
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcbGlic1xccHJldmlldy5qcyJdLCJuYW1lcyI6WyJ3eFByZXZpZXdJbWFnZSIsImN1cnJlbnQiLCJ1cmxzIiwid3giLCJwcmV2aWV3SW1hZ2UiLCJoYW5kbGVOb0hvc3RVcmwiLCJ1cmwiLCJ0ZXN0Iiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJoYW5kbGVFcnJvciIsImVsIiwib3RoZXJIYW5kbGVyIiwib25lcnJvciIsInJlbW92ZUxpc3RlbmVyIiwiYmluZCIsImFkZExpc3RlbmVyIiwid3hQcmV2aWV3TGlzdGVuZXIiLCJ3eFByZXZpZXdDdXJyZW50Iiwid3hQcmV2aWV3VXJscyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRQcmV2aWV3IiwicHJldmlldyIsImN1ciIsImxpc3QiLCJpbmRleCIsIm5vZGVOYW1lIiwic2V0QXR0cmlidXRlIiwibWFwIiwiZWxlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNQSxpQkFBaUIsU0FBakJBLGNBQWlCLE9BQTRCO0FBQUEsTUFBekJDLE9BQXlCLFFBQXpCQSxPQUF5QjtBQUFBLHVCQUFoQkMsSUFBZ0I7QUFBQSxNQUFoQkEsSUFBZ0IsNkJBQVQsRUFBUzs7QUFFakRDLEtBQUdDLFlBQUgsQ0FBZ0I7QUFDZEgsYUFBU0EsT0FESztBQUVkQyxVQUFNQSxJQUZRLEVBQWhCO0FBS0QsQ0FQRDs7QUFTQSxJQUFJRyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEdBQUQsRUFBUztBQUM3QixNQUFJLE9BQU9DLElBQVAsQ0FBWUQsR0FBWixDQUFKLEVBQXNCO0FBQ3BCLFdBQU9BLEdBQVA7QUFDRCxHQUZELE1BRU87QUFDTCxXQUFPRSxPQUFPQyxRQUFQLENBQWdCQyxNQUFoQixHQUF5QkosR0FBaEM7QUFDRDtBQUNGLENBTkQ7O0FBUUEsSUFBTUssY0FBYyxTQUFkQSxXQUFjLENBQVVDLEVBQVYsRUFBYztBQUFBOztBQUNoQyxNQUFJQyxlQUFlRCxHQUFHRSxPQUF0Qjs7QUFFQUYsS0FBR0UsT0FBSCxHQUFhLFlBQU07QUFDakJDLG1CQUFlQyxJQUFmLFFBQTBCSixFQUExQjtBQUNBQyxvQkFBZ0JBLGNBQWhCO0FBQ0QsR0FIRDtBQUlELENBUEQ7O0FBU08sSUFBTUksb0NBQWMsU0FBZEEsV0FBYyxDQUFVTCxFQUFWLEVBQWM7QUFDdkMsT0FBS00saUJBQUwsR0FBeUIsWUFBWTtBQUNuQyxRQUFJLEtBQUtDLGdCQUFULEVBQTJCO0FBQ3pCbkIscUJBQWUsRUFBQ0MsU0FBUyxLQUFLa0IsZ0JBQWYsRUFBaUNqQixNQUFNLEtBQUtrQixhQUE1QyxFQUFmO0FBQ0Q7QUFDRixHQUp3QixDQUl2QkosSUFKdUIsQ0FJbEIsSUFKa0IsQ0FBekI7QUFLQUosS0FBR1MsZ0JBQUgsQ0FBb0IsT0FBcEIsRUFBNkIsS0FBS0gsaUJBQWxDLEVBQXFELEtBQXJEO0FBQ0QsQ0FQTTs7QUFTQSxJQUFNSSxrQ0FBYSxTQUFiQSxVQUFhLENBQVVWLEVBQVYsRUFBY1csT0FBZCxFQUF1QjtBQUMvQyxNQUFJLENBQUNBLE9BQUwsRUFBYztBQUNaLFNBQUtKLGdCQUFMLEdBQXdCLElBQXhCO0FBQ0FKLG1CQUFlQyxJQUFmLENBQW9CLElBQXBCLEVBQTBCSixFQUExQjtBQUNBO0FBQ0Q7QUFDRCxNQUFJWSxNQUFNRCxRQUFRRSxJQUFSLENBQWFGLFFBQVFHLEtBQXJCLENBQVY7O0FBRUEsTUFBSWQsR0FBR2UsUUFBSCxLQUFnQixLQUFwQixFQUEyQjtBQUN6QixRQUFJSCxHQUFKLEVBQVM7QUFDUFosU0FBR2dCLFlBQUgsQ0FBZ0IsS0FBaEIsRUFBdUJKLEdBQXZCO0FBQ0Q7QUFDRixHQUpELE1BSU87QUFDTFosT0FBR2dCLFlBQUgsQ0FBZ0IsT0FBaEIsNkJBQWtESixHQUFsRDtBQUNEOztBQUVELE9BQUtMLGdCQUFMLEdBQXdCZCxnQkFBZ0JtQixHQUFoQixDQUF4QjtBQUNBLE9BQUtKLGFBQUwsR0FBcUJHLFFBQVFFLElBQVIsQ0FBYUksR0FBYixDQUFpQixVQUFDQyxHQUFELEVBQVM7QUFDN0MsV0FBT3pCLGdCQUFnQnlCLEdBQWhCLENBQVA7QUFDRCxHQUZvQixDQUFyQjs7QUFJQW5CLGNBQVlLLElBQVosQ0FBaUIsSUFBakIsRUFBdUJKLEVBQXZCO0FBQ0QsQ0F0Qk07O0FBd0JBLElBQU1HLDBDQUFpQixTQUFqQkEsY0FBaUIsQ0FBVUgsRUFBVixFQUFjO0FBQzFDQSxLQUFHbUIsbUJBQUgsQ0FBdUIsT0FBdkIsRUFBZ0MsS0FBS2IsaUJBQXJDLEVBQXdELEtBQXhEO0FBQ0QsQ0FGTSIsImZpbGUiOiJwcmV2aWV3LmpzIiwic291cmNlUm9vdCI6IkU6LzAyUHJvamVjdC9NeUdpdEh1Yi8wMF9taW5lL3Z1ZS1pbWFnZS1wbHVnaW5zIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgd3hQcmV2aWV3SW1hZ2UgPSAoeyBjdXJyZW50LCB1cmxzID0gW10gfSkgPT4ge1xuICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICB3eC5wcmV2aWV3SW1hZ2Uoe1xuICAgIGN1cnJlbnQ6IGN1cnJlbnQsIC8vIOW9k+WJjeaYvuekuuWbvueJh+eahGh0dHDpk77mjqVcbiAgICB1cmxzOiB1cmxzIC8vIOmcgOimgemihOiniOeahOWbvueJh2h0dHDpk77mjqXliJfooahcbiAgfSlcbiAgLyogZXNsaW50LWVuYWJsZSAqL1xufVxuXG52YXIgaGFuZGxlTm9Ib3N0VXJsID0gKHVybCkgPT4ge1xuICBpZiAoL1xcL1xcLy8udGVzdCh1cmwpKSB7XG4gICAgcmV0dXJuIHVybFxuICB9IGVsc2Uge1xuICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgdXJsXG4gIH1cbn1cblxuY29uc3QgaGFuZGxlRXJyb3IgPSBmdW5jdGlvbiAoZWwpIHtcbiAgbGV0IG90aGVySGFuZGxlciA9IGVsLm9uZXJyb3JcblxuICBlbC5vbmVycm9yID0gKCkgPT4ge1xuICAgIHJlbW92ZUxpc3RlbmVyLmJpbmQodGhpcykoZWwpXG4gICAgb3RoZXJIYW5kbGVyICYmIG90aGVySGFuZGxlcigpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFkZExpc3RlbmVyID0gZnVuY3Rpb24gKGVsKSB7XG4gIHRoaXMud3hQcmV2aWV3TGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMud3hQcmV2aWV3Q3VycmVudCkge1xuICAgICAgd3hQcmV2aWV3SW1hZ2Uoe2N1cnJlbnQ6IHRoaXMud3hQcmV2aWV3Q3VycmVudCwgdXJsczogdGhpcy53eFByZXZpZXdVcmxzfSlcbiAgICB9XG4gIH0uYmluZCh0aGlzKVxuICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMud3hQcmV2aWV3TGlzdGVuZXIsIGZhbHNlKVxufVxuXG5leHBvcnQgY29uc3Qgc2V0UHJldmlldyA9IGZ1bmN0aW9uIChlbCwgcHJldmlldykge1xuICBpZiAoIXByZXZpZXcpIHtcbiAgICB0aGlzLnd4UHJldmlld0N1cnJlbnQgPSBudWxsXG4gICAgcmVtb3ZlTGlzdGVuZXIuYmluZCh0aGlzKShlbClcbiAgICByZXR1cm5cbiAgfVxuICBsZXQgY3VyID0gcHJldmlldy5saXN0W3ByZXZpZXcuaW5kZXhdXG5cbiAgaWYgKGVsLm5vZGVOYW1lID09PSAnSU1HJykge1xuICAgIGlmIChjdXIpIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnc3JjJywgY3VyKVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYGJhY2tncm91bmQtaW1hZ2U6IHVybCgke2N1cn0pYClcbiAgfVxuXG4gIHRoaXMud3hQcmV2aWV3Q3VycmVudCA9IGhhbmRsZU5vSG9zdFVybChjdXIpXG4gIHRoaXMud3hQcmV2aWV3VXJscyA9IHByZXZpZXcubGlzdC5tYXAoKGVsZSkgPT4ge1xuICAgIHJldHVybiBoYW5kbGVOb0hvc3RVcmwoZWxlKVxuICB9KVxuXG4gIGhhbmRsZUVycm9yLmJpbmQodGhpcykoZWwpXG59XG5cbmV4cG9ydCBjb25zdCByZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uIChlbCkge1xuICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMud3hQcmV2aWV3TGlzdGVuZXIsIGZhbHNlKVxufVxuIl19

/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var DEFAULT_IMAGE = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQDAwQDAwQEBAQFBQQFBwsHBwYGBw4KCggLEA4RERAOEA8SFBoWEhMYEw8QFh8XGBsbHR0dERYgIh8cIhocHRz/wgALCABkAGQBAREA/8QAHAABAAEFAQEAAAAAAAAAAAAAAAMBAgUGBwgE/9oACAEBAAAAANotVraqpVLHaAEtloASx0DnHDMx6dlSx0Hw+WOs4Dc+kJbLSL4fP82meos8litu5txnOZDYtp3gljo8f9Owm/8ATgmio8j9Z5B6M3IJY6MZy/fNluCWy0AJUNLgCW755qgEv//EADgQAAEDAgMGAwUGBwEAAAAAAAIBAwQABQYHEhETMTJRUhAhcSAiQWGhCDBCcoGRFBU0U2KCscH/2gAIAQEAAT8AIy1l7xca1l3VrLurWXUq1r3FWsvLzKtZd1ay61rLrWsu6tZdSrWXWmlXTxL96LnL1X2ents8lFzl6rXn921yr60XMvr7WZubUPAIhBistzr86moY6rsBgO9xU+g8VpMf5m4pN1+BPvD4Nc6W2LsbD5e6P/q1g7Pm/wBjn7jEpnc7ahoDym0gSY3Uk2Imr5oSVGkszI7UiO6Lsd4EcacAtqGKptRU9U8BpnkouZfX2bzdG7HZ7hdH/NuFHN8k66RVdlZd4Auua97lXi7Out2xx5XZsvgT7nxbbX6KvAUpM7MJ4dvkPDFrhGVnjmMX+MiEKMNEq7E0jxMdvEq+0jYITTFnvrYAE831iOknF8NCqil+XTWRExyXlnbBc4R3XmA/ILi7PFnkoucvVfDu8Hn2owbx55tpvucNBT61c7dCxTY5dude3sCe2TJnHNPMV8l0klZqZqQ2beWEMHkEayxg3EmVH90TFOLTa9vcf4qyvy0iWK3pjbGmiHChij8SI+nJ0dcHr2hWO8a3PNbE0SNChubhDVm2wPxqpczhr1VOPwEawXhscIYVtdlFzeFEa2G6I7NbiqqkX7r4s8lFzF6+Oa+aTeA4gQoKA/f5YKTQFyRg4bw0/wCJ8awNgO9ZwXs7nfpkt60tnskTHuZ4v7TScE+ap5DWaWaUJi3lhDCBNRbLGBWJMqL7on1abXt7j/FWTeTn9NiTEkbSPkcC3OfR1wV+g1mFl3jPMS9ID9ztkDD8dzbGYQzcJV4bwxRE2n+uxKwBldZ8ANm7HVZl1dTS5OfRELTt5BFOQfYZ5KLmX18B812daOMeZOcD8eU4TYXC4m0ZIvvAw1tTSP8AqGys977Mwbh2z4csbH8vssxs2nXo6cADgynTV8fitZZZZQ7Lb0xrjXREgxBR6LEkJydHXB69oVllmFPzDxBiSTujjWSELIRWDRNepVJVM17lRPRE8PPw2qXgzyL60XMvr4CulazFs9xy4zJO4w03IvSVuNueVNoL8TD9FVUVOi1bvtEYVk24HLlGmxZqIinFBnfDqTtPh++ysc4+vWal7iQYsN5Im82QbY2uojPvNU4l9ASsssDBgLDLUE1A7lJLfzHQ4K4qbEEf8RTyT2meSi5l9fG+4eteJrc5brvBalwzVC0OfAu4STzRfmlPfZuwwb+tq43dpjirOsC/RCUdtYSy/wAPYIA1s8BG33U0uSXiVx406KS8PRNie2zycKLnL1WvL7tnkp3mJa8q7vumeSng9/itaaRlNnFa3I1uR6rW5Hqtbka3I9Vrcj1WtyPVa3I1uR6rTUcdK+8Vf//Z';
	var DEFAULT_AVATAR = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
	var DEFAULT_LINK_IMAGE = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQDAwQDAwQEBAQFBQQFBwsHBwYGBw4KCggLEA4RERAOEA8SFBoWEhMYEw8QFh8XGBsbHR0dERYgIh8cIhocHRz/wgALCABkAGQBAREA/8QAHAABAAEFAQEAAAAAAAAAAAAAAAMBAgUGBwgE/9oACAEBAAAAANotVraqpVLHaAEtloASx0DnHDMx6dlSx0Hw+WOs4Dc+kJbLSL4fP82meos8litu5txnOZDYtp3gljo8f9Owm/8ATgmio8j9Z5B6M3IJY6MZy/fNluCWy0AJUNLgCW755qgEv//EADgQAAEDAgMGAwUGBwEAAAAAAAIBAwQABQYHEhETMTJRUhAhcSAiQWGhCDBCcoGRFBU0U2KCscH/2gAIAQEAAT8AIy1l7xca1l3VrLurWXUq1r3FWsvLzKtZd1ay61rLrWsu6tZdSrWXWmlXTxL96LnL1X2ents8lFzl6rXn921yr60XMvr7WZubUPAIhBistzr86moY6rsBgO9xU+g8VpMf5m4pN1+BPvD4Nc6W2LsbD5e6P/q1g7Pm/wBjn7jEpnc7ahoDym0gSY3Uk2Imr5oSVGkszI7UiO6Lsd4EcacAtqGKptRU9U8BpnkouZfX2bzdG7HZ7hdH/NuFHN8k66RVdlZd4Auua97lXi7Out2xx5XZsvgT7nxbbX6KvAUpM7MJ4dvkPDFrhGVnjmMX+MiEKMNEq7E0jxMdvEq+0jYITTFnvrYAE831iOknF8NCqil+XTWRExyXlnbBc4R3XmA/ILi7PFnkoucvVfDu8Hn2owbx55tpvucNBT61c7dCxTY5dude3sCe2TJnHNPMV8l0klZqZqQ2beWEMHkEayxg3EmVH90TFOLTa9vcf4qyvy0iWK3pjbGmiHChij8SI+nJ0dcHr2hWO8a3PNbE0SNChubhDVm2wPxqpczhr1VOPwEawXhscIYVtdlFzeFEa2G6I7NbiqqkX7r4s8lFzF6+Oa+aTeA4gQoKA/f5YKTQFyRg4bw0/wCJ8awNgO9ZwXs7nfpkt60tnskTHuZ4v7TScE+ap5DWaWaUJi3lhDCBNRbLGBWJMqL7on1abXt7j/FWTeTn9NiTEkbSPkcC3OfR1wV+g1mFl3jPMS9ID9ztkDD8dzbGYQzcJV4bwxRE2n+uxKwBldZ8ANm7HVZl1dTS5OfRELTt5BFOQfYZ5KLmX18B812daOMeZOcD8eU4TYXC4m0ZIvvAw1tTSP8AqGys977Mwbh2z4csbH8vssxs2nXo6cADgynTV8fitZZZZQ7Lb0xrjXREgxBR6LEkJydHXB69oVllmFPzDxBiSTujjWSELIRWDRNepVJVM17lRPRE8PPw2qXgzyL60XMvr4CulazFs9xy4zJO4w03IvSVuNueVNoL8TD9FVUVOi1bvtEYVk24HLlGmxZqIinFBnfDqTtPh++ysc4+vWal7iQYsN5Im82QbY2uojPvNU4l9ASsssDBgLDLUE1A7lJLfzHQ4K4qbEEf8RTyT2meSi5l9fG+4eteJrc5brvBalwzVC0OfAu4STzRfmlPfZuwwb+tq43dpjirOsC/RCUdtYSy/wAPYIA1s8BG33U0uSXiVx406KS8PRNie2zycKLnL1WvL7tnkp3mJa8q7vumeSng9/itaaRlNnFa3I1uR6rW5Hqtbka3I9Vrcj1WtyPVa3I1uR6rTUcdK+8Vf//Z';

	var setDefaultImage = function setDefaultImage(el, defaultImage, initOptions) {
	  if (!defaultImage) {
	    return;
	  }

	  var url = void 0;
	  var type = defaultImage.type;

	  switch (type) {
	    case 'normal':
	      url = defaultImage.default || initOptions.defaultImage || DEFAULT_IMAGE;
	      break;
	    case 'link':
	      url = defaultImage.default || initOptions.defaultLinkImage || DEFAULT_LINK_IMAGE;
	      break;
	    case 'avatar':
	      url = defaultImage.default || initOptions.defaultAvatar || DEFAULT_AVATAR;
	      break;
	    default:
	      url = defaultImage.default || initOptions.defaultImage || DEFAULT_IMAGE;
	  }

	  if (el.nodeName === 'IMG') {
	    (function () {
	      var otherHandler = el.onerror;

	      el.onerror = function () {
	        otherHandler && otherHandler();
	        el.setAttribute('src', url);
	      };
	    })();
	  } else {
	    var src = el.getAttribute('src');
	    el.setAttribute('style', 'background-image: ' + (src ? 'type(' + src + '), ' : '') + 'type(' + url + ')');
	  }
	};

	exports.default = setDefaultImage;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcbGlic1xcZGVmYXVsdEltYWdlLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfSU1BR0UiLCJERUZBVUxUX0FWQVRBUiIsIkRFRkFVTFRfTElOS19JTUFHRSIsInNldERlZmF1bHRJbWFnZSIsImVsIiwiZGVmYXVsdEltYWdlIiwiaW5pdE9wdGlvbnMiLCJ1cmwiLCJ0eXBlIiwiZGVmYXVsdCIsImRlZmF1bHRMaW5rSW1hZ2UiLCJkZWZhdWx0QXZhdGFyIiwibm9kZU5hbWUiLCJvdGhlckhhbmRsZXIiLCJvbmVycm9yIiwic2V0QXR0cmlidXRlIiwic3JjIiwiZ2V0QXR0cmlidXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxJQUFJQSxnQkFBZ0IseXREQUFwQjtBQUNBLElBQUlDLGlCQUFpQixnRkFBckI7QUFDQSxJQUFJQyxxQkFBcUIseXREQUF6Qjs7QUFFQSxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEVBQUQsRUFBS0MsWUFBTCxFQUFtQkMsV0FBbkIsRUFBbUM7QUFDekQsTUFBSSxDQUFDRCxZQUFMLEVBQW1CO0FBQ2pCO0FBQ0Q7O0FBRUQsTUFBSUUsWUFBSjtBQUNBLE1BQUlDLE9BQU9ILGFBQWFHLElBQXhCOztBQUVBLFVBQVFBLElBQVI7QUFDRSxTQUFLLFFBQUw7QUFDRUQsWUFBTUYsYUFBYUksT0FBYixJQUF3QkgsWUFBWUQsWUFBcEMsSUFBb0RMLGFBQTFEO0FBQ0E7QUFDRixTQUFLLE1BQUw7QUFDRU8sWUFBTUYsYUFBYUksT0FBYixJQUF3QkgsWUFBWUksZ0JBQXBDLElBQXdEUixrQkFBOUQ7QUFDQTtBQUNGLFNBQUssUUFBTDtBQUNFSyxZQUFNRixhQUFhSSxPQUFiLElBQXdCSCxZQUFZSyxhQUFwQyxJQUFxRFYsY0FBM0Q7QUFDQTtBQUNGO0FBQ0VNLFlBQU1GLGFBQWFJLE9BQWIsSUFBd0JILFlBQVlELFlBQXBDLElBQW9ETCxhQUExRDtBQVhKOztBQWNBLE1BQUlJLEdBQUdRLFFBQUgsS0FBZ0IsS0FBcEIsRUFBMkI7QUFBQTtBQUN6QixVQUFJQyxlQUFlVCxHQUFHVSxPQUF0Qjs7QUFFQVYsU0FBR1UsT0FBSCxHQUFhLFlBQU07QUFDakJELHdCQUFnQkEsY0FBaEI7QUFDQVQsV0FBR1csWUFBSCxDQUFnQixLQUFoQixFQUF1QlIsR0FBdkI7QUFDRCxPQUhEO0FBSHlCO0FBTzFCLEdBUEQsTUFPTztBQUNMLFFBQUlTLE1BQU1aLEdBQUdhLFlBQUgsQ0FBZ0IsS0FBaEIsQ0FBVjtBQUNBYixPQUFHVyxZQUFILENBQWdCLE9BQWhCLDBCQUErQ0MsTUFBTSxVQUFVQSxHQUFWLEdBQWdCLEtBQXRCLEdBQThCLEVBQTdFLGNBQXdGVCxHQUF4RjtBQUNEO0FBQ0YsQ0FqQ0Q7O2tCQW1DZUosZSIsImZpbGUiOiJkZWZhdWx0SW1hZ2UuanMiLCJzb3VyY2VSb290IjoiRTovMDJQcm9qZWN0L015R2l0SHViLzAwX21pbmUvdnVlLWltYWdlLXBsdWdpbnMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBERUZBVUxUX3R5cGUgPSAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3J1xubGV0IERFRkFVTFRfSU1BR0UgPSAnZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndCREFBUURBd1FEQXdRRUJBUUZCUVFGQndzSEJ3WUdCdzRLQ2dnTEVBNFJFUkFPRUE4U0ZCb1dFaE1ZRXc4UUZoOFhHQnNiSFIwZEVSWWdJaDhjSWhvY0hSei93Z0FMQ0FCa0FHUUJBUkVBLzhRQUhBQUJBQUVGQVFFQUFBQUFBQUFBQUFBQUFBTUJBZ1VHQndnRS85b0FDQUVCQUFBQUFOb3RWcmFxcFZMSGFBRXRsb0FTeDBEbkhETXg2ZGxTeDBIdytXT3M0RGMra0piTFNMNGZQODJtZW9zOGxpdHU1dHhuT1pEWXRwM2dsam84ZjlPd20vOEFUZ21pbzhqOVo1QjZNM0lKWTZNWnkvZk5sdUNXeTBBSlVOTGdDVzc1NXFnRXYvL0VBRGdRQUFFREFnTUdBd1VHQndFQUFBQUFBQUlCQXdRQUJRWUhFaEVUTVRKUlVoQWhjU0FpUVdHaENEQkNjb0dSRkJVMFUyS0NzY0gvMmdBSUFRRUFBVDhBSXkxbDd4Y2ExbDNWckx1cldYVXExcjNGV3N2THpLdFpkMWF5NjFyTHJXc3U2dFpkU3JXWFdtbFhUeEw5NkxuTDFYMmVudHM4bEZ6bDZyWG45MjF5cjYwWE12cjdXWnViVVBBSWhCaXN0enI4Nm1vWTZyc0JnTzl4VStnOFZwTWY1bTRwTjErQlB2RDROYzZXMkxzYkQ1ZTZQL3ExZzdQbS93QmpuN2pFcG5jN2Fob0R5bTBnU1kzVWsySW1yNW9TVkdrc3pJN1VpTzZMc2Q0RWNhY0F0cUdLcHRSVTlVOEJwbmtvdVpmWDJiemRHN0haN2hkSC9OdUZITjhrNjZSVmRsWmQ0QXV1YTk3bFhpN091dDJ4eDVYWnN2Z1Q3bnhiYlg2S3ZBVXBNN01KNGR2a1BERnJoR1Zuam1NWCtNaUVLTU5FcTdFMGp4TWR2RXErMGpZSVRURm52cllBRTgzMWlPa25GOE5DcWlsK1hUV1JFeHlYbG5iQmM0UjNYbUEvSUxpN1BGbmtvdWN2VmZEdThIbjJvd2J4NTV0cHZ1Y05CVDYxYzdkQ3hUWTVkdWRlM3NDZTJUSm5ITlBNVjhsMGtsWnFacVEyYmVXRU1Ia0VheXhnM0VtVkg5MFRGT0xUYTl2Y2Y0cXl2eTBpV0szcGpiR21pSENoaWo4U0krbkowZGNIcjJoV084YTNQTmJFMFNOQ2h1YmhEVm0yd1B4cXBjemhyMVZPUHdFYXdYaHNjSVlWdGRsRnplRkVhMkc2STdOYmlxcWtYN3I0czhsRnpGNitPYSthVGVBNGdRb0tBL2Y1WUtUUUZ5Umc0YncwL3dDSjhhd05nTzlad1hzN25mcGt0NjB0bnNrVEh1WjR2N1RTY0UrYXA1RFdhV2FVSmkzbGhEQ0JOUmJMR0JXSk1xTDdvbjFhYlh0N2ovRldUZVRuOU5pVEVrYlNQa2NDM09mUjF3VitnMW1GbDNqUE1TOUlEOXp0a0REOGR6YkdZUXpjSlY0Ynd4UkUybit1eEt3QmxkWjhBTm03SFZabDFkVFM1T2ZSRUxUdDVCRk9RZllaNUtMbVgxOEI4MTJkYU9NZVpPY0Q4ZVU0VFlYQzRtMFpJdnZBdzF0VFNQOEFxR3lzOTc3TXdiaDJ6NGNzYkg4dnNzeHMyblhvNmNBRGd5blRWOGZpdFpaWlpRN0xiMHhyalhSRWd4QlI2TEVrSnlkSFhCNjlvVmxsbUZQekR4QmlTVHVqaldTRUxJUldEUk5lcFZKVk0xN2xSUFJFOFBQdzJxWGd6eUw2MFhNdnI0Q3VsYXpGczl4eTR6Sk80dzAzSXZTVnVOdWVWTm9MOFREOUZWVVZPaTFidnRFWVZrMjRITGxHbXhacUlpbkZCbmZEcVR0UGgrK3lzYzQrdldhbDdpUVlzTjVJbTgyUWJZMnVvalB2TlU0bDlBU3Nzc0RCZ0xETFVFMUE3bEpMZnpIUTRLNHFiRUVmOFJUeVQybWVTaTVsOWZHKzRldGVKcmM1YnJ2QmFsd3pWQzBPZkF1NFNUelJmbWxQZlp1d3diK3RxNDNkcGppck9zQy9SQ1VkdFlTeS93QVBZSUExczhCRzMzVTB1U1hpVng0MDZLUzhQUk5pZTJ6eWNLTG5MMVd2TDd0bmtwM21KYThxN3Z1bWVTbmc5L2l0YWFSbE5uRmEzSTF1UjZyVzVIcXRia2EzSTlWcmNqMVd0eVBWYTNJMXVSNnJUVWNkSys4VmYvL1onXG5sZXQgREVGQVVMVF9BVkFUQVIgPSAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3J1xubGV0IERFRkFVTFRfTElOS19JTUFHRSA9ICdkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUFBQVFBQkFBRC8yd0JEQUFRREF3UURBd1FFQkFRRkJRUUZCd3NIQndZR0J3NEtDZ2dMRUE0UkVSQU9FQThTRkJvV0VoTVlFdzhRRmg4WEdCc2JIUjBkRVJZZ0loOGNJaG9jSFJ6L3dnQUxDQUJrQUdRQkFSRUEvOFFBSEFBQkFBRUZBUUVBQUFBQUFBQUFBQUFBQUFNQkFnVUdCd2dFLzlvQUNBRUJBQUFBQU5vdFZyYXFwVkxIYUFFdGxvQVN4MERuSERNeDZkbFN4MEh3K1dPczREYytrSmJMU0w0ZlA4Mm1lb3M4bGl0dTV0eG5PWkRZdHAzZ2xqbzhmOU93bS84QVRnbWlvOGo5WjVCNk0zSUpZNk1aeS9mTmx1Q1d5MEFKVU5MZ0NXNzU1cWdFdi8vRUFEZ1FBQUVEQWdNR0F3VUdCd0VBQUFBQUFBSUJBd1FBQlFZSEVoRVRNVEpSVWhBaGNTQWlRV0doQ0RCQ2NvR1JGQlUwVTJLQ3NjSC8yZ0FJQVFFQUFUOEFJeTFsN3hjYTFsM1ZyTHVyV1hVcTFyM0ZXc3ZMekt0WmQxYXk2MXJMcldzdTZ0WmRTcldYV21sWFR4TDk2TG5MMVgyZW50czhsRnpsNnJYbjkyMXlyNjBYTXZyN1dadWJVUEFJaEJpc3R6cjg2bW9ZNnJzQmdPOXhVK2c4VnBNZjVtNHBOMStCUHZENE5jNlcyTHNiRDVlNlAvcTFnN1BtL3dCam43akVwbmM3YWhvRHltMGdTWTNVazJJbXI1b1NWR2tzekk3VWlPNkxzZDRFY2FjQXRxR0twdFJVOVU4QnBua291WmZYMmJ6ZEc3SFo3aGRIL051RkhOOGs2NlJWZGxaZDRBdXVhOTdsWGk3T3V0Mnh4NVhac3ZnVDdueGJiWDZLdkFVcE03TUo0ZHZrUERGcmhHVm5qbU1YK01pRUtNTkVxN0UwanhNZHZFcSswallJVFRGbnZyWUFFODMxaU9rbkY4TkNxaWwrWFRXUkV4eVhsbmJCYzRSM1htQS9JTGk3UEZua291Y3ZWZkR1OEhuMm93Yng1NXRwdnVjTkJUNjFjN2RDeFRZNWR1ZGUzc0NlMlRKbkhOUE1WOGwwa2xacVpxUTJiZVdFTUhrRWF5eGczRW1WSDkwVEZPTFRhOXZjZjRxeXZ5MGlXSzNwamJHbWlIQ2hpajhTSStuSjBkY0hyMmhXTzhhM1BOYkUwU05DaHViaERWbTJ3UHhxcGN6aHIxVk9Qd0Vhd1hoc2NJWVZ0ZGxGemVGRWEyRzZJN05iaXFxa1g3cjRzOGxGekY2K09hK2FUZUE0Z1FvS0EvZjVZS1RRRnlSZzRidzAvd0NKOGF3TmdPOVp3WHM3bmZwa3Q2MHRuc2tUSHVaNHY3VFNjRSthcDVEV2FXYVVKaTNsaERDQk5SYkxHQldKTXFMN29uMWFiWHQ3ai9GV1RlVG45TmlURWtiU1BrY0MzT2ZSMXdWK2cxbUZsM2pQTVM5SUQ5enRrREQ4ZHpiR1lRemNKVjRid3hSRTJuK3V4S3dCbGRaOEFObTdIVlpsMWRUUzVPZlJFTFR0NUJGT1FmWVo1S0xtWDE4QjgxMmRhT01lWk9jRDhlVTRUWVhDNG0wWkl2dkF3MXRUU1A4QXFHeXM5NzdNd2JoMno0Y3NiSDh2c3N4czJuWG82Y0FEZ3luVFY4Zml0WlpaWlE3TGIweHJqWFJFZ3hCUjZMRWtKeWRIWEI2OW9WbGxtRlB6RHhCaVNUdWpqV1NFTElSV0RSTmVwVkpWTTE3bFJQUkU4UFB3MnFYZ3p5TDYwWE12cjRDdWxhekZzOXh5NHpKTzR3MDNJdlNWdU51ZVZOb0w4VEQ5RlZVVk9pMWJ2dEVZVmsyNEhMbEdteFpxSWluRkJuZkRxVHRQaCsreXNjNCt2V2FsN2lRWXNONUltODJRYlkydW9qUHZOVTRsOUFTc3NzREJnTERMVUUxQTdsSkxmekhRNEs0cWJFRWY4UlR5VDJtZVNpNWw5ZkcrNGV0ZUpyYzVicnZCYWx3elZDME9mQXU0U1R6UmZtbFBmWnV3d2IrdHE0M2RwamlyT3NDL1JDVWR0WVN5L3dBUFlJQTFzOEJHMzNVMHVTWGlWeDQwNktTOFBSTmllMnp5Y0tMbkwxV3ZMN3Rua3AzbUphOHE3dnVtZVNuZzkvaXRhYVJsTm5GYTNJMXVSNnJXNUhxdGJrYTNJOVZyY2oxV3R5UFZhM0kxdVI2clRVY2RLKzhWZi8vWidcblxuY29uc3Qgc2V0RGVmYXVsdEltYWdlID0gKGVsLCBkZWZhdWx0SW1hZ2UsIGluaXRPcHRpb25zKSA9PiB7XG4gIGlmICghZGVmYXVsdEltYWdlKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBsZXQgdXJsXG4gIGxldCB0eXBlID0gZGVmYXVsdEltYWdlLnR5cGVcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICdub3JtYWwnOlxuICAgICAgdXJsID0gZGVmYXVsdEltYWdlLmRlZmF1bHQgfHwgaW5pdE9wdGlvbnMuZGVmYXVsdEltYWdlIHx8IERFRkFVTFRfSU1BR0VcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnbGluayc6XG4gICAgICB1cmwgPSBkZWZhdWx0SW1hZ2UuZGVmYXVsdCB8fCBpbml0T3B0aW9ucy5kZWZhdWx0TGlua0ltYWdlIHx8IERFRkFVTFRfTElOS19JTUFHRVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhdmF0YXInOlxuICAgICAgdXJsID0gZGVmYXVsdEltYWdlLmRlZmF1bHQgfHwgaW5pdE9wdGlvbnMuZGVmYXVsdEF2YXRhciB8fCBERUZBVUxUX0FWQVRBUlxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgdXJsID0gZGVmYXVsdEltYWdlLmRlZmF1bHQgfHwgaW5pdE9wdGlvbnMuZGVmYXVsdEltYWdlIHx8IERFRkFVTFRfSU1BR0VcbiAgfVxuXG4gIGlmIChlbC5ub2RlTmFtZSA9PT0gJ0lNRycpIHtcbiAgICBsZXQgb3RoZXJIYW5kbGVyID0gZWwub25lcnJvclxuXG4gICAgZWwub25lcnJvciA9ICgpID0+IHtcbiAgICAgIG90aGVySGFuZGxlciAmJiBvdGhlckhhbmRsZXIoKVxuICAgICAgZWwuc2V0QXR0cmlidXRlKCdzcmMnLCB1cmwpXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxldCBzcmMgPSBlbC5nZXRBdHRyaWJ1dGUoJ3NyYycpXG4gICAgZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBiYWNrZ3JvdW5kLWltYWdlOiAkeyhzcmMgPyAndHlwZSgnICsgc3JjICsgJyksICcgOiAnJyl9dHlwZSgke3VybH0pYClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzZXREZWZhdWx0SW1hZ2VcbiJdfQ==

/***/ }
/******/ ])
});
;