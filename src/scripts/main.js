'use strict';

async function waitFor(element, eventName) {
  // write your code here
  const loginField = document.getElementById('login');
  // const passwordField = document.getElementById('password');
  // const button = document.getElementById('submit');

  const resolver = (complete, cancel) => {
    loginField.addEventListener('login', () => {
      complete('');
    });
  };

  return new Promise(resolver);
}

const printMessage = (message) => {
  // write your code here
};

module.exports = {
  waitFor,
  printMessage,
};
