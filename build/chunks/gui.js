var GUI =
(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["gui"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/index.css":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/playground/index.css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html,\nbody,\n.index_app_3Qs6X {\n    /* probably unecessary, transitional until layout is refactored */\n    width: 100%; \n    height: 100%;\n    margin: 0;\n\n    /* Setting min height/width makes the UI scroll below those sizes */\n    min-width: 1024px;\n    min-height: 640px; /* Min height to fit sprite/backdrop button */\n}\n\n/* @todo: move globally? Safe / side FX, for blocks particularly? */\n\n* { box-sizing: border-box; }\n\n.index_menu-bar_menu-bar_JcuHF_32iSq{\n    background-color: red !important;\n}\n\n.index_main-container_25RUN {\n    position: absolute;\n    padding: 50px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background: #fff1f9;\n}", ""]);

// exports
exports.locals = {
	"app": "index_app_3Qs6X",
	"menu-bar_menu-bar_JcuHF": "index_menu-bar_menu-bar_JcuHF_32iSq",
	"menuBarMenuBarJcuHf": "index_menu-bar_menu-bar_JcuHF_32iSq",
	"main-container": "index_main-container_25RUN",
	"mainContainer": "index_main-container_25RUN"
};

/***/ }),

/***/ "./src/playground/index.css":
/*!**********************************!*\
  !*** ./src/playground/index.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/playground/index.jsx":
/*!**********************************!*\
  !*** ./src/playground/index.jsx ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var es6_object_assign_auto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! es6-object-assign/auto */ "./node_modules/es6-object-assign/auto.js");
/* harmony import */ var es6_object_assign_auto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(es6_object_assign_auto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_fn_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/fn/array/includes */ "./node_modules/core-js/fn/array/includes.js");
/* harmony import */ var core_js_fn_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_fn_array_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_fn_promise_finally__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/fn/promise/finally */ "./node_modules/core-js/fn/promise/finally.js");
/* harmony import */ var core_js_fn_promise_finally__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_fn_promise_finally__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! intl */ "./node_modules/intl/index.js");
/* harmony import */ var intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/app-state-hoc.jsx */ "./src/lib/app-state-hoc.jsx");
/* harmony import */ var _components_browser_modal_browser_modal_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/browser-modal/browser-modal.jsx */ "./src/components/browser-modal/browser-modal.jsx");
/* harmony import */ var _lib_supported_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/supported-browser */ "./src/lib/supported-browser.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index.css */ "./src/playground/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_11__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Polyfills



 // For Safari 9










var appTarget = document.createElement('div');
appTarget.className = _index_css__WEBPACK_IMPORTED_MODULE_11___default.a.app;
document.body.appendChild(appTarget);

function getTokenFromCookies() {
  return js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.get('userIn'); // Replace with the actual name of your token cookie
} // if (supportedBrowser()) {
//     // require needed here to avoid importing unsupported browser-crashing code
//     // at the top level
//     require('./render-gui.jsx').default(appTarget);
// } else {
//     BrowserModalComponent.setAppElement(appTarget);
//     const WrappedBrowserModalComponent = AppStateHOC(BrowserModalComponent, true /* localesOnly */);
//     const handleBack = () => {};
//     // eslint-disable-next-line react/jsx-no-bind
//     ReactDOM.render(<WrappedBrowserModalComponent onBack={handleBack} />, appTarget);
// }
// Function to verify the JWT token and get user details
// async function verifyTokenAndGetUser(token) {
//     console.log("tokenfrom funcn", token)
//     try {
//         const response = await fetch('http://localhost:3003/api/snap/verify', {
//             method: 'get',
//             headers: {
//                 'Content-Type': 'application/json',
//                 token: `Bearer ${token}`,
//             },
//         });
//         if (response.ok) {
//             // return await response.json();
//             const res = await response.json();
//             return res
//             // console.log("respon form scratch ==>", res)
//         } else {
//             throw new Error('Invalid token');
//         }
//         // console.log("response ==>", response)
//     } catch (error) {
//         throw new Error('Token verification failed');
//     }
// }
// // Function to extract the token from the URL
// function getTokenFromURL() {
//     const params = new URLSearchParams(window.location.search);
//     console.log("token ==>", params.get('token'))
//     return params.get('token');
// }
// async function renderApp() {
//     // try {
//     //     // Extract the token from the URL
//     //     const token = getTokenFromURL();
//     //     if (!token) {
//     //         throw new Error('No token found in the URL');
//     //     }
//     //     // Verify the token and get user details
//     //     const user = await verifyTokenAndGetUser(token);
//         // User is authenticated, render the main app
//         require('./render-gui.jsx').default(appTarget);
//     // } catch (error) {
//     //     console.log("error", error);
//     //     if (error.message === 'No token found in the URL') {
//     //         // Show a message about token not found in the URL
//     //         const message = 'Token not found in the URL';
//     //         showErrorMessage(message);
//     //     } else if (error.message === 'Token verification failed') {
//     //         // Show a message about token validation failure
//     //         const message = 'Your session has been expired! Please login again.';
//     //         showErrorMessage(message);
//     //     } else {
//     //         // For other errors, show the browser modal
//     //         BrowserModalComponent.setAppElement(appTarget);
//     //         const WrappedBrowserModalComponent = AppStateHOC(BrowserModalComponent, true /* localesOnly */);
//     //         const handleBack = () => {
//     //             console.log("clicked");
//     //         };
//     //         ReactDOM.render(<WrappedBrowserModalComponent onBack={handleBack} />, appTarget);
//     //     }
//     // }
// }
// function showErrorMessage(message) {
//     // Implement a function to show the error message to the user, for example, using an alert or a custom modal.
//     // You can use libraries like React-Bootstrap or Material-UI for styling and displaying the error message.
//     alert(message);
//     window.location.href = 'http://localhost:3000/';
// }
// const appTarget = document.createElement('div');
// appTarget.className = styles.app;
// document.body.appendChild(appTarget);


