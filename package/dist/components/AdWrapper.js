"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAdContext = exports.AdWrapper = void 0;
var _react = _interopRequireWildcard(require("react"));
var _walletSdk = require("@coinbase/wallet-sdk");
var _wagmi = require("wagmi");
var _CreateWallet = require("./CreateWallet");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var AdContext = /*#__PURE__*/(0, _react.createContext)();
var AdWrapper = exports.AdWrapper = function AdWrapper(_ref) {
  var region = _ref.region,
    dev_wallet_address = _ref.dev_wallet_address,
    children = _ref.children;
  var _useAccount = (0, _wagmi.useAccount)(),
    address = _useAccount.address,
    isConnected = _useAccount.isConnected;
  var context_value = {
    region: region,
    address: address,
    dev_wallet_address: dev_wallet_address
  };
  var sdk = new _walletSdk.CoinbaseWalletSDK({
    appName: "Adbase",
    appChainIds: [8453],
    appLogoUrl: ""
  });
  return /*#__PURE__*/_react["default"].createElement("div", null, isConnected ? /*#__PURE__*/_react["default"].createElement(AdContext.Provider, {
    value: context_value
  }, children) : /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_CreateWallet.BlackCreateWalletButton, null)));
};
var useAdContext = exports.useAdContext = function useAdContext() {
  return (0, _react.useContext)(AdContext);
};