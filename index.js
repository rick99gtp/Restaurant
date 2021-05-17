let readBtn = document.querySelector('.breakfast-button');
let modal = document.querySelector('.read-modal');

readBtn.addEventListener('click', function(e) {
    e.preventDefault();

    modal.classList.add('show-modal');
});

let modalBtn = document.getElementById('modal-close');

modalBtn.addEventListener('click', function(e) {
    e.preventDefault();

    modal.classList.remove('show-modal');
});

window.onclick = function(e) {
    if(e.target == modal) {
        modal.classList.remove('show-modal');
    }
};

let hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', e => {
    let lineOne = document.querySelector('#firstLine');
    let lineTwo = document.querySelector('#secondLine');
    let lineThree = document.querySelector('#lastLine');

    lineOne.classList.toggle('animLineOne');
    lineTwo.classList.toggle('animLineTwo');
    lineThree.classList.toggle('animLineThree');
});
