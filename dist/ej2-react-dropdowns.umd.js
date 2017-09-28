/*!
*  filename: ej2-react-dropdowns.umd.js
*  version : 1.0.19
*  Copyright Syncfusion Inc. 2001 - 2017. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("@syncfusion/ej2-dropdowns"), require("@syncfusion/ej2-react-base"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "@syncfusion/ej2-dropdowns", "@syncfusion/ej2-react-base"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("@syncfusion/ej2-dropdowns"), require("@syncfusion/ej2-react-base")) : factory(root["react"], root["@syncfusion/ej2-dropdowns"], root["@syncfusion/ej2-react-base"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1), __webpack_require__(6), __webpack_require__(8), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, drop_down_list_1, combo_box_1, auto_complete_1, ej2_dropdowns_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(drop_down_list_1);
	    __export(combo_box_1);
	    __export(auto_complete_1);
	    __export(ej2_dropdowns_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, dropdownlist_component_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(dropdownlist_component_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(4), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, ej2_dropdowns_1, ej2_react_base_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var DropDownListComponent = (function (_super) {
	        __extends(DropDownListComponent, _super);
	        function DropDownListComponent(props) {
	            var _this = _super.call(this, props) || this;
	            _this.initRenderCalled = false;
	            _this.checkInjectedModules = false;
	            _this.state = props;
	            return _this;
	        }
	        DropDownListComponent.prototype.render = function () {
	            if ((this.element && !this.initRenderCalled) || this.refreshing) {
	                _super.prototype.render.call(this);
	                this.initRenderCalled = true;
	            }
	            else {
	                return React.createElement('input', this.getDefaultAttributes(), this.props.children);
	            }
	        };
	        return DropDownListComponent;
	    }(ej2_dropdowns_1.DropDownList));
	    exports.DropDownListComponent = DropDownListComponent;
	    ej2_react_base_1.applyMixins(DropDownListComponent, [ej2_react_base_1.ComponentBase, React.PureComponent]);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, combobox_component_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(combobox_component_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(4), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, ej2_dropdowns_1, ej2_react_base_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var ComboBoxComponent = (function (_super) {
	        __extends(ComboBoxComponent, _super);
	        function ComboBoxComponent(props) {
	            var _this = _super.call(this, props) || this;
	            _this.initRenderCalled = false;
	            _this.checkInjectedModules = false;
	            _this.state = props;
	            return _this;
	        }
	        ComboBoxComponent.prototype.render = function () {
	            if ((this.element && !this.initRenderCalled) || this.refreshing) {
	                _super.prototype.render.call(this);
	                this.initRenderCalled = true;
	            }
	            else {
	                return React.createElement('input', this.getDefaultAttributes(), this.props.children);
	            }
	        };
	        return ComboBoxComponent;
	    }(ej2_dropdowns_1.ComboBox));
	    exports.ComboBoxComponent = ComboBoxComponent;
	    ej2_react_base_1.applyMixins(ComboBoxComponent, [ej2_react_base_1.ComponentBase, React.PureComponent]);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(9)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, autocomplete_component_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(autocomplete_component_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(4), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, ej2_dropdowns_1, ej2_react_base_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var AutoCompleteComponent = (function (_super) {
	        __extends(AutoCompleteComponent, _super);
	        function AutoCompleteComponent(props) {
	            var _this = _super.call(this, props) || this;
	            _this.initRenderCalled = false;
	            _this.checkInjectedModules = false;
	            _this.state = props;
	            return _this;
	        }
	        AutoCompleteComponent.prototype.render = function () {
	            if ((this.element && !this.initRenderCalled) || this.refreshing) {
	                _super.prototype.render.call(this);
	                this.initRenderCalled = true;
	            }
	            else {
	                return React.createElement('input', this.getDefaultAttributes(), this.props.children);
	            }
	        };
	        return AutoCompleteComponent;
	    }(ej2_dropdowns_1.AutoComplete));
	    exports.AutoCompleteComponent = AutoCompleteComponent;
	    ej2_react_base_1.applyMixins(AutoCompleteComponent, [ej2_react_base_1.ComponentBase, React.PureComponent]);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyMGIyZTFiZDQwYWNiZmVlMzFlZCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Ryb3AtZG93bi1saXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9kcm9wLWRvd24tbGlzdC9kcm9wZG93bmxpc3QuY29tcG9uZW50LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHN5bmNmdXNpb24vZWoyLWRyb3Bkb3duc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzeW5jZnVzaW9uL2VqMi1yZWFjdC1iYXNlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbWJvLWJveC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tYm8tYm94L2NvbWJvYm94LmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXV0by1jb21wbGV0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXV0by1jb21wbGV0ZS9hdXRvY29tcGxldGUuY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztpRUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFrRCxjQUFjO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7OztpRUNWRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQWtELGNBQWM7QUFDaEU7QUFDQSxFQUFDOzs7Ozs7O0FDUEQ7QUFDQTtBQUNBLFdBQVUsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUNuRiwwQkFBeUIsdURBQXVEO0FBQ2hGO0FBQ0E7QUFDQSx3QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBLG1EQUFrRCxjQUFjO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7O0FDbkNELGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztpRUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQWtELGNBQWM7QUFDaEU7QUFDQSxFQUFDOzs7Ozs7O0FDUEQ7QUFDQTtBQUNBLFdBQVUsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUNuRiwwQkFBeUIsdURBQXVEO0FBQ2hGO0FBQ0E7QUFDQSx3QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBLG1EQUFrRCxjQUFjO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7O2lFQ25DRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQWtELGNBQWM7QUFDaEU7QUFDQSxFQUFDOzs7Ozs7O0FDUEQ7QUFDQTtBQUNBLFdBQVUsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUNuRiwwQkFBeUIsdURBQXVEO0FBQ2hGO0FBQ0E7QUFDQSx3QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBLG1EQUFrRCxjQUFjO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxFQUFDIiwiZmlsZSI6ImVqMi1yZWFjdC1kcm9wZG93bnMudW1kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJAc3luY2Z1c2lvbi9lajItZHJvcGRvd25zXCIpLCByZXF1aXJlKFwiQHN5bmNmdXNpb24vZWoyLXJlYWN0LWJhc2VcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIiwgXCJAc3luY2Z1c2lvbi9lajItZHJvcGRvd25zXCIsIFwiQHN5bmNmdXNpb24vZWoyLXJlYWN0LWJhc2VcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwiQHN5bmNmdXNpb24vZWoyLWRyb3Bkb3duc1wiKSwgcmVxdWlyZShcIkBzeW5jZnVzaW9uL2VqMi1yZWFjdC1iYXNlXCIpKSA6IGZhY3Rvcnkocm9vdFtcInJlYWN0XCJdLCByb290W1wiQHN5bmNmdXNpb24vZWoyLWRyb3Bkb3duc1wiXSwgcm9vdFtcIkBzeW5jZnVzaW9uL2VqMi1yZWFjdC1iYXNlXCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjBiMmUxYmQ0MGFjYmZlZTMxZWQiLCJkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCIuL2Ryb3AtZG93bi1saXN0XCIsIFwiLi9jb21iby1ib3hcIiwgXCIuL2F1dG8tY29tcGxldGVcIiwgXCJAc3luY2Z1c2lvbi9lajItZHJvcGRvd25zXCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgZHJvcF9kb3duX2xpc3RfMSwgY29tYm9fYm94XzEsIGF1dG9fY29tcGxldGVfMSwgZWoyX2Ryb3Bkb3duc18xKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgICAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICBfX2V4cG9ydChkcm9wX2Rvd25fbGlzdF8xKTtcbiAgICBfX2V4cG9ydChjb21ib19ib3hfMSk7XG4gICAgX19leHBvcnQoYXV0b19jb21wbGV0ZV8xKTtcbiAgICBfX2V4cG9ydChlajJfZHJvcGRvd25zXzEpO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCIuL2Ryb3Bkb3dubGlzdC5jb21wb25lbnRcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBkcm9wZG93bmxpc3RfY29tcG9uZW50XzEpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBmdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIF9fZXhwb3J0KGRyb3Bkb3dubGlzdF9jb21wb25lbnRfMSk7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Ryb3AtZG93bi1saXN0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsIFwicmVhY3RcIiwgXCJAc3luY2Z1c2lvbi9lajItZHJvcGRvd25zXCIsIFwiQHN5bmNmdXNpb24vZWoyLXJlYWN0LWJhc2VcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBSZWFjdCwgZWoyX2Ryb3Bkb3duc18xLCBlajJfcmVhY3RfYmFzZV8xKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIHZhciBEcm9wRG93bkxpc3RDb21wb25lbnQgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMoRHJvcERvd25MaXN0Q29tcG9uZW50LCBfc3VwZXIpO1xuICAgICAgICBmdW5jdGlvbiBEcm9wRG93bkxpc3RDb21wb25lbnQocHJvcHMpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgICAgICAgICAgX3RoaXMuaW5pdFJlbmRlckNhbGxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgX3RoaXMuY2hlY2tJbmplY3RlZE1vZHVsZXMgPSBmYWxzZTtcbiAgICAgICAgICAgIF90aGlzLnN0YXRlID0gcHJvcHM7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIH1cbiAgICAgICAgRHJvcERvd25MaXN0Q29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoKHRoaXMuZWxlbWVudCAmJiAhdGhpcy5pbml0UmVuZGVyQ2FsbGVkKSB8fCB0aGlzLnJlZnJlc2hpbmcpIHtcbiAgICAgICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFJlbmRlckNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB0aGlzLmdldERlZmF1bHRBdHRyaWJ1dGVzKCksIHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gRHJvcERvd25MaXN0Q29tcG9uZW50O1xuICAgIH0oZWoyX2Ryb3Bkb3duc18xLkRyb3BEb3duTGlzdCkpO1xuICAgIGV4cG9ydHMuRHJvcERvd25MaXN0Q29tcG9uZW50ID0gRHJvcERvd25MaXN0Q29tcG9uZW50O1xuICAgIGVqMl9yZWFjdF9iYXNlXzEuYXBwbHlNaXhpbnMoRHJvcERvd25MaXN0Q29tcG9uZW50LCBbZWoyX3JlYWN0X2Jhc2VfMS5Db21wb25lbnRCYXNlLCBSZWFjdC5QdXJlQ29tcG9uZW50XSk7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Ryb3AtZG93bi1saXN0L2Ryb3Bkb3dubGlzdC5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBzeW5jZnVzaW9uL2VqMi1kcm9wZG93bnNcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHN5bmNmdXNpb24vZWoyLXJlYWN0LWJhc2VcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCIuL2NvbWJvYm94LmNvbXBvbmVudFwiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIGNvbWJvYm94X2NvbXBvbmVudF8xKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgICAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICBfX2V4cG9ydChjb21ib2JveF9jb21wb25lbnRfMSk7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbWJvLWJveC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiLCBcInJlYWN0XCIsIFwiQHN5bmNmdXNpb24vZWoyLWRyb3Bkb3duc1wiLCBcIkBzeW5jZnVzaW9uL2VqMi1yZWFjdC1iYXNlXCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgUmVhY3QsIGVqMl9kcm9wZG93bnNfMSwgZWoyX3JlYWN0X2Jhc2VfMSkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICB2YXIgQ29tYm9Cb3hDb21wb25lbnQgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMoQ29tYm9Cb3hDb21wb25lbnQsIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIENvbWJvQm94Q29tcG9uZW50KHByb3BzKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICAgICAgICAgIF90aGlzLmluaXRSZW5kZXJDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIF90aGlzLmNoZWNrSW5qZWN0ZWRNb2R1bGVzID0gZmFsc2U7XG4gICAgICAgICAgICBfdGhpcy5zdGF0ZSA9IHByb3BzO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgICB9XG4gICAgICAgIENvbWJvQm94Q29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoKHRoaXMuZWxlbWVudCAmJiAhdGhpcy5pbml0UmVuZGVyQ2FsbGVkKSB8fCB0aGlzLnJlZnJlc2hpbmcpIHtcbiAgICAgICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFJlbmRlckNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB0aGlzLmdldERlZmF1bHRBdHRyaWJ1dGVzKCksIHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gQ29tYm9Cb3hDb21wb25lbnQ7XG4gICAgfShlajJfZHJvcGRvd25zXzEuQ29tYm9Cb3gpKTtcbiAgICBleHBvcnRzLkNvbWJvQm94Q29tcG9uZW50ID0gQ29tYm9Cb3hDb21wb25lbnQ7XG4gICAgZWoyX3JlYWN0X2Jhc2VfMS5hcHBseU1peGlucyhDb21ib0JveENvbXBvbmVudCwgW2VqMl9yZWFjdF9iYXNlXzEuQ29tcG9uZW50QmFzZSwgUmVhY3QuUHVyZUNvbXBvbmVudF0pO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21iby1ib3gvY29tYm9ib3guY29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiLCBcIi4vYXV0b2NvbXBsZXRlLmNvbXBvbmVudFwiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIGF1dG9jb21wbGV0ZV9jb21wb25lbnRfMSkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4gICAgX19leHBvcnQoYXV0b2NvbXBsZXRlX2NvbXBvbmVudF8xKTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXV0by1jb21wbGV0ZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiLCBcInJlYWN0XCIsIFwiQHN5bmNmdXNpb24vZWoyLWRyb3Bkb3duc1wiLCBcIkBzeW5jZnVzaW9uL2VqMi1yZWFjdC1iYXNlXCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgUmVhY3QsIGVqMl9kcm9wZG93bnNfMSwgZWoyX3JlYWN0X2Jhc2VfMSkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICB2YXIgQXV0b0NvbXBsZXRlQ29tcG9uZW50ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzKEF1dG9Db21wbGV0ZUNvbXBvbmVudCwgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gQXV0b0NvbXBsZXRlQ29tcG9uZW50KHByb3BzKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICAgICAgICAgIF90aGlzLmluaXRSZW5kZXJDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIF90aGlzLmNoZWNrSW5qZWN0ZWRNb2R1bGVzID0gZmFsc2U7XG4gICAgICAgICAgICBfdGhpcy5zdGF0ZSA9IHByb3BzO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgICB9XG4gICAgICAgIEF1dG9Db21wbGV0ZUNvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCh0aGlzLmVsZW1lbnQgJiYgIXRoaXMuaW5pdFJlbmRlckNhbGxlZCkgfHwgdGhpcy5yZWZyZXNoaW5nKSB7XG4gICAgICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRSZW5kZXJDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgdGhpcy5nZXREZWZhdWx0QXR0cmlidXRlcygpLCB0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIEF1dG9Db21wbGV0ZUNvbXBvbmVudDtcbiAgICB9KGVqMl9kcm9wZG93bnNfMS5BdXRvQ29tcGxldGUpKTtcbiAgICBleHBvcnRzLkF1dG9Db21wbGV0ZUNvbXBvbmVudCA9IEF1dG9Db21wbGV0ZUNvbXBvbmVudDtcbiAgICBlajJfcmVhY3RfYmFzZV8xLmFwcGx5TWl4aW5zKEF1dG9Db21wbGV0ZUNvbXBvbmVudCwgW2VqMl9yZWFjdF9iYXNlXzEuQ29tcG9uZW50QmFzZSwgUmVhY3QuUHVyZUNvbXBvbmVudF0pO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hdXRvLWNvbXBsZXRlL2F1dG9jb21wbGV0ZS5jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==