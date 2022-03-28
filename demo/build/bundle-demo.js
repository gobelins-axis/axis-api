
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

  var keys = ['a', 'b'];

  var Arcade$1 = /*#__PURE__*/function (_EventDispatcher) {
    _inherits(Arcade, _EventDispatcher);

    var _super = _createSuper(Arcade);

    function Arcade() {
      var _this;

      _classCallCheck(this, Arcade);

      _this = _super.call(this); // Setup

      _this._keys = keys;
      _this._mappedKeys = _this._setupMappedKeys();

      _this._bindAll();

      return _this;
    }
    /**
     * Static
     */


    _createClass(Arcade, [{
      key: "mappedKeys",
      get:
      /**
       * Getters
       */
      function get() {
        return this._mappedKeys;
      }
      /**
       * Public
       */

    }, {
      key: "start",
      value: function start() {
        this._setupEventListeners();
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this._removeEventListeners();
      }
    }, {
      key: "registerKey",
      value: function registerKey(machineKey, keyboardKey) {
        var keyIndex = this._keys.indexOf(machineKey);

        if (keyIndex === -1) {
          console.error("Key with name \"".concat(machineKey, "\" is not available"));
          return;
        }

        this._mappedKeys[this._keys[keyIndex]].keyboardKey = keyboardKey;
        return this._mappedKeys[this._keys[keyIndex]];
      }
      /**
       * Private
       */

    }, {
      key: "_setupMappedKeys",
      value: function _setupMappedKeys() {
        var mappedKeys = {};

        for (var i = 0; i < this._keys.length; i++) {
          var key = this._keys[i];
          mappedKeys[key] = {
            machineKey: key,
            keyboardKey: null,
            isPressed: false
          };
        }

        return mappedKeys;
      }
    }, {
      key: "_bindAll",
      value: function _bindAll() {
        // Public
        this.registerKey = this.registerKey.bind(this);
        this.destroy = this.destroy.bind(this);
        this.addEventListener = this.addEventListener.bind(this);
        this.removeEventListener = this.removeEventListener.bind(this); // Private

        this._keydownHandler = this._keydownHandler.bind(this);
        this._keyupHandler = this._keyupHandler.bind(this);
        this._machineKeydownHandler = this._machineKeydownHandler.bind(this);
        this._machineKeyupHandler = this._machineKeyupHandler.bind(this);
      }
    }, {
      key: "_setupEventListeners",
      value: function _setupEventListeners() {
        var _Arcade$ipcRenderer, _Arcade$ipcRenderer2;

        window.addEventListener('keydown', this._keydownHandler);
        window.addEventListener('keyup', this._keyupHandler);
        (_Arcade$ipcRenderer = Arcade.ipcRenderer) === null || _Arcade$ipcRenderer === void 0 ? void 0 : _Arcade$ipcRenderer.on('keydown', this._machineKeydownHandler);
        (_Arcade$ipcRenderer2 = Arcade.ipcRenderer) === null || _Arcade$ipcRenderer2 === void 0 ? void 0 : _Arcade$ipcRenderer2.on('keyup', this._machineKeyupHandler);
      }
    }, {
      key: "_removeEventListeners",
      value: function _removeEventListeners() {
        window.removeEventListener('keydown', this._keydownHandler);
        window.removeEventListener('keyup', this._keyupHandler);
      }
    }, {
      key: "_keydownHandler",
      value: function _keydownHandler(e) {
        for (var mappedKey in this._mappedKeys) {
          if (this._mappedKeys[mappedKey].keyboardKey === e.key) {
            this._mappedKeys[mappedKey].isPressed = true;
            this.dispatchEvent('keydown', this._mappedKeys[mappedKey]);
          }
        }
      }
    }, {
      key: "_keyupHandler",
      value: function _keyupHandler(e) {
        for (var mappedKey in this._mappedKeys) {
          if (this._mappedKeys[mappedKey].keyboardKey === e.key) {
            this._mappedKeys[mappedKey].isPressed = false;
            this.dispatchEvent('keyup', this._mappedKeys[mappedKey]);
          }
        }
      }
    }, {
      key: "_machineKeydownHandler",
      value: function _machineKeydownHandler(event, key) {
        for (var mappedKey in this._mappedKeys) {
          if (this._mappedKeys[mappedKey].machineKey === key) {
            this._mappedKeys[mappedKey].isPressed = true;
            this.dispatchEvent('keydown', this._mappedKeys[mappedKey]);
          }
        }
      }
    }, {
      key: "_machineKeyupHandler",
      value: function _machineKeyupHandler(event, key) {
        for (var mappedKey in this._mappedKeys) {
          if (this._mappedKeys[mappedKey].machineKey === key) {
            this._mappedKeys[mappedKey].isPressed = false;
            this.dispatchEvent('keyup', this._mappedKeys[mappedKey]);
          }
        }
      }
    }]);

    return Arcade;
  }(EventDispatcher);

  _defineProperty(Arcade$1, "ipcRenderer", null);

  var Arcade = window.__arcadeFeu || new Arcade$1();

  console.log(Arcade);

}));
