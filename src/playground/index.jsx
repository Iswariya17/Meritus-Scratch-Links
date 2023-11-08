// Polyfills
import 'es6-object-assign/auto';
import 'core-js/fn/array/includes';
import 'core-js/fn/promise/finally';
import 'intl'; // For Safari 9
import '@babel/polyfill';


import React from 'react';
import ReactDOM from 'react-dom';

import AppStateHOC from '../lib/app-state-hoc.jsx';
import BrowserModalComponent from '../components/browser-modal/browser-modal.jsx';
import supportedBrowser from '../lib/supported-browser';
import Cookies from 'js-cookie';

import styles from './index.css';
import './index.css'

const appTarget = document.createElement('div');
appTarget.className = styles.app;
document.body.appendChild(appTarget);


function getTokenFromCookies() {
    return Cookies.get('userIn'); // Replace with the actual name of your token cookie
}


// if (supportedBrowser()) {
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


async function renderApp() {
    require('./render-gui.jsx').default(appTarget);
}

async function verifyToken(token) {
    try {
        // Set the "userIn" cookie with the token value
        // Cookies.set('userIn', token);
        // Cookies.set('userIn', token, { domain: '.meritus.ai', expires: 3, sameSite: 'None', secure: true});

        // Create a request body JSON object
        const requestBody = {
            userIn: token,
        };



        const response = await fetch('https://api.meritus.ai/api/snap/verify', {
        // const response = await fetch('http://localhost:3003/api/snap/verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody), // Convert the request body to JSON
            credentials: 'include', // Include cookies with the request

        });

        if (response.ok) {
            return true; // Token is valid
        } else {
            return false; // Token is invalid
        }
    } catch (error) {
        console.error('Error verifying token:', error);
        return false; // An error occurred, treat as invalid
    }
}


// async function renderApp() {
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
if (supportedBrowser()) {
    renderApp();

} else {
    BrowserModalComponent.setAppElement(appTarget);
    const WrappedBrowserModalComponent = AppStateHOC(BrowserModalComponent, true /* localesOnly */);
    const handleBack = () => {
        console.log("clicked")
    };
    // eslint-disable-next-line react/jsx-no-bind
    ReactDOM.render(<WrappedBrowserModalComponent onBack={handleBack} />, appTarget);
}