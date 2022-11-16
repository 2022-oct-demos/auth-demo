/* Imports */

import { redirectIfLoggedIn, signUpUser } from './fetch-utils.js';

/* Get DOM Elements */
const signUpForm = document.getElementById('sign-up');

redirectIfLoggedIn();

/* Events */
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);
    const email = data.get('email');
    const user = await signUpUser(email, data.get('password'));

    if (user) {
        location.replace('/other-page');
    }
});

// duplicate event for sign IN form but call signInUser instead
