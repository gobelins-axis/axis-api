
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

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

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
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

  var config$1 = {
    deadzone: 0.2,
    threshold: 0.1,
    inputInactiveDelay: 0.2,
    inputIntervalMax: 0.2,
    inputIntervalMin: 0.1
  };

  var leds = [// Controllers 1
  {
    name: 'button-a-1',
    strip: 1,
    index: 0
  }, {
    name: 'button-b-1',
    strip: 1,
    index: 1
  }, {
    name: 'button-c-1',
    strip: 1,
    index: 2
  }, {
    name: 'button-d-1',
    strip: 1,
    index: 3
  }, {
    name: 'button-e-1',
    strip: 1,
    index: 4
  }, {
    name: 'button-f-1',
    strip: 1,
    index: 5
  }, {
    name: 'button-g-1',
    strip: 1,
    index: 6
  }, {
    name: 'button-h-1',
    strip: 1,
    index: 7
  }, // Controllers 2
  {
    name: 'button-a-2',
    strip: 2,
    index: 0
  }, {
    name: 'button-b-2',
    strip: 2,
    index: 1
  }, {
    name: 'button-c-2',
    strip: 2,
    index: 2
  }, {
    name: 'button-d-2',
    strip: 2,
    index: 3
  }, {
    name: 'button-e-2',
    strip: 2,
    index: 4
  }, // Button Home
  {
    name: 'button-home-0',
    strip: 1,
    index: 5
  }];

  var config = {
    buttons: buttons,
    joystick: config$1,
    leds: leds
  };

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var colorString$1 = {exports: {}};

  var colorName$1 = {
    "aliceblue": [240, 248, 255],
    "antiquewhite": [250, 235, 215],
    "aqua": [0, 255, 255],
    "aquamarine": [127, 255, 212],
    "azure": [240, 255, 255],
    "beige": [245, 245, 220],
    "bisque": [255, 228, 196],
    "black": [0, 0, 0],
    "blanchedalmond": [255, 235, 205],
    "blue": [0, 0, 255],
    "blueviolet": [138, 43, 226],
    "brown": [165, 42, 42],
    "burlywood": [222, 184, 135],
    "cadetblue": [95, 158, 160],
    "chartreuse": [127, 255, 0],
    "chocolate": [210, 105, 30],
    "coral": [255, 127, 80],
    "cornflowerblue": [100, 149, 237],
    "cornsilk": [255, 248, 220],
    "crimson": [220, 20, 60],
    "cyan": [0, 255, 255],
    "darkblue": [0, 0, 139],
    "darkcyan": [0, 139, 139],
    "darkgoldenrod": [184, 134, 11],
    "darkgray": [169, 169, 169],
    "darkgreen": [0, 100, 0],
    "darkgrey": [169, 169, 169],
    "darkkhaki": [189, 183, 107],
    "darkmagenta": [139, 0, 139],
    "darkolivegreen": [85, 107, 47],
    "darkorange": [255, 140, 0],
    "darkorchid": [153, 50, 204],
    "darkred": [139, 0, 0],
    "darksalmon": [233, 150, 122],
    "darkseagreen": [143, 188, 143],
    "darkslateblue": [72, 61, 139],
    "darkslategray": [47, 79, 79],
    "darkslategrey": [47, 79, 79],
    "darkturquoise": [0, 206, 209],
    "darkviolet": [148, 0, 211],
    "deeppink": [255, 20, 147],
    "deepskyblue": [0, 191, 255],
    "dimgray": [105, 105, 105],
    "dimgrey": [105, 105, 105],
    "dodgerblue": [30, 144, 255],
    "firebrick": [178, 34, 34],
    "floralwhite": [255, 250, 240],
    "forestgreen": [34, 139, 34],
    "fuchsia": [255, 0, 255],
    "gainsboro": [220, 220, 220],
    "ghostwhite": [248, 248, 255],
    "gold": [255, 215, 0],
    "goldenrod": [218, 165, 32],
    "gray": [128, 128, 128],
    "green": [0, 128, 0],
    "greenyellow": [173, 255, 47],
    "grey": [128, 128, 128],
    "honeydew": [240, 255, 240],
    "hotpink": [255, 105, 180],
    "indianred": [205, 92, 92],
    "indigo": [75, 0, 130],
    "ivory": [255, 255, 240],
    "khaki": [240, 230, 140],
    "lavender": [230, 230, 250],
    "lavenderblush": [255, 240, 245],
    "lawngreen": [124, 252, 0],
    "lemonchiffon": [255, 250, 205],
    "lightblue": [173, 216, 230],
    "lightcoral": [240, 128, 128],
    "lightcyan": [224, 255, 255],
    "lightgoldenrodyellow": [250, 250, 210],
    "lightgray": [211, 211, 211],
    "lightgreen": [144, 238, 144],
    "lightgrey": [211, 211, 211],
    "lightpink": [255, 182, 193],
    "lightsalmon": [255, 160, 122],
    "lightseagreen": [32, 178, 170],
    "lightskyblue": [135, 206, 250],
    "lightslategray": [119, 136, 153],
    "lightslategrey": [119, 136, 153],
    "lightsteelblue": [176, 196, 222],
    "lightyellow": [255, 255, 224],
    "lime": [0, 255, 0],
    "limegreen": [50, 205, 50],
    "linen": [250, 240, 230],
    "magenta": [255, 0, 255],
    "maroon": [128, 0, 0],
    "mediumaquamarine": [102, 205, 170],
    "mediumblue": [0, 0, 205],
    "mediumorchid": [186, 85, 211],
    "mediumpurple": [147, 112, 219],
    "mediumseagreen": [60, 179, 113],
    "mediumslateblue": [123, 104, 238],
    "mediumspringgreen": [0, 250, 154],
    "mediumturquoise": [72, 209, 204],
    "mediumvioletred": [199, 21, 133],
    "midnightblue": [25, 25, 112],
    "mintcream": [245, 255, 250],
    "mistyrose": [255, 228, 225],
    "moccasin": [255, 228, 181],
    "navajowhite": [255, 222, 173],
    "navy": [0, 0, 128],
    "oldlace": [253, 245, 230],
    "olive": [128, 128, 0],
    "olivedrab": [107, 142, 35],
    "orange": [255, 165, 0],
    "orangered": [255, 69, 0],
    "orchid": [218, 112, 214],
    "palegoldenrod": [238, 232, 170],
    "palegreen": [152, 251, 152],
    "paleturquoise": [175, 238, 238],
    "palevioletred": [219, 112, 147],
    "papayawhip": [255, 239, 213],
    "peachpuff": [255, 218, 185],
    "peru": [205, 133, 63],
    "pink": [255, 192, 203],
    "plum": [221, 160, 221],
    "powderblue": [176, 224, 230],
    "purple": [128, 0, 128],
    "rebeccapurple": [102, 51, 153],
    "red": [255, 0, 0],
    "rosybrown": [188, 143, 143],
    "royalblue": [65, 105, 225],
    "saddlebrown": [139, 69, 19],
    "salmon": [250, 128, 114],
    "sandybrown": [244, 164, 96],
    "seagreen": [46, 139, 87],
    "seashell": [255, 245, 238],
    "sienna": [160, 82, 45],
    "silver": [192, 192, 192],
    "skyblue": [135, 206, 235],
    "slateblue": [106, 90, 205],
    "slategray": [112, 128, 144],
    "slategrey": [112, 128, 144],
    "snow": [255, 250, 250],
    "springgreen": [0, 255, 127],
    "steelblue": [70, 130, 180],
    "tan": [210, 180, 140],
    "teal": [0, 128, 128],
    "thistle": [216, 191, 216],
    "tomato": [255, 99, 71],
    "turquoise": [64, 224, 208],
    "violet": [238, 130, 238],
    "wheat": [245, 222, 179],
    "white": [255, 255, 255],
    "whitesmoke": [245, 245, 245],
    "yellow": [255, 255, 0],
    "yellowgreen": [154, 205, 50]
  };

  var simpleSwizzle = {exports: {}};

  var isArrayish$1 = function isArrayish(obj) {
    if (!obj || typeof obj === 'string') {
      return false;
    }

    return obj instanceof Array || Array.isArray(obj) || obj.length >= 0 && (obj.splice instanceof Function || Object.getOwnPropertyDescriptor(obj, obj.length - 1) && obj.constructor.name !== 'String');
  };

  var isArrayish = isArrayish$1;

  var concat = Array.prototype.concat;
  var slice = Array.prototype.slice;

  var swizzle$1 = simpleSwizzle.exports = function swizzle(args) {
    var results = [];

    for (var i = 0, len = args.length; i < len; i++) {
      var arg = args[i];

      if (isArrayish(arg)) {
        // http://jsperf.com/javascript-array-concat-vs-push/98
        results = concat.call(results, slice.call(arg));
      } else {
        results.push(arg);
      }
    }

    return results;
  };

  swizzle$1.wrap = function (fn) {
    return function () {
      return fn(swizzle$1(arguments));
    };
  };

  /* MIT license */

  var colorNames = colorName$1;

  var swizzle = simpleSwizzle.exports;

  var hasOwnProperty = Object.hasOwnProperty;
  var reverseNames = Object.create(null); // create a list of reverse color names

  for (var name in colorNames) {
    if (hasOwnProperty.call(colorNames, name)) {
      reverseNames[colorNames[name]] = name;
    }
  }

  var cs = colorString$1.exports = {
    to: {},
    get: {}
  };

  cs.get = function (string) {
    var prefix = string.substring(0, 3).toLowerCase();
    var val;
    var model;

    switch (prefix) {
      case 'hsl':
        val = cs.get.hsl(string);
        model = 'hsl';
        break;

      case 'hwb':
        val = cs.get.hwb(string);
        model = 'hwb';
        break;

      default:
        val = cs.get.rgb(string);
        model = 'rgb';
        break;
    }

    if (!val) {
      return null;
    }

    return {
      model: model,
      value: val
    };
  };

  cs.get.rgb = function (string) {
    if (!string) {
      return null;
    }

    var abbr = /^#([a-f0-9]{3,4})$/i;
    var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
    var rgba = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
    var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
    var keyword = /^(\w+)$/;
    var rgb = [0, 0, 0, 1];
    var match;
    var i;
    var hexAlpha;

    if (match = string.match(hex)) {
      hexAlpha = match[2];
      match = match[1];

      for (i = 0; i < 3; i++) {
        // https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
        var i2 = i * 2;
        rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
      }

      if (hexAlpha) {
        rgb[3] = parseInt(hexAlpha, 16) / 255;
      }
    } else if (match = string.match(abbr)) {
      match = match[1];
      hexAlpha = match[3];

      for (i = 0; i < 3; i++) {
        rgb[i] = parseInt(match[i] + match[i], 16);
      }

      if (hexAlpha) {
        rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255;
      }
    } else if (match = string.match(rgba)) {
      for (i = 0; i < 3; i++) {
        rgb[i] = parseInt(match[i + 1], 0);
      }

      if (match[4]) {
        if (match[5]) {
          rgb[3] = parseFloat(match[4]) * 0.01;
        } else {
          rgb[3] = parseFloat(match[4]);
        }
      }
    } else if (match = string.match(per)) {
      for (i = 0; i < 3; i++) {
        rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
      }

      if (match[4]) {
        if (match[5]) {
          rgb[3] = parseFloat(match[4]) * 0.01;
        } else {
          rgb[3] = parseFloat(match[4]);
        }
      }
    } else if (match = string.match(keyword)) {
      if (match[1] === 'transparent') {
        return [0, 0, 0, 0];
      }

      if (!hasOwnProperty.call(colorNames, match[1])) {
        return null;
      }

      rgb = colorNames[match[1]];
      rgb[3] = 1;
      return rgb;
    } else {
      return null;
    }

    for (i = 0; i < 3; i++) {
      rgb[i] = clamp(rgb[i], 0, 255);
    }

    rgb[3] = clamp(rgb[3], 0, 1);
    return rgb;
  };

  cs.get.hsl = function (string) {
    if (!string) {
      return null;
    }

    var hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
    var match = string.match(hsl);

    if (match) {
      var alpha = parseFloat(match[4]);
      var h = (parseFloat(match[1]) % 360 + 360) % 360;
      var s = clamp(parseFloat(match[2]), 0, 100);
      var l = clamp(parseFloat(match[3]), 0, 100);
      var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, s, l, a];
    }

    return null;
  };

  cs.get.hwb = function (string) {
    if (!string) {
      return null;
    }

    var hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
    var match = string.match(hwb);

    if (match) {
      var alpha = parseFloat(match[4]);
      var h = (parseFloat(match[1]) % 360 + 360) % 360;
      var w = clamp(parseFloat(match[2]), 0, 100);
      var b = clamp(parseFloat(match[3]), 0, 100);
      var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, w, b, a];
    }

    return null;
  };

  cs.to.hex = function () {
    var rgba = swizzle(arguments);
    return '#' + hexDouble(rgba[0]) + hexDouble(rgba[1]) + hexDouble(rgba[2]) + (rgba[3] < 1 ? hexDouble(Math.round(rgba[3] * 255)) : '');
  };

  cs.to.rgb = function () {
    var rgba = swizzle(arguments);
    return rgba.length < 4 || rgba[3] === 1 ? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')' : 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
  };

  cs.to.rgb.percent = function () {
    var rgba = swizzle(arguments);
    var r = Math.round(rgba[0] / 255 * 100);
    var g = Math.round(rgba[1] / 255 * 100);
    var b = Math.round(rgba[2] / 255 * 100);
    return rgba.length < 4 || rgba[3] === 1 ? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)' : 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
  };

  cs.to.hsl = function () {
    var hsla = swizzle(arguments);
    return hsla.length < 4 || hsla[3] === 1 ? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)' : 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
  }; // hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
  // (hwb have alpha optional & 1 is default value)


  cs.to.hwb = function () {
    var hwba = swizzle(arguments);
    var a = '';

    if (hwba.length >= 4 && hwba[3] !== 1) {
      a = ', ' + hwba[3];
    }

    return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
  };

  cs.to.keyword = function (rgb) {
    return reverseNames[rgb.slice(0, 3)];
  }; // helpers


  function clamp(num, min, max) {
    return Math.min(Math.max(min, num), max);
  }

  function hexDouble(num) {
    var str = Math.round(num).toString(16).toUpperCase();
    return str.length < 2 ? '0' + str : str;
  }

  var colorName = {
    "aliceblue": [240, 248, 255],
    "antiquewhite": [250, 235, 215],
    "aqua": [0, 255, 255],
    "aquamarine": [127, 255, 212],
    "azure": [240, 255, 255],
    "beige": [245, 245, 220],
    "bisque": [255, 228, 196],
    "black": [0, 0, 0],
    "blanchedalmond": [255, 235, 205],
    "blue": [0, 0, 255],
    "blueviolet": [138, 43, 226],
    "brown": [165, 42, 42],
    "burlywood": [222, 184, 135],
    "cadetblue": [95, 158, 160],
    "chartreuse": [127, 255, 0],
    "chocolate": [210, 105, 30],
    "coral": [255, 127, 80],
    "cornflowerblue": [100, 149, 237],
    "cornsilk": [255, 248, 220],
    "crimson": [220, 20, 60],
    "cyan": [0, 255, 255],
    "darkblue": [0, 0, 139],
    "darkcyan": [0, 139, 139],
    "darkgoldenrod": [184, 134, 11],
    "darkgray": [169, 169, 169],
    "darkgreen": [0, 100, 0],
    "darkgrey": [169, 169, 169],
    "darkkhaki": [189, 183, 107],
    "darkmagenta": [139, 0, 139],
    "darkolivegreen": [85, 107, 47],
    "darkorange": [255, 140, 0],
    "darkorchid": [153, 50, 204],
    "darkred": [139, 0, 0],
    "darksalmon": [233, 150, 122],
    "darkseagreen": [143, 188, 143],
    "darkslateblue": [72, 61, 139],
    "darkslategray": [47, 79, 79],
    "darkslategrey": [47, 79, 79],
    "darkturquoise": [0, 206, 209],
    "darkviolet": [148, 0, 211],
    "deeppink": [255, 20, 147],
    "deepskyblue": [0, 191, 255],
    "dimgray": [105, 105, 105],
    "dimgrey": [105, 105, 105],
    "dodgerblue": [30, 144, 255],
    "firebrick": [178, 34, 34],
    "floralwhite": [255, 250, 240],
    "forestgreen": [34, 139, 34],
    "fuchsia": [255, 0, 255],
    "gainsboro": [220, 220, 220],
    "ghostwhite": [248, 248, 255],
    "gold": [255, 215, 0],
    "goldenrod": [218, 165, 32],
    "gray": [128, 128, 128],
    "green": [0, 128, 0],
    "greenyellow": [173, 255, 47],
    "grey": [128, 128, 128],
    "honeydew": [240, 255, 240],
    "hotpink": [255, 105, 180],
    "indianred": [205, 92, 92],
    "indigo": [75, 0, 130],
    "ivory": [255, 255, 240],
    "khaki": [240, 230, 140],
    "lavender": [230, 230, 250],
    "lavenderblush": [255, 240, 245],
    "lawngreen": [124, 252, 0],
    "lemonchiffon": [255, 250, 205],
    "lightblue": [173, 216, 230],
    "lightcoral": [240, 128, 128],
    "lightcyan": [224, 255, 255],
    "lightgoldenrodyellow": [250, 250, 210],
    "lightgray": [211, 211, 211],
    "lightgreen": [144, 238, 144],
    "lightgrey": [211, 211, 211],
    "lightpink": [255, 182, 193],
    "lightsalmon": [255, 160, 122],
    "lightseagreen": [32, 178, 170],
    "lightskyblue": [135, 206, 250],
    "lightslategray": [119, 136, 153],
    "lightslategrey": [119, 136, 153],
    "lightsteelblue": [176, 196, 222],
    "lightyellow": [255, 255, 224],
    "lime": [0, 255, 0],
    "limegreen": [50, 205, 50],
    "linen": [250, 240, 230],
    "magenta": [255, 0, 255],
    "maroon": [128, 0, 0],
    "mediumaquamarine": [102, 205, 170],
    "mediumblue": [0, 0, 205],
    "mediumorchid": [186, 85, 211],
    "mediumpurple": [147, 112, 219],
    "mediumseagreen": [60, 179, 113],
    "mediumslateblue": [123, 104, 238],
    "mediumspringgreen": [0, 250, 154],
    "mediumturquoise": [72, 209, 204],
    "mediumvioletred": [199, 21, 133],
    "midnightblue": [25, 25, 112],
    "mintcream": [245, 255, 250],
    "mistyrose": [255, 228, 225],
    "moccasin": [255, 228, 181],
    "navajowhite": [255, 222, 173],
    "navy": [0, 0, 128],
    "oldlace": [253, 245, 230],
    "olive": [128, 128, 0],
    "olivedrab": [107, 142, 35],
    "orange": [255, 165, 0],
    "orangered": [255, 69, 0],
    "orchid": [218, 112, 214],
    "palegoldenrod": [238, 232, 170],
    "palegreen": [152, 251, 152],
    "paleturquoise": [175, 238, 238],
    "palevioletred": [219, 112, 147],
    "papayawhip": [255, 239, 213],
    "peachpuff": [255, 218, 185],
    "peru": [205, 133, 63],
    "pink": [255, 192, 203],
    "plum": [221, 160, 221],
    "powderblue": [176, 224, 230],
    "purple": [128, 0, 128],
    "rebeccapurple": [102, 51, 153],
    "red": [255, 0, 0],
    "rosybrown": [188, 143, 143],
    "royalblue": [65, 105, 225],
    "saddlebrown": [139, 69, 19],
    "salmon": [250, 128, 114],
    "sandybrown": [244, 164, 96],
    "seagreen": [46, 139, 87],
    "seashell": [255, 245, 238],
    "sienna": [160, 82, 45],
    "silver": [192, 192, 192],
    "skyblue": [135, 206, 235],
    "slateblue": [106, 90, 205],
    "slategray": [112, 128, 144],
    "slategrey": [112, 128, 144],
    "snow": [255, 250, 250],
    "springgreen": [0, 255, 127],
    "steelblue": [70, 130, 180],
    "tan": [210, 180, 140],
    "teal": [0, 128, 128],
    "thistle": [216, 191, 216],
    "tomato": [255, 99, 71],
    "turquoise": [64, 224, 208],
    "violet": [238, 130, 238],
    "wheat": [245, 222, 179],
    "white": [255, 255, 255],
    "whitesmoke": [245, 245, 245],
    "yellow": [255, 255, 0],
    "yellowgreen": [154, 205, 50]
  };

  /* MIT license */

  /* eslint-disable no-mixed-operators */
  const cssKeywords = colorName; // NOTE: conversions should only return primitive values (i.e. arrays, or
  //       values that give correct `typeof` results).
  //       do not use box values types (i.e. Number(), String(), etc.)


  const reverseKeywords = {};

  for (const key of Object.keys(cssKeywords)) {
    reverseKeywords[cssKeywords[key]] = key;
  }

  const convert$2 = {
    rgb: {
      channels: 3,
      labels: 'rgb'
    },
    hsl: {
      channels: 3,
      labels: 'hsl'
    },
    hsv: {
      channels: 3,
      labels: 'hsv'
    },
    hwb: {
      channels: 3,
      labels: 'hwb'
    },
    cmyk: {
      channels: 4,
      labels: 'cmyk'
    },
    xyz: {
      channels: 3,
      labels: 'xyz'
    },
    lab: {
      channels: 3,
      labels: 'lab'
    },
    lch: {
      channels: 3,
      labels: 'lch'
    },
    hex: {
      channels: 1,
      labels: ['hex']
    },
    keyword: {
      channels: 1,
      labels: ['keyword']
    },
    ansi16: {
      channels: 1,
      labels: ['ansi16']
    },
    ansi256: {
      channels: 1,
      labels: ['ansi256']
    },
    hcg: {
      channels: 3,
      labels: ['h', 'c', 'g']
    },
    apple: {
      channels: 3,
      labels: ['r16', 'g16', 'b16']
    },
    gray: {
      channels: 1,
      labels: ['gray']
    }
  };
  var conversions$2 = convert$2; // Hide .channels and .labels properties

  for (const model of Object.keys(convert$2)) {
    if (!('channels' in convert$2[model])) {
      throw new Error('missing channels property: ' + model);
    }

    if (!('labels' in convert$2[model])) {
      throw new Error('missing channel labels property: ' + model);
    }

    if (convert$2[model].labels.length !== convert$2[model].channels) {
      throw new Error('channel and label counts mismatch: ' + model);
    }

    const {
      channels,
      labels
    } = convert$2[model];
    delete convert$2[model].channels;
    delete convert$2[model].labels;
    Object.defineProperty(convert$2[model], 'channels', {
      value: channels
    });
    Object.defineProperty(convert$2[model], 'labels', {
      value: labels
    });
  }

  convert$2.rgb.hsl = function (rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
    const delta = max - min;
    let h;
    let s;

    if (max === min) {
      h = 0;
    } else if (r === max) {
      h = (g - b) / delta;
    } else if (g === max) {
      h = 2 + (b - r) / delta;
    } else if (b === max) {
      h = 4 + (r - g) / delta;
    }

    h = Math.min(h * 60, 360);

    if (h < 0) {
      h += 360;
    }

    const l = (min + max) / 2;

    if (max === min) {
      s = 0;
    } else if (l <= 0.5) {
      s = delta / (max + min);
    } else {
      s = delta / (2 - max - min);
    }

    return [h, s * 100, l * 100];
  };

  convert$2.rgb.hsv = function (rgb) {
    let rdif;
    let gdif;
    let bdif;
    let h;
    let s;
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const v = Math.max(r, g, b);
    const diff = v - Math.min(r, g, b);

    const diffc = function (c) {
      return (v - c) / 6 / diff + 1 / 2;
    };

    if (diff === 0) {
      h = 0;
      s = 0;
    } else {
      s = diff / v;
      rdif = diffc(r);
      gdif = diffc(g);
      bdif = diffc(b);

      if (r === v) {
        h = bdif - gdif;
      } else if (g === v) {
        h = 1 / 3 + rdif - bdif;
      } else if (b === v) {
        h = 2 / 3 + gdif - rdif;
      }

      if (h < 0) {
        h += 1;
      } else if (h > 1) {
        h -= 1;
      }
    }

    return [h * 360, s * 100, v * 100];
  };

  convert$2.rgb.hwb = function (rgb) {
    const r = rgb[0];
    const g = rgb[1];
    let b = rgb[2];
    const h = convert$2.rgb.hsl(rgb)[0];
    const w = 1 / 255 * Math.min(r, Math.min(g, b));
    b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
    return [h, w * 100, b * 100];
  };

  convert$2.rgb.cmyk = function (rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const k = Math.min(1 - r, 1 - g, 1 - b);
    const c = (1 - r - k) / (1 - k) || 0;
    const m = (1 - g - k) / (1 - k) || 0;
    const y = (1 - b - k) / (1 - k) || 0;
    return [c * 100, m * 100, y * 100, k * 100];
  };

  function comparativeDistance(x, y) {
    /*
    	See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
    */
    return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
  }

  convert$2.rgb.keyword = function (rgb) {
    const reversed = reverseKeywords[rgb];

    if (reversed) {
      return reversed;
    }

    let currentClosestDistance = Infinity;
    let currentClosestKeyword;

    for (const keyword of Object.keys(cssKeywords)) {
      const value = cssKeywords[keyword]; // Compute comparative distance

      const distance = comparativeDistance(rgb, value); // Check if its less, if so set as closest

      if (distance < currentClosestDistance) {
        currentClosestDistance = distance;
        currentClosestKeyword = keyword;
      }
    }

    return currentClosestKeyword;
  };

  convert$2.keyword.rgb = function (keyword) {
    return cssKeywords[keyword];
  };

  convert$2.rgb.xyz = function (rgb) {
    let r = rgb[0] / 255;
    let g = rgb[1] / 255;
    let b = rgb[2] / 255; // Assume sRGB

    r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
    g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92;
    b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
    const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
    const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
    const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
    return [x * 100, y * 100, z * 100];
  };

  convert$2.rgb.lab = function (rgb) {
    const xyz = convert$2.rgb.xyz(rgb);
    let x = xyz[0];
    let y = xyz[1];
    let z = xyz[2];
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > 0.008856 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
    y = y > 0.008856 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
    z = z > 0.008856 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);
    return [l, a, b];
  };

  convert$2.hsl.rgb = function (hsl) {
    const h = hsl[0] / 360;
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;
    let t2;
    let t3;
    let val;

    if (s === 0) {
      val = l * 255;
      return [val, val, val];
    }

    if (l < 0.5) {
      t2 = l * (1 + s);
    } else {
      t2 = l + s - l * s;
    }

    const t1 = 2 * l - t2;
    const rgb = [0, 0, 0];

    for (let i = 0; i < 3; i++) {
      t3 = h + 1 / 3 * -(i - 1);

      if (t3 < 0) {
        t3++;
      }

      if (t3 > 1) {
        t3--;
      }

      if (6 * t3 < 1) {
        val = t1 + (t2 - t1) * 6 * t3;
      } else if (2 * t3 < 1) {
        val = t2;
      } else if (3 * t3 < 2) {
        val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
      } else {
        val = t1;
      }

      rgb[i] = val * 255;
    }

    return rgb;
  };

  convert$2.hsl.hsv = function (hsl) {
    const h = hsl[0];
    let s = hsl[1] / 100;
    let l = hsl[2] / 100;
    let smin = s;
    const lmin = Math.max(l, 0.01);
    l *= 2;
    s *= l <= 1 ? l : 2 - l;
    smin *= lmin <= 1 ? lmin : 2 - lmin;
    const v = (l + s) / 2;
    const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
    return [h, sv * 100, v * 100];
  };

  convert$2.hsv.rgb = function (hsv) {
    const h = hsv[0] / 60;
    const s = hsv[1] / 100;
    let v = hsv[2] / 100;
    const hi = Math.floor(h) % 6;
    const f = h - Math.floor(h);
    const p = 255 * v * (1 - s);
    const q = 255 * v * (1 - s * f);
    const t = 255 * v * (1 - s * (1 - f));
    v *= 255;

    switch (hi) {
      case 0:
        return [v, t, p];

      case 1:
        return [q, v, p];

      case 2:
        return [p, v, t];

      case 3:
        return [p, q, v];

      case 4:
        return [t, p, v];

      case 5:
        return [v, p, q];
    }
  };

  convert$2.hsv.hsl = function (hsv) {
    const h = hsv[0];
    const s = hsv[1] / 100;
    const v = hsv[2] / 100;
    const vmin = Math.max(v, 0.01);
    let sl;
    let l;
    l = (2 - s) * v;
    const lmin = (2 - s) * vmin;
    sl = s * vmin;
    sl /= lmin <= 1 ? lmin : 2 - lmin;
    sl = sl || 0;
    l /= 2;
    return [h, sl * 100, l * 100];
  }; // http://dev.w3.org/csswg/css-color/#hwb-to-rgb


  convert$2.hwb.rgb = function (hwb) {
    const h = hwb[0] / 360;
    let wh = hwb[1] / 100;
    let bl = hwb[2] / 100;
    const ratio = wh + bl;
    let f; // Wh + bl cant be > 1

    if (ratio > 1) {
      wh /= ratio;
      bl /= ratio;
    }

    const i = Math.floor(6 * h);
    const v = 1 - bl;
    f = 6 * h - i;

    if ((i & 0x01) !== 0) {
      f = 1 - f;
    }

    const n = wh + f * (v - wh); // Linear interpolation

    let r;
    let g;
    let b;
    /* eslint-disable max-statements-per-line,no-multi-spaces */

    switch (i) {
      default:
      case 6:
      case 0:
        r = v;
        g = n;
        b = wh;
        break;

      case 1:
        r = n;
        g = v;
        b = wh;
        break;

      case 2:
        r = wh;
        g = v;
        b = n;
        break;

      case 3:
        r = wh;
        g = n;
        b = v;
        break;

      case 4:
        r = n;
        g = wh;
        b = v;
        break;

      case 5:
        r = v;
        g = wh;
        b = n;
        break;
    }
    /* eslint-enable max-statements-per-line,no-multi-spaces */


    return [r * 255, g * 255, b * 255];
  };

  convert$2.cmyk.rgb = function (cmyk) {
    const c = cmyk[0] / 100;
    const m = cmyk[1] / 100;
    const y = cmyk[2] / 100;
    const k = cmyk[3] / 100;
    const r = 1 - Math.min(1, c * (1 - k) + k);
    const g = 1 - Math.min(1, m * (1 - k) + k);
    const b = 1 - Math.min(1, y * (1 - k) + k);
    return [r * 255, g * 255, b * 255];
  };

  convert$2.xyz.rgb = function (xyz) {
    const x = xyz[0] / 100;
    const y = xyz[1] / 100;
    const z = xyz[2] / 100;
    let r;
    let g;
    let b;
    r = x * 3.2406 + y * -1.5372 + z * -0.4986;
    g = x * -0.9689 + y * 1.8758 + z * 0.0415;
    b = x * 0.0557 + y * -0.2040 + z * 1.0570; // Assume sRGB

    r = r > 0.0031308 ? 1.055 * r ** (1.0 / 2.4) - 0.055 : r * 12.92;
    g = g > 0.0031308 ? 1.055 * g ** (1.0 / 2.4) - 0.055 : g * 12.92;
    b = b > 0.0031308 ? 1.055 * b ** (1.0 / 2.4) - 0.055 : b * 12.92;
    r = Math.min(Math.max(0, r), 1);
    g = Math.min(Math.max(0, g), 1);
    b = Math.min(Math.max(0, b), 1);
    return [r * 255, g * 255, b * 255];
  };

  convert$2.xyz.lab = function (xyz) {
    let x = xyz[0];
    let y = xyz[1];
    let z = xyz[2];
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > 0.008856 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
    y = y > 0.008856 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
    z = z > 0.008856 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);
    return [l, a, b];
  };

  convert$2.lab.xyz = function (lab) {
    const l = lab[0];
    const a = lab[1];
    const b = lab[2];
    let x;
    let y;
    let z;
    y = (l + 16) / 116;
    x = a / 500 + y;
    z = y - b / 200;
    const y2 = y ** 3;
    const x2 = x ** 3;
    const z2 = z ** 3;
    y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
    x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
    z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;
    x *= 95.047;
    y *= 100;
    z *= 108.883;
    return [x, y, z];
  };

  convert$2.lab.lch = function (lab) {
    const l = lab[0];
    const a = lab[1];
    const b = lab[2];
    let h;
    const hr = Math.atan2(b, a);
    h = hr * 360 / 2 / Math.PI;

    if (h < 0) {
      h += 360;
    }

    const c = Math.sqrt(a * a + b * b);
    return [l, c, h];
  };

  convert$2.lch.lab = function (lch) {
    const l = lch[0];
    const c = lch[1];
    const h = lch[2];
    const hr = h / 360 * 2 * Math.PI;
    const a = c * Math.cos(hr);
    const b = c * Math.sin(hr);
    return [l, a, b];
  };

  convert$2.rgb.ansi16 = function (args, saturation = null) {
    const [r, g, b] = args;
    let value = saturation === null ? convert$2.rgb.hsv(args)[2] : saturation; // Hsv -> ansi16 optimization

    value = Math.round(value / 50);

    if (value === 0) {
      return 30;
    }

    let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));

    if (value === 2) {
      ansi += 60;
    }

    return ansi;
  };

  convert$2.hsv.ansi16 = function (args) {
    // Optimization here; we already know the value and don't need to get
    // it converted for us.
    return convert$2.rgb.ansi16(convert$2.hsv.rgb(args), args[2]);
  };

  convert$2.rgb.ansi256 = function (args) {
    const r = args[0];
    const g = args[1];
    const b = args[2]; // We use the extended greyscale palette here, with the exception of
    // black and white. normal palette only has 4 greyscale shades.

    if (r === g && g === b) {
      if (r < 8) {
        return 16;
      }

      if (r > 248) {
        return 231;
      }

      return Math.round((r - 8) / 247 * 24) + 232;
    }

    const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
    return ansi;
  };

  convert$2.ansi16.rgb = function (args) {
    let color = args % 10; // Handle greyscale

    if (color === 0 || color === 7) {
      if (args > 50) {
        color += 3.5;
      }

      color = color / 10.5 * 255;
      return [color, color, color];
    }

    const mult = (~~(args > 50) + 1) * 0.5;
    const r = (color & 1) * mult * 255;
    const g = (color >> 1 & 1) * mult * 255;
    const b = (color >> 2 & 1) * mult * 255;
    return [r, g, b];
  };

  convert$2.ansi256.rgb = function (args) {
    // Handle greyscale
    if (args >= 232) {
      const c = (args - 232) * 10 + 8;
      return [c, c, c];
    }

    args -= 16;
    let rem;
    const r = Math.floor(args / 36) / 5 * 255;
    const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
    const b = rem % 6 / 5 * 255;
    return [r, g, b];
  };

  convert$2.rgb.hex = function (args) {
    const integer = ((Math.round(args[0]) & 0xFF) << 16) + ((Math.round(args[1]) & 0xFF) << 8) + (Math.round(args[2]) & 0xFF);
    const string = integer.toString(16).toUpperCase();
    return '000000'.substring(string.length) + string;
  };

  convert$2.hex.rgb = function (args) {
    const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);

    if (!match) {
      return [0, 0, 0];
    }

    let colorString = match[0];

    if (match[0].length === 3) {
      colorString = colorString.split('').map(char => {
        return char + char;
      }).join('');
    }

    const integer = parseInt(colorString, 16);
    const r = integer >> 16 & 0xFF;
    const g = integer >> 8 & 0xFF;
    const b = integer & 0xFF;
    return [r, g, b];
  };

  convert$2.rgb.hcg = function (rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const max = Math.max(Math.max(r, g), b);
    const min = Math.min(Math.min(r, g), b);
    const chroma = max - min;
    let grayscale;
    let hue;

    if (chroma < 1) {
      grayscale = min / (1 - chroma);
    } else {
      grayscale = 0;
    }

    if (chroma <= 0) {
      hue = 0;
    } else if (max === r) {
      hue = (g - b) / chroma % 6;
    } else if (max === g) {
      hue = 2 + (b - r) / chroma;
    } else {
      hue = 4 + (r - g) / chroma;
    }

    hue /= 6;
    hue %= 1;
    return [hue * 360, chroma * 100, grayscale * 100];
  };

  convert$2.hsl.hcg = function (hsl) {
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;
    const c = l < 0.5 ? 2.0 * s * l : 2.0 * s * (1.0 - l);
    let f = 0;

    if (c < 1.0) {
      f = (l - 0.5 * c) / (1.0 - c);
    }

    return [hsl[0], c * 100, f * 100];
  };

  convert$2.hsv.hcg = function (hsv) {
    const s = hsv[1] / 100;
    const v = hsv[2] / 100;
    const c = s * v;
    let f = 0;

    if (c < 1.0) {
      f = (v - c) / (1 - c);
    }

    return [hsv[0], c * 100, f * 100];
  };

  convert$2.hcg.rgb = function (hcg) {
    const h = hcg[0] / 360;
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;

    if (c === 0.0) {
      return [g * 255, g * 255, g * 255];
    }

    const pure = [0, 0, 0];
    const hi = h % 1 * 6;
    const v = hi % 1;
    const w = 1 - v;
    let mg = 0;
    /* eslint-disable max-statements-per-line */

    switch (Math.floor(hi)) {
      case 0:
        pure[0] = 1;
        pure[1] = v;
        pure[2] = 0;
        break;

      case 1:
        pure[0] = w;
        pure[1] = 1;
        pure[2] = 0;
        break;

      case 2:
        pure[0] = 0;
        pure[1] = 1;
        pure[2] = v;
        break;

      case 3:
        pure[0] = 0;
        pure[1] = w;
        pure[2] = 1;
        break;

      case 4:
        pure[0] = v;
        pure[1] = 0;
        pure[2] = 1;
        break;

      default:
        pure[0] = 1;
        pure[1] = 0;
        pure[2] = w;
    }
    /* eslint-enable max-statements-per-line */


    mg = (1.0 - c) * g;
    return [(c * pure[0] + mg) * 255, (c * pure[1] + mg) * 255, (c * pure[2] + mg) * 255];
  };

  convert$2.hcg.hsv = function (hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const v = c + g * (1.0 - c);
    let f = 0;

    if (v > 0.0) {
      f = c / v;
    }

    return [hcg[0], f * 100, v * 100];
  };

  convert$2.hcg.hsl = function (hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const l = g * (1.0 - c) + 0.5 * c;
    let s = 0;

    if (l > 0.0 && l < 0.5) {
      s = c / (2 * l);
    } else if (l >= 0.5 && l < 1.0) {
      s = c / (2 * (1 - l));
    }

    return [hcg[0], s * 100, l * 100];
  };

  convert$2.hcg.hwb = function (hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const v = c + g * (1.0 - c);
    return [hcg[0], (v - c) * 100, (1 - v) * 100];
  };

  convert$2.hwb.hcg = function (hwb) {
    const w = hwb[1] / 100;
    const b = hwb[2] / 100;
    const v = 1 - b;
    const c = v - w;
    let g = 0;

    if (c < 1) {
      g = (v - c) / (1 - c);
    }

    return [hwb[0], c * 100, g * 100];
  };

  convert$2.apple.rgb = function (apple) {
    return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
  };

  convert$2.rgb.apple = function (rgb) {
    return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
  };

  convert$2.gray.rgb = function (args) {
    return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
  };

  convert$2.gray.hsl = function (args) {
    return [0, 0, args[0]];
  };

  convert$2.gray.hsv = convert$2.gray.hsl;

  convert$2.gray.hwb = function (gray) {
    return [0, 100, gray[0]];
  };

  convert$2.gray.cmyk = function (gray) {
    return [0, 0, 0, gray[0]];
  };

  convert$2.gray.lab = function (gray) {
    return [gray[0], 0, 0];
  };

  convert$2.gray.hex = function (gray) {
    const val = Math.round(gray[0] / 100 * 255) & 0xFF;
    const integer = (val << 16) + (val << 8) + val;
    const string = integer.toString(16).toUpperCase();
    return '000000'.substring(string.length) + string;
  };

  convert$2.rgb.gray = function (rgb) {
    const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
    return [val / 255 * 100];
  };

  const conversions$1 = conversions$2;
  /*
  	This function routes a model to all other models.

  	all functions that are routed have a property `.conversion` attached
  	to the returned synthetic function. This property is an array
  	of strings, each with the steps in between the 'from' and 'to'
  	color models (inclusive).

  	conversions that are not possible simply are not included.
  */


  function buildGraph() {
    const graph = {}; // https://jsperf.com/object-keys-vs-for-in-with-closure/3

    const models = Object.keys(conversions$1);

    for (let len = models.length, i = 0; i < len; i++) {
      graph[models[i]] = {
        // http://jsperf.com/1-vs-infinity
        // micro-opt, but this is simple.
        distance: -1,
        parent: null
      };
    }

    return graph;
  } // https://en.wikipedia.org/wiki/Breadth-first_search


  function deriveBFS(fromModel) {
    const graph = buildGraph();
    const queue = [fromModel]; // Unshift -> queue -> pop

    graph[fromModel].distance = 0;

    while (queue.length) {
      const current = queue.pop();
      const adjacents = Object.keys(conversions$1[current]);

      for (let len = adjacents.length, i = 0; i < len; i++) {
        const adjacent = adjacents[i];
        const node = graph[adjacent];

        if (node.distance === -1) {
          node.distance = graph[current].distance + 1;
          node.parent = current;
          queue.unshift(adjacent);
        }
      }
    }

    return graph;
  }

  function link(from, to) {
    return function (args) {
      return to(from(args));
    };
  }

  function wrapConversion(toModel, graph) {
    const path = [graph[toModel].parent, toModel];
    let fn = conversions$1[graph[toModel].parent][toModel];
    let cur = graph[toModel].parent;

    while (graph[cur].parent) {
      path.unshift(graph[cur].parent);
      fn = link(conversions$1[graph[cur].parent][cur], fn);
      cur = graph[cur].parent;
    }

    fn.conversion = path;
    return fn;
  }

  var route$1 = function (fromModel) {
    const graph = deriveBFS(fromModel);
    const conversion = {};
    const models = Object.keys(graph);

    for (let len = models.length, i = 0; i < len; i++) {
      const toModel = models[i];
      const node = graph[toModel];

      if (node.parent === null) {
        // No possible conversion, or this node is the source model.
        continue;
      }

      conversion[toModel] = wrapConversion(toModel, graph);
    }

    return conversion;
  };

  const conversions = conversions$2;

  const route = route$1;

  const convert$1 = {};
  const models = Object.keys(conversions);

  function wrapRaw(fn) {
    const wrappedFn = function (...args) {
      const arg0 = args[0];

      if (arg0 === undefined || arg0 === null) {
        return arg0;
      }

      if (arg0.length > 1) {
        args = arg0;
      }

      return fn(args);
    }; // Preserve .conversion property if there is one


    if ('conversion' in fn) {
      wrappedFn.conversion = fn.conversion;
    }

    return wrappedFn;
  }

  function wrapRounded(fn) {
    const wrappedFn = function (...args) {
      const arg0 = args[0];

      if (arg0 === undefined || arg0 === null) {
        return arg0;
      }

      if (arg0.length > 1) {
        args = arg0;
      }

      const result = fn(args); // We're assuming the result is an array here.
      // see notice in conversions.js; don't use box types
      // in conversion functions.

      if (typeof result === 'object') {
        for (let len = result.length, i = 0; i < len; i++) {
          result[i] = Math.round(result[i]);
        }
      }

      return result;
    }; // Preserve .conversion property if there is one


    if ('conversion' in fn) {
      wrappedFn.conversion = fn.conversion;
    }

    return wrappedFn;
  }

  models.forEach(fromModel => {
    convert$1[fromModel] = {};
    Object.defineProperty(convert$1[fromModel], 'channels', {
      value: conversions[fromModel].channels
    });
    Object.defineProperty(convert$1[fromModel], 'labels', {
      value: conversions[fromModel].labels
    });
    const routes = route(fromModel);
    const routeModels = Object.keys(routes);
    routeModels.forEach(toModel => {
      const fn = routes[toModel];
      convert$1[fromModel][toModel] = wrapRounded(fn);
      convert$1[fromModel][toModel].raw = wrapRaw(fn);
    });
  });
  var colorConvert = convert$1;

  const colorString = colorString$1.exports;

  const convert = colorConvert;

  const skippedModels = [// To be honest, I don't really feel like keyword belongs in color convert, but eh.
  'keyword', // Gray conflicts with some method names, and has its own method defined.
  'gray', // Shouldn't really be in color-convert either...
  'hex'];
  const hashedModelKeys = {};

  for (const model of Object.keys(convert)) {
    hashedModelKeys[[...convert[model].labels].sort().join('')] = model;
  }

  const limiters = {};

  function Color(object, model) {
    if (!(this instanceof Color)) {
      return new Color(object, model);
    }

    if (model && model in skippedModels) {
      model = null;
    }

    if (model && !(model in convert)) {
      throw new Error('Unknown model: ' + model);
    }

    let i;
    let channels;

    if (object == null) {
      // eslint-disable-line no-eq-null,eqeqeq
      this.model = 'rgb';
      this.color = [0, 0, 0];
      this.valpha = 1;
    } else if (object instanceof Color) {
      this.model = object.model;
      this.color = [...object.color];
      this.valpha = object.valpha;
    } else if (typeof object === 'string') {
      const result = colorString.get(object);

      if (result === null) {
        throw new Error('Unable to parse color from string: ' + object);
      }

      this.model = result.model;
      channels = convert[this.model].channels;
      this.color = result.value.slice(0, channels);
      this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
    } else if (object.length > 0) {
      this.model = model || 'rgb';
      channels = convert[this.model].channels;
      const newArray = Array.prototype.slice.call(object, 0, channels);
      this.color = zeroArray(newArray, channels);
      this.valpha = typeof object[channels] === 'number' ? object[channels] : 1;
    } else if (typeof object === 'number') {
      // This is always RGB - can be converted later on.
      this.model = 'rgb';
      this.color = [object >> 16 & 0xFF, object >> 8 & 0xFF, object & 0xFF];
      this.valpha = 1;
    } else {
      this.valpha = 1;
      const keys = Object.keys(object);

      if ('alpha' in object) {
        keys.splice(keys.indexOf('alpha'), 1);
        this.valpha = typeof object.alpha === 'number' ? object.alpha : 0;
      }

      const hashedKeys = keys.sort().join('');

      if (!(hashedKeys in hashedModelKeys)) {
        throw new Error('Unable to parse color from object: ' + JSON.stringify(object));
      }

      this.model = hashedModelKeys[hashedKeys];
      const {
        labels
      } = convert[this.model];
      const color = [];

      for (i = 0; i < labels.length; i++) {
        color.push(object[labels[i]]);
      }

      this.color = zeroArray(color);
    } // Perform limitations (clamping, etc.)


    if (limiters[this.model]) {
      channels = convert[this.model].channels;

      for (i = 0; i < channels; i++) {
        const limit = limiters[this.model][i];

        if (limit) {
          this.color[i] = limit(this.color[i]);
        }
      }
    }

    this.valpha = Math.max(0, Math.min(1, this.valpha));

    if (Object.freeze) {
      Object.freeze(this);
    }
  }

  Color.prototype = {
    toString() {
      return this.string();
    },

    toJSON() {
      return this[this.model]();
    },

    string(places) {
      let self = this.model in colorString.to ? this : this.rgb();
      self = self.round(typeof places === 'number' ? places : 1);
      const args = self.valpha === 1 ? self.color : [...self.color, this.valpha];
      return colorString.to[self.model](args);
    },

    percentString(places) {
      const self = this.rgb().round(typeof places === 'number' ? places : 1);
      const args = self.valpha === 1 ? self.color : [...self.color, this.valpha];
      return colorString.to.rgb.percent(args);
    },

    array() {
      return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
    },

    object() {
      const result = {};
      const {
        channels
      } = convert[this.model];
      const {
        labels
      } = convert[this.model];

      for (let i = 0; i < channels; i++) {
        result[labels[i]] = this.color[i];
      }

      if (this.valpha !== 1) {
        result.alpha = this.valpha;
      }

      return result;
    },

    unitArray() {
      const rgb = this.rgb().color;
      rgb[0] /= 255;
      rgb[1] /= 255;
      rgb[2] /= 255;

      if (this.valpha !== 1) {
        rgb.push(this.valpha);
      }

      return rgb;
    },

    unitObject() {
      const rgb = this.rgb().object();
      rgb.r /= 255;
      rgb.g /= 255;
      rgb.b /= 255;

      if (this.valpha !== 1) {
        rgb.alpha = this.valpha;
      }

      return rgb;
    },

    round(places) {
      places = Math.max(places || 0, 0);
      return new Color([...this.color.map(roundToPlace(places)), this.valpha], this.model);
    },

    alpha(value) {
      if (value !== undefined) {
        return new Color([...this.color, Math.max(0, Math.min(1, value))], this.model);
      }

      return this.valpha;
    },

    // Rgb
    red: getset('rgb', 0, maxfn(255)),
    green: getset('rgb', 1, maxfn(255)),
    blue: getset('rgb', 2, maxfn(255)),
    hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, value => (value % 360 + 360) % 360),
    saturationl: getset('hsl', 1, maxfn(100)),
    lightness: getset('hsl', 2, maxfn(100)),
    saturationv: getset('hsv', 1, maxfn(100)),
    value: getset('hsv', 2, maxfn(100)),
    chroma: getset('hcg', 1, maxfn(100)),
    gray: getset('hcg', 2, maxfn(100)),
    white: getset('hwb', 1, maxfn(100)),
    wblack: getset('hwb', 2, maxfn(100)),
    cyan: getset('cmyk', 0, maxfn(100)),
    magenta: getset('cmyk', 1, maxfn(100)),
    yellow: getset('cmyk', 2, maxfn(100)),
    black: getset('cmyk', 3, maxfn(100)),
    x: getset('xyz', 0, maxfn(95.047)),
    y: getset('xyz', 1, maxfn(100)),
    z: getset('xyz', 2, maxfn(108.833)),
    l: getset('lab', 0, maxfn(100)),
    a: getset('lab', 1),
    b: getset('lab', 2),

    keyword(value) {
      if (value !== undefined) {
        return new Color(value);
      }

      return convert[this.model].keyword(this.color);
    },

    hex(value) {
      if (value !== undefined) {
        return new Color(value);
      }

      return colorString.to.hex(this.rgb().round().color);
    },

    hexa(value) {
      if (value !== undefined) {
        return new Color(value);
      }

      const rgbArray = this.rgb().round().color;
      let alphaHex = Math.round(this.valpha * 255).toString(16).toUpperCase();

      if (alphaHex.length === 1) {
        alphaHex = '0' + alphaHex;
      }

      return colorString.to.hex(rgbArray) + alphaHex;
    },

    rgbNumber() {
      const rgb = this.rgb().color;
      return (rgb[0] & 0xFF) << 16 | (rgb[1] & 0xFF) << 8 | rgb[2] & 0xFF;
    },

    luminosity() {
      // http://www.w3.org/TR/WCAG20/#relativeluminancedef
      const rgb = this.rgb().color;
      const lum = [];

      for (const [i, element] of rgb.entries()) {
        const chan = element / 255;
        lum[i] = chan <= 0.04045 ? chan / 12.92 : ((chan + 0.055) / 1.055) ** 2.4;
      }

      return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
    },

    contrast(color2) {
      // http://www.w3.org/TR/WCAG20/#contrast-ratiodef
      const lum1 = this.luminosity();
      const lum2 = color2.luminosity();

      if (lum1 > lum2) {
        return (lum1 + 0.05) / (lum2 + 0.05);
      }

      return (lum2 + 0.05) / (lum1 + 0.05);
    },

    level(color2) {
      // https://www.w3.org/TR/WCAG/#contrast-enhanced
      const contrastRatio = this.contrast(color2);

      if (contrastRatio >= 7) {
        return 'AAA';
      }

      return contrastRatio >= 4.5 ? 'AA' : '';
    },

    isDark() {
      // YIQ equation from http://24ways.org/2010/calculating-color-contrast
      const rgb = this.rgb().color;
      const yiq = (rgb[0] * 2126 + rgb[1] * 7152 + rgb[2] * 722) / 10000;
      return yiq < 128;
    },

    isLight() {
      return !this.isDark();
    },

    negate() {
      const rgb = this.rgb();

      for (let i = 0; i < 3; i++) {
        rgb.color[i] = 255 - rgb.color[i];
      }

      return rgb;
    },

    lighten(ratio) {
      const hsl = this.hsl();
      hsl.color[2] += hsl.color[2] * ratio;
      return hsl;
    },

    darken(ratio) {
      const hsl = this.hsl();
      hsl.color[2] -= hsl.color[2] * ratio;
      return hsl;
    },

    saturate(ratio) {
      const hsl = this.hsl();
      hsl.color[1] += hsl.color[1] * ratio;
      return hsl;
    },

    desaturate(ratio) {
      const hsl = this.hsl();
      hsl.color[1] -= hsl.color[1] * ratio;
      return hsl;
    },

    whiten(ratio) {
      const hwb = this.hwb();
      hwb.color[1] += hwb.color[1] * ratio;
      return hwb;
    },

    blacken(ratio) {
      const hwb = this.hwb();
      hwb.color[2] += hwb.color[2] * ratio;
      return hwb;
    },

    grayscale() {
      // http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
      const rgb = this.rgb().color;
      const value = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
      return Color.rgb(value, value, value);
    },

    fade(ratio) {
      return this.alpha(this.valpha - this.valpha * ratio);
    },

    opaquer(ratio) {
      return this.alpha(this.valpha + this.valpha * ratio);
    },

    rotate(degrees) {
      const hsl = this.hsl();
      let hue = hsl.color[0];
      hue = (hue + degrees) % 360;
      hue = hue < 0 ? 360 + hue : hue;
      hsl.color[0] = hue;
      return hsl;
    },

    mix(mixinColor, weight) {
      // Ported from sass implementation in C
      // https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
      if (!mixinColor || !mixinColor.rgb) {
        throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
      }

      const color1 = mixinColor.rgb();
      const color2 = this.rgb();
      const p = weight === undefined ? 0.5 : weight;
      const w = 2 * p - 1;
      const a = color1.alpha() - color2.alpha();
      const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2;
      const w2 = 1 - w1;
      return Color.rgb(w1 * color1.red() + w2 * color2.red(), w1 * color1.green() + w2 * color2.green(), w1 * color1.blue() + w2 * color2.blue(), color1.alpha() * p + color2.alpha() * (1 - p));
    }

  }; // Model conversion methods and static constructors

  for (const model of Object.keys(convert)) {
    if (skippedModels.includes(model)) {
      continue;
    }

    const {
      channels
    } = convert[model]; // Conversion methods

    Color.prototype[model] = function (...args) {
      if (this.model === model) {
        return new Color(this);
      }

      if (args.length > 0) {
        return new Color(args, model);
      }

      return new Color([...assertArray(convert[this.model][model].raw(this.color)), this.valpha], model);
    }; // 'static' construction methods


    Color[model] = function (...args) {
      let color = args[0];

      if (typeof color === 'number') {
        color = zeroArray(args, channels);
      }

      return new Color(color, model);
    };
  }

  function roundTo(number, places) {
    return Number(number.toFixed(places));
  }

  function roundToPlace(places) {
    return function (number) {
      return roundTo(number, places);
    };
  }

  function getset(model, channel, modifier) {
    model = Array.isArray(model) ? model : [model];

    for (const m of model) {
      (limiters[m] || (limiters[m] = []))[channel] = modifier;
    }

    model = model[0];
    return function (value) {
      let result;

      if (value !== undefined) {
        if (modifier) {
          value = modifier(value);
        }

        result = this[model]();
        result.color[channel] = value;
        return result;
      }

      result = this[model]().color[channel];

      if (modifier) {
        result = modifier(result);
      }

      return result;
    };
  }

  function maxfn(max) {
    return function (v) {
      return Math.max(0, Math.min(max, v));
    };
  }

  function assertArray(value) {
    return Array.isArray(value) ? value : [value];
  }

  function zeroArray(array, length) {
    for (let i = 0; i < length; i++) {
      if (typeof array[i] !== 'number') {
        array[i] = 0;
      }
    }

    return array;
  }

  var color = Color;

  var Color$1 = color;

  var Led = /*#__PURE__*/function () {
    function Led() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Led);

      // Options
      this._name = options.name;
      this._strip = options.strip;
      this._index = options.index; // Setup

      this._ipcRenderer = null;
    }
    /**
     * Getters & Setters
     */


    _createClass(Led, [{
      key: "ipcRenderer",
      get: function get() {
        return this._ipcRenderer;
      },
      set: function set(ipcRenderer) {
        this._ipcRenderer = ipcRenderer;
      }
    }, {
      key: "name",
      get: function get() {
        return this._name;
      }
    }, {
      key: "strip",
      get: function get() {
        return this._strip;
      }
    }, {
      key: "index",
      get: function get() {
        return this._index;
      }
      /**
       * Public
       */

    }, {
      key: "setColor",
      value: function setColor(colorData) {
        if (!this._ipcRenderer) return;
        var color = new Color$1(colorData).object(); // Send data formatted like strip;index;red,green,blue

        var data = "".concat(this._strip, ";").concat(this._index, ";").concat(color.r, ",").concat(color.g, ",").concat(color.b, "\n");

        this._ipcRenderer.send('led:set', {
          data: data
        });
      }
      /**
       * Private
       */

      /**
       * Utils
       */

    }]);

    return Led;
  }();

  var LedManager = /*#__PURE__*/function () {
    function LedManager() {

      _classCallCheck(this, LedManager);

      // Props
      // Setup
      this._ipcRenderer = null;
      this._leds = this._createLeds();
    }
    /**
     * Getters & Setters
     */


    _createClass(LedManager, [{
      key: "ipcRenderer",
      get: function get() {
        return this._ipcRenderer;
      },
      set: function set(ipcRenderer) {
        this._ipcRenderer = ipcRenderer;

        for (var i = 0; i < this._leds.length; i++) {
          this._leds[i].ipcRenderer = ipcRenderer;
        }
      }
    }, {
      key: "leds",
      get: function get() {
        return this._leds;
      }
      /**
       * Public
       */

    }, {
      key: "getLedByName",
      value: function getLedByName(name) {
        var led = this._leds.filter(function (led) {
          return led.name === name;
        })[0];

        return led;
      }
      /**
       * Private
       */

    }, {
      key: "_createLeds",
      value: function _createLeds() {
        var leds = [];

        for (var i = 0; i < config.leds.length; i++) {
          var led = new Led({
            name: config.leds[i].name,
            strip: config.leds[i].strip,
            index: config.leds[i].index
          });
          leds.push(led);
        }

        return leds;
      }
    }]);

    return LedManager;
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

  function map(value, inMin, inMax, outMin, outMax) {
    return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
  }

  // const MIN_INPUT_SIGNAL_X = 0;
  // const MAX_INPUT_SIGNAL_X = 1023;
  // const MIN_INPUT_SIGNAL_Y = 0;
  // const MAX_INPUT_SIGNAL_Y = 1023;
  // const DIRECTION_X = 1;
  // const DIRECTION_Y = -1;
  // Ultra Stick 360

  var MIN_INPUT_SIGNAL_X = 18;
  var MAX_INPUT_SIGNAL_X = 840;
  var MIN_INPUT_SIGNAL_Y = 36;
  var MAX_INPUT_SIGNAL_Y = 867;
  var DIRECTION_X = 1;
  var DIRECTION_Y = -1;
  function normalizeJoystickSignal$1(position, deadzone) {
    var x = map(position.x, MIN_INPUT_SIGNAL_X, MAX_INPUT_SIGNAL_X, -1, 1) * DIRECTION_X;
    var y = map(position.y, MIN_INPUT_SIGNAL_Y, MAX_INPUT_SIGNAL_Y, -1, 1) * DIRECTION_Y; // Angle

    var angle = Math.atan2(y, x); // Initial magnitude

    var magnitude = Math.sqrt(x * x + y * y); // Clamp diagonales

    if (magnitude > 1) magnitude = 1;
    x = magnitude * Math.cos(angle);
    y = magnitude * Math.sin(angle); // Update magnitude

    magnitude = Math.sqrt(x * x + y * y); // Deadzone

    if (magnitude < deadzone) {
      return {
        x: 0,
        y: 0
      };
    } else {
      magnitude = map(magnitude, deadzone, 1, 0, 1);
    } // Update position with deadzone handled


    x = magnitude * Math.cos(angle);
    y = magnitude * Math.sin(angle);
    return {
      x: x,
      y: y,
      magnitude: magnitude
    };
  }

  function normalizeJoystickSignal(position, deadzone) {
    var x = position.x;
    var y = position.y * -1; // Angle

    var angle = Math.atan2(y, x); // Initial magnitude

    var magnitude = Math.sqrt(x * x + y * y); // Clamp diagonales

    if (magnitude > 1) magnitude = 1;
    x = magnitude * Math.cos(angle);
    y = magnitude * Math.sin(angle); // Update magnitude

    magnitude = Math.sqrt(x * x + y * y); // Deadzone

    if (magnitude < deadzone) {
      return {
        x: 0,
        y: 0
      };
    } else {
      magnitude = map(magnitude, deadzone, 1, 0, 1);
    } // Update position with deadzone handled


    x = magnitude * Math.cos(angle);
    y = magnitude * Math.sin(angle);
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

      _this._deadzone = config$1.deadzone;
      _this._threshold = config$1.threshold;
      _this._inputInactiveDelay = config$1.inputInactiveDelay;
      _this._inputIntervalMin = config$1.inputIntervalMin;
      _this._inputIntervalMax = config$1.inputIntervalMax;
      _this._ipcRenderer = null;
      _this._gamepadEmulatorJoystick = null;
      _this._gamepadEmulatorJoystickIndex = null;
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
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        this._position = options.isGamepad ? normalizeJoystickSignal(e, this._deadzone) : normalizeJoystickSignal$1(e, this._deadzone);
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
    }, {
      key: "setGamepadEmulatorJoystick",
      value: function setGamepadEmulatorJoystick(gamepadEmulator, joystickIndex) {
        if (this._gamepadEmulatorJoystick) return;
        this._gamepadEmulatorJoystick = gamepadEmulator;
        this._gamepadEmulatorJoystickIndex = joystickIndex;

        this._gamepadEmulatorJoystick.addEventListener('gamepad:joystick:move', this._gamepadJoystickMoveHandler);
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
        this._gamepadJoystickMoveHandler = this._gamepadJoystickMoveHandler.bind(this);
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
          id: this._id,
          direction: 'left'
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
          id: this._id,
          direction: 'right'
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
          id: this._id,
          direction: 'up'
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
          id: this._id,
          direction: 'down'
        });
      }
    }, {
      key: "_moveDownEndHandler",
      value: function _moveDownEndHandler() {
        this._inputDownIndex = 0;
      }
    }, {
      key: "_gamepadJoystickMoveHandler",
      value: function _gamepadJoystickMoveHandler(e) {
        if (e.index !== this._gamepadEmulatorJoystickIndex) return;
        this.moveHandler(e.position, {
          isGamepad: true
        });
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
      /**
       * Handlers
       */

    }, {
      key: "_joystickMoveHandler",
      value: function _joystickMoveHandler(event, data) {
        if (data.id === 1) this._joystick1.moveHandler(data.position);
        if (data.id === 2) this._joystick2.moveHandler(data.position);
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
      _this._ledManager = options.ledManager; // Setup

      _this._led = _this._ledManager.getLedByName("button-".concat(_this._key, "-").concat(_this._id));
      _this._keyboardKeys = [];
      _this._gamepadEmulator = null;
      _this._gamepadEmulatorKeys = [];

      _this._bindAll();

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
    }, {
      key: "led",
      get: function get() {
        return this._led;
      }
    }, {
      key: "gamepadEmulator",
      get: function get() {
        return this._gamepadEmulator;
      },
      set: function set(gamepadEmulator) {
        if (this._gamepadEmulator) return;
        this._gamepadEmulator = gamepadEmulator;

        this._gamepadEmulator.addEventListener('gamepad:keydown', this._gamepadKeydownHandler);

        this._gamepadEmulator.addEventListener('gamepad:keyup', this._gamepadKeyupHandler);
      }
    }, {
      key: "gamepadEmulatorKeys",
      get: function get() {
        return this._gamepadEmulatorKeys;
      },
      set: function set(keys) {
        this._gamepadEmulatorKeys = keys;
      }
      /**
       * Public
       */

    }, {
      key: "setLedColor",
      value: function setLedColor(color) {
        var _this$_led;

        (_this$_led = this._led) === null || _this$_led === void 0 ? void 0 : _this$_led.setColor(color);
      }
    }, {
      key: "keydownHandler",
      value: function keydownHandler() {
        this.dispatchEvent('keydown', {
          key: this._key,
          id: this._id,
          keyboardKeys: this._keyboardKeys,
          gamepadEmulatorKeys: this._gamepadEmulatorKeys,
          instance: this
        });
      }
    }, {
      key: "keyupHandler",
      value: function keyupHandler() {
        this.dispatchEvent('keyup', {
          key: this._key,
          id: this._id,
          keyboardKeys: this._keyboardKeys,
          instance: this
        });
      }
      /**
       * Private
       */

    }, {
      key: "_bindAll",
      value: function _bindAll() {
        this._gamepadKeydownHandler = this._gamepadKeydownHandler.bind(this);
        this._gamepadKeyupHandler = this._gamepadKeyupHandler.bind(this);
      }
    }, {
      key: "_gamepadKeydownHandler",
      value: function _gamepadKeydownHandler(index) {
        if (!this._gamepadEmulatorKeys.includes(index)) return;
        this.keydownHandler();
      }
    }, {
      key: "_gamepadKeyupHandler",
      value: function _gamepadKeyupHandler(index) {
        if (!this._gamepadEmulatorKeys.includes(index)) return;
        this.keyupHandler();
      }
    }]);

    return Button;
  }(EventDispatcher);

  function getArray(value) {
    if (Array.isArray(value)) return value;else return [value];
  }

  var ButtonManager = /*#__PURE__*/function (_EventDispatcher) {
    _inherits(ButtonManager, _EventDispatcher);

    var _super = _createSuper(ButtonManager);

    function ButtonManager() {
      var _this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, ButtonManager);

      _this = _super.call(this); // Props

      _this._ledManager = options.ledManager; // Setup

      _this._buttonHome = _this._createButtonHome();
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
    }, {
      key: "buttonHome",
      get: function get() {
        return this._buttonHome;
      }
    }, {
      key: "buttons",
      get: function get() {
        return this._buttons;
      }
      /**
       * Public
       */

    }, {
      key: "registerKeys",
      value: function registerKeys(keyboardKeys, key, id) {
        var button = this.getButton(key, id);
        if (button) button.keyboardKeys = getArray(keyboardKeys);
        return button;
      }
    }, {
      key: "registerGamepadEmulatorKeys",
      value: function registerGamepadEmulatorKeys(gamepadEmulator, gamepadButtonIndexes, key, id) {
        var button = this.getButton(key, id);

        if (button) {
          button.gamepadEmulator = gamepadEmulator;
          button.gamepadEmulatorKeys = getArray(gamepadButtonIndexes);
        }

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
      key: "_createButtonHome",
      value: function _createButtonHome() {
        var buttonHome = new Button({
          id: 0,
          key: 'home',
          ledManager: this._ledManager
        });
        return buttonHome;
      }
    }, {
      key: "_createButtons",
      value: function _createButtons() {
        var buttons = [];

        for (var i = 0; i < config.buttons.length; i++) {
          var button = new Button({
            id: config.buttons[i].id,
            key: config.buttons[i].key,
            ledManager: this._ledManager
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
        this._machineHomeKeydownHandler = this._machineHomeKeydownHandler.bind(this);
        this._machineHomeKeyupHandler = this._machineHomeKeyupHandler.bind(this);
      }
    }, {
      key: "_setupEventListeners",
      value: function _setupEventListeners() {
        window.addEventListener('keydown', this._keydownHandler);
        window.addEventListener('keyup', this._keyupHandler);
      }
    }, {
      key: "_setupIpcRendererEventListeners",
      value: function _setupIpcRendererEventListeners() {
        if (!this._ipcRenderer) return;

        this._ipcRenderer.on('keydown', this._machineKeydownHandler);

        this._ipcRenderer.on('keyup', this._machineKeyupHandler);

        this._ipcRenderer.on('home:keydown', this._machineHomeKeydownHandler);

        this._ipcRenderer.on('home:keyup', this._machineHomeKeyupHandler);
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
        button.keyupHandler(data); // Mouse click

        if (this._ipcRenderer && button.id === 1 && button.key === 'a') this._ipcRenderer.send('mouse:click', {});
      }
    }, {
      key: "_machineHomeKeydownHandler",
      value: function _machineHomeKeydownHandler() {
        this._buttonHome.keydownHandler();

        this.dispatchEvent('home:keydown');
      }
    }, {
      key: "_machineHomeKeyupHandler",
      value: function _machineHomeKeyupHandler() {
        this._buttonHome.keyupHandler();

        this.dispatchEvent('home:keyup');
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
      _this._joysticks = options.joysticks ? getArray(options.joysticks) : [];
      _this._buttons = options.buttons || []; // Setup

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
      key: "joysticks",
      get: function get() {
        return this._joysticks;
      },
      set: function set(joysticks) {
        this._joysticks = getArray(joysticks);
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
        for (var i = 0; i < this._joysticks.length; i++) {
          this._joysticks[i].addEventListener('joystick:move', this._joystickMoveHandler);

          this._joysticks[i].addEventListener('joystick:quickmove', this._joystickQuickmoveHandler);
        }

        for (var _i = 0; _i < this._buttons.length; _i++) {
          this._buttons[_i].addEventListener('keydown', this._keydownHandler);

          this._buttons[_i].addEventListener('keyup', this._keyupHandler);
        }
      }
    }, {
      key: "_removeEventListeners",
      value: function _removeEventListeners() {
        for (var i = 0; i < this._joysticks.length; i++) {
          this._joysticks[i].removeEventListener('joystick:move', this._joystickMoveHandler);

          this._joysticks[i].removeEventListener('joystick:quickmove', this._joystickQuickmoveHandler);
        }

        for (var _i2 = 0; _i2 < this._buttons.length; _i2++) {
          this._buttons[_i2].removeEventListener('keydown', this._keydownHandler);

          this._buttons[_i2].removeEventListener('keyup', this._keyupHandler);
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
          joysticks: options.joysticks,
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

        score.value = Math.round(score.value * 100) / 100;
        score.createdAt = new Date().toString();
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
            resolve(_this4._orderScores(scores));
          } else {
            _this4._getScoresFromDatabase().then(function (scores) {
              resolve(_this4._orderScores(scores));
            }, reject);
          }
        });
        return promise;
      }
    }, {
      key: "_orderScores",
      value: function _orderScores(scores) {
        return scores.sort(function (score1, score2) {
          if (score1.value > score2.value) return -1;
          if (score1.value < score2.value) return 1;
          return 0;
        });
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

        var promise = new Promise(function (resolve, reject) {
          _this6._ipcRenderer.send('leaderboard:post', {
            id: _this6._id,
            score: score
          });

          _this6._ipcRenderer.once('leaderboard:post:completed', function (event, response) {
            resolve(response);
          });

          _this6._ipcRenderer.once('leaderboard:post:error', function (event, response) {
            reject(response);
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
        var hasUsername = score.username !== undefined && score.username !== null && score.username !== '';
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

  var template$1 = "<div class=\"virtual-keyboard\">\n\n    <div class=\"indicator\">\n\n        <span>Sélectionner</span>\n        \n        <svg width=\"42\" height=\"42\" viewBox=\"0 0 42 42\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21.0039 3.61321e-07C16.8503 -0.00076996 12.7898 1.2302 9.33587 3.53724C5.88192 5.84428 3.18969 9.12375 1.59966 12.9609C0.00962005 16.7981 -0.406806 21.0206 0.403044 25.0945C1.21289 29.1683 3.21264 32.9106 6.14939 35.8478C9.08614 38.7851 12.828 40.7856 16.9017 41.5962C20.9754 42.4068 25.198 41.9911 29.0355 40.4018C32.8729 38.8125 36.1529 36.1209 38.4606 32.6674C40.7683 29.2139 42 25.1536 42 21C42 15.4311 39.788 10.0903 35.8506 6.15213C31.9132 2.21398 26.5728 0.00103316 21.0039 3.61321e-07ZM32.8242 32.8359H28.3064C26.8694 32.8349 25.4748 32.3492 24.3482 31.4572C23.2215 30.5653 22.4288 29.3192 22.0983 27.9208C22.09 27.8826 22.0689 27.8483 22.0384 27.8237C22.0079 27.7992 21.97 27.7858 21.9308 27.7858C21.8917 27.7858 21.8537 27.7992 21.8233 27.8237C21.7928 27.8483 21.7717 27.8826 21.7634 27.9208C21.5284 28.9296 21.0508 29.8659 20.3722 30.6484C19.6935 31.4309 18.8342 32.036 17.8687 32.4113C17.0861 32.7157 16.2505 32.86 15.4112 32.8359C13.7772 32.7908 12.2224 32.1221 11.0658 30.9669C9.90919 29.8118 9.23854 28.2578 9.1914 26.6239C9.16302 25.7843 9.30752 24.9478 9.61592 24.1663C9.61489 24.1521 9.61489 24.1378 9.61592 24.1235C10.0127 23.1512 10.6921 22.3204 11.5663 21.7385C12.4405 21.1567 13.4692 20.8505 14.5193 20.8598H20.9883C21.1433 20.8598 21.2919 20.7982 21.4014 20.6887C21.511 20.5791 21.5725 20.4305 21.5725 20.2756C21.5725 20.1206 21.511 19.9721 21.4014 19.8625C21.2919 19.7529 21.1433 19.6914 20.9883 19.6914H9.26151C9.56647 16.9357 10.8292 14.3744 12.8294 12.4545C14.8296 10.5345 17.4403 9.37771 20.2062 9.18577C22.9721 8.99384 25.7176 9.779 27.9638 11.4043C30.21 13.0296 31.8144 15.3918 32.497 18.079C32.6631 18.9996 32.7723 19.9296 32.8242 20.8637V32.8359Z\" fill=\"white\"/></svg>\n\n    </div>\n\n</div>";

  var style$1 = ".virtual-keyboard {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 70px;\n\n  margin: auto;\n\n  max-width: 1100px;\n\n  transform: translateY(calc(100% + 70px));\n  transition: transform 1s cubic-bezier(0.83, 0, 0.17, 1);\n  \n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 30px;\n}\n\n.virtual-keyboard.is-open {\n  transform: translateY(0);\n  transition: transform 1s cubic-bezier(0.22, 1, 0.36, 1);\n}\n\n.hg-theme-default {\n  --background-color: #1F1F1F;\n  --color: #ffffff;\n  --button-background-color: #1F1F1F;\n  --button-border-color: rgba(255, 255, 255, 0.3);\n  --button-focus-background-color: #FFD600;\n  --button-focus-color: #1F1F1F;\n  --button-enter-background-color: #7E00FF;\n  --button-enter-focus-background-color: #FFFFFF;\n\n  width: 100%;\n  user-select: none;\n  box-sizing: border-box;\n  overflow: hidden;\n  touch-action: manipulation;\n  font-family: 'Darker Grotesque', sans-serif;\n  font-weight: 600;\n  background-color: var(--background-color);\n  color: var(--color);\n  padding-left: 40px;\n  padding-right: 40px;\n  padding-bottom: 40px;\n  padding-top: 80px;\n}\n\n.virtual-keyboard .indicator {\n  opacity: 0.6;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 30px;\n\n  width: 50%;\n\n  margin: auto;\n\n  text-align: center;\n}\n\n.virtual-keyboard .indicator span {\n  margin-bottom: 2px;\n}\n\n.virtual-keyboard .indicator svg {\n  width: 20px;\n  height: 20px;\n\n  margin-left: 10px;\n}\n\n/* Row */\n.hg-theme-default .hg-row {\n  display: flex;\n}\n\n.hg-theme-default .hg-row:not(:last-child) {\n  margin-bottom: 5px;\n}\n\n.hg-theme-default .hg-row .hg-button:not(:last-child) {\n  margin-right: 5px;\n}\n\n.hg-theme-default .hg-row .hg-button-container {\n  margin-right: 5px;\n}\n\n.hg-theme-default .hg-row > div:last-child {\n  margin-right: 0;\n}\n\n.hg-theme-default .hg-row .hg-button-container {\n  display: flex;\n}\n\n.hg-theme-default .hg-button span {\n  pointer-events: none;\n}\n\n/* Buttons */\n.hg-theme-default .hg-button {\n  display: inline-block;\n  flex-grow: 1;\n  cursor: pointer;\n  background-color: var(--button-background-color);\n  font-size: 20px;\n  padding-top: 2px;\n}\n\n.hg-theme-default .hg-button>span {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.hg-theme-default .hg-button svg {\n    width: 20px;\n    height: 20px;\n\n    margin-top: 4px;\n    margin-left: 10px;\n}\n\n.hg-theme-default .hg-button {\n  display: inline-block;\n  flex-grow: 1;\n  cursor: pointer;\n}\n\n.hg-theme-default .hg-button {\n  height: 40px;\n  border-radius: 10px;\n  box-sizing: border-box;\n  padding: 5px;\n  padding-top: 2px;\n  background-color: var(--button-background-color);\n  border: 1px solid var(--button-border-color);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n.hg-theme-default .hg-button.hg-standardBtn {\n  width: 20px;\n}\n\n.hg-theme-default.hg-layout-numeric .hg-button {\n  width: 33.3%;\n  height: 60px;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n/* Buttons numpad */\n.hg-theme-default .hg-button.hg-button-numpadadd {\n  height: 85px;\n}\n\n.hg-theme-default .hg-button.hg-button-numpadenter {\n  height: 85px;\n}\n\n.hg-theme-default .hg-button.hg-button-numpad0 {\n  width: 105px;\n}\n\n/* Click */\n.hg-theme-default .hg-button:active {\n  opacity: 0.4;\n}\n\n/* Click */\n.hg-theme-default .hg-button.active {\n  opacity: 0.4;\n}\n\n/* Focus */\n.hg-theme-default .hg-button.hg-keyMarker {\n  background-color: var(--button-focus-background-color);\n  color: var(--button-focus-color);\n  box-shadow: none !important;\n  border-radius: 10px !important;\n}\n\n.hg-theme-default .hg-button.hg-keyMarker svg path {\n  fill: var(--button-focus-color);\n}\n\n/* Spacial buttons */\n.hg-theme-default .hg-button.hg-button-com {\n  max-width: 85px;\n}\n\n.hg-theme-default .hg-button.hg-standardBtn.hg-button-at {\n  max-width: 45px;\n}\n\n.hg-theme-default .hg-button.hg-standardBtn[data-skbtn=\".com\"] {\n  max-width: 82px;\n}\n\n.hg-theme-default .hg-button.hg-standardBtn[data-skbtn=\"@\"] {\n  width: calc(2 / 12 * 100%);\n}\n\n.hg-theme-default .hg-button.hg-standardBtn[data-skbtn=\"{bksp}\"] {\n  max-width: 60px;\n}\n\n.hg-theme-default .hg-button.hg-functionBtn[data-skbtn=\"{space}\"] {\n  min-width: 70%;\n}\n\n.hg-theme-default .hg-button.hg-functionBtn[data-skbtn=\"{shift}\"] {\n  /* max-width: 60px; */\n}\n\n.hg-theme-default .hg-button.hg-functionBtn[data-skbtn=\"{enter}\"] {\n    width: calc(2 / 12 * 100%);\n    border-bottom-left-radius: 0px !important;\n    border-top-right-radius: 5px !important;\n    border-bottom-right-radius: 5px !important;\n    font-weight: 600;\n    background-color: var(--button-enter-background-color);\n    border: solid 1px var(--button-enter-background-color);\n  }\n  \n  .hg-theme-default .hg-button.hg-functionBtn[data-skbtn=\"{enter}\"].hg-keyMarker {\n    background-color: var(--button-enter-focus-background-color);\n    border: solid 1px var(--button-enter-focus-background-color);\n}\n";

  var VirtualKeyboardComponent = /*#__PURE__*/function (_HTMLElement) {
    _inherits(VirtualKeyboardComponent, _HTMLElement);

    var _super = _createSuper(VirtualKeyboardComponent);

    function VirtualKeyboardComponent() {
      var _this;

      _classCallCheck(this, VirtualKeyboardComponent);

      _this = _super.call(this);

      _this.attachShadow({
        mode: 'open'
      });

      _this._createTemplate();

      return _this;
    }
    /**
     * Private
     */


    _createClass(VirtualKeyboardComponent, [{
      key: "_createTemplate",
      value: function _createTemplate() {
        var templateElement = document.createElement('template');
        templateElement.innerHTML = "<style type=\"text/css\">".concat(style$1, "</style>").concat(template$1);
        this.shadowRoot.appendChild(templateElement.content.cloneNode(true));
      }
    }]);

    return VirtualKeyboardComponent;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
  window.customElements.define('axis-virtual-keyboard', VirtualKeyboardComponent);

  var iconX = "<svg width=\"42\" height=\"42\" viewBox=\"0 0 42 42\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21.0039 3.61321e-07C16.8503 -0.00076996 12.7898 1.2302 9.33587 3.53724C5.88192 5.84428 3.18969 9.12375 1.59966 12.9609C0.00962005 16.7981 -0.406806 21.0206 0.403044 25.0945C1.21289 29.1683 3.21264 32.9106 6.14939 35.8478C9.08613 38.7851 12.828 40.7856 16.9017 41.5962C20.9754 42.4068 25.198 41.9911 29.0355 40.4018C32.8729 38.8125 36.1529 36.1209 38.4606 32.6674C40.7683 29.2139 42 25.1536 42 21C42.0005 18.2424 41.4578 15.5117 40.4029 12.9639C39.348 10.4161 37.8015 8.10107 35.8518 6.15099C33.902 4.20091 31.5873 2.654 29.0397 1.59861C26.492 0.543211 23.7615 3.1388e-07 21.0039 3.61321e-07ZM32.8203 19.6875H26.2773C26.1201 19.6836 25.9667 19.7355 25.8441 19.8338C25.7215 19.9322 25.6377 20.0707 25.6074 20.225C25.5921 20.3165 25.597 20.4104 25.6216 20.4999C25.6463 20.5894 25.6902 20.6724 25.7503 20.7433C25.8103 20.8141 25.8851 20.8709 25.9694 20.9099C26.0537 20.9489 26.1455 20.969 26.2383 20.9688H32.8203V32.8203H27.6871C24.4857 32.7112 21.7634 30.873 21.0662 27.9208C21.0563 27.8834 21.0343 27.8504 21.0037 27.8268C20.973 27.8032 20.9355 27.7904 20.8968 27.7904C20.8581 27.7904 20.8205 27.8032 20.7899 27.8268C20.7593 27.8504 20.7373 27.8834 20.7274 27.9208C20.3976 29.3189 19.6057 30.5648 18.4797 31.4569C17.3537 32.3489 15.9597 32.8348 14.5232 32.8359H9.18751C9.21087 32.9293 9.18751 20.9688 9.18751 20.9688H15.2982C15.4537 20.9718 15.6052 20.92 15.7262 20.8224C15.8473 20.7248 15.9302 20.5878 15.9603 20.4353C15.9762 20.3434 15.9718 20.2492 15.9475 20.1592C15.9231 20.0692 15.8793 19.9856 15.8191 19.9143C15.759 19.843 15.684 19.7858 15.5994 19.7466C15.5148 19.7074 15.4226 19.6873 15.3294 19.6875H9.18751V9.14855H14.679C16.086 9.1865 17.441 9.68875 18.5329 10.577C19.6248 11.4653 20.3922 12.6898 20.7157 14.0597C20.7219 14.1002 20.7423 14.1372 20.7734 14.1639C20.8045 14.1906 20.8441 14.2053 20.8851 14.2053C20.9261 14.2053 20.9657 14.1906 20.9968 14.1639C21.0279 14.1372 21.0484 14.1002 21.0545 14.0597C21.3844 12.662 22.1765 11.4165 23.3025 10.5252C24.4286 9.63382 25.8226 9.14875 27.2587 9.14855H32.8203V19.6875Z\" fill=\"white\"/></svg>";

  var iconI = "<svg width=\"42\" height=\"42\" viewBox=\"0 0 42 42\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21.0039 3.61321e-07C16.8503 -0.00076996 12.7898 1.2302 9.33586 3.53724C5.88192 5.84428 3.18969 9.12375 1.59965 12.9609C0.00961133 16.7981 -0.406803 21.0206 0.403047 25.0945C1.2129 29.1683 3.21264 32.9106 6.14939 35.8478C9.08614 38.7851 12.828 40.7856 16.9017 41.5962C20.9754 42.4068 25.198 41.9911 29.0355 40.4018C32.8729 38.8125 36.1529 36.1209 38.4606 32.6674C40.7683 29.2139 42 25.1536 42 21C42 15.4311 39.788 10.0903 35.8506 6.15213C31.9132 2.21398 26.5728 0.00103316 21.0039 3.61321e-07ZM28.0143 33.8835H17.5182V24.957C17.5172 24.3696 17.2833 23.8065 16.868 23.3911C16.4526 22.9757 15.8895 22.7419 15.3021 22.7409H11.8242V13.8221H17.2183C19.0378 13.8222 20.8272 14.286 22.4177 15.1697L23.664 15.9486C25.0135 16.9509 26.1096 18.2554 26.8644 19.7575C27.6191 21.2596 28.0116 22.9176 28.0104 24.5986L28.0143 33.8835ZM26.3668 15.8123C25.6076 15.8138 24.865 15.5901 24.233 15.1693C23.601 14.7485 23.1081 14.1497 22.8167 13.4486C22.5253 12.7476 22.4484 11.9758 22.5959 11.231C22.7433 10.4862 23.1085 9.80197 23.645 9.26484C24.1816 8.7277 24.8655 8.36187 25.6102 8.21365C26.3548 8.06544 27.1266 8.14151 27.828 8.43223C28.5294 8.72295 29.1287 9.21525 29.5501 9.8468C29.9715 10.4783 30.1961 11.2207 30.1953 11.98C30.1901 12.9947 29.7832 13.9661 29.0634 14.6814C28.3437 15.3967 27.3699 15.7978 26.3552 15.7967L26.3668 15.8123Z\" fill=\"white\"/></svg>";

  var iconS = "<svg width=\"42\" height=\"42\" viewBox=\"0 0 42 42\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21.0039 3.61321e-07C16.8503 -0.00076996 12.7898 1.2302 9.33587 3.53724C5.88192 5.84428 3.18969 9.12375 1.59966 12.9609C0.00962005 16.7981 -0.406806 21.0206 0.403044 25.0945C1.21289 29.1683 3.21264 32.9106 6.14939 35.8478C9.08613 38.7851 12.828 40.7856 16.9017 41.5962C20.9754 42.4068 25.198 41.9911 29.0355 40.4018C32.8729 38.8125 36.1529 36.1209 38.4606 32.6674C40.7683 29.2139 42 25.1536 42 21C42.0005 18.2424 41.4578 15.5117 40.4029 12.9639C39.348 10.4161 37.8015 8.10107 35.8518 6.15099C33.902 4.20091 31.5873 2.654 29.0397 1.59861C26.492 0.543211 23.7615 3.1388e-07 21.0039 3.61321e-07ZM32.8398 19.6408H23.3134C23.1585 19.6408 23.0099 19.7023 22.9003 19.8119C22.7908 19.9214 22.7292 20.07 22.7292 20.225C22.7292 20.3799 22.7908 20.5285 22.9003 20.6381C23.0099 20.7476 23.1585 20.8092 23.3134 20.8092H26.8498C28.3793 20.8094 29.8511 21.3936 30.9643 22.4425C32.0776 23.4914 32.7484 24.9257 32.8398 26.4525V27.1691C32.7526 28.6393 32.1279 30.026 31.0847 31.0655C30.0414 32.105 28.6523 32.7246 27.1819 32.8063C25.7114 32.8881 24.2622 32.4264 23.1101 31.509C21.958 30.5916 21.1834 29.2826 20.9338 27.8312C20.9338 27.8085 20.9248 27.7867 20.9087 27.7706C20.8926 27.7546 20.8708 27.7455 20.8481 27.7455C20.8254 27.7455 20.8036 27.7546 20.7875 27.7706C20.7715 27.7867 20.7624 27.8085 20.7624 27.8312C20.5218 29.2257 19.7962 30.4903 18.7138 31.4018C17.6313 32.3132 16.2615 32.8129 14.8464 32.8125H9.16025V22.367H18.7411C18.7811 22.3729 18.8218 22.3729 18.8618 22.367C19.0168 22.3505 19.1588 22.2731 19.2567 22.1518C19.3545 22.0306 19.4002 21.8755 19.3837 21.7205C19.3672 21.5656 19.2898 21.4235 19.1685 21.3257C19.0473 21.2278 18.8921 21.1821 18.7372 21.1986H15.2086C14.4205 21.1991 13.6401 21.0442 12.9119 20.7427C12.1837 20.4413 11.5222 19.9991 10.9651 19.4417C10.408 18.8842 9.96627 18.2224 9.66526 17.494C9.36426 16.7656 9.20985 15.9851 9.21088 15.197C9.21088 13.6063 9.84279 12.0807 10.9676 10.9559C12.0924 9.83109 13.6179 9.19918 15.2086 9.19918H32.8398V19.6408Z\" fill=\"white\"/></svg>";

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

      _this._component = _this._createComponent();
      _this._keyboard = _this._createKeyboard();

      _this._setupEventListeners();

      return _this;
    }
    /**
     * Getters
     */


    _createClass(VirtualKeyboard, [{
      key: "isOpen",
      get: function get() {
        return this._isOpen;
      }
      /**
       * Public
       */

    }, {
      key: "open",
      value: function open() {
        this._isOpen = true;

        this._keyboard.clearInput();

        if (!this._component.classList.contains('is-open')) this._component.classList.add('is-open');
      }
    }, {
      key: "close",
      value: function close() {
        this._isOpen = false;
        if (this._component.classList.contains('is-open')) this._component.classList.remove('is-open');
      }
    }, {
      key: "clear",
      value: function clear() {// this._keyboard.clearInput();
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
      key: "_createComponent",
      value: function _createComponent() {
        var component = document.createElement('axis-virtual-keyboard');
        document.documentElement.appendChild(component);
        return component.shadowRoot.childNodes[1];
      }
    }, {
      key: "_createKeyboard",
      value: function _createKeyboard() {
        var keyboard = new Keyboard(this._component, {
          // Props
          enableKeyNavigation: true,
          useMouseEvents: false,
          modules: [keyNavigation],
          layout: {
            default: ['1 2 3 4 5 6 7 8 9 0 - = {bksp}', 'a z e r t y u i o p ?', 'q s d f g h j k l m \'', 'w x c v b n , . ; / \\', '@ {space} {enter}']
          },
          display: {
            '{bksp}': "<span>Effacer</span> ".concat(iconX),
            '{enter}': "<span>Valider</span> ".concat(iconS),
            '{space}': "<span>Espace</span> ".concat(iconI)
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
        this.dispatchEvent('input', e);
      }
    }, {
      key: "_keypressHandler",
      value: function _keypressHandler(e) {
        if (!this._isOpen) return;
        this.dispatchEvent('keypress', e);
        if (e === '{enter}') this._validatedHandler(e);
      }
    }, {
      key: "_validatedHandler",
      value: function _validatedHandler(e) {
        this.dispatchEvent('validate', e);
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

        var activeButtons = this._component.querySelectorAll('.active');

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

        var activeButtons = this._component.querySelectorAll('.active');

        for (var i = 0; i < activeButtons.length; i++) {
          var button = activeButtons[i];
          if (button.classList.contains('active')) button.classList.remove('active');
        }
      }
    }]);

    return VirtualKeyboard;
  }(EventDispatcher);

  var template = "<div class=\"exit-overlay\">\n\n    <div class=\"title\">\n\n        <span>\n            Pause\n        </span>\n\n    </div>\n\n    <div class=\"message\">\n\n        <span>\n            Êtes-vous sûr de vouloir quitter ?\n        </span>\n\n    </div>\n\n    <div class=\"buttons\">\n\n        <div class=\"button validate\">\n\n            <svg width=\"42\" height=\"42\" viewBox=\"0 0 42 42\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21.0039 3.61321e-07C16.8503 -0.00076996 12.7898 1.2302 9.33587 3.53724C5.88192 5.84428 3.18969 9.12375 1.59966 12.9609C0.00962005 16.7981 -0.406806 21.0206 0.403044 25.0945C1.21289 29.1683 3.21264 32.9106 6.14939 35.8478C9.08614 38.7851 12.828 40.7856 16.9017 41.5962C20.9754 42.4068 25.198 41.9911 29.0355 40.4018C32.8729 38.8125 36.1529 36.1209 38.4606 32.6674C40.7683 29.2139 42 25.1536 42 21C42 15.4311 39.788 10.0903 35.8506 6.15213C31.9132 2.21398 26.5728 0.00103316 21.0039 3.61321e-07ZM32.8242 32.8359H28.3064C26.8694 32.8349 25.4748 32.3492 24.3482 31.4572C23.2215 30.5653 22.4288 29.3192 22.0983 27.9208C22.09 27.8826 22.0689 27.8483 22.0384 27.8237C22.0079 27.7992 21.97 27.7858 21.9308 27.7858C21.8917 27.7858 21.8537 27.7992 21.8233 27.8237C21.7928 27.8483 21.7717 27.8826 21.7634 27.9208C21.5284 28.9296 21.0508 29.8659 20.3722 30.6484C19.6935 31.4309 18.8342 32.036 17.8687 32.4113C17.0861 32.7157 16.2505 32.86 15.4112 32.8359C13.7772 32.7908 12.2224 32.1221 11.0658 30.9669C9.90919 29.8118 9.23854 28.2578 9.1914 26.6239C9.16302 25.7843 9.30752 24.9478 9.61592 24.1663C9.61489 24.1521 9.61489 24.1378 9.61592 24.1235C10.0127 23.1512 10.6921 22.3204 11.5663 21.7385C12.4405 21.1567 13.4692 20.8505 14.5193 20.8598H20.9883C21.1433 20.8598 21.2919 20.7982 21.4014 20.6887C21.511 20.5791 21.5725 20.4305 21.5725 20.2756C21.5725 20.1206 21.511 19.9721 21.4014 19.8625C21.2919 19.7529 21.1433 19.6914 20.9883 19.6914H9.26151C9.56647 16.9357 10.8292 14.3744 12.8294 12.4545C14.8296 10.5345 17.4403 9.37771 20.2062 9.18577C22.9721 8.99384 25.7176 9.779 27.9638 11.4043C30.21 13.0296 31.8144 15.3918 32.497 18.079C32.6631 18.9996 32.7723 19.9296 32.8242 20.8637V32.8359Z\" fill=\"white\"/></svg>\n            <span>Oui</span>\n\n        </div>\n\n        <div class=\"button cancel\">\n            \n            <svg width=\"42\" height=\"42\" viewBox=\"0 0 42 42\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21.0039 3.61321e-07C16.8503 -0.00076996 12.7898 1.2302 9.33587 3.53724C5.88192 5.84428 3.18969 9.12375 1.59966 12.9609C0.00962005 16.7981 -0.406806 21.0206 0.403044 25.0945C1.21289 29.1683 3.21264 32.9106 6.14939 35.8478C9.08613 38.7851 12.828 40.7856 16.9017 41.5962C20.9754 42.4068 25.198 41.9911 29.0355 40.4018C32.8729 38.8125 36.1529 36.1209 38.4606 32.6674C40.7683 29.2139 42 25.1536 42 21C42.0005 18.2424 41.4578 15.5117 40.4029 12.9639C39.348 10.4161 37.8015 8.10107 35.8518 6.15099C33.902 4.20091 31.5873 2.654 29.0397 1.59861C26.492 0.543211 23.7615 3.1388e-07 21.0039 3.61321e-07ZM32.8203 19.6875H26.2773C26.1201 19.6836 25.9667 19.7355 25.8441 19.8338C25.7215 19.9322 25.6377 20.0707 25.6074 20.225C25.5921 20.3165 25.597 20.4104 25.6216 20.4999C25.6463 20.5894 25.6902 20.6724 25.7503 20.7433C25.8103 20.8141 25.8851 20.8709 25.9694 20.9099C26.0537 20.9489 26.1455 20.969 26.2383 20.9688H32.8203V32.8203H27.6871C24.4857 32.7112 21.7634 30.873 21.0662 27.9208C21.0563 27.8834 21.0343 27.8504 21.0037 27.8268C20.973 27.8032 20.9355 27.7904 20.8968 27.7904C20.8581 27.7904 20.8205 27.8032 20.7899 27.8268C20.7593 27.8504 20.7373 27.8834 20.7274 27.9208C20.3976 29.3189 19.6057 30.5648 18.4797 31.4569C17.3537 32.3489 15.9597 32.8348 14.5232 32.8359H9.18751C9.21087 32.9293 9.18751 20.9688 9.18751 20.9688H15.2982C15.4537 20.9718 15.6052 20.92 15.7262 20.8224C15.8473 20.7248 15.9302 20.5878 15.9603 20.4353C15.9762 20.3434 15.9718 20.2492 15.9475 20.1592C15.9231 20.0692 15.8793 19.9856 15.8191 19.9143C15.759 19.843 15.684 19.7858 15.5994 19.7466C15.5148 19.7074 15.4226 19.6873 15.3294 19.6875H9.18751V9.14855H14.679C16.086 9.1865 17.441 9.68875 18.5329 10.577C19.6248 11.4653 20.3922 12.6898 20.7157 14.0597C20.7219 14.1002 20.7423 14.1372 20.7734 14.1639C20.8045 14.1906 20.8441 14.2053 20.8851 14.2053C20.9261 14.2053 20.9657 14.1906 20.9968 14.1639C21.0279 14.1372 21.0484 14.1002 21.0545 14.0597C21.3844 12.662 22.1765 11.4165 23.3025 10.5252C24.4286 9.63382 25.8226 9.14875 27.2587 9.14855H32.8203V19.6875Z\" fill=\"white\"/></svg>\n            <span>Retour</span>\n\n        </div>\n\n    </div>\n\n</div>";

  var style = ".exit-overlay {\n    display: none;\n\n    position: fixed;\n    left: 0;\n    top: 0;\n\n    width: 100%;\n    height: 100%;\n\n    backdrop-filter: blur(80px);\n\n    color: white;\n    font-family: 'Darker Grotesque', sans-serif;\n}\n\n.exit-overlay.is-visible {\n    display: block;\n}\n\n.exit-overlay:before {\n    position: absolute;\n    left: 0;\n    top: 0;\n\n    width: 100%;\n    height: 100%;\n\n    content: '';\n\n    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(270deg, rgba(0, 0, 0, 0) 50.46%, rgba(0, 0, 0, 0.8) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0) 31.77%, rgba(0, 0, 0, 0.7) 100%);\n}\n\n.exit-overlay .title {\n    position: absolute;\n    left: 181px;\n    top: 0;\n    bottom: 0;\n\n    height: 100px;\n\n    margin: auto;\n\n    font-weight: 800;\n    font-size: 128px;\n    line-height: 128px;\n}\n\n.exit-overlay .title span {\n    position: absolute;\n    left: 0;\n    top: -25px;\n}\n\n.exit-overlay .message {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n\n    width: 100%;\n    height: 100px;\n\n    margin: auto;\n    \n    text-align: center;\n\n    font-weight: 500;\n    font-size: 48px;\n    line-height: 65px;\n}\n\n.exit-overlay .message {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 30px;\n\n    width: 100%;\n}\n\n.exit-overlay .buttons {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    position: absolute;\n    top: 0;\n    bottom: 0;\n\n    height: 60px;\n    width: 100%;\n\n    margin: auto;\n}\n\n.exit-overlay .button {\n    margin-top: 200px;\n\n    font-weight: 800;\n    font-size: 32px;\n    line-height: 43px;\n    display: flex;\n    align-items: center;\n}\n\n.exit-overlay .button svg {\n    width: 42px;\n    height: 42px;\n\n    margin-right: 20px;\n}\n\n.exit-overlay .button span {\n    margin-bottom: 7px;\n}\n\n.exit-overlay .button:nth-child(1) {\n    margin-right: 100px;\n}\n";

  var ExitOverlayComponent = /*#__PURE__*/function (_HTMLElement) {
    _inherits(ExitOverlayComponent, _HTMLElement);

    var _super = _createSuper(ExitOverlayComponent);

    function ExitOverlayComponent() {
      var _this;

      _classCallCheck(this, ExitOverlayComponent);

      _this = _super.call(this);

      _this.attachShadow({
        mode: 'open'
      });

      _this._createTemplate();

      return _this;
    }
    /**
     * Private
     */


    _createClass(ExitOverlayComponent, [{
      key: "_createTemplate",
      value: function _createTemplate() {
        var templateElement = document.createElement('template');
        templateElement.innerHTML = "<style type=\"text/css\">".concat(style, "</style>").concat(template);
        this.shadowRoot.appendChild(templateElement.content.cloneNode(true));
      }
    }]);

    return ExitOverlayComponent;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
  window.customElements.define('axis-exit-overlay', ExitOverlayComponent);

  var ExitOverlay = /*#__PURE__*/function (_EventDispatcher) {
    _inherits(ExitOverlay, _EventDispatcher);

    var _super = _createSuper(ExitOverlay);

    function ExitOverlay() {
      var _this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, ExitOverlay);

      _this = _super.call(this); // Props

      _this._buttonManager = options.buttonManager; // Setup

      _this._active = false;
      _this._component = _this._createComponent();
      _this._buttonValidation1 = _this._buttonManager.getButton('a', 1);
      _this._buttonValidation2 = _this._buttonManager.getButton('a', 2);
      _this._buttonCancelation1 = _this._buttonManager.getButton('b', 1);
      _this._buttonCancelation2 = _this._buttonManager.getButton('b', 2);

      _this._bindAll();

      _this._setupEventListeners();

      return _this;
    }
    /**
     * Private
     */


    _createClass(ExitOverlay, [{
      key: "_show",
      value: function _show() {
        if (!this._component.classList.contains('is-visible')) this._component.classList.add('is-visible');
      }
    }, {
      key: "_hide",
      value: function _hide() {
        if (this._component.classList.contains('is-visible')) this._component.classList.remove('is-visible');
      }
    }, {
      key: "_createComponent",
      value: function _createComponent() {
        var component = document.createElement('axis-exit-overlay');
        document.documentElement.appendChild(component);
        return component.shadowRoot.childNodes[1];
      }
    }, {
      key: "_bindAll",
      value: function _bindAll() {
        this._keydownHandler = this._keydownHandler.bind(this);
        this._homeKeyupHandler = this._homeKeyupHandler.bind(this);
        this._validationKeydownHandler = this._validationKeydownHandler.bind(this);
        this._cancelationKeydownHandler = this._cancelationKeydownHandler.bind(this);
      }
    }, {
      key: "_setupEventListeners",
      value: function _setupEventListeners() {
        window.addEventListener('keydown', this._keydownHandler);

        this._buttonManager.addEventListener('home:keyup', this._homeKeyupHandler);

        this._buttonValidation1.addEventListener('keydown', this._validationKeydownHandler);

        this._buttonValidation2.addEventListener('keydown', this._validationKeydownHandler);

        this._buttonCancelation1.addEventListener('keydown', this._cancelationKeydownHandler);

        this._buttonCancelation2.addEventListener('keydown', this._cancelationKeydownHandler);
      }
    }, {
      key: "_keydownHandler",
      value: function _keydownHandler(e) {
        if (e.key !== 'Escape') return;

        this._homeKeyupHandler();
      }
    }, {
      key: "_homeKeyupHandler",
      value: function _homeKeyupHandler() {
        if (!this._active) {
          this._active = true;
          this.dispatchEvent('exit:attempted');

          this._show();
        } else {
          this.dispatchEvent('exit:completed');

          this._hide();
        }
      }
    }, {
      key: "_validationKeydownHandler",
      value: function _validationKeydownHandler() {
        if (!this._active) return;
        this.dispatchEvent('exit:completed');

        this._hide();
      }
    }, {
      key: "_cancelationKeydownHandler",
      value: function _cancelationKeydownHandler() {
        if (!this._active) return;
        this._active = false;
        this.dispatchEvent('exit:canceled');

        this._hide();
      }
    }]);

    return ExitOverlay;
  }(EventDispatcher);

  var GamepadEmulator = /*#__PURE__*/function (_EventDispatcher) {
    _inherits(GamepadEmulator, _EventDispatcher);

    var _super = _createSuper(GamepadEmulator);

    function GamepadEmulator(index) {
      var _this;

      _classCallCheck(this, GamepadEmulator);

      _this = _super.call(this); // Props

      _this._buttons = [];
      _this._index = index; // Setup

      _this._bindAll();

      _this._setupEventListeners();

      return _this;
    }
    /**
     * Public
     */


    _createClass(GamepadEmulator, [{
      key: "update",
      value: function update() {
        var gamepad = navigator.getGamepads()[this._index];

        if (!gamepad) return; // Buttons

        for (var i = 0; i < this._buttons.length; i++) {
          var button = this._buttons[i];
          button.current.pressed = gamepad.buttons[i].pressed;

          if (button.current.pressed !== button.previous.pressed) {
            this.buttonStateChangedHandler(i, button.current.pressed);
          }

          button.previous.pressed = button.current.pressed;
        } // Joystick


        this.joystickMoveHandler(gamepad.axes);
      }
    }, {
      key: "isConnected",
      value: function isConnected() {
        return !!navigator.getGamepads()[this._index];
      }
      /**
       * Private
       */

    }, {
      key: "_bindAll",
      value: function _bindAll() {
        this._gamepadConnectedHandler = this._gamepadConnectedHandler.bind(this);
      }
    }, {
      key: "_setupEventListeners",
      value: function _setupEventListeners() {
        window.addEventListener('gamepadconnected', this._gamepadConnectedHandler);
      }
    }, {
      key: "_gamepadConnectedHandler",
      value: function _gamepadConnectedHandler(e) {
        var gamepad = e.gamepad;
        if (!gamepad || gamepad.index !== this._index) return;
        console.log("\uD83C\uDFAE GAMEPAD ".concat(this._index, " CONNECTED"));

        for (var i = 0; i < gamepad.buttons.length; i++) {
          this._buttons.push({
            previous: {
              pressed: gamepad.buttons[i].pressed
            },
            current: {
              pressed: gamepad.buttons[i].pressed
            }
          });
        }
      }
    }, {
      key: "buttonStateChangedHandler",
      value: function buttonStateChangedHandler(index, state) {
        if (state) this.dispatchEvent('gamepad:keydown', index);
        if (!state) this.dispatchEvent('gamepad:keyup', index);
      }
    }, {
      key: "joystickMoveHandler",
      value: function joystickMoveHandler(axes) {
        // Left
        this.dispatchEvent('gamepad:joystick:move', {
          index: 0,
          position: {
            x: axes[0],
            y: axes[1]
          }
        }); // Right

        this.dispatchEvent('gamepad:joystick:move', {
          index: 1,
          position: {
            x: axes[2],
            y: axes[5]
          }
        });
      }
    }]);

    return GamepadEmulator;
  }(EventDispatcher);

  var globalStyle = "@import url('https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@500;600;700;800&display=swap');";

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
      _this._gamepadEmulators = [];
      _this._ledManager = _this._createLedManager();
      _this._joystickManager = _this._createJoystickManager();
      _this._buttonManager = _this._createButtonManager();
      _this._playerManager = _this._createPlayerManager();
      _this._virtualKeyboard = _this._createVirtualKeyboard();
      _this._exitOverlay = _this._createExitOverlay();

      _this._addGlobalStyle();

      _this._bindAll();

      _this._exposeMethods();

      _this._setupEventListeners();

      return _this;
    }
    /**
     * Getters
     */


    _createClass(Axis, [{
      key: "ipcRenderer",
      get: function get() {
        return this._ipcRenderer;
      }
    }, {
      key: "joystickManager",
      get: function get() {
        return this._joystickManager;
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
      key: "playerManager",
      get: function get() {
        return this._playerManager;
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
    }, {
      key: "ledManager",
      get: function get() {
        return this._ledManager;
      }
      /**
       * Public
       */

    }, {
      key: "registerKeys",
      value: function registerKeys(keyboardKeys, key, id) {
        return this._buttonManager.registerKeys(keyboardKeys, key, id);
      }
    }, {
      key: "registerGamepadEmulatorKeys",
      value: function registerGamepadEmulatorKeys(gamepadEmulator, gamepadButtonIndexes, key, id) {
        return this._buttonManager.registerGamepadEmulatorKeys(gamepadEmulator, gamepadButtonIndexes, key, id);
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
    }, {
      key: "createGamepadEmulator",
      value: function createGamepadEmulator(index) {
        var gamepadEmulator = new GamepadEmulator(index);

        this._gamepadEmulators.push(gamepadEmulator);

        return gamepadEmulator;
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
        this._ledManager.ipcRenderer = this._ipcRenderer;
        if (this._leaderboard) this._leaderboard.ipcRenderer = this._ipcRenderer;
      }
    }, {
      key: "_createLedManager",
      value: function _createLedManager() {
        var ledManager = new LedManager();
        return ledManager;
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
        var buttonManager = new ButtonManager({
          ledManager: this.ledManager
        });
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
      key: "_createExitOverlay",
      value: function _createExitOverlay() {
        var exitOverlay = new ExitOverlay({
          buttonManager: this._buttonManager
        });
        return exitOverlay;
      }
    }, {
      key: "_addGlobalStyle",
      value: function _addGlobalStyle() {
        var style = document.createElement('style');
        style.setAttribute('type', 'text/css');
        style.innerHTML = globalStyle;
        document.body.appendChild(style);
      }
    }, {
      key: "_bindAll",
      value: function _bindAll() {
        // Exposed methods
        this._setIpcRenderer = this._setIpcRenderer.bind(this); // Event handlers

        this._keydownHandler = this._keydownHandler.bind(this);
        this._keyupHandler = this._keyupHandler.bind(this);
        this._joystickMoveHandler = this._joystickMoveHandler.bind(this);
        this._joystickQuickMoveHandler = this._joystickQuickMoveHandler.bind(this);
        this._exitAttemptHandler = this._exitAttemptHandler.bind(this);
        this._exitCanceledHandler = this._exitCanceledHandler.bind(this);
        this._exitCompletedHandler = this._exitCompletedHandler.bind(this);
      }
    }, {
      key: "_setupEventListeners",
      value: function _setupEventListeners() {
        for (var i = 0; i < this._buttonManager.buttons.length; i++) {
          this._buttonManager.buttons[i].addEventListener('keydown', this._keydownHandler);

          this._buttonManager.buttons[i].addEventListener('keyup', this._keyupHandler);
        }

        this._joystickManager.joystick1.addEventListener('joystick:move', this._joystickMoveHandler);

        this._joystickManager.joystick2.addEventListener('joystick:move', this._joystickMoveHandler);

        this._joystickManager.joystick1.addEventListener('joystick:quickmove', this._joystickQuickMoveHandler);

        this._joystickManager.joystick2.addEventListener('joystick:quickmove', this._joystickQuickMoveHandler);

        this._exitOverlay.addEventListener('exit:attempted', this._exitAttemptHandler);

        this._exitOverlay.addEventListener('exit:canceled', this._exitCanceledHandler);

        this._exitOverlay.addEventListener('exit:completed', this._exitCompletedHandler);
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
      key: "_joystickQuickMoveHandler",
      value: function _joystickQuickMoveHandler(e) {
        this.dispatchEvent('joystick:quickmove', e);
      }
    }, {
      key: "_exitAttemptHandler",
      value: function _exitAttemptHandler() {
        this.dispatchEvent('exit:attempted');
      }
    }, {
      key: "_exitCanceledHandler",
      value: function _exitCanceledHandler() {
        this.dispatchEvent('exit:canceled');
      }
    }, {
      key: "_exitCompletedHandler",
      value: function _exitCompletedHandler() {
        var _this$_ipcRenderer;

        this.dispatchEvent('exit:completed');
        (_this$_ipcRenderer = this._ipcRenderer) === null || _this$_ipcRenderer === void 0 ? void 0 : _this$_ipcRenderer.send('exit');
      }
    }]);

    return Axis;
  }(EventDispatcher);

  var Axis$1 = new Axis();

  function getGamepadList() {
    return new Promise(function (resolve) {
      window.addEventListener('gamepadconnected', function () {
        resolve(navigator.getGamepads());
      });
    });
  }

  getGamepadList().then(function (list) {
    console.log(list);
  });
  var gamepadEmulator1 = Axis$1.createGamepadEmulator(0);
  var gamepadEmulator2 = Axis$1.createGamepadEmulator(1);
  Axis$1.joystick1.setGamepadEmulatorJoystick(gamepadEmulator1, 0);
  Axis$1.joystick2.setGamepadEmulatorJoystick(gamepadEmulator2, 0);
  Axis$1.registerGamepadEmulatorKeys(gamepadEmulator1, 1, 'a', 1);
  Axis$1.registerGamepadEmulatorKeys(gamepadEmulator2, 1, 'a', 2);
  var buttonsPlayer1 = [Axis$1.registerKeys('q', 'a', 1), Axis$1.registerKeys('d', 'b', 1), Axis$1.registerKeys('z', 'c', 1), Axis$1.registerKeys('s', 'd', 1)];
  var buttonsPlayer2 = [Axis$1.registerKeys('ArrowLeft', 'a', 2), Axis$1.registerKeys('ArrowRight', 'b', 2), Axis$1.registerKeys('ArrowUp', 'c', 2), Axis$1.registerKeys('ArrowDown', 'd', 2)];
  var player1 = Axis$1.createPlayer({
    id: 1,
    joysticks: Axis$1.joystick1,
    buttons: buttonsPlayer1
  });
  var player2 = Axis$1.createPlayer({
    id: 2,
    joysticks: Axis$1.joystick2,
    buttons: buttonsPlayer2
  });
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
  var center = document.querySelector('.js-joystick-center');
  var magnitude = document.querySelector('.js-joystick-magnitude');
  var leaderboard = Axis$1.createLeaderboard({
    id: 'Beyond-Memories-76b9304f-a7f8-48c7-867b-20f1dda3f2c8'
  });
  var input = document.querySelector('input');
  setTimeout(function () {
    Axis$1.virtualKeyboard.open();
    Axis$1.virtualKeyboard.addEventListener('input', function (e) {
      input.value = e;
    }); // setTimeout(() => {
    //     Axis.virtualKeyboard.close();
    // }, 2000);
  }, 1000);

  function setup() {
    setupEventListeners();
    update();
  }

  function update() {
    gamepadEmulator1.update();
    gamepadEmulator2.update();
    position1.current.x = lerp(position1.current.x, position1.target.x, 1);
    position1.current.y = lerp(position1.current.y, position1.target.y, 1);
    position2.current.x = lerp(position2.current.x, position2.target.x, 1);
    position2.current.y = lerp(position2.current.y, position2.target.y, 1);
    box1.style.transform = "translate(".concat(position1.current.x, "px, ").concat(position1.current.y, "px)");
    box2.style.transform = "translate(".concat(position2.current.x, "px, ").concat(position2.current.y, "px)");
    requestAnimationFrame(update);
  }

  setTimeout(function () {
    postScore();
  }, 1000);

  function postScore() {
    leaderboard.postScore({
      username: 'Léo',
      value: Math.random() * 100
    }).then(function () {
      leaderboard.getScores().then(function (response) {
        console.log(response);
      });
    });
  }

  function setupEventListeners() {
    player1.addEventListener('keydown', player1keydownHandler);
    player1.addEventListener('keyup', player1keyupHandler);
    player1.addEventListener('joystick:move', player1joystickMoveHandler);
    player2.addEventListener('keydown', player2keydownHandler);
    player2.addEventListener('keyup', player2keyupHandler);
    player2.addEventListener('joystick:move', player2joystickMoveHandler);
  }

  function player1keydownHandler(e) {
    var speed = 50;
    var directionX = 0;
    var directionY = 0;
    Axis$1.ledManager.leds[0].setColor('rgb(255, 255, 255)');
    Axis$1.ledManager.leds[1].setColor('rgb(255, 255, 255)');
    Axis$1.ledManager.leds[2].setColor('rgb(255, 255, 255)');
    Axis$1.ledManager.leds[3].setColor('rgb(255, 255, 255)');

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

    position1.target.x += speed * directionX;
    position1.target.y += speed * directionY;
  }

  function player1keyupHandler(e) {
    //
    Axis$1.ledManager.leds[0].setColor('rgb(255, 0, 0)');
    Axis$1.ledManager.leds[1].setColor('rgb(255, 0, 0)');
    Axis$1.ledManager.leds[2].setColor('rgb(255, 0, 0)');
    Axis$1.ledManager.leds[3].setColor('rgb(255, 0, 0)');
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

  function player1joystickMoveHandler(e) {
    var speed = 10;
    position1.target.x += e.position.x * speed;
    position1.target.y += -e.position.y * speed;
    position1.current.x += e.position.x * speed;
    position1.current.y += -e.position.y * speed;
    center.style.transform = "translate(".concat(e.position.x * 250, "px, ").concat(-e.position.y * 250, "px)");
    magnitude.style.transform = "scale(".concat(e.position.magnitude, ")");
  }

  function player2joystickMoveHandler(e) {
    var speed = 10;
    position2.target.x += e.position.x * speed;
    position2.target.y += -e.position.y * speed;
    position2.current.x += e.position.x * speed;
    position2.current.y += -e.position.y * speed;
  }

  function lerp(v0, v1, t) {
    return v0 * (1 - t) + v1 * t;
  }

  setup();

}));
