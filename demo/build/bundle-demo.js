
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  var e = [],
      t = [];

  function n(n, r) {
    if (n && "undefined" != typeof document) {
      var a,
          s = !0 === r.prepend ? "prepend" : "append",
          d = !0 === r.singleTag,
          i = "string" == typeof r.container ? document.querySelector(r.container) : document.getElementsByTagName("head")[0];

      if (d) {
        var u = e.indexOf(i);
        -1 === u && (u = e.push(i) - 1, t[u] = {}), a = t[u] && t[u][s] ? t[u][s] : t[u][s] = c();
      } else a = c();

      65279 === n.charCodeAt(0) && (n = n.substring(1)), a.styleSheet ? a.styleSheet.cssText += n : a.appendChild(document.createTextNode(n));
    }

    function c() {
      var e = document.createElement("style");
      if (e.setAttribute("type", "text/css"), r.attributes) for (var t = Object.keys(r.attributes), n = 0; n < t.length; n++) e.setAttribute(t[n], r.attributes[t[n]]);
      var a = "prepend" === s ? "afterbegin" : "beforeend";
      return i.insertAdjacentElement(a, e), e;
    }
  }

  var css$1 = ".hg-candidate-box {\n  display: inline-flex;\n  border-radius: 5px;\n  position: absolute;\n  background: #ececec;\n  border-bottom: 2px solid #b5b5b5;\n  user-select: none;\n  max-width: 272px;\n  transform: translateY(-100%);\n  margin-top: -10px;\n}\n\nul.hg-candidate-box-list {\n  display: flex;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  flex: 1;\n}\n\nli.hg-candidate-box-list-item {\n  height: 40px;\n  width: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nli.hg-candidate-box-list-item:hover {\n  background: rgba(0, 0, 0, 0.03);\n  cursor: pointer;\n}\n\nli.hg-candidate-box-list-item:active {\n  background: rgba(0, 0, 0, 0.1);\n}\n\n.hg-candidate-box-prev::before {\n  content: \"◄\";\n}\n\n.hg-candidate-box-next::before {\n  content: \"►\";\n}\n\n.hg-candidate-box-next,\n.hg-candidate-box-prev {\n  display: flex;\n  align-items: center;\n  padding: 0 10px;\n  background: #d0d0d0;\n  color: #969696;\n  cursor: pointer;\n}\n\n.hg-candidate-box-next {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n.hg-candidate-box-prev {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.hg-candidate-box-btn-active {\n  color: #444;\n}";
  n(css$1,{});

  var css = "/**\n * simple-keyboard\n * Theme: hg-theme-default\n */\n.simple-keyboard {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n\n  margin: auto;\n\n  max-width: 1100px;\n\n  transform: translateY(100%);\n  transition: transform 0.5s ease-in-out;\n}\n\n.hg-theme-default {\n  width: 100%;\n  user-select: none;\n  box-sizing: border-box;\n  overflow: hidden;\n  touch-action: manipulation;\n  font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\",\n    Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  background-color: #ececec;\n  padding: 5px;\n  border-radius: 5px;\n}\n\n.hg-theme-default .hg-button span {\n  pointer-events: none;\n}\n\n/* When using option \"useButtonTag\" */\n.hg-theme-default button.hg-button {\n  border-width: 0;\n  outline: 0;\n  font-size: inherit;\n}\n\n.hg-theme-default .hg-button {\n  display: inline-block;\n  flex-grow: 1;\n  cursor: pointer;\n}\n\n.hg-theme-default .hg-button:active {\n  background: #efefef;\n}\n\n.hg-theme-default .hg-button.active {\n  background: #efefef;\n}\n\n.hg-theme-default .hg-button.hg-keyMarker {\n  box-shadow: 0 0 0 2px #88b8ff !important;\n}\n\n.hg-theme-default .hg-row {\n  display: flex;\n}\n\n.hg-theme-default .hg-row:not(:last-child) {\n  margin-bottom: 5px;\n}\n\n.hg-theme-default .hg-row .hg-button:not(:last-child) {\n  margin-right: 5px;\n}\n\n.hg-theme-default .hg-row .hg-button-container {\n  margin-right: 5px;\n}\n\n.hg-theme-default .hg-row > div:last-child {\n  margin-right: 0;\n}\n\n.hg-theme-default .hg-row .hg-button-container {\n  display: flex;\n}\n\n.hg-theme-default .hg-button {\n  box-shadow: 0px 0px 3px -1px rgba(0, 0, 0, 0.3);\n  height: 40px;\n  border-radius: 5px;\n  box-sizing: border-box;\n  padding: 5px;\n  background: white;\n  border-bottom: 1px solid #b5b5b5;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n.hg-theme-default .hg-button.hg-standardBtn {\n  width: 20px;\n}\n\n.hg-theme-default.hg-layout-numeric .hg-button {\n  width: 33.3%;\n  height: 60px;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.hg-theme-default .hg-button.hg-button-numpadadd {\n  height: 85px;\n}\n\n.hg-theme-default .hg-button.hg-button-numpadenter {\n  height: 85px;\n}\n\n.hg-theme-default .hg-button.hg-button-numpad0 {\n  width: 105px;\n}\n\n.hg-theme-default .hg-button.hg-button-com {\n  max-width: 85px;\n}\n\n.hg-theme-default .hg-button.hg-standardBtn.hg-button-at {\n  max-width: 45px;\n}\n\n.hg-theme-default .hg-button.hg-selectedButton {\n  background: rgba(5, 25, 70, 0.53);\n  color: white;\n}\n\n.hg-theme-default .hg-button.hg-standardBtn[data-skbtn=\".com\"] {\n  max-width: 82px;\n}\n\n.hg-theme-default .hg-button.hg-standardBtn[data-skbtn=\"@\"] {\n  /* max-width: 60px; */\n}\n\n.hg-theme-default .hg-button.hg-standardBtn[data-skbtn=\"{bksp}\"] {\n  /* max-width: 60px; */\n}\n\n.hg-theme-default .hg-button.hg-functionBtn[data-skbtn=\"{space}\"] {\n  min-width: 50%;\n}\n";
  n(css,{});

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  var EventDispatcher = /*#__PURE__*/function () {
    function EventDispatcher() {
      _classCallCheck(this, EventDispatcher);
    }

    _createClass(EventDispatcher, [{
      key: "addEventListener",
      value: function addEventListener(name, listener) {
        if (this._listeners === undefined) this._listeners = {};
        var listeners = this._listeners;

        if (listeners[name] === undefined) {
          listeners[name] = [];
        }

        if (!listeners[name].includes(listener)) {
          listeners[name].push(listener);
        }
      }
    }, {
      key: "removeEventListener",
      value: function removeEventListener(name, listener) {
        if (this._listeners === undefined) return;
        var listeners = this._listeners;
        var listenerArray = listeners[name];

        if (listenerArray !== undefined) {
          var index = listenerArray.indexOf(listener);

          if (index !== -1) {
            listenerArray.splice(index, 1);
          }
        }
      }
    }, {
      key: "dispatchEvent",
      value: function dispatchEvent(name, data) {
        if (this._listeners === undefined) return;
        var listeners = this._listeners;
        var listenerArray = listeners[name];

        if (listenerArray !== undefined) {
          var array = listenerArray.slice(0);

          for (var i = 0, l = array.length; i < l; i++) {
            array[i].call(this, data);
          }
        }
      }
    }]);

    return EventDispatcher;
  }();

  function debounce(callback, delay, timeout) {
    clearTimeout(timeout);
    timeout = setTimeout(callback, delay);
    return timeout;
  }

  function throttle(callback, delay, lastTime) {
    var now = new Date();

    if (lastTime === undefined) {
      callback();
      return now;
    } else {
      if (now - lastTime >= delay) {
        callback();
        return now;
      } else {
        return lastTime;
      }
    }
  }

  var joystick = {
    deadzone: 0.1,
    threshold: 0,
    inputInactiveDelay: 0.2,
    inputIntervalMax: 0.2,
    inputIntervalMin: 0.1
  };

  function map(value, inMin, inMax, outMin, outMax) {
    return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
  }

  function distance(p1, p2) {
    var a = p1.x - p2.x;
    var b = p1.y - p2.y;
    return Math.sqrt(a * a + b * b);
  }

  var MIN_INPUT_SIGNAL = 0;
  var MAX_INPUT_SIGNAL = 1023;
  function normalizeJoystickSignal(position, threshold) {
    var x = map(position.x, MIN_INPUT_SIGNAL, MAX_INPUT_SIGNAL, -1, 1);
    var y = map(position.y, MIN_INPUT_SIGNAL, MAX_INPUT_SIGNAL, -1, 1) * -1;
    var dist = distance({
      x: x,
      y: y
    }, {
      x: 0,
      y: 0
    });

    if (dist < threshold) {
      x = 0;
      y = 0;
    }

    return {
      x: x,
      y: y
    };
  }

  var Joystick = /*#__PURE__*/function (_EventDispatcher) {
    _inherits(Joystick, _EventDispatcher);

    var _super = _createSuper(Joystick);

    function Joystick() {
      var _this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Joystick);

      _this = _super.call(this); // Props

      _this._id = options.id; // Setup

      _this._deadzone = joystick.deadzone;
      _this._threshold = joystick.threshold;
      _this._inputInactiveDelay = joystick.inputInactiveDelay;
      _this._inputIntervalMin = joystick.inputIntervalMin;
      _this._inputIntervalMax = joystick.inputIntervalMax;
      _this._ipcRenderer = null;
      _this._position = {
        x: 0,
        y: 0
      };
      _this._inputLeftIndex = 0;
      _this._inputRightIndex = 0;
      _this._inputUpIndex = 0;
      _this._inputDownIndex = 0;

      _this._bindAll();

      return _this;
    }
    /**
     * Getters & Setters
     */


    _createClass(Joystick, [{
      key: "id",
      get: function get() {
        return this._id;
      }
    }, {
      key: "ipcRenderer",
      get: function get() {
        return this._ipcRenderer;
      },
      set: function set(ipcRenderer) {
        this._ipcRenderer = ipcRenderer;
      }
    }, {
      key: "position",
      get: function get() {
        return this._position;
      } // Config

    }, {
      key: "deadzone",
      get: function get() {
        return this._deadzone;
      },
      set: function set(deadzone) {
        this._deadzone = deadzone;
      }
    }, {
      key: "threshold",
      get: function get() {
        return this._threshold;
      },
      set: function set(threshold) {
        this._threshold = threshold;
      }
    }, {
      key: "inputIntervalMin",
      get: function get() {
        return this._inputIntervalMin;
      },
      set: function set(inputIntervalMin) {
        this._inputIntervalMin = inputIntervalMin;
      }
    }, {
      key: "inputIntervalMax",
      get: function get() {
        return this._inputIntervalMax;
      },
      set: function set(inputIntervalMax) {
        this._inputIntervalMax = inputIntervalMax;
      }
      /**
       * Public
       */

    }, {
      key: "moveHandler",
      value: function moveHandler(e) {
        this._position.x = normalizeJoystickSignal(e, this._deadzone).x;
        this._position.y = normalizeJoystickSignal(e, this._deadzone).y;
        this.dispatchEvent('joystick:move', {
          id: this._id,
          position: this._position
        }); // Left

        if (this._position.x <= -1 + this._threshold) {
          this._moveLeftHandler();
        } // Right


        if (this._position.x >= 1 - this._threshold) {
          this._moveRightHandler();
        } // Up


        if (this._position.y >= 1 - this._threshold) {
          this._moveUpHandler();
        } // Down


        if (this._position.y <= -1 + this._threshold) {
          this._moveDownHandler();
        } // Mouse move


        if (this._ipcRenderer && this._id === 1) this._ipcRenderer.send('mouse:move', this._position);
      }
      /**
       * Private
       */

    }, {
      key: "_bindAll",
      value: function _bindAll() {
        this._moveLeftHandler = this._moveLeftHandler.bind(this);
        this._moveLeftThrottledHandler = this._moveLeftThrottledHandler.bind(this);
        this._moveLeftEndHandler = this._moveLeftEndHandler.bind(this);
        this._moveRightHandler = this._moveRightHandler.bind(this);
        this._moveRightThrottledHandler = this._moveRightThrottledHandler.bind(this);
        this._moveRightEndHandler = this._moveRightEndHandler.bind(this);
        this._moveUpHandler = this._moveUpHandler.bind(this);
        this._moveUpThrottledHandler = this._moveUpThrottledHandler.bind(this);
        this._moveUpEndHandler = this._moveUpEndHandler.bind(this);
        this._moveDownHandler = this._moveDownHandler.bind(this);
        this._moveDownThrottledHandler = this._moveDownThrottledHandler.bind(this);
        this._moveDownEndHandler = this._moveDownEndHandler.bind(this);
      }
    }, {
      key: "_moveLeftHandler",
      value: function _moveLeftHandler() {
        var inputInterval = this._inputLeftIndex > 1 ? this._inputIntervalMin : this._inputIntervalMax;
        this._throttleMoveLeft = throttle(this._moveLeftThrottledHandler, inputInterval * 1000, this._throttleMoveLeft);
        this._debounceMoveLeft = debounce(this._moveLeftEndHandler, this._inputInactiveDelay * 1000, this._debounceMoveLeft);
      }
    }, {
      key: "_moveLeftThrottledHandler",
      value: function _moveLeftThrottledHandler() {
        this._inputLeftIndex++;
        this.dispatchEvent('joystick:quickmove', {
          direction: 'left',
          position: this._position
        });
      }
    }, {
      key: "_moveLeftEndHandler",
      value: function _moveLeftEndHandler() {
        this._inputLeftIndex = 0;
      }
    }, {
      key: "_moveRightHandler",
      value: function _moveRightHandler() {
        var inputInterval = this._inputRightIndex > 1 ? this._inputIntervalMin : this._inputIntervalMax;
        this._throttleMoveRight = throttle(this._moveRightThrottledHandler, inputInterval * 1000, this._throttleMoveRight);
        this._debounceMoveRight = debounce(this._moveRightEndHandler, this._inputInactiveDelay * 1000, this._debounceMoveRight);
      }
    }, {
      key: "_moveRightThrottledHandler",
      value: function _moveRightThrottledHandler() {
        this._inputRightIndex++;
        this.dispatchEvent('joystick:quickmove', {
          direction: 'right',
          position: this._position
        });
      }
    }, {
      key: "_moveRightEndHandler",
      value: function _moveRightEndHandler() {
        this._inputRightIndex = 0;
      }
    }, {
      key: "_moveUpHandler",
      value: function _moveUpHandler() {
        var inputInterval = this._inputUpIndex > 1 ? this._inputIntervalMin : this._inputIntervalMax;
        this._throttleMoveUp = throttle(this._moveUpThrottledHandler, inputInterval * 1000, this._throttleMoveUp);
        this._debounceMoveUp = debounce(this._moveUpEndHandler, this._inputInactiveDelay * 1000, this._debounceMoveUp);
      }
    }, {
      key: "_moveUpThrottledHandler",
      value: function _moveUpThrottledHandler() {
        this._inputUpIndex++;
        this.dispatchEvent('joystick:quickmove', {
          direction: 'up',
          position: this._position
        });
      }
    }, {
      key: "_moveUpEndHandler",
      value: function _moveUpEndHandler() {
        this._inputUpIndex = 0;
      }
    }, {
      key: "_moveDownHandler",
      value: function _moveDownHandler() {
        var inputInterval = this._inputDownIndex > 1 ? this._inputIntervalMin : this._inputIntervalMax;
        this._throttleMoveDown = throttle(this._moveDownThrottledHandler, inputInterval * 1000, this._throttleMoveDown);
        this._debounceMoveDown = debounce(this._moveDownEndHandler, this._inputInactiveDelay * 1000, this._debounceMoveDown);
      }
    }, {
      key: "_moveDownThrottledHandler",
      value: function _moveDownThrottledHandler() {
        this._inputDownIndex++;
        this.dispatchEvent('joystick:quickmove', {
          direction: 'down',
          position: this._position
        });
      }
    }, {
      key: "_moveDownEndHandler",
      value: function _moveDownEndHandler() {
        this._inputDownIndex = 0;
      }
    }]);

    return Joystick;
  }(EventDispatcher);

  var joystickManager = /*#__PURE__*/function (_EventDispatcher) {
    _inherits(joystickManager, _EventDispatcher);

    var _super = _createSuper(joystickManager);

    function joystickManager() {
      var _this;

      _classCallCheck(this, joystickManager);

      _this = _super.call(this); // Setup

      _this._joystick1 = _this._createJoystick1();
      _this._joystick2 = _this._createJoystick2();
      _this._ipcRenderer = null;

      _this._bindAll();

      _this._setupIpcRendererEventListeners();

      return _this;
    }
    /**
     * Getters & Setters
     */


    _createClass(joystickManager, [{
      key: "ipcRenderer",
      get: function get() {
        return this._ipcRenderer;
      },
      set: function set(ipcRenderer) {
        this._ipcRenderer = ipcRenderer;
        this._joystick1.ipcRenderer = ipcRenderer;
        this._joystick2.ipcRenderer = ipcRenderer;

        this._setupIpcRendererEventListeners();
      }
    }, {
      key: "joystick1",
      get: function get() {
        return this._joystick1;
      }
    }, {
      key: "joystick2",
      get: function get() {
        return this._joystick2;
      }
      /**
       * Public
       */

    }, {
      key: "destroy",
      value: function destroy() {
        this._removeIpcRendererEventListeners();
      }
      /**
       * Private
       */

    }, {
      key: "_createJoystick1",
      value: function _createJoystick1() {
        var joystick1 = new Joystick({
          id: 1
        });
        return joystick1;
      }
    }, {
      key: "_createJoystick2",
      value: function _createJoystick2() {
        var joystick2 = new Joystick({
          id: 2
        });
        return joystick2;
      }
    }, {
      key: "_bindAll",
      value: function _bindAll() {
        // Event handlers
        this._joystickMoveHandler = this._joystickMoveHandler.bind(this);
      }
    }, {
      key: "_setupIpcRendererEventListeners",
      value: function _setupIpcRendererEventListeners() {
        if (!this._ipcRenderer) return;

        this._ipcRenderer.on('joystick:move', this._joystickMoveHandler);
      }
    }, {
      key: "_removeIpcRendererEventListeners",
      value: function _removeIpcRendererEventListeners() {
        if (!this._ipcRenderer) return;

        this._ipcRenderer.removeListener('joystick:move', this._joystickMoveHandler);
      }
      /**
       * Handlers
       */

    }, {
      key: "_joystickMoveHandler",
      value: function _joystickMoveHandler(event, data) {
        if (data.id === 1) this._joystick1.moveHandler(data.position);
        if (data.id === 2) this._joystick2.moveHandler(data.position);
        this.dispatchEvent('joystick:move', data);
      }
    }]);

    return joystickManager;
  }(EventDispatcher);

  var Button = /*#__PURE__*/function (_EventDispatcher) {
    _inherits(Button, _EventDispatcher);

    var _super = _createSuper(Button);

    function Button() {
      var _this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Button);

      _this = _super.call(this);
      _this._id = options.id;
      _this._key = options.key;
      _this._keyboardKeys = [];
      return _this;
    }
    /**
     * Getters & Setters
     */


    _createClass(Button, [{
      key: "id",
      get: function get() {
        return this._id;
      }
    }, {
      key: "key",
      get: function get() {
        return this._key;
      }
    }, {
      key: "keyboardKeys",
      get: function get() {
        return this._keyboardKeys;
      },
      set: function set(keys) {
        this._keyboardKeys = keys;
      }
      /**
       * Public
       */

    }, {
      key: "keydownHandler",
      value: function keydownHandler(e) {
        this.dispatchEvent('keydown', {
          key: this._key,
          id: this._id,
          instance: this,
          originalEvent: e
        });
      }
    }, {
      key: "keyupHandler",
      value: function keyupHandler(e) {
        this.dispatchEvent('keyup', {
          key: this._key,
          id: this._id,
          instance: this,
          originalEvent: e
        });
      }
      /**
       * Private
       */

    }]);

    return Button;
  }(EventDispatcher);

  var buttons = [// 1
  {
    key: 'a',
    id: 1
  }, {
    key: 'b',
    id: 1
  }, {
    key: 'c',
    id: 1
  }, {
    key: 'd',
    id: 1
  }, {
    key: 'e',
    id: 1
  }, // 2
  {
    key: 'a',
    id: 2
  }, {
    key: 'b',
    id: 2
  }, {
    key: 'c',
    id: 2
  }, {
    key: 'd',
    id: 2
  }, {
    key: 'e',
    id: 2
  }];

  var config = {
    buttons: buttons,
    joystick: joystick
  };

  function getArray(value) {
    if (Array.isArray(value)) return value;else return [value];
  }

  var ButtonManager = /*#__PURE__*/function (_EventDispatcher) {
    _inherits(ButtonManager, _EventDispatcher);

    var _super = _createSuper(ButtonManager);

    function ButtonManager() {
      var _this;

      _classCallCheck(this, ButtonManager);

      _this = _super.call(this); // Setup

      _this._buttons = _this._createButtons();
      _this._ipcRenderer = null;

      _this._bindAll();

      _this._setupEventListeners();

      return _this;
    }
    /**
     * Getters & Setters
     */


    _createClass(ButtonManager, [{
      key: "ipcRenderer",
      get: function get() {
        return this._ipcRenderer;
      },
      set: function set(ipcRenderer) {
        this._ipcRenderer = ipcRenderer;

        this._setupIpcRendererEventListeners();
      }
      /**
       * Public
       */

    }, {
      key: "destroy",
      value: function destroy() {
        this._removeEventListeners();

        this._removeIpcRendererEventListeners();
      }
    }, {
      key: "registerKeys",
      value: function registerKeys(keyboardKeys, key, id) {
        var button = this.getButton(key, id);
        if (button) button.keyboardKeys = getArray(keyboardKeys);
        return button;
      }
    }, {
      key: "getButton",
      value: function getButton(key, id) {
        var button = this._buttons.filter(function (item) {
          return item.key === key && item.id === id;
        })[0];

        return button;
      }
    }, {
      key: "getButtonsById",
      value: function getButtonsById(id) {
        var buttons = this._buttons.filter(function (item) {
          return item.id === id;
        });

        return buttons;
      }
    }, {
      key: "getButtonsByKeyboardKey",
      value: function getButtonsByKeyboardKey(keyboardKey) {
        var buttons = this._buttons.filter(function (item) {
          return item.keyboardKeys.includes(keyboardKey);
        });

        return buttons;
      }
      /**
       * Private
       */

    }, {
      key: "_createButtons",
      value: function _createButtons() {
        var buttons = [];

        for (var i = 0; i < config.buttons.length; i++) {
          var button = new Button({
            id: config.buttons[i].id,
            key: config.buttons[i].key
          });
          buttons.push(button);
        }

        return buttons;
      }
    }, {
      key: "_bindAll",
      value: function _bindAll() {
        // Event handlers
        this._keydownHandler = this._keydownHandler.bind(this);
        this._keyupHandler = this._keyupHandler.bind(this);
        this._machineKeydownHandler = this._machineKeydownHandler.bind(this);
        this._machineKeyupHandler = this._machineKeyupHandler.bind(this);
      }
    }, {
      key: "_setupEventListeners",
      value: function _setupEventListeners() {
        window.addEventListener('keydown', this._keydownHandler);
        window.addEventListener('keyup', this._keyupHandler);
      }
    }, {
      key: "_removeEventListeners",
      value: function _removeEventListeners() {
        window.removeEventListener('keydown', this._keydownHandler);
        window.removeEventListener('keyup', this._keyupHandler);
      }
    }, {
      key: "_setupIpcRendererEventListeners",
      value: function _setupIpcRendererEventListeners() {
        if (!this._ipcRenderer) return;

        this._ipcRenderer.on('keydown', this._machineKeydownHandler);

        this._ipcRenderer.on('keyup', this._machineKeyupHandler);
      }
    }, {
      key: "_removeIpcRendererEventListeners",
      value: function _removeIpcRendererEventListeners() {
        if (!this._ipcRenderer) return;

        this._ipcRenderer.removeListener('keydown', this._machineKeydownHandler);

        this._ipcRenderer.removeListener('keyup', this._machineKeyupHandler);
      }
      /**
       * Handlers
       */

    }, {
      key: "_keydownHandler",
      value: function _keydownHandler(e) {
        var buttons = this.getButtonsByKeyboardKey(e.key);

        for (var i = 0; i < buttons.length; i++) {
          var button = buttons[i];
          button.keydownHandler(e);
          this.dispatchEvent('keydown', {
            key: button.key,
            id: button.id,
            instance: button,
            originalEvent: e
          });
        }
      }
    }, {
      key: "_keyupHandler",
      value: function _keyupHandler(e) {
        var buttons = this.getButtonsByKeyboardKey(e.key);

        for (var i = 0; i < buttons.length; i++) {
          var button = buttons[i];
          buttons[i].keyupHandler(e);
          this.dispatchEvent('keyup', {
            key: button.key,
            id: button.id,
            instance: button,
            originalEvent: e
          });
        }
      }
    }, {
      key: "_machineKeydownHandler",
      value: function _machineKeydownHandler(event, data) {
        var button = this.getButton(data.key, data.id);
        button.keydownHandler(data);
        this.dispatchEvent('keydown', {
          key: button.key,
          id: button.id,
          instance: button,
          originalEvent: data
        });
      }
    }, {
      key: "_machineKeyupHandler",
      value: function _machineKeyupHandler(event, data) {
        var button = this.getButton(data.key, data.id);
        button.keyupHandler(data);
        this.dispatchEvent('keyup', {
          key: button.key,
          id: button.id,
          instance: button,
          originalEvent: data
        }); // Mouse click

        if (this._ipcRenderer && button.id === 1 && button.key === 'a') this._ipcRenderer.send('mouse:click', {});
      }
    }]);

    return ButtonManager;
  }(EventDispatcher);

  var Player = /*#__PURE__*/function (_EventDispatcher) {
    _inherits(Player, _EventDispatcher);

    var _super = _createSuper(Player);

    function Player() {
      var _this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Player);

      _this = _super.call(this); // Props

      _this._id = options.id;
      _this._joystick = options.joystick;
      _this._buttons = options.buttons; // Setup

      _this._bindAll();

      _this._setupEventListeners();

      return _this;
    }
    /**
     * Getters & Setters
     */


    _createClass(Player, [{
      key: "id",
      get: function get() {
        return this._id;
      }
    }, {
      key: "joystick",
      get: function get() {
        return this._joystick;
      },
      set: function set(joystick) {
        this._joystick = joystick;
      }
    }, {
      key: "buttons",
      get: function get() {
        return this._buttons;
      },
      set: function set(buttons) {
        this._removeEventListeners();

        this._buttons = buttons;

        this._setupEventListeners();
      }
      /**
       * Public
       */

    }, {
      key: "destroy",
      value: function destroy() {
        this._removeEventListeners();
      }
      /**
       * Private
       */

    }, {
      key: "_bindAll",
      value: function _bindAll() {
        this._keydownHandler = this._keydownHandler.bind(this);
        this._keyupHandler = this._keyupHandler.bind(this);
        this._joystickMoveHandler = this._joystickMoveHandler.bind(this);
        this._joystickQuickmoveHandler = this._joystickQuickmoveHandler.bind(this);
      }
    }, {
      key: "_setupEventListeners",
      value: function _setupEventListeners() {
        this._joystick.addEventListener('joystick:move', this._joystickMoveHandler);

        this._joystick.addEventListener('joystick:quickmove', this._joystickQuickmoveHandler);

        for (var i = 0; i < this._buttons.length; i++) {
          this._buttons[i].addEventListener('keydown', this._keydownHandler);

          this._buttons[i].addEventListener('keyup', this._keyupHandler);
        }
      }
    }, {
      key: "_removeEventListeners",
      value: function _removeEventListeners() {
        this._joystick.removeEventListener('joystick:move', this._joystickMoveHandler);

        this._joystick.removeEventListener('joystick:quickmove', this._joystickQuickmoveHandler);

        for (var i = 0; i < this._buttons.length; i++) {
          this._buttons[i].removeEventListener('keydown', this._keydownHandler);

          this._buttons[i].removeEventListener('keyup', this._keyupHandler);
        }
      }
    }, {
      key: "_keydownHandler",
      value: function _keydownHandler(e) {
        this.dispatchEvent('keydown', e);
      }
    }, {
      key: "_keyupHandler",
      value: function _keyupHandler(e) {
        this.dispatchEvent('keyup', e);
      }
    }, {
      key: "_joystickMoveHandler",
      value: function _joystickMoveHandler(e) {
        this.dispatchEvent('joystick:move', e);
      }
    }, {
      key: "_joystickQuickmoveHandler",
      value: function _joystickQuickmoveHandler(e) {
        this.dispatchEvent('joystick:quickmove', e);
      }
    }]);

    return Player;
  }(EventDispatcher);

  var PlayerManager = /*#__PURE__*/function () {
    function PlayerManager() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, PlayerManager);

      // Props
      this._joystickManager = options.joystickManager;
      this._buttonManager = options.buttonManager; // Setup

      this._players = [];
    }
    /**
     * Getters
     */


    _createClass(PlayerManager, [{
      key: "players",
      get: function get() {
        return this._players;
      }
      /**
       * Public
       */

    }, {
      key: "destroy",
      value: function destroy() {
        for (var i = 0; i < this._players.length; i++) {
          this._players[i].destroy();
        }
      }
    }, {
      key: "createPlayer",
      value: function createPlayer() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var player = new Player({
          id: options.id,
          joystick: options.joystick,
          buttons: options.buttons
        });

        this._players.push(player);

        return player;
      }
    }, {
      key: "destroyPlayer",
      value: function destroyPlayer(player) {
        var index = this._players.indexOf(player);

        player.destroy();

        this._players.splice(index, 1);
      }
    }, {
      key: "getPlayerById",
      value: function getPlayerById(id) {
        var player = this._players.filter(function (item) {
          return item.id === id;
        })[0];

        return player;
      }
    }]);

    return PlayerManager;
  }();

  function frameTimeout(callback, frames) {
    var frame = 0;
    var requestID = null;

    function loop() {
      frame++;

      if (frame >= frames) {
        callback();
      } else {
        requestID = requestAnimationFrame(loop);
      }
    }

    requestID = requestAnimationFrame(loop);
    return {
      cancel: function cancel() {
        cancelAnimationFrame(requestID);
      }
    };
  }

  var Leaderboard = /*#__PURE__*/function () {
    function Leaderboard() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Leaderboard);

      // Props
      this._id = options.id;
      this._ipcRenderer = options.ipcRenderer; // Setup

      this._hasCheckedForIpcRenderer = false;
      this._isAxisMachine = true;
    }
    /**
     * Getters
     */


    _createClass(Leaderboard, [{
      key: "id",
      get: function get() {
        return this._id;
      }
    }, {
      key: "ipcRenderer",
      get: function get() {
        return this._ipcRenderer;
      },
      set: function set(ipcRenderer) {
        this._ipcRenderer = ipcRenderer;
      }
      /**
       * Public
       */

    }, {
      key: "postScore",
      value: function postScore(score) {
        var _this = this;

        if (this._hasCheckedForIpcRenderer) {
          return this._postScore(score);
        } else {
          return new Promise(function (resolve, reject) {
            _this._checkForIpcRenderer().then(function () {
              _this._postScore(score).then(resolve, reject);

              _this._hasCheckedForIpcRenderer = true;
            });
          });
        }
      }
    }, {
      key: "getScores",
      value: function getScores() {
        var _this2 = this;

        if (this._hasCheckedForIpcRenderer) {
          return this._getScores();
        } else {
          return new Promise(function (resolve, reject) {
            _this2._checkForIpcRenderer().then(function () {
              _this2._getScores().then(resolve, reject);

              _this2._hasCheckedForIpcRenderer = true;
            });
          });
        }
      }
      /**
       * Private
       */

    }, {
      key: "_postScore",
      value: function _postScore(score) {
        var _this3 = this;

        var isValid = this._isValidScore(score);

        var promise = new Promise(function (resolve, reject) {
          if (!isValid) {
            reject(Error('Leaderboard: Score is not valid'));
          } else {
            if (!_this3._ipcRenderer) {
              var scores = _this3._getLocalStorageScores(_this3._id) || [];
              scores.push(score);

              _this3._setLocalStorageScores(_this3._id, scores);

              resolve();
            } else {
              _this3._postScoreToDatabase(score).then(resolve, reject);
            }
          }
        });
        return promise;
      }
    }, {
      key: "_getScores",
      value: function _getScores() {
        var _this4 = this;

        var promise = new Promise(function (resolve, reject) {
          if (!_this4._ipcRenderer) {
            var scores = _this4._getLocalStorageScores(_this4._id) || [];
            resolve(scores);
          } else {
            _this4._getScoresFromDatabase().then(resolve, reject);
          }
        });
        return promise;
      }
      /**
       * Using IPC Renderer
       */

    }, {
      key: "_getScoresFromDatabase",
      value: function _getScoresFromDatabase() {
        var _this5 = this;

        var promise = new Promise(function (resolve) {
          _this5._ipcRenderer.send('leaderboard:get', {
            id: _this5._id
          });

          _this5._ipcRenderer.once('leaderboard:get:completed', function (event, response) {
            resolve(response);
          });
        });
        return promise;
      }
    }, {
      key: "_postScoreToDatabase",
      value: function _postScoreToDatabase(score) {
        var _this6 = this;

        var promise = new Promise(function (resolve) {
          _this6._ipcRenderer.send('leaderboard:post', {
            id: _this6._id,
            score: score
          });

          _this6._ipcRenderer.once('leaderboard:post:completed', function (event, response) {
            resolve(response);
          });
        });
        return promise;
      }
      /**
       * Utils
       */

    }, {
      key: "_isValidScore",
      value: function _isValidScore(score) {
        // A valid score object should at least have a value key and username key
        var hasValue = !isNaN(score.value);
        var hasUsername = score.username !== undefined && score.username !== null;
        if (!hasValue) console.error('Leaderboard: make sure you have a valid value key');
        if (!hasUsername) console.error('Leaderboard: make sure you have a valid username key');
        return hasValue && hasUsername;
      }
    }, {
      key: "_getLocalStorageScores",
      value: function _getLocalStorageScores(id) {
        var scores = localStorage.getItem(id);
        if (scores) return JSON.parse(scores);
      }
    }, {
      key: "_setLocalStorageScores",
      value: function _setLocalStorageScores(id, scores) {
        return localStorage.setItem(id, JSON.stringify(scores));
      }
    }, {
      key: "_checkForIpcRenderer",
      value: function _checkForIpcRenderer() {
        // If the project is running on the axis machine,
        // ipcRenderer will be set after one frame
        var promise = new Promise(function (resolve) {
          frameTimeout(function () {
            resolve();
          }, 1);
        });
        return promise;
      }
    }]);

    return Leaderboard;
  }();

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var build$1 = {exports: {}};

  /*!
   * 
   *   simple-keyboard v3.4.100
   *   https://github.com/hodgef/simple-keyboard
   *
   *   Copyright (c) Francisco Hodge (https://github.com/hodgef) and project contributors.
   *
   *   This source code is licensed under the MIT license found in the
   *   LICENSE file in the root directory of this source tree.
   *
   */

  (function (module, exports) {
  !function (t, e) {
    module.exports = e() ;
  }(commonjsGlobal, function () {
    return function () {
      var t = {
        9662: function (t, e, n) {
          var o = n(7854),
              r = n(614),
              i = n(6330),
              a = o.TypeError;

          t.exports = function (t) {
            if (r(t)) return t;
            throw a(i(t) + " is not a function");
          };
        },
        9483: function (t, e, n) {
          var o = n(7854),
              r = n(4411),
              i = n(6330),
              a = o.TypeError;

          t.exports = function (t) {
            if (r(t)) return t;
            throw a(i(t) + " is not a constructor");
          };
        },
        6077: function (t, e, n) {
          var o = n(7854),
              r = n(614),
              i = o.String,
              a = o.TypeError;

          t.exports = function (t) {
            if ("object" == typeof t || r(t)) return t;
            throw a("Can't set " + i(t) + " as a prototype");
          };
        },
        1223: function (t, e, n) {
          var o = n(5112),
              r = n(30),
              i = n(3070),
              a = o("unscopables"),
              s = Array.prototype;
          null == s[a] && i.f(s, a, {
            configurable: !0,
            value: r(null)
          }), t.exports = function (t) {
            s[a][t] = !0;
          };
        },
        1530: function (t, e, n) {

          var o = n(8710).charAt;

          t.exports = function (t, e, n) {
            return e + (n ? o(t, e).length : 1);
          };
        },
        9670: function (t, e, n) {
          var o = n(7854),
              r = n(111),
              i = o.String,
              a = o.TypeError;

          t.exports = function (t) {
            if (r(t)) return t;
            throw a(i(t) + " is not an object");
          };
        },
        8533: function (t, e, n) {

          var o = n(2092).forEach,
              r = n(9341)("forEach");
          t.exports = r ? [].forEach : function (t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
          };
        },
        8457: function (t, e, n) {

          var o = n(7854),
              r = n(9974),
              i = n(6916),
              a = n(7908),
              s = n(3411),
              u = n(7659),
              c = n(4411),
              l = n(6244),
              f = n(6135),
              d = n(8554),
              p = n(1246),
              h = o.Array;

          t.exports = function (t) {
            var e = a(t),
                n = c(this),
                o = arguments.length,
                v = o > 1 ? arguments[1] : void 0,
                g = void 0 !== v;
            g && (v = r(v, o > 2 ? arguments[2] : void 0));
            var y,
                m,
                b,
                x,
                w,
                E,
                O = p(e),
                S = 0;
            if (!O || this == h && u(O)) for (y = l(e), m = n ? new this(y) : h(y); y > S; S++) E = g ? v(e[S], S) : e[S], f(m, S, E);else for (w = (x = d(e, O)).next, m = n ? new this() : []; !(b = i(w, x)).done; S++) E = g ? s(x, v, [b.value, S], !0) : b.value, f(m, S, E);
            return m.length = S, m;
          };
        },
        1318: function (t, e, n) {
          var o = n(5656),
              r = n(1400),
              i = n(6244),
              a = function (t) {
            return function (e, n, a) {
              var s,
                  u = o(e),
                  c = i(u),
                  l = r(a, c);

              if (t && n != n) {
                for (; c > l;) if ((s = u[l++]) != s) return !0;
              } else for (; c > l; l++) if ((t || l in u) && u[l] === n) return t || l || 0;

              return !t && -1;
            };
          };

          t.exports = {
            includes: a(!0),
            indexOf: a(!1)
          };
        },
        2092: function (t, e, n) {
          var o = n(9974),
              r = n(1702),
              i = n(8361),
              a = n(7908),
              s = n(6244),
              u = n(5417),
              c = r([].push),
              l = function (t) {
            var e = 1 == t,
                n = 2 == t,
                r = 3 == t,
                l = 4 == t,
                f = 6 == t,
                d = 7 == t,
                p = 5 == t || f;
            return function (h, v, g, y) {
              for (var m, b, x = a(h), w = i(x), E = o(v, g), O = s(w), S = 0, k = y || u, I = e ? k(h, O) : n || d ? k(h, 0) : void 0; O > S; S++) if ((p || S in w) && (b = E(m = w[S], S, x), t)) if (e) I[S] = b;else if (b) switch (t) {
                case 3:
                  return !0;

                case 5:
                  return m;

                case 6:
                  return S;

                case 2:
                  c(I, m);
              } else switch (t) {
                case 4:
                  return !1;

                case 7:
                  c(I, m);
              }

              return f ? -1 : r || l ? l : I;
            };
          };

          t.exports = {
            forEach: l(0),
            map: l(1),
            filter: l(2),
            some: l(3),
            every: l(4),
            find: l(5),
            findIndex: l(6),
            filterReject: l(7)
          };
        },
        1194: function (t, e, n) {
          var o = n(7293),
              r = n(5112),
              i = n(7392),
              a = r("species");

          t.exports = function (t) {
            return i >= 51 || !o(function () {
              var e = [];
              return (e.constructor = {})[a] = function () {
                return {
                  foo: 1
                };
              }, 1 !== e[t](Boolean).foo;
            });
          };
        },
        9341: function (t, e, n) {

          var o = n(7293);

          t.exports = function (t, e) {
            var n = [][t];
            return !!n && o(function () {
              n.call(null, e || function () {
                return 1;
              }, 1);
            });
          };
        },
        3671: function (t, e, n) {
          var o = n(7854),
              r = n(9662),
              i = n(7908),
              a = n(8361),
              s = n(6244),
              u = o.TypeError,
              c = function (t) {
            return function (e, n, o, c) {
              r(n);
              var l = i(e),
                  f = a(l),
                  d = s(l),
                  p = t ? d - 1 : 0,
                  h = t ? -1 : 1;
              if (o < 2) for (;;) {
                if (p in f) {
                  c = f[p], p += h;
                  break;
                }

                if (p += h, t ? p < 0 : d <= p) throw u("Reduce of empty array with no initial value");
              }

              for (; t ? p >= 0 : d > p; p += h) p in f && (c = n(c, f[p], p, l));

              return c;
            };
          };

          t.exports = {
            left: c(!1),
            right: c(!0)
          };
        },
        1589: function (t, e, n) {
          var o = n(7854),
              r = n(1400),
              i = n(6244),
              a = n(6135),
              s = o.Array,
              u = Math.max;

          t.exports = function (t, e, n) {
            for (var o = i(t), c = r(e, o), l = r(void 0 === n ? o : n, o), f = s(u(l - c, 0)), d = 0; c < l; c++, d++) a(f, d, t[c]);

            return f.length = d, f;
          };
        },
        206: function (t, e, n) {
          var o = n(1702);
          t.exports = o([].slice);
        },
        4362: function (t, e, n) {
          var o = n(1589),
              r = Math.floor,
              i = function (t, e) {
            var n = t.length,
                u = r(n / 2);
            return n < 8 ? a(t, e) : s(t, i(o(t, 0, u), e), i(o(t, u), e), e);
          },
              a = function (t, e) {
            for (var n, o, r = t.length, i = 1; i < r;) {
              for (o = i, n = t[i]; o && e(t[o - 1], n) > 0;) t[o] = t[--o];

              o !== i++ && (t[o] = n);
            }

            return t;
          },
              s = function (t, e, n, o) {
            for (var r = e.length, i = n.length, a = 0, s = 0; a < r || s < i;) t[a + s] = a < r && s < i ? o(e[a], n[s]) <= 0 ? e[a++] : n[s++] : a < r ? e[a++] : n[s++];

            return t;
          };

          t.exports = i;
        },
        7475: function (t, e, n) {
          var o = n(7854),
              r = n(3157),
              i = n(4411),
              a = n(111),
              s = n(5112)("species"),
              u = o.Array;

          t.exports = function (t) {
            var e;
            return r(t) && (e = t.constructor, (i(e) && (e === u || r(e.prototype)) || a(e) && null === (e = e[s])) && (e = void 0)), void 0 === e ? u : e;
          };
        },
        5417: function (t, e, n) {
          var o = n(7475);

          t.exports = function (t, e) {
            return new (o(t))(0 === e ? 0 : e);
          };
        },
        3411: function (t, e, n) {
          var o = n(9670),
              r = n(9212);

          t.exports = function (t, e, n, i) {
            try {
              return i ? e(o(n)[0], n[1]) : e(n);
            } catch (e) {
              r(t, "throw", e);
            }
          };
        },
        7072: function (t, e, n) {
          var o = n(5112)("iterator"),
              r = !1;

          try {
            var i = 0,
                a = {
              next: function () {
                return {
                  done: !!i++
                };
              },
              return: function () {
                r = !0;
              }
            };
            a[o] = function () {
              return this;
            }, Array.from(a, function () {
              throw 2;
            });
          } catch (t) {}

          t.exports = function (t, e) {
            if (!e && !r) return !1;
            var n = !1;

            try {
              var i = {};
              i[o] = function () {
                return {
                  next: function () {
                    return {
                      done: n = !0
                    };
                  }
                };
              }, t(i);
            } catch (t) {}

            return n;
          };
        },
        4326: function (t, e, n) {
          var o = n(1702),
              r = o({}.toString),
              i = o("".slice);

          t.exports = function (t) {
            return i(r(t), 8, -1);
          };
        },
        648: function (t, e, n) {
          var o = n(7854),
              r = n(1694),
              i = n(614),
              a = n(4326),
              s = n(5112)("toStringTag"),
              u = o.Object,
              c = "Arguments" == a(function () {
            return arguments;
          }());
          t.exports = r ? a : function (t) {
            var e, n, o;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
              try {
                return t[e];
              } catch (t) {}
            }(e = u(t), s)) ? n : c ? a(e) : "Object" == (o = a(e)) && i(e.callee) ? "Arguments" : o;
          };
        },
        9920: function (t, e, n) {
          var o = n(2597),
              r = n(3887),
              i = n(1236),
              a = n(3070);

          t.exports = function (t, e, n) {
            for (var s = r(e), u = a.f, c = i.f, l = 0; l < s.length; l++) {
              var f = s[l];
              o(t, f) || n && o(n, f) || u(t, f, c(e, f));
            }
          };
        },
        4964: function (t, e, n) {
          var o = n(5112)("match");

          t.exports = function (t) {
            var e = /./;

            try {
              "/./"[t](e);
            } catch (n) {
              try {
                return e[o] = !1, "/./"[t](e);
              } catch (t) {}
            }

            return !1;
          };
        },
        8544: function (t, e, n) {
          var o = n(7293);
          t.exports = !o(function () {
            function t() {}

            return t.prototype.constructor = null, Object.getPrototypeOf(new t()) !== t.prototype;
          });
        },
        4994: function (t, e, n) {

          var o = n(3383).IteratorPrototype,
              r = n(30),
              i = n(9114),
              a = n(8003),
              s = n(7497),
              u = function () {
            return this;
          };

          t.exports = function (t, e, n, c) {
            var l = e + " Iterator";
            return t.prototype = r(o, {
              next: i(+!c, n)
            }), a(t, l, !1, !0), s[l] = u, t;
          };
        },
        8880: function (t, e, n) {
          var o = n(9781),
              r = n(3070),
              i = n(9114);
          t.exports = o ? function (t, e, n) {
            return r.f(t, e, i(1, n));
          } : function (t, e, n) {
            return t[e] = n, t;
          };
        },
        9114: function (t) {
          t.exports = function (t, e) {
            return {
              enumerable: !(1 & t),
              configurable: !(2 & t),
              writable: !(4 & t),
              value: e
            };
          };
        },
        6135: function (t, e, n) {

          var o = n(4948),
              r = n(3070),
              i = n(9114);

          t.exports = function (t, e, n) {
            var a = o(e);
            a in t ? r.f(t, a, i(0, n)) : t[a] = n;
          };
        },
        8052: function (t, e, n) {
          var o = n(7854),
              r = n(614),
              i = n(8880),
              a = n(6339),
              s = n(3505);

          t.exports = function (t, e, n, u) {
            var c = !!u && !!u.unsafe,
                l = !!u && !!u.enumerable,
                f = !!u && !!u.noTargetGet,
                d = u && void 0 !== u.name ? u.name : e;
            return r(n) && a(n, d, u), t === o ? (l ? t[e] = n : s(e, n), t) : (c ? !f && t[e] && (l = !0) : delete t[e], l ? t[e] = n : i(t, e, n), t);
          };
        },
        654: function (t, e, n) {

          var o = n(2109),
              r = n(6916),
              i = n(1913),
              a = n(6530),
              s = n(614),
              u = n(4994),
              c = n(9518),
              l = n(7674),
              f = n(8003),
              d = n(8880),
              p = n(8052),
              h = n(5112),
              v = n(7497),
              g = n(3383),
              y = a.PROPER,
              m = a.CONFIGURABLE,
              b = g.IteratorPrototype,
              x = g.BUGGY_SAFARI_ITERATORS,
              w = h("iterator"),
              E = "keys",
              O = "values",
              S = "entries",
              k = function () {
            return this;
          };

          t.exports = function (t, e, n, a, h, g, I) {
            u(n, e, a);

            var P,
                C,
                A,
                M = function (t) {
              if (t === h && R) return R;
              if (!x && t in j) return j[t];

              switch (t) {
                case E:
                case O:
                case S:
                  return function () {
                    return new n(this, t);
                  };
              }

              return function () {
                return new n(this);
              };
            },
                T = e + " Iterator",
                D = !1,
                j = t.prototype,
                N = j[w] || j["@@iterator"] || h && j[h],
                R = !x && N || M(h),
                L = "Array" == e && j.entries || N;

            if (L && (P = c(L.call(new t()))) !== Object.prototype && P.next && (i || c(P) === b || (l ? l(P, b) : s(P[w]) || p(P, w, k)), f(P, T, !0, !0), i && (v[T] = k)), y && h == O && N && N.name !== O && (!i && m ? d(j, "name", O) : (D = !0, R = function () {
              return r(N, this);
            })), h) if (C = {
              values: M(O),
              keys: g ? R : M(E),
              entries: M(S)
            }, I) for (A in C) (x || D || !(A in j)) && p(j, A, C[A]);else o({
              target: e,
              proto: !0,
              forced: x || D
            }, C);
            return i && !I || j[w] === R || p(j, w, R, {
              name: h
            }), v[e] = R, C;
          };
        },
        7235: function (t, e, n) {
          var o = n(857),
              r = n(2597),
              i = n(6061),
              a = n(3070).f;

          t.exports = function (t) {
            var e = o.Symbol || (o.Symbol = {});
            r(e, t) || a(e, t, {
              value: i.f(t)
            });
          };
        },
        9781: function (t, e, n) {
          var o = n(7293);
          t.exports = !o(function () {
            return 7 != Object.defineProperty({}, 1, {
              get: function () {
                return 7;
              }
            })[1];
          });
        },
        317: function (t, e, n) {
          var o = n(7854),
              r = n(111),
              i = o.document,
              a = r(i) && r(i.createElement);

          t.exports = function (t) {
            return a ? i.createElement(t) : {};
          };
        },
        8324: function (t) {
          t.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
          };
        },
        8509: function (t, e, n) {
          var o = n(317)("span").classList,
              r = o && o.constructor && o.constructor.prototype;
          t.exports = r === Object.prototype ? void 0 : r;
        },
        8886: function (t, e, n) {
          var o = n(8113).match(/firefox\/(\d+)/i);
          t.exports = !!o && +o[1];
        },
        256: function (t, e, n) {
          var o = n(8113);
          t.exports = /MSIE|Trident/.test(o);
        },
        5268: function (t, e, n) {
          var o = n(4326),
              r = n(7854);
          t.exports = "process" == o(r.process);
        },
        8113: function (t, e, n) {
          var o = n(5005);
          t.exports = o("navigator", "userAgent") || "";
        },
        7392: function (t, e, n) {
          var o,
              r,
              i = n(7854),
              a = n(8113),
              s = i.process,
              u = i.Deno,
              c = s && s.versions || u && u.version,
              l = c && c.v8;
          l && (r = (o = l.split("."))[0] > 0 && o[0] < 4 ? 1 : +(o[0] + o[1])), !r && a && (!(o = a.match(/Edge\/(\d+)/)) || o[1] >= 74) && (o = a.match(/Chrome\/(\d+)/)) && (r = +o[1]), t.exports = r;
        },
        8008: function (t, e, n) {
          var o = n(8113).match(/AppleWebKit\/(\d+)\./);
          t.exports = !!o && +o[1];
        },
        748: function (t) {
          t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
        },
        2109: function (t, e, n) {
          var o = n(7854),
              r = n(1236).f,
              i = n(8880),
              a = n(8052),
              s = n(3505),
              u = n(9920),
              c = n(4705);

          t.exports = function (t, e) {
            var n,
                l,
                f,
                d,
                p,
                h = t.target,
                v = t.global,
                g = t.stat;
            if (n = v ? o : g ? o[h] || s(h, {}) : (o[h] || {}).prototype) for (l in e) {
              if (d = e[l], f = t.noTargetGet ? (p = r(n, l)) && p.value : n[l], !c(v ? l : h + (g ? "." : "#") + l, t.forced) && void 0 !== f) {
                if (typeof d == typeof f) continue;
                u(d, f);
              }

              (t.sham || f && f.sham) && i(d, "sham", !0), a(n, l, d, t);
            }
          };
        },
        7293: function (t) {
          t.exports = function (t) {
            try {
              return !!t();
            } catch (t) {
              return !0;
            }
          };
        },
        7007: function (t, e, n) {

          n(4916);
          var o = n(1702),
              r = n(8052),
              i = n(2261),
              a = n(7293),
              s = n(5112),
              u = n(8880),
              c = s("species"),
              l = RegExp.prototype;

          t.exports = function (t, e, n, f) {
            var d = s(t),
                p = !a(function () {
              var e = {};
              return e[d] = function () {
                return 7;
              }, 7 != ""[t](e);
            }),
                h = p && !a(function () {
              var e = !1,
                  n = /a/;
              return "split" === t && ((n = {}).constructor = {}, n.constructor[c] = function () {
                return n;
              }, n.flags = "", n[d] = /./[d]), n.exec = function () {
                return e = !0, null;
              }, n[d](""), !e;
            });

            if (!p || !h || n) {
              var v = o(/./[d]),
                  g = e(d, ""[t], function (t, e, n, r, a) {
                var s = o(t),
                    u = e.exec;
                return u === i || u === l.exec ? p && !a ? {
                  done: !0,
                  value: v(e, n, r)
                } : {
                  done: !0,
                  value: s(n, e, r)
                } : {
                  done: !1
                };
              });
              r(String.prototype, t, g[0]), r(l, d, g[1]);
            }

            f && u(l[d], "sham", !0);
          };
        },
        2104: function (t, e, n) {
          var o = n(4374),
              r = Function.prototype,
              i = r.apply,
              a = r.call;
          t.exports = "object" == typeof Reflect && Reflect.apply || (o ? a.bind(i) : function () {
            return a.apply(i, arguments);
          });
        },
        9974: function (t, e, n) {
          var o = n(1702),
              r = n(9662),
              i = n(4374),
              a = o(o.bind);

          t.exports = function (t, e) {
            return r(t), void 0 === e ? t : i ? a(t, e) : function () {
              return t.apply(e, arguments);
            };
          };
        },
        4374: function (t, e, n) {
          var o = n(7293);
          t.exports = !o(function () {
            var t = function () {}.bind();

            return "function" != typeof t || t.hasOwnProperty("prototype");
          });
        },
        6916: function (t, e, n) {
          var o = n(4374),
              r = Function.prototype.call;
          t.exports = o ? r.bind(r) : function () {
            return r.apply(r, arguments);
          };
        },
        6530: function (t, e, n) {
          var o = n(9781),
              r = n(2597),
              i = Function.prototype,
              a = o && Object.getOwnPropertyDescriptor,
              s = r(i, "name"),
              u = s && "something" === function () {}.name,
              c = s && (!o || o && a(i, "name").configurable);

          t.exports = {
            EXISTS: s,
            PROPER: u,
            CONFIGURABLE: c
          };
        },
        1702: function (t, e, n) {
          var o = n(4374),
              r = Function.prototype,
              i = r.bind,
              a = r.call,
              s = o && i.bind(a, a);
          t.exports = o ? function (t) {
            return t && s(t);
          } : function (t) {
            return t && function () {
              return a.apply(t, arguments);
            };
          };
        },
        5005: function (t, e, n) {
          var o = n(7854),
              r = n(614),
              i = function (t) {
            return r(t) ? t : void 0;
          };

          t.exports = function (t, e) {
            return arguments.length < 2 ? i(o[t]) : o[t] && o[t][e];
          };
        },
        1246: function (t, e, n) {
          var o = n(648),
              r = n(8173),
              i = n(7497),
              a = n(5112)("iterator");

          t.exports = function (t) {
            if (null != t) return r(t, a) || r(t, "@@iterator") || i[o(t)];
          };
        },
        8554: function (t, e, n) {
          var o = n(7854),
              r = n(6916),
              i = n(9662),
              a = n(9670),
              s = n(6330),
              u = n(1246),
              c = o.TypeError;

          t.exports = function (t, e) {
            var n = arguments.length < 2 ? u(t) : e;
            if (i(n)) return a(r(n, t));
            throw c(s(t) + " is not iterable");
          };
        },
        8173: function (t, e, n) {
          var o = n(9662);

          t.exports = function (t, e) {
            var n = t[e];
            return null == n ? void 0 : o(n);
          };
        },
        647: function (t, e, n) {
          var o = n(1702),
              r = n(7908),
              i = Math.floor,
              a = o("".charAt),
              s = o("".replace),
              u = o("".slice),
              c = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
              l = /\$([$&'`]|\d{1,2})/g;

          t.exports = function (t, e, n, o, f, d) {
            var p = n + t.length,
                h = o.length,
                v = l;
            return void 0 !== f && (f = r(f), v = c), s(d, v, function (r, s) {
              var c;

              switch (a(s, 0)) {
                case "$":
                  return "$";

                case "&":
                  return t;

                case "`":
                  return u(e, 0, n);

                case "'":
                  return u(e, p);

                case "<":
                  c = f[u(s, 1, -1)];
                  break;

                default:
                  var l = +s;
                  if (0 === l) return r;

                  if (l > h) {
                    var d = i(l / 10);
                    return 0 === d ? r : d <= h ? void 0 === o[d - 1] ? a(s, 1) : o[d - 1] + a(s, 1) : r;
                  }

                  c = o[l - 1];
              }

              return void 0 === c ? "" : c;
            });
          };
        },
        7854: function (t, e, n) {
          var o = function (t) {
            return t && t.Math == Math && t;
          };

          t.exports = o("object" == typeof globalThis && globalThis) || o("object" == typeof window && window) || o("object" == typeof self && self) || o("object" == typeof n.g && n.g) || function () {
            return this;
          }() || Function("return this")();
        },
        2597: function (t, e, n) {
          var o = n(1702),
              r = n(7908),
              i = o({}.hasOwnProperty);

          t.exports = Object.hasOwn || function (t, e) {
            return i(r(t), e);
          };
        },
        3501: function (t) {
          t.exports = {};
        },
        490: function (t, e, n) {
          var o = n(5005);
          t.exports = o("document", "documentElement");
        },
        4664: function (t, e, n) {
          var o = n(9781),
              r = n(7293),
              i = n(317);
          t.exports = !o && !r(function () {
            return 7 != Object.defineProperty(i("div"), "a", {
              get: function () {
                return 7;
              }
            }).a;
          });
        },
        8361: function (t, e, n) {
          var o = n(7854),
              r = n(1702),
              i = n(7293),
              a = n(4326),
              s = o.Object,
              u = r("".split);
          t.exports = i(function () {
            return !s("z").propertyIsEnumerable(0);
          }) ? function (t) {
            return "String" == a(t) ? u(t, "") : s(t);
          } : s;
        },
        9587: function (t, e, n) {
          var o = n(614),
              r = n(111),
              i = n(7674);

          t.exports = function (t, e, n) {
            var a, s;
            return i && o(a = e.constructor) && a !== n && r(s = a.prototype) && s !== n.prototype && i(t, s), t;
          };
        },
        2788: function (t, e, n) {
          var o = n(1702),
              r = n(614),
              i = n(5465),
              a = o(Function.toString);
          r(i.inspectSource) || (i.inspectSource = function (t) {
            return a(t);
          }), t.exports = i.inspectSource;
        },
        9909: function (t, e, n) {
          var o,
              r,
              i,
              a = n(8536),
              s = n(7854),
              u = n(1702),
              c = n(111),
              l = n(8880),
              f = n(2597),
              d = n(5465),
              p = n(6200),
              h = n(3501),
              v = "Object already initialized",
              g = s.TypeError,
              y = s.WeakMap;

          if (a || d.state) {
            var m = d.state || (d.state = new y()),
                b = u(m.get),
                x = u(m.has),
                w = u(m.set);
            o = function (t, e) {
              if (x(m, t)) throw new g(v);
              return e.facade = t, w(m, t, e), e;
            }, r = function (t) {
              return b(m, t) || {};
            }, i = function (t) {
              return x(m, t);
            };
          } else {
            var E = p("state");
            h[E] = !0, o = function (t, e) {
              if (f(t, E)) throw new g(v);
              return e.facade = t, l(t, E, e), e;
            }, r = function (t) {
              return f(t, E) ? t[E] : {};
            }, i = function (t) {
              return f(t, E);
            };
          }

          t.exports = {
            set: o,
            get: r,
            has: i,
            enforce: function (t) {
              return i(t) ? r(t) : o(t, {});
            },
            getterFor: function (t) {
              return function (e) {
                var n;
                if (!c(e) || (n = r(e)).type !== t) throw g("Incompatible receiver, " + t + " required");
                return n;
              };
            }
          };
        },
        7659: function (t, e, n) {
          var o = n(5112),
              r = n(7497),
              i = o("iterator"),
              a = Array.prototype;

          t.exports = function (t) {
            return void 0 !== t && (r.Array === t || a[i] === t);
          };
        },
        3157: function (t, e, n) {
          var o = n(4326);

          t.exports = Array.isArray || function (t) {
            return "Array" == o(t);
          };
        },
        614: function (t) {
          t.exports = function (t) {
            return "function" == typeof t;
          };
        },
        4411: function (t, e, n) {
          var o = n(1702),
              r = n(7293),
              i = n(614),
              a = n(648),
              s = n(5005),
              u = n(2788),
              c = function () {},
              l = [],
              f = s("Reflect", "construct"),
              d = /^\s*(?:class|function)\b/,
              p = o(d.exec),
              h = !d.exec(c),
              v = function (t) {
            if (!i(t)) return !1;

            try {
              return f(c, l, t), !0;
            } catch (t) {
              return !1;
            }
          },
              g = function (t) {
            if (!i(t)) return !1;

            switch (a(t)) {
              case "AsyncFunction":
              case "GeneratorFunction":
              case "AsyncGeneratorFunction":
                return !1;
            }

            try {
              return h || !!p(d, u(t));
            } catch (t) {
              return !0;
            }
          };

          g.sham = !0, t.exports = !f || r(function () {
            var t;
            return v(v.call) || !v(Object) || !v(function () {
              t = !0;
            }) || t;
          }) ? g : v;
        },
        4705: function (t, e, n) {
          var o = n(7293),
              r = n(614),
              i = /#|\.prototype\./,
              a = function (t, e) {
            var n = u[s(t)];
            return n == l || n != c && (r(e) ? o(e) : !!e);
          },
              s = a.normalize = function (t) {
            return String(t).replace(i, ".").toLowerCase();
          },
              u = a.data = {},
              c = a.NATIVE = "N",
              l = a.POLYFILL = "P";

          t.exports = a;
        },
        5988: function (t, e, n) {
          var o = n(111),
              r = Math.floor;

          t.exports = Number.isInteger || function (t) {
            return !o(t) && isFinite(t) && r(t) === t;
          };
        },
        111: function (t, e, n) {
          var o = n(614);

          t.exports = function (t) {
            return "object" == typeof t ? null !== t : o(t);
          };
        },
        1913: function (t) {
          t.exports = !1;
        },
        7850: function (t, e, n) {
          var o = n(111),
              r = n(4326),
              i = n(5112)("match");

          t.exports = function (t) {
            var e;
            return o(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == r(t));
          };
        },
        2190: function (t, e, n) {
          var o = n(7854),
              r = n(5005),
              i = n(614),
              a = n(7976),
              s = n(3307),
              u = o.Object;
          t.exports = s ? function (t) {
            return "symbol" == typeof t;
          } : function (t) {
            var e = r("Symbol");
            return i(e) && a(e.prototype, u(t));
          };
        },
        9212: function (t, e, n) {
          var o = n(6916),
              r = n(9670),
              i = n(8173);

          t.exports = function (t, e, n) {
            var a, s;
            r(t);

            try {
              if (!(a = i(t, "return"))) {
                if ("throw" === e) throw n;
                return n;
              }

              a = o(a, t);
            } catch (t) {
              s = !0, a = t;
            }

            if ("throw" === e) throw n;
            if (s) throw a;
            return r(a), n;
          };
        },
        3383: function (t, e, n) {

          var o,
              r,
              i,
              a = n(7293),
              s = n(614),
              u = n(30),
              c = n(9518),
              l = n(8052),
              f = n(5112),
              d = n(1913),
              p = f("iterator"),
              h = !1;
          [].keys && ("next" in (i = [].keys()) ? (r = c(c(i))) !== Object.prototype && (o = r) : h = !0), null == o || a(function () {
            var t = {};
            return o[p].call(t) !== t;
          }) ? o = {} : d && (o = u(o)), s(o[p]) || l(o, p, function () {
            return this;
          }), t.exports = {
            IteratorPrototype: o,
            BUGGY_SAFARI_ITERATORS: h
          };
        },
        7497: function (t) {
          t.exports = {};
        },
        6244: function (t, e, n) {
          var o = n(7466);

          t.exports = function (t) {
            return o(t.length);
          };
        },
        6339: function (t, e, n) {
          var o = n(7293),
              r = n(614),
              i = n(2597),
              a = n(9781),
              s = n(6530).CONFIGURABLE,
              u = n(2788),
              c = n(9909),
              l = c.enforce,
              f = c.get,
              d = Object.defineProperty,
              p = a && !o(function () {
            return 8 !== d(function () {}, "length", {
              value: 8
            }).length;
          }),
              h = String(String).split("String"),
              v = t.exports = function (t, e, n) {
            if ("Symbol(" === String(e).slice(0, 7) && (e = "[" + String(e).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), n && n.getter && (e = "get " + e), n && n.setter && (e = "set " + e), (!i(t, "name") || s && t.name !== e) && d(t, "name", {
              value: e,
              configurable: !0
            }), p && n && i(n, "arity") && t.length !== n.arity && d(t, "length", {
              value: n.arity
            }), n && i(n, "constructor") && n.constructor) {
              if (a) try {
                d(t, "prototype", {
                  writable: !1
                });
              } catch (t) {}
            } else t.prototype = void 0;

            var o = l(t);
            return i(o, "source") || (o.source = h.join("string" == typeof e ? e : "")), t;
          };

          Function.prototype.toString = v(function () {
            return r(this) && f(this).source || u(this);
          }, "toString");
        },
        735: function (t, e, n) {
          var o = n(133);
          t.exports = o && !!Symbol.for && !!Symbol.keyFor;
        },
        133: function (t, e, n) {
          var o = n(7392),
              r = n(7293);
          t.exports = !!Object.getOwnPropertySymbols && !r(function () {
            var t = Symbol();
            return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && o && o < 41;
          });
        },
        8536: function (t, e, n) {
          var o = n(7854),
              r = n(614),
              i = n(2788),
              a = o.WeakMap;
          t.exports = r(a) && /native code/.test(i(a));
        },
        3929: function (t, e, n) {
          var o = n(7854),
              r = n(7850),
              i = o.TypeError;

          t.exports = function (t) {
            if (r(t)) throw i("The method doesn't accept regular expressions");
            return t;
          };
        },
        1574: function (t, e, n) {

          var o = n(9781),
              r = n(1702),
              i = n(6916),
              a = n(7293),
              s = n(1956),
              u = n(5181),
              c = n(5296),
              l = n(7908),
              f = n(8361),
              d = Object.assign,
              p = Object.defineProperty,
              h = r([].concat);
          t.exports = !d || a(function () {
            if (o && 1 !== d({
              b: 1
            }, d(p({}, "a", {
              enumerable: !0,
              get: function () {
                p(this, "b", {
                  value: 3,
                  enumerable: !1
                });
              }
            }), {
              b: 2
            })).b) return !0;
            var t = {},
                e = {},
                n = Symbol(),
                r = "abcdefghijklmnopqrst";
            return t[n] = 7, r.split("").forEach(function (t) {
              e[t] = t;
            }), 7 != d({}, t)[n] || s(d({}, e)).join("") != r;
          }) ? function (t, e) {
            for (var n = l(t), r = arguments.length, a = 1, d = u.f, p = c.f; r > a;) for (var v, g = f(arguments[a++]), y = d ? h(s(g), d(g)) : s(g), m = y.length, b = 0; m > b;) v = y[b++], o && !i(p, g, v) || (n[v] = g[v]);

            return n;
          } : d;
        },
        30: function (t, e, n) {
          var o,
              r = n(9670),
              i = n(6048),
              a = n(748),
              s = n(3501),
              u = n(490),
              c = n(317),
              l = n(6200),
              f = l("IE_PROTO"),
              d = function () {},
              p = function (t) {
            return "<script>" + t + "</" + "script>";
          },
              h = function (t) {
            t.write(p("")), t.close();
            var e = t.parentWindow.Object;
            return t = null, e;
          },
              v = function () {
            try {
              o = new ActiveXObject("htmlfile");
            } catch (t) {}

            var t, e;
            v = "undefined" != typeof document ? document.domain && o ? h(o) : ((e = c("iframe")).style.display = "none", u.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(p("document.F=Object")), t.close(), t.F) : h(o);

            for (var n = a.length; n--;) delete v.prototype[a[n]];

            return v();
          };

          s[f] = !0, t.exports = Object.create || function (t, e) {
            var n;
            return null !== t ? (d.prototype = r(t), n = new d(), d.prototype = null, n[f] = t) : n = v(), void 0 === e ? n : i.f(n, e);
          };
        },
        6048: function (t, e, n) {
          var o = n(9781),
              r = n(3353),
              i = n(3070),
              a = n(9670),
              s = n(5656),
              u = n(1956);
          e.f = o && !r ? Object.defineProperties : function (t, e) {
            a(t);

            for (var n, o = s(e), r = u(e), c = r.length, l = 0; c > l;) i.f(t, n = r[l++], o[n]);

            return t;
          };
        },
        3070: function (t, e, n) {
          var o = n(7854),
              r = n(9781),
              i = n(4664),
              a = n(3353),
              s = n(9670),
              u = n(4948),
              c = o.TypeError,
              l = Object.defineProperty,
              f = Object.getOwnPropertyDescriptor,
              d = "enumerable",
              p = "configurable",
              h = "writable";
          e.f = r ? a ? function (t, e, n) {
            if (s(t), e = u(e), s(n), "function" == typeof t && "prototype" === e && "value" in n && h in n && !n.writable) {
              var o = f(t, e);
              o && o.writable && (t[e] = n.value, n = {
                configurable: p in n ? n.configurable : o.configurable,
                enumerable: d in n ? n.enumerable : o.enumerable,
                writable: !1
              });
            }

            return l(t, e, n);
          } : l : function (t, e, n) {
            if (s(t), e = u(e), s(n), i) try {
              return l(t, e, n);
            } catch (t) {}
            if ("get" in n || "set" in n) throw c("Accessors not supported");
            return "value" in n && (t[e] = n.value), t;
          };
        },
        1236: function (t, e, n) {
          var o = n(9781),
              r = n(6916),
              i = n(5296),
              a = n(9114),
              s = n(5656),
              u = n(4948),
              c = n(2597),
              l = n(4664),
              f = Object.getOwnPropertyDescriptor;
          e.f = o ? f : function (t, e) {
            if (t = s(t), e = u(e), l) try {
              return f(t, e);
            } catch (t) {}
            if (c(t, e)) return a(!r(i.f, t, e), t[e]);
          };
        },
        1156: function (t, e, n) {
          var o = n(4326),
              r = n(5656),
              i = n(8006).f,
              a = n(1589),
              s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

          t.exports.f = function (t) {
            return s && "Window" == o(t) ? function (t) {
              try {
                return i(t);
              } catch (t) {
                return a(s);
              }
            }(t) : i(r(t));
          };
        },
        8006: function (t, e, n) {
          var o = n(6324),
              r = n(748).concat("length", "prototype");

          e.f = Object.getOwnPropertyNames || function (t) {
            return o(t, r);
          };
        },
        5181: function (t, e) {
          e.f = Object.getOwnPropertySymbols;
        },
        9518: function (t, e, n) {
          var o = n(7854),
              r = n(2597),
              i = n(614),
              a = n(7908),
              s = n(6200),
              u = n(8544),
              c = s("IE_PROTO"),
              l = o.Object,
              f = l.prototype;
          t.exports = u ? l.getPrototypeOf : function (t) {
            var e = a(t);
            if (r(e, c)) return e[c];
            var n = e.constructor;
            return i(n) && e instanceof n ? n.prototype : e instanceof l ? f : null;
          };
        },
        7976: function (t, e, n) {
          var o = n(1702);
          t.exports = o({}.isPrototypeOf);
        },
        6324: function (t, e, n) {
          var o = n(1702),
              r = n(2597),
              i = n(5656),
              a = n(1318).indexOf,
              s = n(3501),
              u = o([].push);

          t.exports = function (t, e) {
            var n,
                o = i(t),
                c = 0,
                l = [];

            for (n in o) !r(s, n) && r(o, n) && u(l, n);

            for (; e.length > c;) r(o, n = e[c++]) && (~a(l, n) || u(l, n));

            return l;
          };
        },
        1956: function (t, e, n) {
          var o = n(6324),
              r = n(748);

          t.exports = Object.keys || function (t) {
            return o(t, r);
          };
        },
        5296: function (t, e) {

          var n = {}.propertyIsEnumerable,
              o = Object.getOwnPropertyDescriptor,
              r = o && !n.call({
            1: 2
          }, 1);
          e.f = r ? function (t) {
            var e = o(this, t);
            return !!e && e.enumerable;
          } : n;
        },
        9026: function (t, e, n) {

          var o = n(1913),
              r = n(7854),
              i = n(7293),
              a = n(8008);
          t.exports = o || !i(function () {
            if (!(a && a < 535)) {
              var t = Math.random();
              __defineSetter__.call(null, t, function () {}), delete r[t];
            }
          });
        },
        7674: function (t, e, n) {
          var o = n(1702),
              r = n(9670),
              i = n(6077);
          t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
            var t,
                e = !1,
                n = {};

            try {
              (t = o(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(n, []), e = n instanceof Array;
            } catch (t) {}

            return function (n, o) {
              return r(n), i(o), e ? t(n, o) : n.__proto__ = o, n;
            };
          }() : void 0);
        },
        288: function (t, e, n) {

          var o = n(1694),
              r = n(648);
          t.exports = o ? {}.toString : function () {
            return "[object " + r(this) + "]";
          };
        },
        2140: function (t, e, n) {
          var o = n(7854),
              r = n(6916),
              i = n(614),
              a = n(111),
              s = o.TypeError;

          t.exports = function (t, e) {
            var n, o;
            if ("string" === e && i(n = t.toString) && !a(o = r(n, t))) return o;
            if (i(n = t.valueOf) && !a(o = r(n, t))) return o;
            if ("string" !== e && i(n = t.toString) && !a(o = r(n, t))) return o;
            throw s("Can't convert object to primitive value");
          };
        },
        3887: function (t, e, n) {
          var o = n(5005),
              r = n(1702),
              i = n(8006),
              a = n(5181),
              s = n(9670),
              u = r([].concat);

          t.exports = o("Reflect", "ownKeys") || function (t) {
            var e = i.f(s(t)),
                n = a.f;
            return n ? u(e, n(t)) : e;
          };
        },
        857: function (t, e, n) {
          var o = n(7854);
          t.exports = o;
        },
        2626: function (t, e, n) {
          var o = n(3070).f;

          t.exports = function (t, e, n) {
            n in t || o(t, n, {
              configurable: !0,
              get: function () {
                return e[n];
              },
              set: function (t) {
                e[n] = t;
              }
            });
          };
        },
        7651: function (t, e, n) {
          var o = n(7854),
              r = n(6916),
              i = n(9670),
              a = n(614),
              s = n(4326),
              u = n(2261),
              c = o.TypeError;

          t.exports = function (t, e) {
            var n = t.exec;

            if (a(n)) {
              var o = r(n, t, e);
              return null !== o && i(o), o;
            }

            if ("RegExp" === s(t)) return r(u, t, e);
            throw c("RegExp#exec called on incompatible receiver");
          };
        },
        2261: function (t, e, n) {

          var o,
              r,
              i = n(6916),
              a = n(1702),
              s = n(1340),
              u = n(7066),
              c = n(2999),
              l = n(2309),
              f = n(30),
              d = n(9909).get,
              p = n(9441),
              h = n(7168),
              v = l("native-string-replace", String.prototype.replace),
              g = RegExp.prototype.exec,
              y = g,
              m = a("".charAt),
              b = a("".indexOf),
              x = a("".replace),
              w = a("".slice),
              E = (r = /b*/g, i(g, o = /a/, "a"), i(g, r, "a"), 0 !== o.lastIndex || 0 !== r.lastIndex),
              O = c.BROKEN_CARET,
              S = void 0 !== /()??/.exec("")[1];
          (E || S || O || p || h) && (y = function (t) {
            var e,
                n,
                o,
                r,
                a,
                c,
                l,
                p = this,
                h = d(p),
                k = s(t),
                I = h.raw;
            if (I) return I.lastIndex = p.lastIndex, e = i(y, I, k), p.lastIndex = I.lastIndex, e;
            var P = h.groups,
                C = O && p.sticky,
                A = i(u, p),
                M = p.source,
                T = 0,
                D = k;
            if (C && (A = x(A, "y", ""), -1 === b(A, "g") && (A += "g"), D = w(k, p.lastIndex), p.lastIndex > 0 && (!p.multiline || p.multiline && "\n" !== m(k, p.lastIndex - 1)) && (M = "(?: " + M + ")", D = " " + D, T++), n = new RegExp("^(?:" + M + ")", A)), S && (n = new RegExp("^" + M + "$(?!\\s)", A)), E && (o = p.lastIndex), r = i(g, C ? n : p, D), C ? r ? (r.input = w(r.input, T), r[0] = w(r[0], T), r.index = p.lastIndex, p.lastIndex += r[0].length) : p.lastIndex = 0 : E && r && (p.lastIndex = p.global ? r.index + r[0].length : o), S && r && r.length > 1 && i(v, r[0], n, function () {
              for (a = 1; a < arguments.length - 2; a++) void 0 === arguments[a] && (r[a] = void 0);
            }), r && P) for (r.groups = c = f(null), a = 0; a < P.length; a++) c[(l = P[a])[0]] = r[l[1]];
            return r;
          }), t.exports = y;
        },
        7066: function (t, e, n) {

          var o = n(9670);

          t.exports = function () {
            var t = o(this),
                e = "";
            return t.hasIndices && (e += "d"), t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e;
          };
        },
        4706: function (t, e, n) {
          var o = n(6916),
              r = n(2597),
              i = n(7976),
              a = n(7066),
              s = RegExp.prototype;

          t.exports = function (t) {
            var e = t.flags;
            return void 0 !== e || "flags" in s || r(t, "flags") || !i(s, t) ? e : o(a, t);
          };
        },
        2999: function (t, e, n) {
          var o = n(7293),
              r = n(7854).RegExp,
              i = o(function () {
            var t = r("a", "y");
            return t.lastIndex = 2, null != t.exec("abcd");
          }),
              a = i || o(function () {
            return !r("a", "y").sticky;
          }),
              s = i || o(function () {
            var t = r("^r", "gy");
            return t.lastIndex = 2, null != t.exec("str");
          });
          t.exports = {
            BROKEN_CARET: s,
            MISSED_STICKY: a,
            UNSUPPORTED_Y: i
          };
        },
        9441: function (t, e, n) {
          var o = n(7293),
              r = n(7854).RegExp;
          t.exports = o(function () {
            var t = r(".", "s");
            return !(t.dotAll && t.exec("\n") && "s" === t.flags);
          });
        },
        7168: function (t, e, n) {
          var o = n(7293),
              r = n(7854).RegExp;
          t.exports = o(function () {
            var t = r("(?<a>b)", "g");
            return "b" !== t.exec("b").groups.a || "bc" !== "b".replace(t, "$<a>c");
          });
        },
        4488: function (t, e, n) {
          var o = n(7854).TypeError;

          t.exports = function (t) {
            if (null == t) throw o("Can't call method on " + t);
            return t;
          };
        },
        3505: function (t, e, n) {
          var o = n(7854),
              r = Object.defineProperty;

          t.exports = function (t, e) {
            try {
              r(o, t, {
                value: e,
                configurable: !0,
                writable: !0
              });
            } catch (n) {
              o[t] = e;
            }

            return e;
          };
        },
        6340: function (t, e, n) {

          var o = n(5005),
              r = n(3070),
              i = n(5112),
              a = n(9781),
              s = i("species");

          t.exports = function (t) {
            var e = o(t),
                n = r.f;
            a && e && !e[s] && n(e, s, {
              configurable: !0,
              get: function () {
                return this;
              }
            });
          };
        },
        8003: function (t, e, n) {
          var o = n(3070).f,
              r = n(2597),
              i = n(5112)("toStringTag");

          t.exports = function (t, e, n) {
            t && !n && (t = t.prototype), t && !r(t, i) && o(t, i, {
              configurable: !0,
              value: e
            });
          };
        },
        6200: function (t, e, n) {
          var o = n(2309),
              r = n(9711),
              i = o("keys");

          t.exports = function (t) {
            return i[t] || (i[t] = r(t));
          };
        },
        5465: function (t, e, n) {
          var o = n(7854),
              r = n(3505),
              i = "__core-js_shared__",
              a = o[i] || r(i, {});
          t.exports = a;
        },
        2309: function (t, e, n) {
          var o = n(1913),
              r = n(5465);
          (t.exports = function (t, e) {
            return r[t] || (r[t] = void 0 !== e ? e : {});
          })("versions", []).push({
            version: "3.22.5",
            mode: o ? "pure" : "global",
            copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
            license: "https://github.com/zloirock/core-js/blob/v3.22.5/LICENSE",
            source: "https://github.com/zloirock/core-js"
          });
        },
        6707: function (t, e, n) {
          var o = n(9670),
              r = n(9483),
              i = n(5112)("species");

          t.exports = function (t, e) {
            var n,
                a = o(t).constructor;
            return void 0 === a || null == (n = o(a)[i]) ? e : r(n);
          };
        },
        8710: function (t, e, n) {
          var o = n(1702),
              r = n(9303),
              i = n(1340),
              a = n(4488),
              s = o("".charAt),
              u = o("".charCodeAt),
              c = o("".slice),
              l = function (t) {
            return function (e, n) {
              var o,
                  l,
                  f = i(a(e)),
                  d = r(n),
                  p = f.length;
              return d < 0 || d >= p ? t ? "" : void 0 : (o = u(f, d)) < 55296 || o > 56319 || d + 1 === p || (l = u(f, d + 1)) < 56320 || l > 57343 ? t ? s(f, d) : o : t ? c(f, d, d + 2) : l - 56320 + (o - 55296 << 10) + 65536;
            };
          };

          t.exports = {
            codeAt: l(!1),
            charAt: l(!0)
          };
        },
        6091: function (t, e, n) {
          var o = n(6530).PROPER,
              r = n(7293),
              i = n(1361);

          t.exports = function (t) {
            return r(function () {
              return !!i[t]() || "​᠎" !== "​᠎"[t]() || o && i[t].name !== t;
            });
          };
        },
        3111: function (t, e, n) {
          var o = n(1702),
              r = n(4488),
              i = n(1340),
              a = n(1361),
              s = o("".replace),
              u = "[" + a + "]",
              c = RegExp("^" + u + u + "*"),
              l = RegExp(u + u + "*$"),
              f = function (t) {
            return function (e) {
              var n = i(r(e));
              return 1 & t && (n = s(n, c, "")), 2 & t && (n = s(n, l, "")), n;
            };
          };

          t.exports = {
            start: f(1),
            end: f(2),
            trim: f(3)
          };
        },
        6532: function (t, e, n) {
          var o = n(6916),
              r = n(5005),
              i = n(5112),
              a = n(8052);

          t.exports = function () {
            var t = r("Symbol"),
                e = t && t.prototype,
                n = e && e.valueOf,
                s = i("toPrimitive");
            e && !e[s] && a(e, s, function (t) {
              return o(n, this);
            }, {
              arity: 1
            });
          };
        },
        863: function (t, e, n) {
          var o = n(1702);
          t.exports = o(1..valueOf);
        },
        1400: function (t, e, n) {
          var o = n(9303),
              r = Math.max,
              i = Math.min;

          t.exports = function (t, e) {
            var n = o(t);
            return n < 0 ? r(n + e, 0) : i(n, e);
          };
        },
        5656: function (t, e, n) {
          var o = n(8361),
              r = n(4488);

          t.exports = function (t) {
            return o(r(t));
          };
        },
        9303: function (t) {
          var e = Math.ceil,
              n = Math.floor;

          t.exports = function (t) {
            var o = +t;
            return o != o || 0 === o ? 0 : (o > 0 ? n : e)(o);
          };
        },
        7466: function (t, e, n) {
          var o = n(9303),
              r = Math.min;

          t.exports = function (t) {
            return t > 0 ? r(o(t), 9007199254740991) : 0;
          };
        },
        7908: function (t, e, n) {
          var o = n(7854),
              r = n(4488),
              i = o.Object;

          t.exports = function (t) {
            return i(r(t));
          };
        },
        7593: function (t, e, n) {
          var o = n(7854),
              r = n(6916),
              i = n(111),
              a = n(2190),
              s = n(8173),
              u = n(2140),
              c = n(5112),
              l = o.TypeError,
              f = c("toPrimitive");

          t.exports = function (t, e) {
            if (!i(t) || a(t)) return t;
            var n,
                o = s(t, f);

            if (o) {
              if (void 0 === e && (e = "default"), n = r(o, t, e), !i(n) || a(n)) return n;
              throw l("Can't convert object to primitive value");
            }

            return void 0 === e && (e = "number"), u(t, e);
          };
        },
        4948: function (t, e, n) {
          var o = n(7593),
              r = n(2190);

          t.exports = function (t) {
            var e = o(t, "string");
            return r(e) ? e : e + "";
          };
        },
        1694: function (t, e, n) {
          var o = {};
          o[n(5112)("toStringTag")] = "z", t.exports = "[object z]" === String(o);
        },
        1340: function (t, e, n) {
          var o = n(7854),
              r = n(648),
              i = o.String;

          t.exports = function (t) {
            if ("Symbol" === r(t)) throw TypeError("Cannot convert a Symbol value to a string");
            return i(t);
          };
        },
        6330: function (t, e, n) {
          var o = n(7854).String;

          t.exports = function (t) {
            try {
              return o(t);
            } catch (t) {
              return "Object";
            }
          };
        },
        9711: function (t, e, n) {
          var o = n(1702),
              r = 0,
              i = Math.random(),
              a = o(1..toString);

          t.exports = function (t) {
            return "Symbol(" + (void 0 === t ? "" : t) + ")_" + a(++r + i, 36);
          };
        },
        3307: function (t, e, n) {
          var o = n(133);
          t.exports = o && !Symbol.sham && "symbol" == typeof Symbol.iterator;
        },
        3353: function (t, e, n) {
          var o = n(9781),
              r = n(7293);
          t.exports = o && r(function () {
            return 42 != Object.defineProperty(function () {}, "prototype", {
              value: 42,
              writable: !1
            }).prototype;
          });
        },
        6061: function (t, e, n) {
          var o = n(5112);
          e.f = o;
        },
        5112: function (t, e, n) {
          var o = n(7854),
              r = n(2309),
              i = n(2597),
              a = n(9711),
              s = n(133),
              u = n(3307),
              c = r("wks"),
              l = o.Symbol,
              f = l && l.for,
              d = u ? l : l && l.withoutSetter || a;

          t.exports = function (t) {
            if (!i(c, t) || !s && "string" != typeof c[t]) {
              var e = "Symbol." + t;
              s && i(l, t) ? c[t] = l[t] : c[t] = u && f ? f(e) : d(e);
            }

            return c[t];
          };
        },
        1361: function (t) {
          t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
        },
        2222: function (t, e, n) {

          var o = n(2109),
              r = n(7854),
              i = n(7293),
              a = n(3157),
              s = n(111),
              u = n(7908),
              c = n(6244),
              l = n(6135),
              f = n(5417),
              d = n(1194),
              p = n(5112),
              h = n(7392),
              v = p("isConcatSpreadable"),
              g = 9007199254740991,
              y = "Maximum allowed index exceeded",
              m = r.TypeError,
              b = h >= 51 || !i(function () {
            var t = [];
            return t[v] = !1, t.concat()[0] !== t;
          }),
              x = d("concat"),
              w = function (t) {
            if (!s(t)) return !1;
            var e = t[v];
            return void 0 !== e ? !!e : a(t);
          };

          o({
            target: "Array",
            proto: !0,
            arity: 1,
            forced: !b || !x
          }, {
            concat: function (t) {
              var e,
                  n,
                  o,
                  r,
                  i,
                  a = u(this),
                  s = f(a, 0),
                  d = 0;

              for (e = -1, o = arguments.length; e < o; e++) if (w(i = -1 === e ? a : arguments[e])) {
                if (d + (r = c(i)) > g) throw m(y);

                for (n = 0; n < r; n++, d++) n in i && l(s, d, i[n]);
              } else {
                if (d >= g) throw m(y);
                l(s, d++, i);
              }

              return s.length = d, s;
            }
          });
        },
        7327: function (t, e, n) {

          var o = n(2109),
              r = n(2092).filter;
          o({
            target: "Array",
            proto: !0,
            forced: !n(1194)("filter")
          }, {
            filter: function (t) {
              return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
            }
          });
        },
        1038: function (t, e, n) {
          var o = n(2109),
              r = n(8457);
          o({
            target: "Array",
            stat: !0,
            forced: !n(7072)(function (t) {
              Array.from(t);
            })
          }, {
            from: r
          });
        },
        6699: function (t, e, n) {

          var o = n(2109),
              r = n(1318).includes,
              i = n(7293),
              a = n(1223);
          o({
            target: "Array",
            proto: !0,
            forced: i(function () {
              return !Array(1).includes();
            })
          }, {
            includes: function (t) {
              return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
            }
          }), a("includes");
        },
        2772: function (t, e, n) {

          var o = n(2109),
              r = n(1702),
              i = n(1318).indexOf,
              a = n(9341),
              s = r([].indexOf),
              u = !!s && 1 / s([1], 1, -0) < 0,
              c = a("indexOf");
          o({
            target: "Array",
            proto: !0,
            forced: u || !c
          }, {
            indexOf: function (t) {
              var e = arguments.length > 1 ? arguments[1] : void 0;
              return u ? s(this, t, e) || 0 : i(this, t, e);
            }
          });
        },
        6992: function (t, e, n) {

          var o = n(5656),
              r = n(1223),
              i = n(7497),
              a = n(9909),
              s = n(3070).f,
              u = n(654),
              c = n(1913),
              l = n(9781),
              f = "Array Iterator",
              d = a.set,
              p = a.getterFor(f);
          t.exports = u(Array, "Array", function (t, e) {
            d(this, {
              type: f,
              target: o(t),
              index: 0,
              kind: e
            });
          }, function () {
            var t = p(this),
                e = t.target,
                n = t.kind,
                o = t.index++;
            return !e || o >= e.length ? (t.target = void 0, {
              value: void 0,
              done: !0
            }) : "keys" == n ? {
              value: o,
              done: !1
            } : "values" == n ? {
              value: e[o],
              done: !1
            } : {
              value: [o, e[o]],
              done: !1
            };
          }, "values");
          var h = i.Arguments = i.Array;
          if (r("keys"), r("values"), r("entries"), !c && l && "values" !== h.name) try {
            s(h, "name", {
              value: "values"
            });
          } catch (t) {}
        },
        9600: function (t, e, n) {

          var o = n(2109),
              r = n(1702),
              i = n(8361),
              a = n(5656),
              s = n(9341),
              u = r([].join),
              c = i != Object,
              l = s("join", ",");
          o({
            target: "Array",
            proto: !0,
            forced: c || !l
          }, {
            join: function (t) {
              return u(a(this), void 0 === t ? "," : t);
            }
          });
        },
        1249: function (t, e, n) {

          var o = n(2109),
              r = n(2092).map;
          o({
            target: "Array",
            proto: !0,
            forced: !n(1194)("map")
          }, {
            map: function (t) {
              return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
            }
          });
        },
        5827: function (t, e, n) {

          var o = n(2109),
              r = n(3671).left,
              i = n(9341),
              a = n(7392),
              s = n(5268);
          o({
            target: "Array",
            proto: !0,
            forced: !i("reduce") || !s && a > 79 && a < 83
          }, {
            reduce: function (t) {
              var e = arguments.length;
              return r(this, t, e, e > 1 ? arguments[1] : void 0);
            }
          });
        },
        7042: function (t, e, n) {

          var o = n(2109),
              r = n(7854),
              i = n(3157),
              a = n(4411),
              s = n(111),
              u = n(1400),
              c = n(6244),
              l = n(5656),
              f = n(6135),
              d = n(5112),
              p = n(1194),
              h = n(206),
              v = p("slice"),
              g = d("species"),
              y = r.Array,
              m = Math.max;
          o({
            target: "Array",
            proto: !0,
            forced: !v
          }, {
            slice: function (t, e) {
              var n,
                  o,
                  r,
                  d = l(this),
                  p = c(d),
                  v = u(t, p),
                  b = u(void 0 === e ? p : e, p);
              if (i(d) && (n = d.constructor, (a(n) && (n === y || i(n.prototype)) || s(n) && null === (n = n[g])) && (n = void 0), n === y || void 0 === n)) return h(d, v, b);

              for (o = new (void 0 === n ? y : n)(m(b - v, 0)), r = 0; v < b; v++, r++) v in d && f(o, r, d[v]);

              return o.length = r, o;
            }
          });
        },
        2707: function (t, e, n) {

          var o = n(2109),
              r = n(1702),
              i = n(9662),
              a = n(7908),
              s = n(6244),
              u = n(1340),
              c = n(7293),
              l = n(4362),
              f = n(9341),
              d = n(8886),
              p = n(256),
              h = n(7392),
              v = n(8008),
              g = [],
              y = r(g.sort),
              m = r(g.push),
              b = c(function () {
            g.sort(void 0);
          }),
              x = c(function () {
            g.sort(null);
          }),
              w = f("sort"),
              E = !c(function () {
            if (h) return h < 70;

            if (!(d && d > 3)) {
              if (p) return !0;
              if (v) return v < 603;
              var t,
                  e,
                  n,
                  o,
                  r = "";

              for (t = 65; t < 76; t++) {
                switch (e = String.fromCharCode(t), t) {
                  case 66:
                  case 69:
                  case 70:
                  case 72:
                    n = 3;
                    break;

                  case 68:
                  case 71:
                    n = 4;
                    break;

                  default:
                    n = 2;
                }

                for (o = 0; o < 47; o++) g.push({
                  k: e + o,
                  v: n
                });
              }

              for (g.sort(function (t, e) {
                return e.v - t.v;
              }), o = 0; o < g.length; o++) e = g[o].k.charAt(0), r.charAt(r.length - 1) !== e && (r += e);

              return "DGBEFHACIJK" !== r;
            }
          });
          o({
            target: "Array",
            proto: !0,
            forced: b || !x || !w || !E
          }, {
            sort: function (t) {
              void 0 !== t && i(t);
              var e = a(this);
              if (E) return void 0 === t ? y(e) : y(e, t);
              var n,
                  o,
                  r = [],
                  c = s(e);

              for (o = 0; o < c; o++) o in e && m(r, e[o]);

              for (l(r, function (t) {
                return function (e, n) {
                  return void 0 === n ? -1 : void 0 === e ? 1 : void 0 !== t ? +t(e, n) || 0 : u(e) > u(n) ? 1 : -1;
                };
              }(t)), n = r.length, o = 0; o < n;) e[o] = r[o++];

              for (; o < c;) delete e[o++];

              return e;
            }
          });
        },
        561: function (t, e, n) {

          var o = n(2109),
              r = n(7854),
              i = n(1400),
              a = n(9303),
              s = n(6244),
              u = n(7908),
              c = n(5417),
              l = n(6135),
              f = n(1194)("splice"),
              d = r.TypeError,
              p = Math.max,
              h = Math.min,
              v = 9007199254740991,
              g = "Maximum allowed length exceeded";
          o({
            target: "Array",
            proto: !0,
            forced: !f
          }, {
            splice: function (t, e) {
              var n,
                  o,
                  r,
                  f,
                  y,
                  m,
                  b = u(this),
                  x = s(b),
                  w = i(t, x),
                  E = arguments.length;
              if (0 === E ? n = o = 0 : 1 === E ? (n = 0, o = x - w) : (n = E - 2, o = h(p(a(e), 0), x - w)), x + n - o > v) throw d(g);

              for (r = c(b, o), f = 0; f < o; f++) (y = w + f) in b && l(r, f, b[y]);

              if (r.length = o, n < o) {
                for (f = w; f < x - o; f++) m = f + n, (y = f + o) in b ? b[m] = b[y] : delete b[m];

                for (f = x; f > x - o + n; f--) delete b[f - 1];
              } else if (n > o) for (f = x - o; f > w; f--) m = f + n - 1, (y = f + o - 1) in b ? b[m] = b[y] : delete b[m];

              for (f = 0; f < n; f++) b[f + w] = arguments[f + 2];

              return b.length = x - o + n, r;
            }
          });
        },
        8309: function (t, e, n) {
          var o = n(9781),
              r = n(6530).EXISTS,
              i = n(1702),
              a = n(3070).f,
              s = Function.prototype,
              u = i(s.toString),
              c = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
              l = i(c.exec);
          o && !r && a(s, "name", {
            configurable: !0,
            get: function () {
              try {
                return l(c, u(this))[1];
              } catch (t) {
                return "";
              }
            }
          });
        },
        8862: function (t, e, n) {
          var o = n(2109),
              r = n(5005),
              i = n(2104),
              a = n(6916),
              s = n(1702),
              u = n(7293),
              c = n(3157),
              l = n(614),
              f = n(111),
              d = n(2190),
              p = n(206),
              h = n(133),
              v = r("JSON", "stringify"),
              g = s(/./.exec),
              y = s("".charAt),
              m = s("".charCodeAt),
              b = s("".replace),
              x = s(1..toString),
              w = /[\uD800-\uDFFF]/g,
              E = /^[\uD800-\uDBFF]$/,
              O = /^[\uDC00-\uDFFF]$/,
              S = !h || u(function () {
            var t = r("Symbol")();
            return "[null]" != v([t]) || "{}" != v({
              a: t
            }) || "{}" != v(Object(t));
          }),
              k = u(function () {
            return '"\\udf06\\ud834"' !== v("\udf06\ud834") || '"\\udead"' !== v("\udead");
          }),
              I = function (t, e) {
            var n = p(arguments),
                o = e;
            if ((f(e) || void 0 !== t) && !d(t)) return c(e) || (e = function (t, e) {
              if (l(o) && (e = a(o, this, t, e)), !d(e)) return e;
            }), n[1] = e, i(v, null, n);
          },
              P = function (t, e, n) {
            var o = y(n, e - 1),
                r = y(n, e + 1);
            return g(E, t) && !g(O, r) || g(O, t) && !g(E, o) ? "\\u" + x(m(t, 0), 16) : t;
          };

          v && o({
            target: "JSON",
            stat: !0,
            arity: 3,
            forced: S || k
          }, {
            stringify: function (t, e, n) {
              var o = p(arguments),
                  r = i(S ? I : v, null, o);
              return k && "string" == typeof r ? b(r, w, P) : r;
            }
          });
        },
        9653: function (t, e, n) {

          var o = n(9781),
              r = n(7854),
              i = n(1702),
              a = n(4705),
              s = n(8052),
              u = n(2597),
              c = n(9587),
              l = n(7976),
              f = n(2190),
              d = n(7593),
              p = n(7293),
              h = n(8006).f,
              v = n(1236).f,
              g = n(3070).f,
              y = n(863),
              m = n(3111).trim,
              b = "Number",
              x = r.Number,
              w = x.prototype,
              E = r.TypeError,
              O = i("".slice),
              S = i("".charCodeAt),
              k = function (t) {
            var e = d(t, "number");
            return "bigint" == typeof e ? e : I(e);
          },
              I = function (t) {
            var e,
                n,
                o,
                r,
                i,
                a,
                s,
                u,
                c = d(t, "number");
            if (f(c)) throw E("Cannot convert a Symbol value to a number");
            if ("string" == typeof c && c.length > 2) if (c = m(c), 43 === (e = S(c, 0)) || 45 === e) {
              if (88 === (n = S(c, 2)) || 120 === n) return NaN;
            } else if (48 === e) {
              switch (S(c, 1)) {
                case 66:
                case 98:
                  o = 2, r = 49;
                  break;

                case 79:
                case 111:
                  o = 8, r = 55;
                  break;

                default:
                  return +c;
              }

              for (a = (i = O(c, 2)).length, s = 0; s < a; s++) if ((u = S(i, s)) < 48 || u > r) return NaN;

              return parseInt(i, o);
            }
            return +c;
          };

          if (a(b, !x(" 0o1") || !x("0b1") || x("+0x1"))) {
            for (var P, C = function (t) {
              var e = arguments.length < 1 ? 0 : x(k(t)),
                  n = this;
              return l(w, n) && p(function () {
                y(n);
              }) ? c(Object(e), n, C) : e;
            }, A = o ? h(x) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), M = 0; A.length > M; M++) u(x, P = A[M]) && !u(C, P) && g(C, P, v(x, P));

            C.prototype = w, w.constructor = C, s(r, b, C, {
              constructor: !0
            });
          }
        },
        3161: function (t, e, n) {
          n(2109)({
            target: "Number",
            stat: !0
          }, {
            isInteger: n(5988)
          });
        },
        9601: function (t, e, n) {
          var o = n(2109),
              r = n(1574);
          o({
            target: "Object",
            stat: !0,
            arity: 2,
            forced: Object.assign !== r
          }, {
            assign: r
          });
        },
        9595: function (t, e, n) {

          var o = n(2109),
              r = n(9781),
              i = n(9026),
              a = n(9662),
              s = n(7908),
              u = n(3070);
          r && o({
            target: "Object",
            proto: !0,
            forced: i
          }, {
            __defineGetter__: function (t, e) {
              u.f(s(this), t, {
                get: a(e),
                enumerable: !0,
                configurable: !0
              });
            }
          });
        },
        5003: function (t, e, n) {
          var o = n(2109),
              r = n(7293),
              i = n(5656),
              a = n(1236).f,
              s = n(9781),
              u = r(function () {
            a(1);
          });
          o({
            target: "Object",
            stat: !0,
            forced: !s || u,
            sham: !s
          }, {
            getOwnPropertyDescriptor: function (t, e) {
              return a(i(t), e);
            }
          });
        },
        9337: function (t, e, n) {
          var o = n(2109),
              r = n(9781),
              i = n(3887),
              a = n(5656),
              s = n(1236),
              u = n(6135);
          o({
            target: "Object",
            stat: !0,
            sham: !r
          }, {
            getOwnPropertyDescriptors: function (t) {
              for (var e, n, o = a(t), r = s.f, c = i(o), l = {}, f = 0; c.length > f;) void 0 !== (n = r(o, e = c[f++])) && u(l, e, n);

              return l;
            }
          });
        },
        6210: function (t, e, n) {
          var o = n(2109),
              r = n(7293),
              i = n(1156).f;
          o({
            target: "Object",
            stat: !0,
            forced: r(function () {
              return !Object.getOwnPropertyNames(1);
            })
          }, {
            getOwnPropertyNames: i
          });
        },
        9660: function (t, e, n) {
          var o = n(2109),
              r = n(133),
              i = n(7293),
              a = n(5181),
              s = n(7908);
          o({
            target: "Object",
            stat: !0,
            forced: !r || i(function () {
              a.f(1);
            })
          }, {
            getOwnPropertySymbols: function (t) {
              var e = a.f;
              return e ? e(s(t)) : [];
            }
          });
        },
        7941: function (t, e, n) {
          var o = n(2109),
              r = n(7908),
              i = n(1956);
          o({
            target: "Object",
            stat: !0,
            forced: n(7293)(function () {
              i(1);
            })
          }, {
            keys: function (t) {
              return i(r(t));
            }
          });
        },
        1539: function (t, e, n) {
          var o = n(1694),
              r = n(8052),
              i = n(288);
          o || r(Object.prototype, "toString", i, {
            unsafe: !0
          });
        },
        4603: function (t, e, n) {
          var o = n(9781),
              r = n(7854),
              i = n(1702),
              a = n(4705),
              s = n(9587),
              u = n(8880),
              c = n(8006).f,
              l = n(7976),
              f = n(7850),
              d = n(1340),
              p = n(4706),
              h = n(2999),
              v = n(2626),
              g = n(8052),
              y = n(7293),
              m = n(2597),
              b = n(9909).enforce,
              x = n(6340),
              w = n(5112),
              E = n(9441),
              O = n(7168),
              S = w("match"),
              k = r.RegExp,
              I = k.prototype,
              P = r.SyntaxError,
              C = i(I.exec),
              A = i("".charAt),
              M = i("".replace),
              T = i("".indexOf),
              D = i("".slice),
              j = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
              N = /a/g,
              R = /a/g,
              L = new k(N) !== N,
              B = h.MISSED_STICKY,
              F = h.UNSUPPORTED_Y,
              K = o && (!L || B || E || O || y(function () {
            return R[S] = !1, k(N) != N || k(R) == R || "/a/i" != k(N, "i");
          }));

          if (a("RegExp", K)) {
            for (var _ = function (t, e) {
              var n,
                  o,
                  r,
                  i,
                  a,
                  c,
                  h = l(I, this),
                  v = f(t),
                  g = void 0 === e,
                  y = [],
                  x = t;
              if (!h && v && g && t.constructor === _) return t;
              if ((v || l(I, t)) && (t = t.source, g && (e = p(x))), t = void 0 === t ? "" : d(t), e = void 0 === e ? "" : d(e), x = t, E && ("dotAll" in N) && (o = !!e && T(e, "s") > -1) && (e = M(e, /s/g, "")), n = e, B && ("sticky" in N) && (r = !!e && T(e, "y") > -1) && F && (e = M(e, /y/g, "")), O && (t = (i = function (t) {
                for (var e, n = t.length, o = 0, r = "", i = [], a = {}, s = !1, u = !1, c = 0, l = ""; o <= n; o++) {
                  if ("\\" === (e = A(t, o))) e += A(t, ++o);else if ("]" === e) s = !1;else if (!s) switch (!0) {
                    case "[" === e:
                      s = !0;
                      break;

                    case "(" === e:
                      C(j, D(t, o + 1)) && (o += 2, u = !0), r += e, c++;
                      continue;

                    case ">" === e && u:
                      if ("" === l || m(a, l)) throw new P("Invalid capture group name");
                      a[l] = !0, i[i.length] = [l, c], u = !1, l = "";
                      continue;
                  }
                  u ? l += e : r += e;
                }

                return [r, i];
              }(t))[0], y = i[1]), a = s(k(t, e), h ? this : I, _), (o || r || y.length) && (c = b(a), o && (c.dotAll = !0, c.raw = _(function (t) {
                for (var e, n = t.length, o = 0, r = "", i = !1; o <= n; o++) "\\" !== (e = A(t, o)) ? i || "." !== e ? ("[" === e ? i = !0 : "]" === e && (i = !1), r += e) : r += "[\\s\\S]" : r += e + A(t, ++o);

                return r;
              }(t), n)), r && (c.sticky = !0), y.length && (c.groups = y)), t !== x) try {
                u(a, "source", "" === x ? "(?:)" : x);
              } catch (t) {}
              return a;
            }, U = c(k), H = 0; U.length > H;) v(_, k, U[H++]);

            I.constructor = _, _.prototype = I, g(r, "RegExp", _, {
              constructor: !0
            });
          }

          x("RegExp");
        },
        4916: function (t, e, n) {

          var o = n(2109),
              r = n(2261);
          o({
            target: "RegExp",
            proto: !0,
            forced: /./.exec !== r
          }, {
            exec: r
          });
        },
        9714: function (t, e, n) {

          var o = n(6530).PROPER,
              r = n(8052),
              i = n(9670),
              a = n(1340),
              s = n(7293),
              u = n(4706),
              c = "toString",
              l = RegExp.prototype.toString,
              f = s(function () {
            return "/a/b" != l.call({
              source: "a",
              flags: "b"
            });
          }),
              d = o && l.name != c;
          (f || d) && r(RegExp.prototype, c, function () {
            var t = i(this);
            return "/" + a(t.source) + "/" + a(u(t));
          }, {
            unsafe: !0
          });
        },
        2023: function (t, e, n) {

          var o = n(2109),
              r = n(1702),
              i = n(3929),
              a = n(4488),
              s = n(1340),
              u = n(4964),
              c = r("".indexOf);
          o({
            target: "String",
            proto: !0,
            forced: !u("includes")
          }, {
            includes: function (t) {
              return !!~c(s(a(this)), s(i(t)), arguments.length > 1 ? arguments[1] : void 0);
            }
          });
        },
        8783: function (t, e, n) {

          var o = n(8710).charAt,
              r = n(1340),
              i = n(9909),
              a = n(654),
              s = "String Iterator",
              u = i.set,
              c = i.getterFor(s);
          a(String, "String", function (t) {
            u(this, {
              type: s,
              string: r(t),
              index: 0
            });
          }, function () {
            var t,
                e = c(this),
                n = e.string,
                r = e.index;
            return r >= n.length ? {
              value: void 0,
              done: !0
            } : (t = o(n, r), e.index += t.length, {
              value: t,
              done: !1
            });
          });
        },
        6373: function (t, e, n) {

          var o = n(2109),
              r = n(7854),
              i = n(6916),
              a = n(1702),
              s = n(4994),
              u = n(4488),
              c = n(7466),
              l = n(1340),
              f = n(9670),
              d = n(4326),
              p = n(7850),
              h = n(4706),
              v = n(8173),
              g = n(8052),
              y = n(7293),
              m = n(5112),
              b = n(6707),
              x = n(1530),
              w = n(7651),
              E = n(9909),
              O = n(1913),
              S = m("matchAll"),
              k = "RegExp String",
              I = "RegExp String Iterator",
              P = E.set,
              C = E.getterFor(I),
              A = RegExp.prototype,
              M = r.TypeError,
              T = a("".indexOf),
              D = a("".matchAll),
              j = !!D && !y(function () {
            D("a", /./);
          }),
              N = s(function (t, e, n, o) {
            P(this, {
              type: I,
              regexp: t,
              string: e,
              global: n,
              unicode: o,
              done: !1
            });
          }, k, function () {
            var t = C(this);
            if (t.done) return {
              value: void 0,
              done: !0
            };
            var e = t.regexp,
                n = t.string,
                o = w(e, n);
            return null === o ? {
              value: void 0,
              done: t.done = !0
            } : t.global ? ("" === l(o[0]) && (e.lastIndex = x(n, c(e.lastIndex), t.unicode)), {
              value: o,
              done: !1
            }) : (t.done = !0, {
              value: o,
              done: !1
            });
          }),
              R = function (t) {
            var e,
                n,
                o,
                r = f(this),
                i = l(t),
                a = b(r, RegExp),
                s = l(h(r));
            return e = new a(a === RegExp ? r.source : r, s), n = !!~T(s, "g"), o = !!~T(s, "u"), e.lastIndex = c(r.lastIndex), new N(e, i, n, o);
          };

          o({
            target: "String",
            proto: !0,
            forced: j
          }, {
            matchAll: function (t) {
              var e,
                  n,
                  o,
                  r,
                  a = u(this);

              if (null != t) {
                if (p(t) && (e = l(u(h(t))), !~T(e, "g"))) throw M("`.matchAll` does not allow non-global regexes");
                if (j) return D(a, t);
                if (void 0 === (o = v(t, S)) && O && "RegExp" == d(t) && (o = R), o) return i(o, t, a);
              } else if (j) return D(a, t);

              return n = l(a), r = new RegExp(t, "g"), O ? i(R, r, n) : r[S](n);
            }
          }), O || S in A || g(A, S, R);
        },
        4723: function (t, e, n) {

          var o = n(6916),
              r = n(7007),
              i = n(9670),
              a = n(7466),
              s = n(1340),
              u = n(4488),
              c = n(8173),
              l = n(1530),
              f = n(7651);
          r("match", function (t, e, n) {
            return [function (e) {
              var n = u(this),
                  r = null == e ? void 0 : c(e, t);
              return r ? o(r, e, n) : new RegExp(e)[t](s(n));
            }, function (t) {
              var o = i(this),
                  r = s(t),
                  u = n(e, o, r);
              if (u.done) return u.value;
              if (!o.global) return f(o, r);
              var c = o.unicode;
              o.lastIndex = 0;

              for (var d, p = [], h = 0; null !== (d = f(o, r));) {
                var v = s(d[0]);
                p[h] = v, "" === v && (o.lastIndex = l(r, a(o.lastIndex), c)), h++;
              }

              return 0 === h ? null : p;
            }];
          });
        },
        5306: function (t, e, n) {

          var o = n(2104),
              r = n(6916),
              i = n(1702),
              a = n(7007),
              s = n(7293),
              u = n(9670),
              c = n(614),
              l = n(9303),
              f = n(7466),
              d = n(1340),
              p = n(4488),
              h = n(1530),
              v = n(8173),
              g = n(647),
              y = n(7651),
              m = n(5112)("replace"),
              b = Math.max,
              x = Math.min,
              w = i([].concat),
              E = i([].push),
              O = i("".indexOf),
              S = i("".slice),
              k = "$0" === "a".replace(/./, "$0"),
              I = !!/./[m] && "" === /./[m]("a", "$0");
          a("replace", function (t, e, n) {
            var i = I ? "$" : "$0";
            return [function (t, n) {
              var o = p(this),
                  i = null == t ? void 0 : v(t, m);
              return i ? r(i, t, o, n) : r(e, d(o), t, n);
            }, function (t, r) {
              var a = u(this),
                  s = d(t);

              if ("string" == typeof r && -1 === O(r, i) && -1 === O(r, "$<")) {
                var p = n(e, a, s, r);
                if (p.done) return p.value;
              }

              var v = c(r);
              v || (r = d(r));
              var m = a.global;

              if (m) {
                var k = a.unicode;
                a.lastIndex = 0;
              }

              for (var I = [];;) {
                var P = y(a, s);
                if (null === P) break;
                if (E(I, P), !m) break;
                "" === d(P[0]) && (a.lastIndex = h(s, f(a.lastIndex), k));
              }

              for (var C, A = "", M = 0, T = 0; T < I.length; T++) {
                for (var D = d((P = I[T])[0]), j = b(x(l(P.index), s.length), 0), N = [], R = 1; R < P.length; R++) E(N, void 0 === (C = P[R]) ? C : String(C));

                var L = P.groups;

                if (v) {
                  var B = w([D], N, j, s);
                  void 0 !== L && E(B, L);
                  var F = d(o(r, void 0, B));
                } else F = g(D, s, j, N, L, r);

                j >= M && (A += S(s, M, j) + F, M = j + D.length);
              }

              return A + S(s, M);
            }];
          }, !!s(function () {
            var t = /./;
            return t.exec = function () {
              var t = [];
              return t.groups = {
                a: "7"
              }, t;
            }, "7" !== "".replace(t, "$<a>");
          }) || !k || I);
        },
        3123: function (t, e, n) {

          var o = n(2104),
              r = n(6916),
              i = n(1702),
              a = n(7007),
              s = n(7850),
              u = n(9670),
              c = n(4488),
              l = n(6707),
              f = n(1530),
              d = n(7466),
              p = n(1340),
              h = n(8173),
              v = n(1589),
              g = n(7651),
              y = n(2261),
              m = n(2999),
              b = n(7293),
              x = m.UNSUPPORTED_Y,
              w = 4294967295,
              E = Math.min,
              O = [].push,
              S = i(/./.exec),
              k = i(O),
              I = i("".slice);
          a("split", function (t, e, n) {
            var i;
            return i = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (t, n) {
              var i = p(c(this)),
                  a = void 0 === n ? w : n >>> 0;
              if (0 === a) return [];
              if (void 0 === t) return [i];
              if (!s(t)) return r(e, i, t, a);

              for (var u, l, f, d = [], h = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), g = 0, m = new RegExp(t.source, h + "g"); (u = r(y, m, i)) && !((l = m.lastIndex) > g && (k(d, I(i, g, u.index)), u.length > 1 && u.index < i.length && o(O, d, v(u, 1)), f = u[0].length, g = l, d.length >= a));) m.lastIndex === u.index && m.lastIndex++;

              return g === i.length ? !f && S(m, "") || k(d, "") : k(d, I(i, g)), d.length > a ? v(d, 0, a) : d;
            } : "0".split(void 0, 0).length ? function (t, n) {
              return void 0 === t && 0 === n ? [] : r(e, this, t, n);
            } : e, [function (e, n) {
              var o = c(this),
                  a = null == e ? void 0 : h(e, t);
              return a ? r(a, e, o, n) : r(i, p(o), e, n);
            }, function (t, o) {
              var r = u(this),
                  a = p(t),
                  s = n(i, r, a, o, i !== e);
              if (s.done) return s.value;
              var c = l(r, RegExp),
                  h = r.unicode,
                  v = (r.ignoreCase ? "i" : "") + (r.multiline ? "m" : "") + (r.unicode ? "u" : "") + (x ? "g" : "y"),
                  y = new c(x ? "^(?:" + r.source + ")" : r, v),
                  m = void 0 === o ? w : o >>> 0;
              if (0 === m) return [];
              if (0 === a.length) return null === g(y, a) ? [a] : [];

              for (var b = 0, O = 0, S = []; O < a.length;) {
                y.lastIndex = x ? 0 : O;
                var P,
                    C = g(y, x ? I(a, O) : a);
                if (null === C || (P = E(d(y.lastIndex + (x ? O : 0)), a.length)) === b) O = f(a, O, h);else {
                  if (k(S, I(a, b, O)), S.length === m) return S;

                  for (var A = 1; A <= C.length - 1; A++) if (k(S, C[A]), S.length === m) return S;

                  O = b = P;
                }
              }

              return k(S, I(a, b)), S;
            }];
          }, !!b(function () {
            var t = /(?:)/,
                e = t.exec;

            t.exec = function () {
              return e.apply(this, arguments);
            };

            var n = "ab".split(t);
            return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
          }), x);
        },
        3210: function (t, e, n) {

          var o = n(2109),
              r = n(3111).trim;
          o({
            target: "String",
            proto: !0,
            forced: n(6091)("trim")
          }, {
            trim: function () {
              return r(this);
            }
          });
        },
        4032: function (t, e, n) {

          var o = n(2109),
              r = n(7854),
              i = n(6916),
              a = n(1702),
              s = n(1913),
              u = n(9781),
              c = n(133),
              l = n(7293),
              f = n(2597),
              d = n(7976),
              p = n(9670),
              h = n(5656),
              v = n(4948),
              g = n(1340),
              y = n(9114),
              m = n(30),
              b = n(1956),
              x = n(8006),
              w = n(1156),
              E = n(5181),
              O = n(1236),
              S = n(3070),
              k = n(6048),
              I = n(5296),
              P = n(8052),
              C = n(2309),
              A = n(6200),
              M = n(3501),
              T = n(9711),
              D = n(5112),
              j = n(6061),
              N = n(7235),
              R = n(6532),
              L = n(8003),
              B = n(9909),
              F = n(2092).forEach,
              K = A("hidden"),
              _ = "Symbol",
              U = B.set,
              H = B.getterFor(_),
              $ = Object.prototype,
              G = r.Symbol,
              V = G && G.prototype,
              z = r.TypeError,
              Y = r.QObject,
              W = O.f,
              X = S.f,
              J = w.f,
              q = I.f,
              Q = a([].push),
              Z = C("symbols"),
              tt = C("op-symbols"),
              et = C("wks"),
              nt = !Y || !Y.prototype || !Y.prototype.findChild,
              ot = u && l(function () {
            return 7 != m(X({}, "a", {
              get: function () {
                return X(this, "a", {
                  value: 7
                }).a;
              }
            })).a;
          }) ? function (t, e, n) {
            var o = W($, e);
            o && delete $[e], X(t, e, n), o && t !== $ && X($, e, o);
          } : X,
              rt = function (t, e) {
            var n = Z[t] = m(V);
            return U(n, {
              type: _,
              tag: t,
              description: e
            }), u || (n.description = e), n;
          },
              it = function (t, e, n) {
            t === $ && it(tt, e, n), p(t);
            var o = v(e);
            return p(n), f(Z, o) ? (n.enumerable ? (f(t, K) && t[K][o] && (t[K][o] = !1), n = m(n, {
              enumerable: y(0, !1)
            })) : (f(t, K) || X(t, K, y(1, {})), t[K][o] = !0), ot(t, o, n)) : X(t, o, n);
          },
              at = function (t, e) {
            p(t);
            var n = h(e),
                o = b(n).concat(lt(n));
            return F(o, function (e) {
              u && !i(st, n, e) || it(t, e, n[e]);
            }), t;
          },
              st = function (t) {
            var e = v(t),
                n = i(q, this, e);
            return !(this === $ && f(Z, e) && !f(tt, e)) && (!(n || !f(this, e) || !f(Z, e) || f(this, K) && this[K][e]) || n);
          },
              ut = function (t, e) {
            var n = h(t),
                o = v(e);

            if (n !== $ || !f(Z, o) || f(tt, o)) {
              var r = W(n, o);
              return !r || !f(Z, o) || f(n, K) && n[K][o] || (r.enumerable = !0), r;
            }
          },
              ct = function (t) {
            var e = J(h(t)),
                n = [];
            return F(e, function (t) {
              f(Z, t) || f(M, t) || Q(n, t);
            }), n;
          },
              lt = function (t) {
            var e = t === $,
                n = J(e ? tt : h(t)),
                o = [];
            return F(n, function (t) {
              !f(Z, t) || e && !f($, t) || Q(o, Z[t]);
            }), o;
          };

          c || (P(V = (G = function () {
            if (d(V, this)) throw z("Symbol is not a constructor");

            var t = arguments.length && void 0 !== arguments[0] ? g(arguments[0]) : void 0,
                e = T(t),
                n = function (t) {
              this === $ && i(n, tt, t), f(this, K) && f(this[K], e) && (this[K][e] = !1), ot(this, e, y(1, t));
            };

            return u && nt && ot($, e, {
              configurable: !0,
              set: n
            }), rt(e, t);
          }).prototype, "toString", function () {
            return H(this).tag;
          }), P(G, "withoutSetter", function (t) {
            return rt(T(t), t);
          }), I.f = st, S.f = it, k.f = at, O.f = ut, x.f = w.f = ct, E.f = lt, j.f = function (t) {
            return rt(D(t), t);
          }, u && (X(V, "description", {
            configurable: !0,
            get: function () {
              return H(this).description;
            }
          }), s || P($, "propertyIsEnumerable", st, {
            unsafe: !0
          }))), o({
            global: !0,
            constructor: !0,
            wrap: !0,
            forced: !c,
            sham: !c
          }, {
            Symbol: G
          }), F(b(et), function (t) {
            N(t);
          }), o({
            target: _,
            stat: !0,
            forced: !c
          }, {
            useSetter: function () {
              nt = !0;
            },
            useSimple: function () {
              nt = !1;
            }
          }), o({
            target: "Object",
            stat: !0,
            forced: !c,
            sham: !u
          }, {
            create: function (t, e) {
              return void 0 === e ? m(t) : at(m(t), e);
            },
            defineProperty: it,
            defineProperties: at,
            getOwnPropertyDescriptor: ut
          }), o({
            target: "Object",
            stat: !0,
            forced: !c
          }, {
            getOwnPropertyNames: ct
          }), R(), L(G, _), M[K] = !0;
        },
        1817: function (t, e, n) {

          var o = n(2109),
              r = n(9781),
              i = n(7854),
              a = n(1702),
              s = n(2597),
              u = n(614),
              c = n(7976),
              l = n(1340),
              f = n(3070).f,
              d = n(9920),
              p = i.Symbol,
              h = p && p.prototype;

          if (r && u(p) && (!("description" in h) || void 0 !== p().description)) {
            var v = {},
                g = function () {
              var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : l(arguments[0]),
                  e = c(h, this) ? new p(t) : void 0 === t ? p() : p(t);
              return "" === t && (v[e] = !0), e;
            };

            d(g, p), g.prototype = h, h.constructor = g;
            var y = "Symbol(test)" == String(p("test")),
                m = a(h.toString),
                b = a(h.valueOf),
                x = /^Symbol\((.*)\)[^)]+$/,
                w = a("".replace),
                E = a("".slice);
            f(h, "description", {
              configurable: !0,
              get: function () {
                var t = b(this),
                    e = m(t);
                if (s(v, t)) return "";
                var n = y ? E(e, 7, -1) : w(e, x, "$1");
                return "" === n ? void 0 : n;
              }
            }), o({
              global: !0,
              constructor: !0,
              forced: !0
            }, {
              Symbol: g
            });
          }
        },
        763: function (t, e, n) {
          var o = n(2109),
              r = n(5005),
              i = n(2597),
              a = n(1340),
              s = n(2309),
              u = n(735),
              c = s("string-to-symbol-registry"),
              l = s("symbol-to-string-registry");
          o({
            target: "Symbol",
            stat: !0,
            forced: !u
          }, {
            for: function (t) {
              var e = a(t);
              if (i(c, e)) return c[e];
              var n = r("Symbol")(e);
              return c[e] = n, l[n] = e, n;
            }
          });
        },
        2165: function (t, e, n) {
          n(7235)("iterator");
        },
        2526: function (t, e, n) {
          n(4032), n(763), n(6620), n(8862), n(9660);
        },
        6620: function (t, e, n) {
          var o = n(2109),
              r = n(2597),
              i = n(2190),
              a = n(6330),
              s = n(2309),
              u = n(735),
              c = s("symbol-to-string-registry");
          o({
            target: "Symbol",
            stat: !0,
            forced: !u
          }, {
            keyFor: function (t) {
              if (!i(t)) throw TypeError(a(t) + " is not a symbol");
              if (r(c, t)) return c[t];
            }
          });
        },
        3728: function (t, e, n) {
          n(6373);
        },
        4747: function (t, e, n) {
          var o = n(7854),
              r = n(8324),
              i = n(8509),
              a = n(8533),
              s = n(8880),
              u = function (t) {
            if (t && t.forEach !== a) try {
              s(t, "forEach", a);
            } catch (e) {
              t.forEach = a;
            }
          };

          for (var c in r) r[c] && u(o[c] && o[c].prototype);

          u(i);
        },
        3948: function (t, e, n) {
          var o = n(7854),
              r = n(8324),
              i = n(8509),
              a = n(6992),
              s = n(8880),
              u = n(5112),
              c = u("iterator"),
              l = u("toStringTag"),
              f = a.values,
              d = function (t, e) {
            if (t) {
              if (t[c] !== f) try {
                s(t, c, f);
              } catch (e) {
                t[c] = f;
              }
              if (t[l] || s(t, l, e), r[e]) for (var n in a) if (t[n] !== a[n]) try {
                s(t, n, a[n]);
              } catch (e) {
                t[n] = a[n];
              }
            }
          };

          for (var p in r) d(o[p] && o[p].prototype, p);

          d(i, "DOMTokenList");
        }
      },
          e = {};

      function n(o) {
        var r = e[o];
        if (void 0 !== r) return r.exports;
        var i = e[o] = {
          exports: {}
        };
        return t[o](i, i.exports, n), i.exports;
      }

      n.d = function (t, e) {
        for (var o in e) n.o(e, o) && !n.o(t, o) && Object.defineProperty(t, o, {
          enumerable: !0,
          get: e[o]
        });
      }, n.g = function () {
        if ("object" == typeof globalThis) return globalThis;

        try {
          return this || new Function("return this")();
        } catch (t) {
          if ("object" == typeof window) return window;
        }
      }(), n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(t, "__esModule", {
          value: !0
        });
      };
      var o = {};
      return function () {

        n.r(o), n.d(o, {
          default: function () {
            return E;
          }
        });
        n(3210), n(4916), n(5306), n(2772), n(8309), n(3123), n(1539), n(9714), n(561), n(9600), n(9595), n(7042);
        "undefined" == typeof Element || "remove" in Element.prototype || (Element.prototype.remove = function () {
          this.parentNode && this.parentNode.removeChild(this);
        }), "undefined" != typeof self && "document" in self && ((!("classList" in document.createElement("_")) || document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg", "g"))) && function (t) {
          if ("Element" in t) {
            var e = "classList",
                n = t.Element.prototype,
                o = Object,
                r = String.prototype.trim || function () {
              return this.replace(/^\s+|\s+$/g, "");
            },
                i = Array.prototype.indexOf || function (t) {
              for (var e = 0, n = this.length; e < n; e++) if (e in this && this[e] === t) return e;

              return -1;
            },
                a = function (t, e) {
              this.name = t, this.code = DOMException[t], this.message = e;
            },
                s = function (t, e) {
              if ("" === e) throw new a("SYNTAX_ERR", "The token must not be empty.");
              if (/\s/.test(e)) throw new a("INVALID_CHARACTER_ERR", "The token must not contain space characters.");
              return i.call(t, e);
            },
                u = function (t) {
              for (var e = r.call(t.getAttribute("class") || ""), n = e ? e.split(/\s+/) : [], o = 0, i = n.length; o < i; o++) this.push(n[o]);

              this._updateClassName = function () {
                t.setAttribute("class", this.toString());
              };
            },
                c = u.prototype = [],
                l = function () {
              return new u(this);
            };

            if (a.prototype = Error.prototype, c.item = function (t) {
              return this[t] || null;
            }, c.contains = function (t) {
              return ~s(this, t + "");
            }, c.add = function () {
              var t,
                  e = arguments,
                  n = 0,
                  o = e.length,
                  r = !1;

              do {
                t = e[n] + "", ~s(this, t) || (this.push(t), r = !0);
              } while (++n < o);

              r && this._updateClassName();
            }, c.remove = function () {
              var t,
                  e,
                  n = arguments,
                  o = 0,
                  r = n.length,
                  i = !1;

              do {
                for (t = n[o] + "", e = s(this, t); ~e;) this.splice(e, 1), i = !0, e = s(this, t);
              } while (++o < r);

              i && this._updateClassName();
            }, c.toggle = function (t, e) {
              var n = this.contains(t),
                  o = n ? !0 !== e && "remove" : !1 !== e && "add";
              return o && this[o](t), !0 === e || !1 === e ? e : !n;
            }, c.replace = function (t, e) {
              var n = s(t + "");
              ~n && (this.splice(n, 1, e), this._updateClassName());
            }, c.toString = function () {
              return this.join(" ");
            }, o.defineProperty) {
              var f = {
                get: l,
                enumerable: !0,
                configurable: !0
              };

              try {
                o.defineProperty(n, e, f);
              } catch (t) {
                void 0 !== t.number && -2146823252 !== t.number || (f.enumerable = !1, o.defineProperty(n, e, f));
              }
            } else o.prototype.__defineGetter__ && n.__defineGetter__(e, l);
          }
        }(self), function () {
          var t = document.createElement("_");

          if (t.classList.add("c1", "c2"), !t.classList.contains("c2")) {
            var e = function (t) {
              var e = DOMTokenList.prototype[t];

              DOMTokenList.prototype[t] = function (t) {
                var n,
                    o = arguments.length;

                for (n = 0; n < o; n++) t = arguments[n], e.call(this, t);
              };
            };

            e("add"), e("remove");
          }

          if (t.classList.toggle("c3", !1), t.classList.contains("c3")) {
            var n = DOMTokenList.prototype.toggle;

            DOMTokenList.prototype.toggle = function (t, e) {
              return 1 in arguments && !this.contains(t) == !e ? e : n.call(this, t);
            };
          }

          "replace" in document.createElement("_").classList || (DOMTokenList.prototype.replace = function (t, e) {
            var n = this.toString().split(" "),
                o = n.indexOf(t + "");
            ~o && (n = n.slice(o), this.remove.apply(this, n), this.add(e), this.add.apply(this, n.slice(1)));
          }), t = null;
        }());
        n(7327), n(2222), n(7941), n(4603), n(3728), n(2707), n(6699), n(2023), n(4747), n(9601), n(1249), n(1038), n(8783), n(2526), n(5003), n(9337), n(1817), n(2165), n(6992), n(3948), n(3161), n(9653), n(4723), n(5827), n(6210);

        function t(t) {
          return function (t) {
            if (Array.isArray(t)) return r(t);
          }(t) || function (t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
          }(t) || e(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }

        function e(t, e) {
          if (t) {
            if ("string" == typeof t) return r(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(t, e) : void 0;
          }
        }

        function r(t, e) {
          (null == e || e > t.length) && (e = t.length);

          for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];

          return o;
        }

        function i(t) {
          return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t;
          } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
          })(t);
        }

        function a(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
          }
        }

        function s(t, e, n) {
          return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : t[e] = n, t;
        }

        var u = function () {
          function n(t) {
            var e = t.getOptions,
                o = t.getCaretPosition,
                r = t.getCaretPositionEnd,
                i = t.dispatch;
            !function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, n), s(this, "getOptions", void 0), s(this, "getCaretPosition", void 0), s(this, "getCaretPositionEnd", void 0), s(this, "dispatch", void 0), s(this, "maxLengthReached", void 0), s(this, "isStandardButton", function (t) {
              return t && !("{" === t[0] && "}" === t[t.length - 1]);
            }), this.getOptions = e, this.getCaretPosition = o, this.getCaretPositionEnd = r, this.dispatch = i, n.bindMethods(n, this);
          }

          var o, r, u;
          return o = n, u = [{
            key: "bindMethods",
            value: function (t, n) {
              var o,
                  r = function (t, n) {
                var o = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];

                if (!o) {
                  if (Array.isArray(t) || (o = e(t)) || n && t && "number" == typeof t.length) {
                    o && (t = o);

                    var r = 0,
                        i = function () {};

                    return {
                      s: i,
                      n: function () {
                        return r >= t.length ? {
                          done: !0
                        } : {
                          done: !1,
                          value: t[r++]
                        };
                      },
                      e: function (t) {
                        throw t;
                      },
                      f: i
                    };
                  }

                  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }

                var a,
                    s = !0,
                    u = !1;
                return {
                  s: function () {
                    o = o.call(t);
                  },
                  n: function () {
                    var t = o.next();
                    return s = t.done, t;
                  },
                  e: function (t) {
                    u = !0, a = t;
                  },
                  f: function () {
                    try {
                      s || null == o.return || o.return();
                    } finally {
                      if (u) throw a;
                    }
                  }
                };
              }(Object.getOwnPropertyNames(t.prototype));

              try {
                for (r.s(); !(o = r.n()).done;) {
                  var i = o.value;
                  "constructor" === i || "bindMethods" === i || (n[i] = n[i].bind(n));
                }
              } catch (t) {
                r.e(t);
              } finally {
                r.f();
              }
            }
          }], (r = [{
            key: "getButtonType",
            value: function (t) {
              return t.includes("{") && t.includes("}") && "{//}" !== t ? "functionBtn" : "standardBtn";
            }
          }, {
            key: "getButtonClass",
            value: function (t) {
              var e = this.getButtonType(t),
                  n = t.replace("{", "").replace("}", ""),
                  o = "";
              return "standardBtn" !== e && (o = " hg-button-".concat(n)), "hg-".concat(e).concat(o);
            }
          }, {
            key: "getDefaultDiplay",
            value: function () {
              return {
                "{bksp}": "backspace",
                "{backspace}": "backspace",
                "{enter}": "< enter",
                "{shift}": "shift",
                "{shiftleft}": "shift",
                "{shiftright}": "shift",
                "{alt}": "alt",
                "{s}": "shift",
                "{tab}": "tab",
                "{lock}": "caps",
                "{capslock}": "caps",
                "{accept}": "Submit",
                "{space}": " ",
                "{//}": " ",
                "{esc}": "esc",
                "{escape}": "esc",
                "{f1}": "f1",
                "{f2}": "f2",
                "{f3}": "f3",
                "{f4}": "f4",
                "{f5}": "f5",
                "{f6}": "f6",
                "{f7}": "f7",
                "{f8}": "f8",
                "{f9}": "f9",
                "{f10}": "f10",
                "{f11}": "f11",
                "{f12}": "f12",
                "{numpaddivide}": "/",
                "{numlock}": "lock",
                "{arrowup}": "↑",
                "{arrowleft}": "←",
                "{arrowdown}": "↓",
                "{arrowright}": "→",
                "{prtscr}": "print",
                "{scrolllock}": "scroll",
                "{pause}": "pause",
                "{insert}": "ins",
                "{home}": "home",
                "{pageup}": "up",
                "{delete}": "del",
                "{forwarddelete}": "del",
                "{end}": "end",
                "{pagedown}": "down",
                "{numpadmultiply}": "*",
                "{numpadsubtract}": "-",
                "{numpadadd}": "+",
                "{numpadenter}": "enter",
                "{period}": ".",
                "{numpaddecimal}": ".",
                "{numpad0}": "0",
                "{numpad1}": "1",
                "{numpad2}": "2",
                "{numpad3}": "3",
                "{numpad4}": "4",
                "{numpad5}": "5",
                "{numpad6}": "6",
                "{numpad7}": "7",
                "{numpad8}": "8",
                "{numpad9}": "9"
              };
            }
          }, {
            key: "getButtonDisplayName",
            value: function (t, e, n) {
              return (e = n ? Object.assign({}, this.getDefaultDiplay(), e) : e || this.getDefaultDiplay())[t] || t;
            }
          }, {
            key: "getUpdatedInput",
            value: function (t, e, n) {
              var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : n,
                  r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                  i = this.getOptions(),
                  a = [n, o, r],
                  s = e;
              return ("{bksp}" === t || "{backspace}" === t) && s.length > 0 ? s = this.removeAt.apply(this, [s].concat(a)) : ("{delete}" === t || "{forwarddelete}" === t) && s.length > 0 ? s = this.removeForwardsAt.apply(this, [s].concat(a)) : "{space}" === t ? s = this.addStringAt.apply(this, [s, " "].concat(a)) : "{tab}" !== t || "boolean" == typeof i.tabCharOnTab && !1 === i.tabCharOnTab ? "{enter}" !== t && "{numpadenter}" !== t || !i.newLineOnEnter ? t.includes("numpad") && Number.isInteger(Number(t[t.length - 2])) ? s = this.addStringAt.apply(this, [s, t[t.length - 2]].concat(a)) : "{numpaddivide}" === t ? s = this.addStringAt.apply(this, [s, "/"].concat(a)) : "{numpadmultiply}" === t ? s = this.addStringAt.apply(this, [s, "*"].concat(a)) : "{numpadsubtract}" === t ? s = this.addStringAt.apply(this, [s, "-"].concat(a)) : "{numpadadd}" === t ? s = this.addStringAt.apply(this, [s, "+"].concat(a)) : "{numpaddecimal}" === t ? s = this.addStringAt.apply(this, [s, "."].concat(a)) : "{" === t || "}" === t ? s = this.addStringAt.apply(this, [s, t].concat(a)) : t.includes("{") || t.includes("}") || (s = this.addStringAt.apply(this, [s, t].concat(a))) : s = this.addStringAt.apply(this, [s, "\n"].concat(a)) : s = this.addStringAt.apply(this, [s, "\t"].concat(a)), s;
            }
          }, {
            key: "updateCaretPos",
            value: function (t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                  n = this.updateCaretPosAction(t, e);
              this.dispatch(function (t) {
                t.setCaretPosition(n);
              });
            }
          }, {
            key: "updateCaretPosAction",
            value: function (t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                  n = this.getOptions(),
                  o = this.getCaretPosition();
              return null != o && (e ? o > 0 && (o -= t) : o += t), n.debug && console.log("Caret at:", o), o;
            }
          }, {
            key: "addStringAt",
            value: function (t, e) {
              var n,
                  o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.length,
                  r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t.length,
                  i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
              return o || 0 === o ? (n = [t.slice(0, o), e, t.slice(r)].join(""), this.isMaxLengthReached() || i && this.updateCaretPos(e.length)) : n = t + e, n;
            }
          }, {
            key: "removeAt",
            value: function (t) {
              var e,
                  n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.length,
                  o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.length,
                  r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
              if (0 === n && 0 === o) return t;

              if (n === o) {
                var i = /([\uD800-\uDBFF][\uDC00-\uDFFF])/g;
                n && n >= 0 ? t.substring(n - 2, n).match(i) ? (e = t.substr(0, n - 2) + t.substr(n), r && this.updateCaretPos(2, !0)) : (e = t.substr(0, n - 1) + t.substr(n), r && this.updateCaretPos(1, !0)) : t.slice(-2).match(i) ? (e = t.slice(0, -2), r && this.updateCaretPos(2, !0)) : (e = t.slice(0, -1), r && this.updateCaretPos(1, !0));
              } else e = t.slice(0, n) + t.slice(o), r && this.dispatch(function (t) {
                t.setCaretPosition(n);
              });

              return e;
            }
          }, {
            key: "removeForwardsAt",
            value: function (t) {
              var e,
                  n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.length,
                  o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.length,
                  r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
              if (null == t || !t.length || null === n) return t;

              if (n === o) {
                var i = /([\uD800-\uDBFF][\uDC00-\uDFFF])/g,
                    a = t.substring(n, n + 2),
                    s = a.match(i);
                e = s ? t.substr(0, n) + t.substr(n + 2) : t.substr(0, n) + t.substr(n + 1);
              } else e = t.slice(0, n) + t.slice(o), r && this.dispatch(function (t) {
                t.setCaretPosition(n);
              });

              return e;
            }
          }, {
            key: "handleMaxLength",
            value: function (t, e) {
              var n = this.getOptions(),
                  o = n.maxLength,
                  r = t[n.inputName || "default"],
                  a = e.length - 1 >= o;
              if (e.length <= r.length) return !1;
              if (Number.isInteger(o)) return n.debug && console.log("maxLength (num) reached:", a), a ? (this.maxLengthReached = !0, !0) : (this.maxLengthReached = !1, !1);

              if ("object" === i(o)) {
                var s = e.length - 1 >= o[n.inputName || "default"];
                return n.debug && console.log("maxLength (obj) reached:", s), s ? (this.maxLengthReached = !0, !0) : (this.maxLengthReached = !1, !1);
              }
            }
          }, {
            key: "isMaxLengthReached",
            value: function () {
              return Boolean(this.maxLengthReached);
            }
          }, {
            key: "isTouchDevice",
            value: function () {
              return "ontouchstart" in window || navigator.maxTouchPoints;
            }
          }, {
            key: "pointerEventsSupported",
            value: function () {
              return !!window.PointerEvent;
            }
          }, {
            key: "camelCase",
            value: function (t) {
              return t ? t.toLowerCase().trim().split(/[.\-_\s]/g).reduce(function (t, e) {
                return e.length ? t + e[0].toUpperCase() + e.slice(1) : t;
              }) : "";
            }
          }, {
            key: "chunkArray",
            value: function (e, n) {
              return t(Array(Math.ceil(e.length / n))).map(function (t, o) {
                return e.slice(n * o, n + n * o);
              });
            }
          }]) && a(o.prototype, r), u && a(o, u), Object.defineProperty(o, "prototype", {
            writable: !1
          }), n;
        }();

        s(u, "noop", function () {});
        var c = u;

        function l(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
          }
        }

        function f(t, e, n) {
          return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : t[e] = n, t;
        }

        var d = function () {
          function t(e) {
            var n = e.dispatch,
                o = e.getOptions;
            !function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, t), f(this, "getOptions", void 0), f(this, "dispatch", void 0), this.dispatch = n, this.getOptions = o, c.bindMethods(t, this);
          }

          var e, n;
          return e = t, (n = [{
            key: "handleHighlightKeyDown",
            value: function (t) {
              var e = this.getOptions(),
                  n = this.getSimpleKeyboardLayoutKey(t);
              this.dispatch(function (o) {
                var r,
                    i,
                    a = o.getButtonElement(n),
                    s = o.getButtonElement("{".concat(n, "}"));
                if (a) r = a, i = n;else {
                  if (!s) return;
                  r = s, i = "{".concat(n, "}");
                }
                r && (r.style.backgroundColor = e.physicalKeyboardHighlightBgColor || "#dadce4", r.style.color = e.physicalKeyboardHighlightTextColor || "black", e.physicalKeyboardHighlightPress && (e.physicalKeyboardHighlightPressUsePointerEvents ? r.onpointerdown() : e.physicalKeyboardHighlightPressUseClick ? r.click() : o.handleButtonClicked(i, t)));
              });
            }
          }, {
            key: "handleHighlightKeyUp",
            value: function (t) {
              var e = this.getOptions(),
                  n = this.getSimpleKeyboardLayoutKey(t);
              this.dispatch(function (t) {
                var o = t.getButtonElement(n) || t.getButtonElement("{".concat(n, "}"));
                o && o.removeAttribute && (o.removeAttribute("style"), e.physicalKeyboardHighlightPressUsePointerEvents && o.onpointerup());
              });
            }
          }, {
            key: "getSimpleKeyboardLayoutKey",
            value: function (t) {
              var e,
                  n = "",
                  o = t.code || t.key || this.keyCodeToKey(null == t ? void 0 : t.keyCode);
              return (n = null != o && o.includes("Numpad") || null != o && o.includes("Shift") || null != o && o.includes("Space") || null != o && o.includes("Backspace") || null != o && o.includes("Control") || null != o && o.includes("Alt") || null != o && o.includes("Meta") ? t.code || "" : t.key || this.keyCodeToKey(null == t ? void 0 : t.keyCode) || "").length > 1 ? null === (e = n) || void 0 === e ? void 0 : e.toLowerCase() : n;
            }
          }, {
            key: "keyCodeToKey",
            value: function (t) {
              return {
                8: "Backspace",
                9: "Tab",
                13: "Enter",
                16: "Shift",
                17: "Ctrl",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Esc",
                32: "Space",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "ArrowLeft",
                38: "ArrowUp",
                39: "ArrowRight",
                40: "ArrowDown",
                45: "Insert",
                46: "Delete",
                48: "0",
                49: "1",
                50: "2",
                51: "3",
                52: "4",
                53: "5",
                54: "6",
                55: "7",
                56: "8",
                57: "9",
                65: "A",
                66: "B",
                67: "C",
                68: "D",
                69: "E",
                70: "F",
                71: "G",
                72: "H",
                73: "I",
                74: "J",
                75: "K",
                76: "L",
                77: "M",
                78: "N",
                79: "O",
                80: "P",
                81: "Q",
                82: "R",
                83: "S",
                84: "T",
                85: "U",
                86: "V",
                87: "W",
                88: "X",
                89: "Y",
                90: "Z",
                91: "Meta",
                96: "Numpad0",
                97: "Numpad1",
                98: "Numpad2",
                99: "Numpad3",
                100: "Numpad4",
                101: "Numpad5",
                102: "Numpad6",
                103: "Numpad7",
                104: "Numpad8",
                105: "Numpad9",
                106: "NumpadMultiply",
                107: "NumpadAdd",
                109: "NumpadSubtract",
                110: "NumpadDecimal",
                111: "NumpadDivide",
                112: "F1",
                113: "F2",
                114: "F3",
                115: "F4",
                116: "F5",
                117: "F6",
                118: "F7",
                119: "F8",
                120: "F9",
                121: "F10",
                122: "F11",
                123: "F12",
                144: "NumLock",
                145: "ScrollLock",
                186: ";",
                187: "=",
                188: ",",
                189: "-",
                190: ".",
                191: "/",
                192: "`",
                219: "[",
                220: "\\",
                221: "]",
                222: "'"
              }[t];
            }
          }]) && l(e.prototype, n), Object.defineProperty(e, "prototype", {
            writable: !1
          }), t;
        }();

        function p(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
          }
        }

        function h(t, e, n) {
          return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : t[e] = n, t;
        }

        var v = function () {
          function t(e) {
            var n = e.utilities;
            !function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, t), h(this, "utilities", void 0), h(this, "candidateBoxElement", void 0), h(this, "pageIndex", 0), h(this, "pageSize", void 0), this.utilities = n, c.bindMethods(t, this), this.pageSize = this.utilities.getOptions().layoutCandidatesPageSize || 5;
          }

          var e, n;
          return e = t, (n = [{
            key: "destroy",
            value: function () {
              this.candidateBoxElement && (this.candidateBoxElement.remove(), this.pageIndex = 0);
            }
          }, {
            key: "show",
            value: function (t) {
              var e = this,
                  n = t.candidateValue,
                  o = t.targetElement,
                  r = t.onSelect;

              if (n && n.length) {
                var i = this.utilities.chunkArray(n.split(" "), this.pageSize);
                this.renderPage({
                  candidateListPages: i,
                  targetElement: o,
                  pageIndex: this.pageIndex,
                  nbPages: i.length,
                  onItemSelected: function (t, n) {
                    r(t, n), e.destroy();
                  }
                });
              }
            }
          }, {
            key: "renderPage",
            value: function (t) {
              var e,
                  n = this,
                  o = t.candidateListPages,
                  r = t.targetElement,
                  i = t.pageIndex,
                  a = t.nbPages,
                  s = t.onItemSelected;
              null === (e = this.candidateBoxElement) || void 0 === e || e.remove(), this.candidateBoxElement = document.createElement("div"), this.candidateBoxElement.className = "hg-candidate-box";
              var u = document.createElement("ul");
              u.className = "hg-candidate-box-list", o[i].forEach(function (t) {
                var e = document.createElement("li"),
                    n = function () {
                  var t = new MouseEvent("click");
                  return Object.defineProperty(t, "target", {
                    value: e
                  }), t;
                };

                e.className = "hg-candidate-box-list-item", e.textContent = t, e.onclick = function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n();
                  return s(t, e);
                }, u.appendChild(e);
              });
              var c = i > 0,
                  l = document.createElement("div");
              l.classList.add("hg-candidate-box-prev"), c && l.classList.add("hg-candidate-box-btn-active"), l.onclick = function () {
                c && n.renderPage({
                  candidateListPages: o,
                  targetElement: r,
                  pageIndex: i - 1,
                  nbPages: a,
                  onItemSelected: s
                });
              }, this.candidateBoxElement.appendChild(l), this.candidateBoxElement.appendChild(u);
              var f = i < a - 1,
                  d = document.createElement("div");
              d.classList.add("hg-candidate-box-next"), f && d.classList.add("hg-candidate-box-btn-active"), d.onclick = function () {
                f && n.renderPage({
                  candidateListPages: o,
                  targetElement: r,
                  pageIndex: i + 1,
                  nbPages: a,
                  onItemSelected: s
                });
              }, this.candidateBoxElement.appendChild(d), r.prepend(this.candidateBoxElement);
            }
          }]) && p(e.prototype, n), Object.defineProperty(e, "prototype", {
            writable: !1
          }), t;
        }();

        function g(t) {
          return function (t) {
            if (Array.isArray(t)) return y(t);
          }(t) || function (t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
          }(t) || function (t, e) {
            if (!t) return;
            if ("string" == typeof t) return y(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(t);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(t, e);
          }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }

        function y(t, e) {
          (null == e || e > t.length) && (e = t.length);

          for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];

          return o;
        }

        function m(t) {
          return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t;
          } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
          })(t);
        }

        function b(t, e) {
          var n = Object.keys(t);

          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            e && (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })), n.push.apply(n, o);
          }

          return n;
        }

        function x(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
          }
        }

        function w(t, e, n) {
          return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : t[e] = n, t;
        }

        var E = function () {
          function t(e, n) {
            var o = this;

            if (function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, t), w(this, "input", void 0), w(this, "options", void 0), w(this, "utilities", void 0), w(this, "caretPosition", void 0), w(this, "caretPositionEnd", void 0), w(this, "keyboardDOM", void 0), w(this, "keyboardPluginClasses", void 0), w(this, "keyboardDOMClass", void 0), w(this, "buttonElements", void 0), w(this, "currentInstanceName", void 0), w(this, "allKeyboardInstances", void 0), w(this, "keyboardInstanceNames", void 0), w(this, "isFirstKeyboardInstance", void 0), w(this, "physicalKeyboard", void 0), w(this, "modules", void 0), w(this, "activeButtonClass", void 0), w(this, "holdInteractionTimeout", void 0), w(this, "holdTimeout", void 0), w(this, "isMouseHold", void 0), w(this, "initialized", void 0), w(this, "candidateBox", void 0), w(this, "keyboardRowsDOM", void 0), w(this, "defaultName", "default"), w(this, "activeInputElement", null), w(this, "handleParams", function (t, e) {
              var n, o, r;
              if ("string" == typeof t) n = t.split(".").join(""), o = document.querySelector(".".concat(n)), r = e;else if (t instanceof HTMLDivElement) {
                if (!t.className) throw console.warn("Any DOM element passed as parameter must have a class."), new Error("KEYBOARD_DOM_CLASS_ERROR");
                n = t.className.split(" ")[0], o = t, r = e;
              } else n = "simple-keyboard", o = document.querySelector(".".concat(n)), r = t;
              return {
                keyboardDOMClass: n,
                keyboardDOM: o,
                options: r
              };
            }), w(this, "getOptions", function () {
              return o.options;
            }), w(this, "getCaretPosition", function () {
              return o.caretPosition;
            }), w(this, "getCaretPositionEnd", function () {
              return o.caretPositionEnd;
            }), w(this, "registerModule", function (t, e) {
              o.modules[t] || (o.modules[t] = {}), e(o.modules[t]);
            }), w(this, "getKeyboardClassString", function () {
              for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];

              var r = [o.keyboardDOMClass].concat(e).filter(function (t) {
                return !!t;
              });
              return r.join(" ");
            }), "undefined" != typeof window) {
              var r = this.handleParams(e, n),
                  i = r.keyboardDOMClass,
                  a = r.keyboardDOM,
                  s = r.options,
                  u = void 0 === s ? {} : s;
              this.utilities = new c({
                getOptions: this.getOptions,
                getCaretPosition: this.getCaretPosition,
                getCaretPositionEnd: this.getCaretPositionEnd,
                dispatch: this.dispatch
              }), this.caretPosition = null, this.caretPositionEnd = null, this.keyboardDOM = a, this.options = function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = null != arguments[e] ? arguments[e] : {};
                  e % 2 ? b(Object(n), !0).forEach(function (e) {
                    w(t, e, n[e]);
                  }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach(function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  });
                }

                return t;
              }({
                layoutName: "default",
                theme: "hg-theme-default",
                inputName: "default",
                preventMouseDownDefault: !1,
                enableLayoutCandidates: !0,
                excludeFromLayout: {}
              }, u), this.keyboardPluginClasses = "", c.bindMethods(t, this);
              var l = this.options.inputName,
                  f = void 0 === l ? this.defaultName : l;
              if (this.input = {}, this.input[f] = "", this.keyboardDOMClass = i, this.buttonElements = {}, window.SimpleKeyboardInstances || (window.SimpleKeyboardInstances = {}), this.currentInstanceName = this.utilities.camelCase(this.keyboardDOMClass), window.SimpleKeyboardInstances[this.currentInstanceName] = this, this.allKeyboardInstances = window.SimpleKeyboardInstances, this.keyboardInstanceNames = Object.keys(window.SimpleKeyboardInstances), this.isFirstKeyboardInstance = this.keyboardInstanceNames[0] === this.currentInstanceName, this.physicalKeyboard = new d({
                dispatch: this.dispatch,
                getOptions: this.getOptions
              }), this.candidateBox = this.options.enableLayoutCandidates ? new v({
                utilities: this.utilities
              }) : null, !this.keyboardDOM) throw console.warn('".'.concat(i, '" was not found in the DOM.')), new Error("KEYBOARD_DOM_ERROR");
              this.render(), this.modules = {}, this.loadModules();
            }
          }

          var e, n;
          return e = t, (n = [{
            key: "setCaretPosition",
            value: function (t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
              this.caretPosition = t, this.caretPositionEnd = e;
            }
          }, {
            key: "getInputCandidates",
            value: function (t) {
              var e = this,
                  n = this.options,
                  o = n.layoutCandidates,
                  r = n.layoutCandidatesCaseSensitiveMatch;
              if (!o || "object" !== m(o)) return {};
              var i = Object.keys(o).filter(function (n) {
                var o = t.substring(0, e.getCaretPositionEnd() || 0) || t,
                    i = new RegExp("".concat(n, "$"), r ? "g" : "gi");
                return !!g(o.matchAll(i)).length;
              });

              if (i.length > 1) {
                var a = i.sort(function (t, e) {
                  return e.length - t.length;
                })[0];
                return {
                  candidateKey: a,
                  candidateValue: o[a]
                };
              }

              if (i.length) {
                var s = i[0];
                return {
                  candidateKey: s,
                  candidateValue: o[s]
                };
              }

              return {};
            }
          }, {
            key: "showCandidatesBox",
            value: function (t, e, n) {
              var o = this;
              this.candidateBox && this.candidateBox.show({
                candidateValue: e,
                targetElement: n,
                onSelect: function (e, n) {
                  var r = o.options.layoutCandidatesCaseSensitiveMatch,
                      i = e.normalize("NFD"),
                      a = o.getInput(o.options.inputName, !0),
                      s = o.getCaretPositionEnd() || 0,
                      u = a.substring(0, s || 0) || a,
                      c = new RegExp("".concat(t, "$"), r ? "g" : "gi"),
                      l = u.replace(c, i),
                      f = a.replace(u, l),
                      d = l.length - u.length,
                      p = (s || a.length) + d;
                  p < 0 && (p = 0), o.setInput(f, o.options.inputName, !0), o.setCaretPosition(p), "function" == typeof o.options.onChange && o.options.onChange(o.getInput(o.options.inputName, !0), n), "function" == typeof o.options.onChangeAll && o.options.onChangeAll(o.getAllInputs(), n);
                }
              });
            }
          }, {
            key: "handleButtonClicked",
            value: function (t, e) {
              var n = this.options,
                  o = n.inputName,
                  r = void 0 === o ? this.defaultName : o,
                  i = n.debug;

              if ("{//}" !== t) {
                this.input[r] || (this.input[r] = "");
                var a = this.utilities.getUpdatedInput(t, this.input[r], this.caretPosition, this.caretPositionEnd);
                if (this.utilities.isStandardButton(t) && this.activeInputElement && this.input[r] && this.input[r] === a && 0 === this.caretPosition && this.caretPositionEnd === a.length) return this.setInput("", this.options.inputName, !0), this.setCaretPosition(0), this.activeInputElement.value = "", this.activeInputElement.setSelectionRange(0, 0), void this.handleButtonClicked(t, e);

                if ("function" == typeof this.options.onKeyPress && this.options.onKeyPress(t, e), this.input[r] !== a && (!this.options.inputPattern || this.options.inputPattern && this.inputPatternIsValid(a))) {
                  if (this.options.maxLength && this.utilities.handleMaxLength(this.input, a)) return;
                  var s = this.utilities.getUpdatedInput(t, this.input[r], this.caretPosition, this.caretPositionEnd, !0);

                  if (this.setInput(s, this.options.inputName, !0), i && console.log("Input changed:", this.getAllInputs()), this.options.debug && console.log("Caret at: ", this.getCaretPosition(), this.getCaretPositionEnd(), "(".concat(this.keyboardDOMClass, ")")), this.options.syncInstanceInputs && this.syncInstanceInputs(), "function" == typeof this.options.onChange && this.options.onChange(this.getInput(this.options.inputName, !0), e), "function" == typeof this.options.onChangeAll && this.options.onChangeAll(this.getAllInputs(), e), null != e && e.target && this.options.enableLayoutCandidates) {
                    var u,
                        c = this.getInputCandidates(a),
                        l = c.candidateKey,
                        f = c.candidateValue;
                    l && f ? this.showCandidatesBox(l, f, this.keyboardDOM) : null === (u = this.candidateBox) || void 0 === u || u.destroy();
                  }
                }

                i && console.log("Key pressed:", t);
              }
            }
          }, {
            key: "getMouseHold",
            value: function () {
              return this.isMouseHold;
            }
          }, {
            key: "setMouseHold",
            value: function (t) {
              this.options.syncInstanceInputs ? this.dispatch(function (e) {
                e.isMouseHold = t;
              }) : this.isMouseHold = t;
            }
          }, {
            key: "handleButtonMouseDown",
            value: function (t, e) {
              var n = this;
              e && (this.options.preventMouseDownDefault && e.preventDefault(), this.options.stopMouseDownPropagation && e.stopPropagation(), e.target.classList.add(this.activeButtonClass)), this.holdInteractionTimeout && clearTimeout(this.holdInteractionTimeout), this.holdTimeout && clearTimeout(this.holdTimeout), this.setMouseHold(!0), this.options.disableButtonHold || (this.holdTimeout = window.setTimeout(function () {
                (n.getMouseHold() && (!t.includes("{") && !t.includes("}") || "{delete}" === t || "{backspace}" === t || "{bksp}" === t || "{space}" === t || "{tab}" === t) || "{arrowright}" === t || "{arrowleft}" === t || "{arrowup}" === t || "{arrowdown}" === t) && (n.options.debug && console.log("Button held:", t), n.handleButtonHold(t)), clearTimeout(n.holdTimeout);
              }, 500));
            }
          }, {
            key: "handleButtonMouseUp",
            value: function (t, e) {
              var n = this;
              e && (this.options.preventMouseUpDefault && e.preventDefault && e.preventDefault(), this.options.stopMouseUpPropagation && e.stopPropagation && e.stopPropagation(), !(e.target === this.keyboardDOM || e.target && this.keyboardDOM.contains(e.target) || this.candidateBox && this.candidateBox.candidateBoxElement && (e.target === this.candidateBox.candidateBoxElement || e.target && this.candidateBox.candidateBoxElement.contains(e.target))) && this.candidateBox && this.candidateBox.destroy()), this.recurseButtons(function (t) {
                t.classList.remove(n.activeButtonClass);
              }), this.setMouseHold(!1), this.holdInteractionTimeout && clearTimeout(this.holdInteractionTimeout), t && "function" == typeof this.options.onKeyReleased && this.options.onKeyReleased(t);
            }
          }, {
            key: "handleKeyboardContainerMouseDown",
            value: function (t) {
              this.options.preventMouseDownDefault && t.preventDefault();
            }
          }, {
            key: "handleButtonHold",
            value: function (t) {
              var e = this;
              this.holdInteractionTimeout && clearTimeout(this.holdInteractionTimeout), this.holdInteractionTimeout = window.setTimeout(function () {
                e.getMouseHold() ? (e.handleButtonClicked(t), e.handleButtonHold(t)) : clearTimeout(e.holdInteractionTimeout);
              }, 100);
            }
          }, {
            key: "syncInstanceInputs",
            value: function () {
              var t = this;
              this.dispatch(function (e) {
                e.replaceInput(t.input), e.setCaretPosition(t.caretPosition, t.caretPositionEnd);
              });
            }
          }, {
            key: "clearInput",
            value: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.options.inputName || this.defaultName;
              this.input[t] = "", this.setCaretPosition(0), this.options.syncInstanceInputs && this.syncInstanceInputs();
            }
          }, {
            key: "getInput",
            value: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.options.inputName || this.defaultName,
                  e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

              if (this.options.syncInstanceInputs && !e && this.syncInstanceInputs(), this.options.rtl) {
                var n = this.input[t].replace("‫", "").replace("‬", "");
                return "‫" + n + "‬";
              }

              return this.input[t];
            }
          }, {
            key: "getAllInputs",
            value: function () {
              var t = this,
                  e = {};
              return Object.keys(this.input).forEach(function (n) {
                e[n] = t.getInput(n, !0);
              }), e;
            }
          }, {
            key: "setInput",
            value: function (t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.options.inputName || this.defaultName,
                  n = arguments.length > 2 ? arguments[2] : void 0;
              this.input[e] = t, !n && this.options.syncInstanceInputs && this.syncInstanceInputs();
            }
          }, {
            key: "replaceInput",
            value: function (t) {
              this.input = t;
            }
          }, {
            key: "setOptions",
            value: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  e = this.changedOptions(t);
              this.options = Object.assign(this.options, t), e.length && (this.options.debug && console.log("changedOptions", e), this.onSetOptions(e), this.render());
            }
          }, {
            key: "changedOptions",
            value: function (t) {
              var e = this;
              return Object.keys(t).filter(function (n) {
                return JSON.stringify(t[n]) !== JSON.stringify(e.options[n]);
              });
            }
          }, {
            key: "onSetOptions",
            value: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
              t.includes("layoutName") && this.candidateBox && this.candidateBox.destroy(), (t.includes("layoutCandidatesPageSize") || t.includes("layoutCandidates")) && this.candidateBox && (this.candidateBox.destroy(), this.candidateBox = new v({
                utilities: this.utilities
              }));
            }
          }, {
            key: "resetRows",
            value: function () {
              this.keyboardRowsDOM && this.keyboardRowsDOM.remove(), this.keyboardDOM.className = this.keyboardDOMClass, this.buttonElements = {};
            }
          }, {
            key: "dispatch",
            value: function (t) {
              if (!window.SimpleKeyboardInstances) throw console.warn("SimpleKeyboardInstances is not defined. Dispatch cannot be called."), new Error("INSTANCES_VAR_ERROR");
              return Object.keys(window.SimpleKeyboardInstances).forEach(function (e) {
                t(window.SimpleKeyboardInstances[e], e);
              });
            }
          }, {
            key: "addButtonTheme",
            value: function (t, e) {
              var n = this;
              e && t && (t.split(" ").forEach(function (o) {
                e.split(" ").forEach(function (e) {
                  n.options.buttonTheme || (n.options.buttonTheme = []);
                  var r = !1;
                  n.options.buttonTheme.map(function (t) {
                    if (null != t && t.class.split(" ").includes(e)) {
                      r = !0;
                      var n = t.buttons.split(" ");
                      n.includes(o) || (r = !0, n.push(o), t.buttons = n.join(" "));
                    }

                    return t;
                  }), r || n.options.buttonTheme.push({
                    class: e,
                    buttons: t
                  });
                });
              }), this.render());
            }
          }, {
            key: "removeButtonTheme",
            value: function (t, e) {
              var n = this;
              if (!t && !e) return this.options.buttonTheme = [], void this.render();
              t && Array.isArray(this.options.buttonTheme) && this.options.buttonTheme.length && (t.split(" ").forEach(function (t) {
                var o, r;
                null === (o = n.options) || void 0 === o || null === (r = o.buttonTheme) || void 0 === r || r.map(function (o, r) {
                  if (o && e && e.includes(o.class) || !e) {
                    var i,
                        a,
                        s = null === (i = o) || void 0 === i ? void 0 : i.buttons.split(" ").filter(function (e) {
                      return e !== t;
                    });
                    o && null != s && s.length ? o.buttons = s.join(" ") : (null === (a = n.options.buttonTheme) || void 0 === a || a.splice(r, 1), o = null);
                  }

                  return o;
                });
              }), this.render());
            }
          }, {
            key: "getButtonElement",
            value: function (t) {
              var e,
                  n = this.buttonElements[t];
              return n && (e = n.length > 1 ? n : n[0]), e;
            }
          }, {
            key: "inputPatternIsValid",
            value: function (t) {
              var e,
                  n = this.options.inputPattern;

              if ((e = n instanceof RegExp ? n : n[this.options.inputName || this.defaultName]) && t) {
                var o = e.test(t);
                return this.options.debug && console.log('inputPattern ("'.concat(e, '"): ').concat(o ? "passed" : "did not pass!")), o;
              }

              return !0;
            }
          }, {
            key: "setEventListeners",
            value: function () {
              !this.isFirstKeyboardInstance && this.allKeyboardInstances || (this.options.debug && console.log("Caret handling started (".concat(this.keyboardDOMClass, ")")), document.addEventListener("keyup", this.handleKeyUp), document.addEventListener("keydown", this.handleKeyDown), document.addEventListener("mouseup", this.handleMouseUp), document.addEventListener("touchend", this.handleTouchEnd), document.addEventListener("select", this.handleSelect), document.addEventListener("selectionchange", this.handleSelectionChange));
            }
          }, {
            key: "handleKeyUp",
            value: function (t) {
              this.caretEventHandler(t), this.options.physicalKeyboardHighlight && this.physicalKeyboard.handleHighlightKeyUp(t);
            }
          }, {
            key: "handleKeyDown",
            value: function (t) {
              this.options.physicalKeyboardHighlight && this.physicalKeyboard.handleHighlightKeyDown(t);
            }
          }, {
            key: "handleMouseUp",
            value: function (t) {
              this.caretEventHandler(t);
            }
          }, {
            key: "handleTouchEnd",
            value: function (t) {
              this.caretEventHandler(t);
            }
          }, {
            key: "handleSelect",
            value: function (t) {
              this.caretEventHandler(t);
            }
          }, {
            key: "handleSelectionChange",
            value: function (t) {
              this.caretEventHandler(t);
            }
          }, {
            key: "caretEventHandler",
            value: function (t) {
              var e,
                  n = this;
              t.target.tagName && (e = t.target.tagName.toLowerCase()), this.dispatch(function (o) {
                var r = t.target === o.keyboardDOM || t.target && o.keyboardDOM.contains(t.target);
                ("textarea" === e || "input" === e && ["text", "search", "url", "tel", "password"].includes(t.target.type)) && !o.options.disableCaretPositioning ? (o.setCaretPosition(t.target.selectionStart, t.target.selectionEnd), n.activeInputElement = t.target, o.options.debug && console.log("Caret at: ", o.getCaretPosition(), o.getCaretPositionEnd(), t && t.target.tagName.toLowerCase(), "(".concat(o.keyboardDOMClass, ")"))) : !o.options.disableCaretPositioning && r || "selectionchange" === (null == t ? void 0 : t.type) || (o.setCaretPosition(null), n.activeInputElement = null, o.options.debug && console.log('Caret position reset due to "'.concat(null == t ? void 0 : t.type, '" event'), t));
              });
            }
          }, {
            key: "recurseButtons",
            value: function (t) {
              var e = this;
              t && Object.keys(this.buttonElements).forEach(function (n) {
                return e.buttonElements[n].forEach(t);
              });
            }
          }, {
            key: "destroy",
            value: function () {
              this.options.debug && console.log("Destroying simple-keyboard instance: ".concat(this.currentInstanceName)), document.removeEventListener("keyup", this.handleKeyUp), document.removeEventListener("keydown", this.handleKeyDown), document.removeEventListener("mouseup", this.handleMouseUp), document.removeEventListener("touchend", this.handleTouchEnd), document.removeEventListener("select", this.handleSelect), document.removeEventListener("selectionchange", this.handleSelectionChange), document.onpointerup = null, document.ontouchend = null, document.ontouchcancel = null, document.onmouseup = null, this.recurseButtons(function (t) {
                t && (t.onpointerdown = null, t.onpointerup = null, t.onpointercancel = null, t.ontouchstart = null, t.ontouchend = null, t.ontouchcancel = null, t.onclick = null, t.onmousedown = null, t.onmouseup = null, t.remove(), t = null);
              }), this.keyboardDOM.onpointerdown = null, this.keyboardDOM.ontouchstart = null, this.keyboardDOM.onmousedown = null, this.resetRows(), this.candidateBox && (this.candidateBox.destroy(), this.candidateBox = null), this.activeInputElement = null, this.keyboardDOM.innerHTML = "", window.SimpleKeyboardInstances[this.currentInstanceName] = null, delete window.SimpleKeyboardInstances[this.currentInstanceName], this.initialized = !1;
            }
          }, {
            key: "getButtonThemeClasses",
            value: function (t) {
              var e = this.options.buttonTheme,
                  n = [];
              return Array.isArray(e) && e.forEach(function (e) {
                if (e && e.class && "string" == typeof e.class && e.buttons && "string" == typeof e.buttons) {
                  var o = e.class.split(" ");
                  e.buttons.split(" ").includes(t) && (n = [].concat(g(n), g(o)));
                } else console.warn('Incorrect "buttonTheme". Please check the documentation.', e);
              }), n;
            }
          }, {
            key: "setDOMButtonAttributes",
            value: function (t, e) {
              var n = this.options.buttonAttributes;
              Array.isArray(n) && n.forEach(function (n) {
                n.attribute && "string" == typeof n.attribute && n.value && "string" == typeof n.value && n.buttons && "string" == typeof n.buttons ? n.buttons.split(" ").includes(t) && e(n.attribute, n.value) : console.warn('Incorrect "buttonAttributes". Please check the documentation.', n);
              });
            }
          }, {
            key: "onTouchDeviceDetected",
            value: function () {
              this.processAutoTouchEvents(), this.disableContextualWindow();
            }
          }, {
            key: "disableContextualWindow",
            value: function () {
              window.oncontextmenu = function (t) {
                if (t.target.classList.contains("hg-button")) return t.preventDefault(), t.stopPropagation(), !1;
              };
            }
          }, {
            key: "processAutoTouchEvents",
            value: function () {
              this.options.autoUseTouchEvents && (this.options.useTouchEvents = !0, this.options.debug && console.log("autoUseTouchEvents: Touch device detected, useTouchEvents enabled."));
            }
          }, {
            key: "onInit",
            value: function () {
              this.options.debug && console.log("".concat(this.keyboardDOMClass, " Initialized")), this.setEventListeners(), "function" == typeof this.options.onInit && this.options.onInit(this);
            }
          }, {
            key: "beforeFirstRender",
            value: function () {
              this.utilities.isTouchDevice() && this.onTouchDeviceDetected(), "function" == typeof this.options.beforeFirstRender && this.options.beforeFirstRender(this), this.isFirstKeyboardInstance && this.utilities.pointerEventsSupported() && !this.options.useTouchEvents && !this.options.useMouseEvents && this.options.debug && console.log("Using PointerEvents as it is supported by this browser"), this.options.useTouchEvents && this.options.debug && console.log("useTouchEvents has been enabled. Only touch events will be used.");
            }
          }, {
            key: "beforeRender",
            value: function () {
              "function" == typeof this.options.beforeRender && this.options.beforeRender(this);
            }
          }, {
            key: "onRender",
            value: function () {
              "function" == typeof this.options.onRender && this.options.onRender(this);
            }
          }, {
            key: "onModulesLoaded",
            value: function () {
              "function" == typeof this.options.onModulesLoaded && this.options.onModulesLoaded(this);
            }
          }, {
            key: "loadModules",
            value: function () {
              var t = this;
              Array.isArray(this.options.modules) && (this.options.modules.forEach(function (e) {
                var n = new e(t);
                n.init && n.init(t);
              }), this.keyboardPluginClasses = "modules-loaded", this.render(), this.onModulesLoaded());
            }
          }, {
            key: "getModuleProp",
            value: function (t, e) {
              return !!this.modules[t] && this.modules[t][e];
            }
          }, {
            key: "getModulesList",
            value: function () {
              return Object.keys(this.modules);
            }
          }, {
            key: "parseRowDOMContainers",
            value: function (t, e, n, o) {
              var r = this,
                  i = Array.from(t.children),
                  a = 0;
              return i.length && n.forEach(function (n, s) {
                var u = o[s];
                if (!(u && u > n)) return !1;
                var c = n - a,
                    l = u - a,
                    f = document.createElement("div");
                f.className += "hg-button-container";
                var d = "".concat(r.options.layoutName, "-r").concat(e, "c").concat(s);
                f.setAttribute("data-skUID", d);
                var p = i.splice(c, l - c + 1);
                a = l - c, p.forEach(function (t) {
                  return f.appendChild(t);
                }), i.splice(c, 0, f), t.innerHTML = "", i.forEach(function (e) {
                  return t.appendChild(e);
                }), r.options.debug && console.log("rowDOMContainer", p, c, l, a + 1);
              }), t;
            }
          }, {
            key: "render",
            value: function () {
              var t = this;
              this.resetRows(), this.initialized || this.beforeFirstRender(), this.beforeRender();
              var e = "hg-layout-".concat(this.options.layoutName),
                  n = this.options.layout || {
                default: ["` 1 2 3 4 5 6 7 8 9 0 - = {bksp}", "{tab} q w e r t y u i o p [ ] \\", "{lock} a s d f g h j k l ; ' {enter}", "{shift} z x c v b n m , . / {shift}", ".com @ {space}"],
                shift: ["~ ! @ # $ % ^ & * ( ) _ + {bksp}", "{tab} Q W E R T Y U I O P { } |", '{lock} A S D F G H J K L : " {enter}', "{shift} Z X C V B N M < > ? {shift}", ".com @ {space}"]
              },
                  o = this.options.useTouchEvents || !1,
                  r = o ? "hg-touch-events" : "",
                  i = this.options.useMouseEvents || !1,
                  a = this.options.disableRowButtonContainers;
              this.keyboardDOM.className = this.getKeyboardClassString(this.options.theme, e, this.keyboardPluginClasses, r), this.keyboardRowsDOM = document.createElement("div"), this.keyboardRowsDOM.className = "hg-rows", n[this.options.layoutName || this.defaultName].forEach(function (e, n) {
                var r = e.split(" ");
                t.options.excludeFromLayout && t.options.excludeFromLayout[t.options.layoutName || t.defaultName] && (r = r.filter(function (e) {
                  return t.options.excludeFromLayout && !t.options.excludeFromLayout[t.options.layoutName || t.defaultName].includes(e);
                }));
                var s = document.createElement("div");
                s.className += "hg-row";
                var u = [],
                    c = [];
                r.forEach(function (e, r) {
                  var l,
                      f = !a && "string" == typeof e && e.length > 1 && 0 === e.indexOf("["),
                      d = !a && "string" == typeof e && e.length > 1 && e.indexOf("]") === e.length - 1;
                  f && (u.push(r), e = e.replace(/\[/g, "")), d && (c.push(r), e = e.replace(/\]/g, ""));
                  var p = t.utilities.getButtonClass(e),
                      h = t.utilities.getButtonDisplayName(e, t.options.display, t.options.mergeDisplay),
                      v = t.options.useButtonTag ? "button" : "div",
                      y = document.createElement(v);
                  y.className += "hg-button ".concat(p), (l = y.classList).add.apply(l, g(t.getButtonThemeClasses(e))), t.setDOMButtonAttributes(e, function (t, e) {
                    y.setAttribute(t, e);
                  }), t.activeButtonClass = "hg-activeButton", !t.utilities.pointerEventsSupported() || o || i ? o ? (y.ontouchstart = function (n) {
                    t.handleButtonClicked(e, n), t.handleButtonMouseDown(e, n);
                  }, y.ontouchend = function (n) {
                    t.handleButtonMouseUp(e, n);
                  }, y.ontouchcancel = function (n) {
                    t.handleButtonMouseUp(e, n);
                  }) : (y.onclick = function (n) {
                    t.setMouseHold(!1), t.handleButtonClicked(e, n);
                  }, y.onmousedown = function (n) {
                    t.handleButtonMouseDown(e, n);
                  }, y.onmouseup = function (n) {
                    t.handleButtonMouseUp(e, n);
                  }) : (y.onpointerdown = function (n) {
                    t.handleButtonClicked(e, n), t.handleButtonMouseDown(e, n);
                  }, y.onpointerup = function (n) {
                    t.handleButtonMouseUp(e, n);
                  }, y.onpointercancel = function (n) {
                    t.handleButtonMouseUp(e, n);
                  }), y.setAttribute("data-skBtn", e);
                  var m = "".concat(t.options.layoutName, "-r").concat(n, "b").concat(r);
                  y.setAttribute("data-skBtnUID", m);
                  var b = document.createElement("span");
                  b.innerHTML = h, y.appendChild(b), t.buttonElements[e] || (t.buttonElements[e] = []), t.buttonElements[e].push(y), s.appendChild(y);
                }), s = t.parseRowDOMContainers(s, n, u, c), t.keyboardRowsDOM.appendChild(s);
              }), this.keyboardDOM.appendChild(this.keyboardRowsDOM), this.onRender(), this.initialized || (this.initialized = !0, !this.utilities.pointerEventsSupported() || o || i ? o ? (document.ontouchend = function (e) {
                return t.handleButtonMouseUp(void 0, e);
              }, document.ontouchcancel = function (e) {
                return t.handleButtonMouseUp(void 0, e);
              }, this.keyboardDOM.ontouchstart = function (e) {
                return t.handleKeyboardContainerMouseDown(e);
              }) : o || (document.onmouseup = function (e) {
                return t.handleButtonMouseUp(void 0, e);
              }, this.keyboardDOM.onmousedown = function (e) {
                return t.handleKeyboardContainerMouseDown(e);
              }) : (document.onpointerup = function (e) {
                return t.handleButtonMouseUp(void 0, e);
              }, this.keyboardDOM.onpointerdown = function (e) {
                return t.handleKeyboardContainerMouseDown(e);
              }), this.onInit());
            }
          }]) && x(e.prototype, n), Object.defineProperty(e, "prototype", {
            writable: !1
          }), t;
        }();
      }(), o;
    }();
  });
  }(build$1));

  var Keyboard = /*@__PURE__*/getDefaultExportFromCjs(build$1.exports);

  var build = {exports: {}};

  /*!
   * 
   *   simple-keyboard-key-navigation v2.4.157
   *   https://github.com/hodgef/simple-keyboard-key-navigation
   * 
   *   Copyright (c) Francisco Hodge (https://github.com/hodgef)
   * 
   *   This source code is licensed under the MIT license found in the
   *   LICENSE file in the root directory of this source tree.
   * 
   */

  (function (module, exports) {
  !function (e, t) {
    module.exports = t() ;
  }(window, function () {
    return function (e) {
      var t = {};

      function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
          i: r,
          l: !1,
          exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
      }

      return n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
          enumerable: !0,
          get: r
        });
      }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(e, "__esModule", {
          value: !0
        });
      }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
          enumerable: !0,
          value: e
        }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) {
          return e[t];
        }.bind(null, o));
        return r;
      }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
          return e.default;
        } : function () {
          return e;
        };
        return n.d(t, "a", t), t;
      }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }, n.p = "", n(n.s = 4);
    }([function (e, t, n) {

      var r = n(2),
          o = n.n(r),
          a = n(3),
          i = n.n(a)()(o.a);
      i.push([e.i, '.simple-keyboard .hg-button.hg-standardBtn.hg-keyMarker,\n.simple-keyboard .hg-button.hg-functionBtn.hg-keyMarker,\n.simple-keyboard .hg-candidate-box-list-item.hg-keyMarker,\n.simple-keyboard .hg-candidate-box-close.hg-keyMarker {\n  box-shadow: 0 0 0 2px #88b8ff;\n  border-radius: 5px;\n}\n\n.simple-keyboard .hg-candidate-box-close {\n  align-items: center;\n  display: flex;\n  height: 40px;\n  justify-content: center;\n  width: 40px;\n}\n\n.simple-keyboard .hg-candidate-box-close::after {\n  content: "X";\n}\n', "", {
        version: 3,
        sources: ["webpack://./src/index.css"],
        names: [],
        mappings: "AAAA;;;;EAIE,6BAA6B;EAC7B,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,YAAY;AACd",
        sourcesContent: ['.simple-keyboard .hg-button.hg-standardBtn.hg-keyMarker,\n.simple-keyboard .hg-button.hg-functionBtn.hg-keyMarker,\n.simple-keyboard .hg-candidate-box-list-item.hg-keyMarker,\n.simple-keyboard .hg-candidate-box-close.hg-keyMarker {\n  box-shadow: 0 0 0 2px #88b8ff;\n  border-radius: 5px;\n}\n\n.simple-keyboard .hg-candidate-box-close {\n  align-items: center;\n  display: flex;\n  height: 40px;\n  justify-content: center;\n  width: 40px;\n}\n\n.simple-keyboard .hg-candidate-box-close::after {\n  content: "X";\n}\n'],
        sourceRoot: ""
      }]), t.a = i;
    }, function (e, t, n) {

      var r,
          o = function () {
        return void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r;
      },
          a = function () {
        var e = {};
        return function (t) {
          if (void 0 === e[t]) {
            var n = document.querySelector(t);
            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
              n = n.contentDocument.head;
            } catch (e) {
              n = null;
            }
            e[t] = n;
          }

          return e[t];
        };
      }(),
          i = [];

      function c(e) {
        for (var t = -1, n = 0; n < i.length; n++) if (i[n].identifier === e) {
          t = n;
          break;
        }

        return t;
      }

      function s(e, t) {
        for (var n = {}, r = [], o = 0; o < e.length; o++) {
          var a = e[o],
              s = t.base ? a[0] + t.base : a[0],
              u = n[s] || 0,
              d = "".concat(s, " ").concat(u);
          n[s] = u + 1;
          var l = c(d),
              f = {
            css: a[1],
            media: a[2],
            sourceMap: a[3]
          };
          -1 !== l ? (i[l].references++, i[l].updater(f)) : i.push({
            identifier: d,
            updater: m(f, t),
            references: 1
          }), r.push(d);
        }

        return r;
      }

      function u(e) {
        var t = document.createElement("style"),
            r = e.attributes || {};

        if (void 0 === r.nonce) {
          var o = n.nc;
          o && (r.nonce = o);
        }

        if (Object.keys(r).forEach(function (e) {
          t.setAttribute(e, r[e]);
        }), "function" == typeof e.insert) e.insert(t);else {
          var i = a(e.insert || "head");
          if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          i.appendChild(t);
        }
        return t;
      }

      var d,
          l = (d = [], function (e, t) {
        return d[e] = t, d.filter(Boolean).join("\n");
      });

      function f(e, t, n, r) {
        var o = n ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
        if (e.styleSheet) e.styleSheet.cssText = l(t, o);else {
          var a = document.createTextNode(o),
              i = e.childNodes;
          i[t] && e.removeChild(i[t]), i.length ? e.insertBefore(a, i[t]) : e.appendChild(a);
        }
      }

      function y(e, t, n) {
        var r = n.css,
            o = n.media,
            a = n.sourceMap;
        if (o ? e.setAttribute("media", o) : e.removeAttribute("media"), a && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), e.styleSheet) e.styleSheet.cssText = r;else {
          for (; e.firstChild;) e.removeChild(e.firstChild);

          e.appendChild(document.createTextNode(r));
        }
      }

      var p = null,
          b = 0;

      function m(e, t) {
        var n, r, o;

        if (t.singleton) {
          var a = b++;
          n = p || (p = u(t)), r = f.bind(null, n, a, !1), o = f.bind(null, n, a, !0);
        } else n = u(t), r = y.bind(null, n, t), o = function () {
          !function (e) {
            if (null === e.parentNode) return !1;
            e.parentNode.removeChild(e);
          }(n);
        };

        return r(e), function (t) {
          if (t) {
            if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
            r(e = t);
          } else o();
        };
      }

      e.exports = function (e, t) {
        (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = o());
        var n = s(e = e || [], t);
        return function (e) {
          if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) {
            for (var r = 0; r < n.length; r++) {
              var o = c(n[r]);
              i[o].references--;
            }

            for (var a = s(e, t), u = 0; u < n.length; u++) {
              var d = c(n[u]);
              0 === i[d].references && (i[d].updater(), i.splice(d, 1));
            }

            n = a;
          }
        };
      };
    }, function (e, t, n) {

      function r(e, t) {
        return function (e) {
          if (Array.isArray(e)) return e;
        }(e) || function (e, t) {
          var n = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
          if (null == n) return;
          var r,
              o,
              a = [],
              i = !0,
              c = !1;

          try {
            for (n = n.call(e); !(i = (r = n.next()).done) && (a.push(r.value), !t || a.length !== t); i = !0);
          } catch (e) {
            c = !0, o = e;
          } finally {
            try {
              i || null == n.return || n.return();
            } finally {
              if (c) throw o;
            }
          }

          return a;
        }(e, t) || function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return o(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t);
        }(e, t) || function () {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }

      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);

        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];

        return r;
      }

      e.exports = function (e) {
        var t = r(e, 4),
            n = t[1],
            o = t[3];
        if (!o) return n;

        if ("function" == typeof btoa) {
          var a = btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
              i = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),
              c = "/*# ".concat(i, " */"),
              s = o.sources.map(function (e) {
            return "/*# sourceURL=".concat(o.sourceRoot || "").concat(e, " */");
          });
          return [n].concat(s).concat([c]).join("\n");
        }

        return [n].join("\n");
      };
    }, function (e, t, n) {

      e.exports = function (e) {
        var t = [];
        return t.toString = function () {
          return this.map(function (t) {
            var n = e(t);
            return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
          }).join("");
        }, t.i = function (e, n, r) {
          "string" == typeof e && (e = [[null, e, ""]]);
          var o = {};
          if (r) for (var a = 0; a < this.length; a++) {
            var i = this[a][0];
            null != i && (o[i] = !0);
          }

          for (var c = 0; c < e.length; c++) {
            var s = [].concat(e[c]);
            r && o[s[0]] || (n && (s[2] ? s[2] = "".concat(n, " and ").concat(s[2]) : s[2] = n), t.push(s));
          }
        }, t;
      };
    }, function (e, t, n) {

      n.r(t);
      var r = n(1),
          o = n.n(r),
          a = n(0),
          i = {
        insert: "head",
        singleton: !1
      };
      o()(a.a, i), a.a.locals;

      function c(e) {
        return function (e) {
          if (Array.isArray(e)) return s(e);
        }(e) || function (e) {
          if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
        }(e) || function (e, t) {
          if (e) {
            if ("string" == typeof e) return s(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(e, t) : void 0;
          }
        }(e) || function () {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }

      function s(e, t) {
        (null == t || t > e.length) && (t = e.length);

        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];

        return r;
      }

      function u(e, t) {
        for (var n, r = 0; r < t.length; r++) (n = t[r]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }

      function d(e, t, n) {
        return t && u(e.prototype, t), n && u(e, n), Object.defineProperty(e, "prototype", {
          writable: !1
        }), e;
      }

      var l = d(function e() {
        ((function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }))(this, e), function (e, t, n) {
          t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n;
        }(this, "init", function (e) {
          e.registerModule("keyNavigation", function (t) {
            t.initMarkerPos = [0, 0], t.lastMarkerPos = t.initMarkerPos, t.initVars = function (n) {
              t.markerPosition = {
                row: 0,
                button: 0
              }, t.layoutName = n || "", t.step = e.options.keyNavigationStep || 1;
            }, t.initMarker = function () {
              var e = t.getButtonAt.apply(t, c(t.lastMarkerPos)) ? t.lastMarkerPos : t.initMarkerPos;
              t.setMarker.apply(t, c(e));
            }, t.getButtonAt = function (n, r) {
              var o = t.layoutName;
              return e.keyboardDOM.querySelector('.hg-button[data-skbtnuid="'.concat(o, "-r").concat(n, "b").concat(r, '"]'));
            }, t.setMarker = function (n, r) {
              var o = t.getButtonAt(n, r);
              return o ? (t.markedBtn && (t.markedBtn.classList.remove("hg-keyMarker"), e.options.markerColor && (t.markedBtn.style = "")), o.classList.add("hg-keyMarker"), e.options.focusOnNavigation && o.focus && o.focus(), e.options.markerColor && (o.style = "box-shadow: 0 0 0 2px ".concat(e.options.markerColor)), t.markedBtn = o, t.lastMarkerPos = [n, r], t.markerPosition = {
                row: n,
                button: r
              }, !0) : (e.options.debug && console.log("SimpleKeyboardKeyNavigation: Button default-r".concat(n, "b").concat(r, " doesnt exist!")), !1);
            }, t.up = function () {
              document.querySelector(".hg-candidate-box") && e.candidateBox.destroy();
              var n = t.markerPosition.row - t.step,
                  r = t.markerPosition.button;
              if (!t.getButtonAt(n, r)) for (var o = r; 0 <= o; o--) if (t.getButtonAt(n, o)) {
                r = o;
                break;
              }
              t.setMarker(n, r);
            }, t.down = function () {
              document.querySelector(".hg-candidate-box") && e.candidateBox.destroy();
              var n = t.markerPosition.row + t.step,
                  r = t.markerPosition.button;
              if (!t.getButtonAt(n, r)) for (var o = r; 0 <= o; o--) if (t.getButtonAt(n, o)) {
                r = o;
                break;
              }
              t.setMarker(n, r);
            }, t.right = function () {
              if (document.querySelector(".hg-candidate-box")) {
                var n = e.candidateBox.candidateBoxElement.querySelector(".hg-candidate-box-list .hg-keyMarker").nextElementSibling;
                if (n) e.candidateBox.candidateBoxElement.querySelector(".hg-candidate-box-list .hg-keyMarker").classList.remove("hg-keyMarker"), n.classList.add("hg-keyMarker");else {
                  var r = e.candidateBox.candidateBoxElement.querySelector(".hg-candidate-box-next.hg-candidate-box-btn-active");
                  r && (r.click(), t.createCloseButton(), e.candidateBox.candidateBoxElement.querySelector("li").classList.add("hg-keyMarker"));
                }
              } else {
                var o = t.markerPosition.row,
                    a = t.markerPosition.button + t.step;
                t.setMarker(o, a);
              }
            }, t.left = function () {
              if (document.querySelector(".hg-candidate-box")) {
                var n = e.candidateBox.candidateBoxElement.querySelector(".hg-candidate-box-list .hg-keyMarker").previousElementSibling;
                if (n) e.candidateBox.candidateBoxElement.querySelector(".hg-candidate-box-list .hg-keyMarker").classList.remove("hg-keyMarker"), n.classList.add("hg-keyMarker");else {
                  var r = e.candidateBox.candidateBoxElement.querySelector(".hg-candidate-box-prev.hg-candidate-box-btn-active");
                  r && (r.click(), t.createCloseButton(), e.candidateBox.candidateBoxElement.querySelector("ul li:last-child").classList.add("hg-keyMarker"));
                }
              } else {
                var o = t.markerPosition.row,
                    a = t.markerPosition.button - t.step;
                t.setMarker(o, a);
              }
            }, t.press = function () {
              t.markedBtn && ((!e.candidateBox || !document.querySelector(".hg-candidate-box")) && (e.options.keyNavigationPressUseClick ? t.markedBtn.click() : e.handleButtonClicked(t.markedBtn.getAttribute("data-skbtn"), {
                target: t.markedBtn
              })), document.querySelector(".hg-candidate-box") && (e.candidateBox.candidateBoxElement.querySelector(".hg-candidate-box-close") ? e.candidateBox.candidateBoxElement.querySelector(".hg-candidate-box-list .hg-keyMarker").click() : (t.createCloseButton(), e.candidateBox.candidateBoxElement.querySelector("li").classList.add("hg-keyMarker"))));
            }, t.createCloseButton = function () {
              var t = document.createElement("li");
              t.onclick = function () {
                return e.candidateBox.destroy();
              }, t.className = "hg-candidate-box-close", e.candidateBox.candidateBoxElement.querySelector("ul").prepend(t);
            }, t.init = function () {
              t.initVars(e.options.layoutName), t.initMarker();
            }, t.fn = {}, t.fn.onRender = e.onRender, t.fn.onInit = e.onInit, e.onRender = function () {
              (e.options.layoutName !== t.layoutName || e.options.enableKeyNavigation !== t.enableKeyNavigation) && e.options.enableKeyNavigation && (e.options.debug && console.log("SimpleKeyboardKeyNavigation: Refreshed"), t.init()), t.fn.onRender();
            }, e.onInit = function () {
              e.options.enableKeyNavigation && t.init(), t.fn.onInit();
            };
          });
        });
      });
      t.default = l;
    }]);
  });
  }(build));

  var keyNavigation = /*@__PURE__*/getDefaultExportFromCjs(build.exports);

  var VirtualKeyboard = /*#__PURE__*/function (_EventDispatcher) {
    _inherits(VirtualKeyboard, _EventDispatcher);

    var _super = _createSuper(VirtualKeyboard);

    function VirtualKeyboard() {
      var _this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, VirtualKeyboard);

      _this = _super.call(this); // Props

      _this._joystick1 = options.joystick1;
      _this._joystick2 = options.joystick2;
      _this._buttonManager = options.buttonManager; // Setup

      _this._isOpen = false;

      _this._bindAll();

      _this._container = _this._createContainer();
      _this._keyboard = _this._createKeyboard();

      _this._setupEventListeners();

      return _this;
    }
    /**
     * Public
     */


    _createClass(VirtualKeyboard, [{
      key: "open",
      value: function open() {
        this._isOpen = true;

        this._keyboard.clearInput();

        this._container.style.transform = 'translateY(0%)';
      }
    }, {
      key: "close",
      value: function close() {
        this._isOpen = false;
        this._container.style.transform = 'translateY(100%)';
      }
    }, {
      key: "clear",
      value: function clear() {
        this._keyboard.clearInput();
      }
    }, {
      key: "getInput",
      value: function getInput() {
        return this._keyboard.getInput();
      }
      /**
       * Private
       */

    }, {
      key: "_createContainer",
      value: function _createContainer() {
        var container = document.createElement('div');
        container.classList.add('simple-keyboard');
        document.body.appendChild(container);
        return container;
      }
    }, {
      key: "_createKeyboard",
      value: function _createKeyboard() {
        var keyboard = new Keyboard({
          // Props
          enableKeyNavigation: true,
          useMouseEvents: false,
          modules: [keyNavigation],
          layout: {
            default: ['1 2 3 4 5 6 7 8 9 0', 'a z e r t y u i o p', 'q s d f g h j k l m', 'w x c v b n ? @ - _', '{space} {bksp} {enter}']
          },
          display: {
            '{bksp}': 'Effacer - B',
            '{enter}': 'Valider - D',
            '{space}': 'Espace - C'
          },
          // Events
          onChange: this.inputHandler,
          onKeyPress: this._keypressHandler,
          onModulesLoaded: this._modulesLoadedHandler
        });
        return keyboard;
      }
    }, {
      key: "_clickButton",
      value: function _clickButton(key) {
        var button = this._keyboard.buttonElements[key][0];

        this._keyboard.handleButtonClicked(key, {
          target: button
        });

        if (!button.classList.contains('active')) button.classList.add('active');
        button.click();
      }
    }, {
      key: "_clickActiveButton",
      value: function _clickActiveButton() {
        var button = this._keyboard.modules.keyNavigation.markedBtn;
        var key = button.getAttribute('data-skbtn');

        this._keyboard.handleButtonClicked(key, {
          target: button
        });

        if (!button.classList.contains('active')) button.classList.add('active');
        button.click();
      }
    }, {
      key: "_bindAll",
      value: function _bindAll() {
        this.inputHandler = this.inputHandler.bind(this);
        this._keypressHandler = this._keypressHandler.bind(this);
        this._modulesLoadedHandler = this._modulesLoadedHandler.bind(this);
        this._joystickQuickmoveHandler = this._joystickQuickmoveHandler.bind(this);
        this._keydownHandler = this._keydownHandler.bind(this);
        this._keyupHandler = this._keyupHandler.bind(this);
        this._machineKeydownHandler = this._machineKeydownHandler.bind(this);
        this._machineKeyupHandler = this._machineKeyupHandler.bind(this);
      }
    }, {
      key: "_setupEventListeners",
      value: function _setupEventListeners() {
        this._joystick1.addEventListener('joystick:quickmove', this._joystickQuickmoveHandler);

        this._buttonManager.addEventListener('keydown', this._machineKeydownHandler);

        this._buttonManager.addEventListener('keyup', this._machineKeyupHandler);

        window.addEventListener('keydown', this._keydownHandler);
        window.addEventListener('keyup', this._keyupHandler);
      }
    }, {
      key: "inputHandler",
      value: function inputHandler(e) {
        if (!this._isOpen) return;
        this.dispatchEvent('keyboard:input', e);
      }
    }, {
      key: "_keypressHandler",
      value: function _keypressHandler(e) {
        if (!this._isOpen) return;
        this.dispatchEvent('keyboard:keypress', e);
      }
    }, {
      key: "_modulesLoadedHandler",
      value: function _modulesLoadedHandler(e) {//
      }
    }, {
      key: "_joystickQuickmoveHandler",
      value: function _joystickQuickmoveHandler(e) {
        if (!this._isOpen) return;
        if (e.direction === 'up') this._keyboard.modules.keyNavigation.up();
        if (e.direction === 'down') this._keyboard.modules.keyNavigation.down();
        if (e.direction === 'left') this._keyboard.modules.keyNavigation.left();
        if (e.direction === 'right') this._keyboard.modules.keyNavigation.right();
      }
    }, {
      key: "_keydownHandler",
      value: function _keydownHandler(e) {
        if (!this._isOpen) return;
        if (e.key === 'ArrowUp') this._keyboard.modules.keyNavigation.up();
        if (e.key === 'ArrowDown') this._keyboard.modules.keyNavigation.down();
        if (e.key === 'ArrowLeft') this._keyboard.modules.keyNavigation.left();
        if (e.key === 'ArrowRight') this._keyboard.modules.keyNavigation.right();
        if (e.key === 'Enter') this._clickActiveButton();
      }
    }, {
      key: "_keyupHandler",
      value: function _keyupHandler(e) {
        if (!this._isOpen) return;

        var activeButtons = this._container.querySelectorAll('.active');

        for (var i = 0; i < activeButtons.length; i++) {
          var button = activeButtons[i];
          if (button.classList.contains('active')) button.classList.remove('active');
        }
      }
    }, {
      key: "_machineKeydownHandler",
      value: function _machineKeydownHandler(e) {
        if (!this._isOpen) return;
        if (e.key === 'a' && e.id === 1) this._clickActiveButton();
        if (e.key === 'b' && e.id === 1) this._clickButton('{bksp}');
        if (e.key === 'c' && e.id === 1) this._clickButton('{space}');
        if (e.key === 'd' && e.id === 1) this._clickButton('{enter}');
      }
    }, {
      key: "_machineKeyupHandler",
      value: function _machineKeyupHandler() {
        if (!this._isOpen) return;

        var activeButtons = this._container.querySelectorAll('.active');

        for (var i = 0; i < activeButtons.length; i++) {
          var button = activeButtons[i];
          if (button.classList.contains('active')) button.classList.remove('active');
        }
      }
    }]);

    return VirtualKeyboard;
  }(EventDispatcher);

  var Axis = /*#__PURE__*/function (_EventDispatcher) {
    _inherits(Axis, _EventDispatcher);

    var _super = _createSuper(Axis);

    function Axis() {
      var _this;

      _classCallCheck(this, Axis);

      _this = _super.call(this); // Setup

      _this._ipcRenderer = null;
      _this._firebaseToken = null;
      _this._leaderboard = null;
      _this._joystickManager = _this._createJoystickManager();
      _this._buttonManager = _this._createButtonManager();
      _this._playerManager = _this._createPlayerManager();
      _this._virtualKeyboard = _this._createVirtualKeyboard();

      _this._bindAll();

      _this._exposeMethods();

      _this._setupEventListeners();

      _this._setupIpcRendererEventListeners();

      return _this;
    }
    /**
     * Getters
     */


    _createClass(Axis, [{
      key: "mappedKeys",
      get: function get() {
        return this._mappedKeys;
      }
    }, {
      key: "ipcRenderer",
      get: function get() {
        return this._ipcRenderer;
      }
    }, {
      key: "joystick1",
      get: function get() {
        return this._joystickManager.joystick1;
      }
    }, {
      key: "joystick2",
      get: function get() {
        return this._joystickManager.joystick2;
      }
    }, {
      key: "buttonManager",
      get: function get() {
        return this._buttonManager;
      }
    }, {
      key: "players",
      get: function get() {
        return this._playerManager.players;
      }
    }, {
      key: "leaderboard",
      get: function get() {
        return this._leaderboard;
      }
    }, {
      key: "virtualKeyboard",
      get: function get() {
        return this._virtualKeyboard;
      }
      /**
       * Public
       */

    }, {
      key: "destroy",
      value: function destroy() {
        this._removeIpcRendererEventListeners();

        this._ipcRenderer = null;
      }
    }, {
      key: "registerKeys",
      value: function registerKeys(keyboardKeys, key, id) {
        return this._buttonManager.registerKeys(keyboardKeys, key, id);
      }
    }, {
      key: "enableMouseInteraction",
      value: function enableMouseInteraction(speed) {
        if (!this._ipcRenderer) return;

        this._ipcRenderer.send('mouse:enable', speed);
      }
    }, {
      key: "disableMouseInteraction",
      value: function disableMouseInteraction() {
        if (!this._ipcRenderer) return;

        this._ipcRenderer.send('mouse:disable', null);
      }
    }, {
      key: "createPlayer",
      value: function createPlayer(options) {
        return this._playerManager.createPlayer(options);
      }
    }, {
      key: "createLeaderboard",
      value: function createLeaderboard(options) {
        return this._createLeaderboard(options);
      }
      /**
       * Private
       */

    }, {
      key: "_exposeMethods",
      value: function _exposeMethods() {
        window.__axis__ = {};
        window.__axis__.set_ipc_renderer = this._setIpcRenderer;
      }
    }, {
      key: "_setIpcRenderer",
      value: function _setIpcRenderer(ipcRenderer) {
        if (this._ipcRenderer) return;
        this._ipcRenderer = ipcRenderer;
        this._buttonManager.ipcRenderer = this._ipcRenderer;
        this._joystickManager.ipcRenderer = this._ipcRenderer;
        if (this._leaderboard) this._leaderboard.ipcRenderer = this._ipcRenderer;

        this._setupIpcRendererEventListeners();
      }
    }, {
      key: "_createJoystickManager",
      value: function _createJoystickManager() {
        var joystickManager$1 = new joystickManager();
        return joystickManager$1;
      }
    }, {
      key: "_createButtonManager",
      value: function _createButtonManager() {
        var buttonManager = new ButtonManager();
        return buttonManager;
      }
    }, {
      key: "_createPlayerManager",
      value: function _createPlayerManager() {
        var playerManager = new PlayerManager({
          joystickManager: this._joystickManager,
          buttonManager: this._buttonManager
        });
        return playerManager;
      }
    }, {
      key: "_createLeaderboard",
      value: function _createLeaderboard(options) {
        if (!this._leaderboard) this._leaderboard = new Leaderboard(_objectSpread2({
          ipcRenderer: this._ipcRenderer
        }, options));
        return this._leaderboard;
      }
    }, {
      key: "_createVirtualKeyboard",
      value: function _createVirtualKeyboard() {
        var keyboard = new VirtualKeyboard({
          joystick1: this._joystickManager.joystick1,
          joystick2: this._joystickManager.joystick2,
          buttonManager: this._buttonManager
        });
        return keyboard;
      }
    }, {
      key: "_bindAll",
      value: function _bindAll() {
        // Exposed methods
        this._setIpcRenderer = this._setIpcRenderer.bind(this); // Event handlers

        this._keydownHandler = this._keydownHandler.bind(this);
        this._keyupHandler = this._keyupHandler.bind(this);
        this._joystickMoveHandler = this._joystickMoveHandler.bind(this);
        this._machineExitAttemptHandler = this._machineExitAttemptHandler.bind(this);
        this._machineExitCanceledHandler = this._machineExitCanceledHandler.bind(this);
        this._machineExitCompletedHandler = this._machineExitCompletedHandler.bind(this);
      }
    }, {
      key: "_setupEventListeners",
      value: function _setupEventListeners() {
        this._buttonManager.addEventListener('keydown', this._keydownHandler);

        this._buttonManager.addEventListener('keyup', this._keyupHandler);

        this._joystickManager.addEventListener('joystick:move', this._joystickMoveHandler);
      }
    }, {
      key: "_setupIpcRendererEventListeners",
      value: function _setupIpcRendererEventListeners() {
        if (!this._ipcRenderer) return;

        this._ipcRenderer.on('exit:attempted', this._machineExitAttemptHandler);

        this._ipcRenderer.on('exit:canceled', this._machineExitCanceledHandler);

        this._ipcRenderer.on('exit:completed', this._machineExitCompletedHandler);
      }
    }, {
      key: "_removeIpcRendererEventListeners",
      value: function _removeIpcRendererEventListeners() {
        if (!this._ipcRenderer) return;

        this._ipcRenderer.removeListener('exit:attempted', this._machineExitAttemptHandler);

        this._ipcRenderer.removeListener('exit:canceled', this._machineExitCanceledHandler);

        this._ipcRenderer.removeListener('exit:completed', this._machineExitCompletedHandler);
      }
    }, {
      key: "_keydownHandler",
      value: function _keydownHandler(e) {
        this.dispatchEvent('keydown', e);
      }
    }, {
      key: "_keyupHandler",
      value: function _keyupHandler(e) {
        this.dispatchEvent('keyup', e);
      }
    }, {
      key: "_joystickMoveHandler",
      value: function _joystickMoveHandler(e) {
        this.dispatchEvent('joystick:move', e);
      }
    }, {
      key: "_machineExitAttemptHandler",
      value: function _machineExitAttemptHandler() {
        this.dispatchEvent('exit:attempted');
      }
    }, {
      key: "_machineExitCanceledHandler",
      value: function _machineExitCanceledHandler() {
        this.dispatchEvent('exit:canceled');
      }
    }, {
      key: "_machineExitCompletedHandler",
      value: function _machineExitCompletedHandler() {
        this.dispatchEvent('exit:completed');
      }
    }]);

    return Axis;
  }(EventDispatcher);

  var Axis$1 = new Axis();

  var isDefaultControls = true; // setTimeout(() => {

  Axis$1.virtualKeyboard.open(); // }, 1000);
  // setTimeout(() => {
  //     Axis.virtualKeyboard.close();
  // }, 3000);

  var buttonsPlayer1 = [Axis$1.registerKeys('q', 'a', 1), Axis$1.registerKeys('d', 'b', 1), Axis$1.registerKeys('z', 'c', 1), Axis$1.registerKeys('s', 'd', 1)];
  var buttonsPlayer2 = [Axis$1.registerKeys('ArrowLeft', 'a', 2), Axis$1.registerKeys('ArrowRight', 'b', 2), Axis$1.registerKeys('ArrowUp', 'c', 2), Axis$1.registerKeys('ArrowDown', 'd', 2)];
  var player1 = Axis$1.createPlayer({
    id: 1,
    joystick: Axis$1.joystick1,
    buttons: buttonsPlayer1
  });
  var player2 = Axis$1.createPlayer({
    id: 2,
    joystick: Axis$1.joystick2,
    buttons: buttonsPlayer2
  }); // const leaderboard = Axis.createLeaderboard({
  //     id: 'demo-game',
  // });
  // leaderboard.postScore({
  //     username: 'sergiuonthetrack',
  //     value: 100,
  // }).then(() => {
  //     leaderboard.getScores().then((response) => {
  //         console.log(response);
  //     });
  // });

  var box1 = document.querySelector('.js-box-1');
  var position1 = {
    target: {
      x: 0,
      y: 0
    },
    current: {
      x: 0,
      y: 0
    }
  };
  var box2 = document.querySelector('.js-box-2');
  var position2 = {
    target: {
      x: 0,
      y: 0
    },
    current: {
      x: 0,
      y: 0
    }
  };

  function setup() {
    setupEventListeners();
    update();
  }

  function update() {
    position1.current.x = lerp(position1.current.x, position1.target.x, 1);
    position1.current.y = lerp(position1.current.y, position1.target.y, 1);
    position2.current.x = lerp(position2.current.x, position2.target.x, 1);
    position2.current.y = lerp(position2.current.y, position2.target.y, 1);
    box1.style.transform = "translate(".concat(position1.current.x, "px, ").concat(position1.current.y, "px)");
    box2.style.transform = "translate(".concat(position2.current.x, "px, ").concat(position2.current.y, "px)");

    if (position1.current.y < -window.innerHeight / 2) {
      switchControls();
    } else {
      resetControls();
    }

    requestAnimationFrame(update);
  }

  function resetControls() {
    if (isDefaultControls) return;
    console.log('Reset Controls');
    player1.buttons = buttonsPlayer1;
    player2.buttons = buttonsPlayer2;
    isDefaultControls = true;
  }

  function switchControls() {
    if (!isDefaultControls) return;
    console.log('Switch Controls');
    player1.buttons = buttonsPlayer2;
    player2.buttons = buttonsPlayer1;
    isDefaultControls = false;
  }

  function setupEventListeners() {
    player1.addEventListener('keydown', player1keydownHandler);
    player1.addEventListener('keyup', player1keyupHandler);
    player1.addEventListener('joystick:move', joystickMoveHandler);
    player1.addEventListener('joystick:quickmove', joystickQuickMoveHandler);
    player2.addEventListener('keydown', player2keydownHandler);
    player2.addEventListener('keyup', player2keyupHandler);
  }

  function player1keydownHandler(e) {
    var speed = 50;
    var directionX = 0;
    var directionY = 0;
    if (e.key === 'a') directionX = -1;
    if (e.key === 'b') directionX = 1;
    if (e.key === 'c') directionY = -1;
    if (e.key === 'd') directionY = 1;
    position1.target.x += speed * directionX;
    position1.target.y += speed * directionY;
  }

  function player1keyupHandler(e) {//
  }

  function player2keydownHandler(e) {
    var speed = 50;
    var directionX = 0;
    var directionY = 0;
    if (e.key === 'a') directionX = -1;
    if (e.key === 'b') directionX = 1;
    if (e.key === 'c') directionY = -1;
    if (e.key === 'd') directionY = 1;
    position2.target.x += speed * directionX;
    position2.target.y += speed * directionY;
  }

  function player2keyupHandler(e) {//
  }

  function joystickMoveHandler(e) {// const speed = 30;
    // position1.target.x += e.position.x * speed;
    // position1.target.y += -e.position.y * speed;
  }

  function joystickQuickMoveHandler(e) {
    var speed = 30;
    if (e.direction === 'left') position1.target.x += speed * -1;
    if (e.direction === 'right') position1.target.x += speed;
    if (e.direction === 'up') position1.target.y += speed * -1;
    if (e.direction === 'down') position1.target.y += speed;
  }

  function lerp(v0, v1, t) {
    return v0 * (1 - t) + v1 * t;
  }

  setup();

}));
