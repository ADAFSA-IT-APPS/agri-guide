(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js ***!
      \*********************************************************************/

    /*! exports provided: Device */

    /***/
    function node_modulesIonicNativeDevice__ivy_ngcc__NgxIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Device", function () {
        return Device;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/core */
      "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");

      var Device =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Device, _super);

        function Device() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        Object.defineProperty(Device.prototype, "cordova", {
          get: function get() {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "cordova");
          },
          set: function set(value) {
            Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "cordova", value);
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Device.prototype, "model", {
          get: function get() {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "model");
          },
          set: function set(value) {
            Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "model", value);
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Device.prototype, "platform", {
          get: function get() {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "platform");
          },
          set: function set(value) {
            Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "platform", value);
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Device.prototype, "uuid", {
          get: function get() {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "uuid");
          },
          set: function set(value) {
            Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "uuid", value);
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Device.prototype, "version", {
          get: function get() {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "version");
          },
          set: function set(value) {
            Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "version", value);
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Device.prototype, "manufacturer", {
          get: function get() {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "manufacturer");
          },
          set: function set(value) {
            Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "manufacturer", value);
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Device.prototype, "isVirtual", {
          get: function get() {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "isVirtual");
          },
          set: function set(value) {
            Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "isVirtual", value);
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Device.prototype, "serial", {
          get: function get() {
            return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertyGet"])(this, "serial");
          },
          set: function set(value) {
            Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaPropertySet"])(this, "serial", value);
          },
          enumerable: false,
          configurable: true
        });
        Device.pluginName = "Device";
        Device.plugin = "cordova-plugin-device";
        Device.pluginRef = "device";
        Device.repo = "https://github.com/apache/cordova-plugin-device";
        Device.platforms = ["Android", "Browser", "iOS", "macOS", "Windows"];

        Device.ɵfac = function Device_Factory(t) {
          return ɵDevice_BaseFactory(t || Device);
        };

        Device.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
          token: Device,
          factory: function factory(t) {
            return Device.ɵfac(t);
          }
        });

        var ɵDevice_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](Device);
        /*@__PURE__*/


        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Device, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
          }], null, null);
        })();

        return Device;
      }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvZGV2aWNlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDZEQUE4QyxNQUFNLG9CQUFvQixDQUFDOztBQUNoRjtBQUllLElBd0JhLDBCQUFpQjtBQUFDO0FBQ3hCO0FBRVA7QUFFZCwwQkFGQywyQkFBTztBQUFJO0FBR2dEO0FBQ1g7QUFBMkI7QUFFckU7QUFBUSwwQkFDZCx5QkFBSztBQUFJO0FBR0s7QUFHbUM7QUFDckM7QUFHWDtBQUFRLDBCQU5ULDRCQUFRO0FBQUk7QUFHVjtBQUlEO0FBQ007QUFFTztBQUFRLDBCQU50Qix3QkFBSTtBQUFJO0FBSVY7QUFHZ0I7QUFDTTtBQUVFO0FBQVEsMEJBTjlCLDJCQUFPO0FBQUk7QUFJUDtBQUdEO0FBQ007QUFFSTtBQUFRLDBCQU5yQixnQ0FBWTtBQUFJO0FBR0Q7QUFJUjtBQUNNO0FBRU87QUFBUSwwQkFONUIsNkJBQVM7QUFBSTtBQUdLO0FBR3dDO0FBQTJCO0FBQTJCO0FBQVEsMEJBRnhILDBCQUFNO0FBQUk7QUFFcUQ7QUFBOEU7QUFBMkI7QUFBMkI7QUFBUTtBQUFrQztBQUE2QztBQUFpQztBQUFxRTswQ0FyQ2pZLFVBQVU7Ozs7OzBCQUNMO0FBQUMsaUJBOUJQO0FBQUUsRUE4QjBCLGlCQUFpQjtBQUM1QyxTQURZLE1BQU07QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmFQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmRlY2xhcmUgY29uc3Qgd2luZG93OiBhbnk7XG5cbi8qKlxuICogQG5hbWUgRGV2aWNlXG4gKiBAcHJlbWllciBkZXZpY2VcbiAqIEBkZXNjcmlwdGlvblxuICogQWNjZXNzIGluZm9ybWF0aW9uIGFib3V0IHRoZSB1bmRlcmx5aW5nIGRldmljZSBhbmQgcGxhdGZvcm0uXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBEZXZpY2UgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2RldmljZS9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZGV2aWNlOiBEZXZpY2UpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIGNvbnNvbGUubG9nKCdEZXZpY2UgVVVJRCBpczogJyArIHRoaXMuZGV2aWNlLnV1aWQpO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRGV2aWNlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZGV2aWNlJyxcbiAgcGx1Z2luUmVmOiAnZGV2aWNlJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tZGV2aWNlJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnbWFjT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEZXZpY2UgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKiBHZXQgdGhlIHZlcnNpb24gb2YgQ29yZG92YSBydW5uaW5nIG9uIHRoZSBkZXZpY2UuICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBjb3Jkb3ZhOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBkZXZpY2UubW9kZWwgcmV0dXJucyB0aGUgbmFtZSBvZiB0aGUgZGV2aWNlJ3MgbW9kZWwgb3IgcHJvZHVjdC4gVGhlIHZhbHVlIGlzIHNldFxuICAgKiBieSB0aGUgZGV2aWNlIG1hbnVmYWN0dXJlciBhbmQgbWF5IGJlIGRpZmZlcmVudCBhY3Jvc3MgdmVyc2lvbnMgb2YgdGhlIHNhbWUgcHJvZHVjdC5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBtb2RlbDogc3RyaW5nO1xuXG4gIC8qKiBHZXQgdGhlIGRldmljZSdzIG9wZXJhdGluZyBzeXN0ZW0gbmFtZS4gKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIHBsYXRmb3JtOiBzdHJpbmc7XG5cbiAgLyoqIEdldCB0aGUgZGV2aWNlJ3MgVW5pdmVyc2FsbHkgVW5pcXVlIElkZW50aWZpZXIgKFVVSUQpLiAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgdXVpZDogc3RyaW5nO1xuXG4gIC8qKiBHZXQgdGhlIG9wZXJhdGluZyBzeXN0ZW0gdmVyc2lvbi4gKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIHZlcnNpb246IHN0cmluZztcblxuICAvKiogR2V0IHRoZSBkZXZpY2UncyBtYW51ZmFjdHVyZXIuICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBtYW51ZmFjdHVyZXI6IHN0cmluZztcblxuICAvKiogV2hldGhlciB0aGUgZGV2aWNlIGlzIHJ1bm5pbmcgb24gYSBzaW11bGF0b3IuICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBpc1ZpcnR1YWw6IGJvb2xlYW47XG5cbiAgLyoqIEdldCB0aGUgZGV2aWNlIGhhcmR3YXJlIHNlcmlhbCBudW1iZXIuICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBzZXJpYWw6IHN0cmluZztcbn1cbiJdfQ==

      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function node_modulesIonicCoreDistEsmButtonActiveD4bd4f74Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-7a8b7a1c.js */
      "./node_modules/@ionic/core/dist/esm/index-7a8b7a1c.js");
      /* harmony import */


      var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./haptic-27b3f981.js */
      "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");
      /* harmony import */


      var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./index-34cb2743.js */
      "./node_modules/@ionic/core/dist/esm/index-34cb2743.js");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return Object(_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function node_modulesIonicCoreDistEsmFrameworkDelegate4392cd63Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });
      /* harmony import */


      var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./helpers-dd7e4b7b.js */
      "./node_modules/@ionic/core/dist/esm/helpers-dd7e4b7b.js");

      var attachComponent = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!delegate) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);
                  _context.next = 10;
                  return new Promise(function (resolve) {
                    return Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve);
                  });

                case 10:
                  return _context.abrupt("return", el);

                case 11:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function attachComponent(_x, _x2, _x3, _x4, _x5) {
          return _ref.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function node_modulesIonicCoreDistEsmHaptic27b3f981Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function node_modulesIonicCoreDistEsmSpinnerConfigsCd7845afJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function node_modulesIonicCoreDistEsmThemeFf3fc52fJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context2.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context2.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context2.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context2.abrupt("return", false);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function openURL(_x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "./src/app/_services/authentication.service.ts":
    /*!*****************************************************!*\
      !*** ./src/app/_services/authentication.service.ts ***!
      \*****************************************************/

    /*! exports provided: AuthenticationService */

    /***/
    function srcApp_servicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
        return AuthenticationService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./util.service */
      "./src/app/_services/util.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _guards_request_cache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../_guards/request-cache */
      "./src/app/_guards/request-cache.ts");

      var AuthenticationService = /*#__PURE__*/function () {
        function AuthenticationService(router, httpClient, requestCache, utilService) {
          _classCallCheck(this, AuthenticationService);

          this.router = router;
          this.httpClient = httpClient;
          this.requestCache = requestCache;
          this.utilService = utilService;
          this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_path;
        }

        _createClass(AuthenticationService, [{
          key: "login",
          value: function login(_userData) {
            var _this = this;

            return this.httpClient.post(this.API_URL + 'app/login', _userData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
              // login successful if there's a jwt token in the response
              if (user) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                //localStorage.removeItem('currentUser');
                if (user.code != "FAMSG400") {
                  if (user['token']) {
                    localStorage.setItem('token', user['token']);
                  }
                }

                localStorage.setItem('guest', '0');

                _this.utilService.chatService(); //var userDetails = {userId: user["data"].userId, userName: user["data"].userName, token: user["data"].token }
                //localStorage.setItem('currentUser', JSON.stringify(userDetails));

              }

              return user;
            }));
          }
        }, {
          key: "adafsalogin",
          value: function adafsalogin(_userData) {
            var _this2 = this;

            return this.httpClient.post(this.API_URL + 'ADAFSA/DoLogin', _userData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
              // login successful if there's a jwt token in the response
              if (user) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                //localStorage.removeItem('currentUser');
                if (user.code != "FAMSG400" && user['token'] != undefined) {
                  localStorage.setItem('token', user['token']);
                }

                localStorage.setItem('guest', '0');

                _this2.utilService.chatService(); //var userDetails = {userId: user["data"].userId, userName: user["data"].userName, token: user["data"].token }
                //localStorage.setItem('currentUser', JSON.stringify(userDetails));

              }

              return user;
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            // remove user from local storage to log user out
            localStorage.removeItem('token');
            localStorage.removeItem('currentUser');
            this.router.navigateByUrl("/adafsa-login"); // this.router.navigateByUrl("/member-login");

            this.requestCache.cache.clear();
          }
        }]);

        return AuthenticationService;
      }();

      AuthenticationService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _guards_request_cache__WEBPACK_IMPORTED_MODULE_7__["RequestCache"]
        }, {
          type: _util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"]
        }];
      };

      AuthenticationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], AuthenticationService);
      /***/
    },

    /***/
    "./src/app/_validators/validators.password.ts":
    /*!****************************************************!*\
      !*** ./src/app/_validators/validators.password.ts ***!
      \****************************************************/

    /*! exports provided: PasswordValidation */

    /***/
    function srcApp_validatorsValidatorsPasswordTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PasswordValidation", function () {
        return PasswordValidation;
      });

      var PasswordValidation = /*#__PURE__*/function () {
        function PasswordValidation() {
          _classCallCheck(this, PasswordValidation);
        }

        _createClass(PasswordValidation, null, [{
          key: "MatchPassword",
          value: function MatchPassword(AC) {
            var password = AC.get('password').value; // to get value in input tag

            var confirmPassword = AC.get('cpassword').value; // to get value in input tag

            if (password != confirmPassword) {
              AC.get('cpassword').setErrors({
                MatchPassword: true
              });
            } else {
              return null;
            }
          }
        }, {
          key: "MatchEmail",
          value: function MatchEmail(AC) {
            var email = AC.get('email').value; // to get value in input tag

            var cemail = AC.get('cemail').value; // to get value in input tag

            if (email != cemail) {
              AC.get('cemail').setErrors({
                MatchEmail: true
              });
            } else {
              return null;
            }
          }
        }]);

        return PasswordValidation;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map