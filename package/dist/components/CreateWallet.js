"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlackCreateWalletButton = BlackCreateWalletButton;
var _react = _interopRequireWildcard(require("react"));
var _wagmi = require("wagmi");
var _CoinbaseWalletLogo = require("./CoinbaseWalletLogo");
var _Wagmi = require("./Wagmi");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var GRADIENT_BORDER_WIDTH = 2;
var buttonStyles = {
  background: 'transparent',
  border: '1px solid transparent',
  boxSizing: 'border-box'
};
var contentWrapperStyle = {
  position: 'relative'
};
function Gradient(_ref) {
  var children = _ref.children,
    style = _ref.style,
    _ref$isAnimationDisab = _ref.isAnimationDisabled,
    isAnimationDisabled = _ref$isAnimationDisab === void 0 ? false : _ref$isAnimationDisab;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isAnimating = _useState2[0],
    setIsAnimating = _useState2[1];
  var gradientStyle = (0, _react.useMemo)(function () {
    var rotate = isAnimating ? '720deg' : '0deg';
    return _objectSpread({
      transform: "rotate(".concat(rotate, ")"),
      transition: isAnimating ? 'transform 2s cubic-bezier(0.27, 0, 0.24, 0.99)' : 'none'
    }, style);
  }, [isAnimating, style]);
  var handleMouseEnter = (0, _react.useCallback)(function () {
    if (isAnimationDisabled || isAnimating) return;
    setIsAnimating(true);
  }, [isAnimationDisabled, isAnimating, setIsAnimating]);
  (0, _react.useEffect)(function () {
    if (!isAnimating) return;
    var animationTimeout = setTimeout(function () {
      setIsAnimating(false);
    }, 2000);
    return function () {
      clearTimeout(animationTimeout);
    };
  }, [isAnimating]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: contentWrapperStyle,
    onMouseEnter: handleMouseEnter
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "gradient-background",
    style: gradientStyle
  }), children);
}
function BlackCreateWalletButton(_ref2) {
  var _ref2$height = _ref2.height,
    height = _ref2$height === void 0 ? 66 : _ref2$height,
    _ref2$width = _ref2.width,
    width = _ref2$width === void 0 ? 200 : _ref2$width;
  var _useConnect = (0, _wagmi.useConnect)(),
    connectors = _useConnect.connectors,
    connect = _useConnect.connect;
  var minButtonHeight = 48;
  var minButtonWidth = 200;
  var buttonHeight = Math.max(minButtonHeight, height);
  var buttonWidth = Math.max(minButtonWidth, width);
  var gradientDiameter = Math.max(buttonHeight, buttonWidth);
  var styles = (0, _react.useMemo)(function () {
    return {
      gradientContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: buttonHeight / 2,
        height: buttonHeight,
        width: buttonWidth,
        boxSizing: 'border-box',
        overflow: 'hidden'
      },
      gradient: {
        background: 'conic-gradient(from 180deg, #45E1E5 0deg, #0052FF 86.4deg, #B82EA4 165.6deg, #FF9533 255.6deg, #7FD057 320.4deg, #45E1E5 360deg)',
        position: 'absolute',
        top: -buttonHeight - GRADIENT_BORDER_WIDTH,
        left: -GRADIENT_BORDER_WIDTH,
        width: gradientDiameter,
        height: gradientDiameter
      },
      buttonBody: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
        backgroundColor: '#000000',
        height: buttonHeight - GRADIENT_BORDER_WIDTH * 2,
        width: buttonWidth - GRADIENT_BORDER_WIDTH * 2,
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold',
        fontSize: 18,
        borderRadius: buttonHeight / 2,
        position: 'relative',
        paddingRight: 10
      }
    };
  }, [buttonHeight, buttonWidth, gradientDiameter]);
  var createWallet = (0, _react.useCallback)(function () {
    var coinbaseWalletConnector = connectors.find(function (connector) {
      return connector.id === 'coinbaseWalletSDK';
    });
    if (coinbaseWalletConnector) {
      connect({
        connector: coinbaseWalletConnector
      });
    }
  }, [connectors, connect]);
  return /*#__PURE__*/_react["default"].createElement("button", {
    style: buttonStyles,
    onClick: createWallet
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.gradientContainer
  }, /*#__PURE__*/_react["default"].createElement(Gradient, {
    style: styles.gradient,
    isAnimationDisabled: false
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.buttonBody
  }, /*#__PURE__*/_react["default"].createElement(_CoinbaseWalletLogo.CoinbaseWalletLogo, {
    size: 26,
    containerStyles: {
      paddingRight: 10
    }
  }), "Create Wallet"))));
}