

// credit to: https://stackoverflow.com/questions/53539461/how-do-i-use-vanilla-javascript-to-write-a-toggle-function-i-wrote-in-jquery
const menuShow = function menu() {
    const ul = document.querySelector('.my_links');
    ul.classList.toggle('hidden');
  }

const icon = document.querySelector('.icon');

const hamburgerOn = icon.addEventListener('click', (e) => {
    e.preventDefault();
    menuShow();
});

hamburgerOn();


