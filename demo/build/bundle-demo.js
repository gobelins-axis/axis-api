
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

  var joystick = {
    deadzone: 0.1
  };

  var Joystick = /*#__PURE__*/function (_EventDispatcher) {
    _inherits(Joystick, _EventDispatcher);

    var _super = _createSuper(Joystick);

    function Joystick() {
      var _this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Joystick);

      _this = _super.call(this); // Props

      _this._id = options.id; // Setup

      _this._ipcRenderer = null;
      _this._deadzone = joystick.deadzone;
      return _this;
    }
    /**
     * Getters & Setters
     */


    _createClass(Joystick, [{
      key: "ipcRenderer",
      get: function get() {
        return this._ipcRenderer;
      },
      set: function set(ipcRenderer) {
        this._ipcRenderer = ipcRenderer;
      }
    }, {
      key: "deadzone",
      get: function get() {
        return this._deadzone;
      },
      set: function set(deadzone) {
        this._deadzone = deadzone;
      }
    }]);

    return Joystick;
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
      _this._buttons = options.buttons;
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
        this._buttons = buttons;
      }
      /**
       * Public
       */

      /**
       * Private
       */

    }]);

    return Player;
  }(EventDispatcher);

  var joystickManager = /*#__PURE__*/function () {
    function joystickManager() {
      _classCallCheck(this, joystickManager);

      // Setup
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

        this._setupIpcRendererEventListeners();
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
      value: function _joystickMoveHandler() {// Send event to the right joystick
      }
    }]);

    return joystickManager;
  }();

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
        this.dispatchEvent('keydown', e);
      }
    }, {
      key: "keyupHandler",
      value: function keyupHandler(e) {
        this.dispatchEvent('keyup', e);
      }
      /**
       * Private
       */

    }]);

    return Button;
  }(EventDispatcher);

  function getArray(value) {
    if (Array.isArray(value)) return value;else return [value];
  }

  var ButtonManager = /*#__PURE__*/function () {
    function ButtonManager() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, ButtonManager);

      // Props
      this._buttons = options.buttons; // Setup

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
      value: function _machineKeydownHandler(event, key) {}
    }, {
      key: "_machineKeyupHandler",
      value: function _machineKeyupHandler(event, key) {}
    }]);

    return ButtonManager;
  }();

  var Arcade = /*#__PURE__*/function (_EventDispatcher) {
    _inherits(Arcade, _EventDispatcher);

    var _super = _createSuper(Arcade);

    function Arcade() {
      var _this;

      _classCallCheck(this, Arcade);

      _this = _super.call(this); // Setup

      _this._ipcRenderer = null;
      _this._joystick1 = _this._createJoystick1();
      _this._joystick2 = _this._createJoystick2();
      _this._joystickManager = _this._createJoystickManager();
      _this._buttons = _this._createButtons();
      _this._buttonManager = _this._createButtonManager();
      _this._player1 = _this._createPlayer1();
      _this._player2 = _this._createPlayer2();

      _this._bindAll();

      _this._exposeMethods();

      _this._setupIpcRendererEventListeners();

      return _this;
    }
    /**
     * Getters
     */


    _createClass(Arcade, [{
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
        return this._joystick1;
      }
    }, {
      key: "joystick2",
      get: function get() {
        return this._joystick2;
      }
    }, {
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
      /**
       * Private
       */

    }, {
      key: "_exposeMethods",
      value: function _exposeMethods() {
        window.__arcade__ = {};
        window.__arcade__.set_ipc_renderer = this._setIpcRenderer;
      }
    }, {
      key: "_setIpcRenderer",
      value: function _setIpcRenderer(ipcRenderer) {
        if (this._ipcRenderer) return;
        this._ipcRenderer = ipcRenderer;

        this._setupIpcRendererEventListeners();
      }
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
      key: "_createJoystickManager",
      value: function _createJoystickManager() {
        var joystickManager$1 = new joystickManager({
          joysticks: [this._joystick1, this._joystick2]
        });
        return joystickManager$1;
      }
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
      key: "_createButtonManager",
      value: function _createButtonManager() {
        var buttonManager = new ButtonManager({
          buttons: this._buttons
        });
        return buttonManager;
      }
    }, {
      key: "_createPlayer1",
      value: function _createPlayer1() {
        var player1 = new Player({
          id: 1,
          joystick: this._joystick1,
          buttons: this._buttonManager.getButtonsById(1)
        });
        return player1;
      }
    }, {
      key: "_createPlayer2",
      value: function _createPlayer2() {
        var player2 = new Player({
          id: 2,
          joystick: this._joystick2,
          buttons: this._buttonManager.getButtonsById(2)
        });
        return player2;
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

    return Arcade;
  }(EventDispatcher);

  var Arcade$1 = new Arcade();

  document.querySelector('.js-box');

  function setup() {
    Arcade$1.registerKeys('ArrowLeft', 'a', 1);
    Arcade$1.registerKeys('ArrowRight', 'b', 1);
    Arcade$1.registerKeys('q', 'a', 2);
    Arcade$1.registerKeys('d', 'b', 2);
    update();
  }

  function update() {
    requestAnimationFrame(update);
  }

  setup();

}));