function renderApp() {
  return _renderApp.apply(this, arguments);
}

function _renderApp() {
  _renderApp = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            __webpack_require__(/*! ./render-gui.jsx */ "./src/playground/render-gui.jsx")["default"](appTarget);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _renderApp.apply(this, arguments);
}

function verifyToken(_x) {
  return _verifyToken.apply(this, arguments);
} // async function renderApp() {
//     const token = getTokenFromCookies();
//     console.log("recived token ==>", token)
//     if (token) {
//         // Token is present, verify it
//         const tokenIsValid = await verifyToken(token);
//         if (tokenIsValid) {
//             // Token is valid, render the Scratch project
//             require('./render-gui.jsx').default(appTarget);
//         } else {
//             // Token is invalid, render a message
//             const notAuthenticatedMessage = (
//                 <div className="main-container" style={{"position" : "absolute", "top" : "50%", "left" : "50%", "transform" : "translate(-50%, -50%)", "backgroundColor" : "#fff1f9","padding" : "50px", "display" : "flex", "flexDirection" : "column", "justifyContent" : "center", "alignItems" : "center"}}>
//                     <div className="img-wrapper"></div>
//                     <h2>Token is expired!</h2>
//                     <p>Kindly login again at <a href="https://meritus.ai/">www.meritus.ai</a></p>
//                     {/* <p>Go to </p> */}
//                 </div>
//             );
//             ReactDOM.render(notAuthenticatedMessage, appTarget);
//         }
//     } else {
//         // Token is not present, render a message
//         const notAuthenticatedMessage = (
//             <div className="main-container" style={{"position" : "absolute", "top" : "50%", "left" : "50%", "transform" : "translate(-50%, -50%)", "backgroundColor" : "#fff1f9","padding" : "50px", "display" : "flex", "flexDirection" : "column", "justifyContent" : "center", "alignItems" : "center"}}>
//                 <div className="img-wrapper"></div>
//                 <h2>You are not authenticated!</h2>
//                 <p>This site can only be accessed by valid course participants.</p>
//                 <p>Go to <a href="https://meritus.ai/">www.meritus.ai</a></p>
//             </div>
//         );
//         ReactDOM.render(notAuthenticatedMessage, appTarget);
//     }
// }
// Check if the browser is supported before rendering


function _verifyToken() {
  _verifyToken = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(token) {
    var requestBody, response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            // Set the "userIn" cookie with the token value
            // Cookies.set('userIn', token);
            // Cookies.set('userIn', token, { domain: '.meritus.ai', expires: 3, sameSite: 'None', secure: true});
            // Create a request body JSON object
            requestBody = {
              userIn: token
            };
            _context2.next = 4;
            return fetch('https://api.meritus.ai/api/snap/verify', {
              // const response = await fetch('http://localhost:3003/api/snap/verify', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(requestBody),
              // Convert the request body to JSON
              credentials: 'include' // Include cookies with the request

            });

          case 4:
            response = _context2.sent;

            if (!response.ok) {
              _context2.next = 9;
              break;
            }

            return _context2.abrupt("return", true);

          case 9:
            return _context2.abrupt("return", false);

          case 10:
            _context2.next = 16;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
            console.error('Error verifying token:', _context2.t0);
            return _context2.abrupt("return", false);

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 12]]);
  }));
  return _verifyToken.apply(this, arguments);
}

