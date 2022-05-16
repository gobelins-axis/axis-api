
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

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

  var joystickManager = /*#__PURE__*/function () {
    function joystickManager() {

      _classCallCheck(this, joystickManager);

      // Setup
      this._joystick1 = this._createJoystick1();
      this._joystick2 = this._createJoystick2();
      this._ipcRenderer = null;

      this._bindAll();

      this._setupIpcRendererEventListeners();
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
        if (data.id === 1) this._joystick1.moveHandler(data.position); // if (data.id === 2) this._joystick2.moveHandler(data.position);
      }
    }]);

    return joystickManager;
  }();

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

  var ButtonManager = /*#__PURE__*/function () {
    function ButtonManager() {

      _classCallCheck(this, ButtonManager);

      // Setup
      this._buttons = this._createButtons();
      this._ipcRenderer = null;

      this._bindAll();

      this._setupEventListeners();
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
          buttons[i].keydownHandler(e);
        }
      }
    }, {
      key: "_keyupHandler",
      value: function _keyupHandler(e) {
        var buttons = this.getButtonsByKeyboardKey(e.key);

        for (var i = 0; i < buttons.length; i++) {
          buttons[i].keyupHandler(e);
        }
      }
    }, {
      key: "_machineKeydownHandler",
      value: function _machineKeydownHandler(event, data) {
        var button = this.getButton(data.key, data.id);
        button.keydownHandler(data);
      }
    }, {
      key: "_machineKeyupHandler",
      value: function _machineKeyupHandler(event, data) {
        var button = this.getButton(data.key, data.id);
        button.keyupHandler(data);
      }
    }]);

    return ButtonManager;
  }();

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

      this._player1 = this._createPlayer1();
      this._player2 = this._createPlayer2();
    }
    /**
     * Getters
     */


    _createClass(PlayerManager, [{
      key: "player1",
      get: function get() {
        return this._player1;
      }
    }, {
      key: "player2",
      get: function get() {
        return this._player2;
      }
      /**
       * Public
       */

    }, {
      key: "destroy",
      value: function destroy() {}
      /**
       * Private
       */

    }, {
      key: "_createPlayer1",
      value: function _createPlayer1() {
        var player1 = new Player({
          id: 1,
          joystick: this._joystickManager.joystick1,
          buttons: this._buttonManager.getButtonsById(1)
        });
        return player1;
      }
    }, {
      key: "_createPlayer2",
      value: function _createPlayer2() {
        var player2 = new Player({
          id: 2,
          joystick: this._joystickManager.joystick2,
          buttons: this._buttonManager.getButtonsById(2)
        });
        return player2;
      }
    }]);

    return PlayerManager;
  }();

  var Axis = /*#__PURE__*/function (_EventDispatcher) {
    _inherits(Axis, _EventDispatcher);

    var _super = _createSuper(Axis);

    function Axis() {
      var _this;

      _classCallCheck(this, Axis);

      _this = _super.call(this); // Setup

      _this._ipcRenderer = null;
      _this._joystickManager = _this._createJoystickManager();
      _this._buttonManager = _this._createButtonManager();
      _this._playerManager = _this._createPlayerManager();

      _this._bindAll();

      _this._exposeMethods();

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
      key: "player1",
      get: function get() {
        return this._playerManager.player1;
      }
    }, {
      key: "player2",
      get: function get() {
        return this._playerManager.player2;
      }
      /**
       * Public
       */

    }, {
      key: "start",
      value: function start() {// Once everything is configued,
        // we might need a start function to setup
        // stuffs like LED lights...
      }
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
      key: "_bindAll",
      value: function _bindAll() {
        // Exposed methods
        this._setIpcRenderer = this._setIpcRenderer.bind(this); // Event handlers

        this._machineExitAttemptHandler = this._machineExitAttemptHandler.bind(this);
        this._machineExitCanceledHandler = this._machineExitCanceledHandler.bind(this);
        this._machineExitCompletedHandler = this._machineExitCompletedHandler.bind(this);
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
    Axis$1.registerKeys('q', 'a', 1);
    Axis$1.registerKeys('d', 'b', 1);
    Axis$1.registerKeys('z', 'c', 1);
    Axis$1.registerKeys('s', 'd', 1);
    Axis$1.registerKeys('ArrowLeft', 'a', 2);
    Axis$1.registerKeys('ArrowRight', 'b', 2);
    Axis$1.registerKeys('ArrowUp', 'c', 2);
    Axis$1.registerKeys('ArrowDown', 'd', 2);
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
    requestAnimationFrame(update);
  }

  function setupEventListeners() {
    Axis$1.player1.addEventListener('keydown', player1keydownHandler);
    Axis$1.player1.addEventListener('keyup', player1keyupHandler);
    Axis$1.player1.addEventListener('joystick:move', joystickMoveHandler);
    Axis$1.player1.addEventListener('joystick:quickmove', joystickQuickMoveHandler);
    Axis$1.player2.addEventListener('keydown', player2keydownHandler);
    Axis$1.player2.addEventListener('keyup', player2keyupHandler);
  }

  function player1keydownHandler(e) {
    var speed = 50;
    var directionX = 0;
    var directionY = 0;

    if (e.key === 'a') {
      directionX = -1; // Axis.enableMouseInteraction();
    }

    if (e.key === 'b') {
      directionX = 1; // Axis.disableMouseInteraction();
    }

    if (e.key === 'c') {
      directionY = -1;
    }

    if (e.key === 'd') {
      directionY = 1;
    }

    position1.target.x += speed * directionX;
    position1.target.y += speed * directionY;
  }

  function player1keyupHandler(e) {//
  }

  function player2keydownHandler(e) {
    var speed = 50;
    var directionX = 0;
    var directionY = 0;

    if (e.key === 'a') {
      directionX = -1;
    }

    if (e.key === 'b') {
      directionX = 1;
    }

    if (e.key === 'c') {
      directionY = -1;
    }

    if (e.key === 'd') {
      directionY = 1;
    }

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
