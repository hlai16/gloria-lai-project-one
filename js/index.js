
function menu() {
    const ul = document.getElementByClass('.my_links');
    ul.classList.toggle('hidden');
    // ul.classList.toggle('show');
  }

const icon = document.querySelector('.icon');

const hamburgerOn = icon.addEventListener('click', function(e){
    e.preventDefault();
    menu();
});

hamburgerOn();