if (Object(_lib_supported_browser__WEBPACK_IMPORTED_MODULE_9__["default"])()) {
  renderApp();
} else {
  _components_browser_modal_browser_modal_jsx__WEBPACK_IMPORTED_MODULE_8__["default"].setAppElement(appTarget);
  var WrappedBrowserModalComponent = Object(_lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_7__["default"])(_components_browser_modal_browser_modal_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], true
  /* localesOnly */
  );

  var handleBack = function handleBack() {
    console.log("clicked");
  }; // eslint-disable-next-line react/jsx-no-bind


  react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(WrappedBrowserModalComponent, {
    onBack: handleBack
  }), appTarget);
}

/***/ }),

/***/ "./src/playground/render-gui.jsx":
/*!***************************************!*\
  !*** ./src/playground/render-gui.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/app-state-hoc.jsx */ "./src/lib/app-state-hoc.jsx");
/* harmony import */ var _containers_gui_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/gui.jsx */ "./src/containers/gui.jsx");
/* harmony import */ var _lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/hash-parser-hoc.jsx */ "./src/lib/hash-parser-hoc.jsx");
/* harmony import */ var _lib_log_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/log.js */ "./src/lib/log.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }









var onClickLogo = function onClickLogo() {
  window.location = 'https://scratch.mit.edu';
};

var handleTelemetryModalCancel = function handleTelemetryModalCancel() {
  Object(_lib_log_js__WEBPACK_IMPORTED_MODULE_6__["default"])('User canceled telemetry modal');
};

var handleTelemetryModalOptIn = function handleTelemetryModalOptIn() {
  Object(_lib_log_js__WEBPACK_IMPORTED_MODULE_6__["default"])('User opted into telemetry');
};

var handleTelemetryModalOptOut = function handleTelemetryModalOptOut() {
  Object(_lib_log_js__WEBPACK_IMPORTED_MODULE_6__["default"])('User opted out of telemetry');
};
/*
 * Render the GUI playground. This is a separate function because importing anything
 * that instantiates the VM causes unsupported browsers to crash
 * {object} appTarget - the DOM element to render to
 */


/* harmony default export */ __webpack_exports__["default"] = (function (appTarget) {
  _containers_gui_jsx__WEBPACK_IMPORTED_MODULE_4__["default"].setAppElement(appTarget); // note that redux's 'compose' function is just being used as a general utility to make
  // the hierarchy of HOC constructor calls clearer here; it has nothing to do with redux's
  // ability to compose reducers.

  var WrappedGui = Object(redux__WEBPACK_IMPORTED_MODULE_2__["compose"])(_lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], _lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_5__["default"])(_containers_gui_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]); // TODO a hack for testing the backpack, allow backpack host to be set by url param

  var backpackHostMatches = window.location.href.match(/[?&]backpack_host=([^&]*)&?/);
  var backpackHost = backpackHostMatches ? backpackHostMatches[1] : null;
  var scratchDesktopMatches = window.location.href.match(/[?&]isScratchDesktop=([^&]+)/);
  var simulateScratchDesktop;

  if (scratchDesktopMatches) {
    try {
      // parse 'true' into `true`, 'false' into `false`, etc.
      simulateScratchDesktop = JSON.parse(scratchDesktopMatches[1]);
    } catch (_unused) {
      // it's not JSON so just use the string
      // note that a typo like "falsy" will be treated as true
      simulateScratchDesktop = scratchDesktopMatches[1];
    }
  }

  if (false) {}

  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( // important: this is checking whether `simulateScratchDesktop` is truthy, not just defined!
  simulateScratchDesktop ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedGui, {
    canEditTitle: true,
    isScratchDesktop: true,
    showTelemetryModal: true,
    canSave: false,
    onTelemetryModalCancel: handleTelemetryModalCancel,
    onTelemetryModalOptIn: handleTelemetryModalOptIn,
    onTelemetryModalOptOut: handleTelemetryModalOptOut
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedGui, {
    canEditTitle: true,
    backpackVisible: true,
    showComingSoon: true,
    backpackHost: backpackHost,
    canSave: false,
    onClickLogo: onClickLogo
  }), appTarget);
});

/***/ }),

/***/ 1:
/*!*******************************************!*\
  !*** ./locale-data/complete.js (ignored) ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[["./src/playground/index.jsx","lib.min"]]]);
//# sourceMappingURL=gui.js.map