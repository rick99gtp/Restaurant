let readBtn = document.querySelector('.breakfast-button');
let modal = document.querySelector('.read-modal');

readBtn.addEventListener('click', function(e) {
    e.preventDefault();
    // first set body to 100vh
    // let body = document.querySelector('body');
    
    // body.classList.add('body-modal');

    // get modal element
    modal.style.display = "block";
});

let modalBtn = document.getElementById('modal-close');

modalBtn.addEventListener('click', function(e) {
    e.preventDefault();

    modal.style.display = 'none';
});

window.onclick = function(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
};

// get carousel controls
let prev = document.querySelector('#prev');
let next = document.querySelector('#next');

// get inner div
let cInner = document.querySelector('.carousel-container .carousel-inner');
let innerLeft = 0;

cInner.style.left = 0 + 'px';

// get width of inner div
let innerWidth = document.querySelector('.carousel-container .carousel-inner').getBoundingClientRect().width / 3;
let leftMax = innerWidth * -2;


prev.addEventListener('click', e => {
    if(innerLeft > leftMax) {
        innerLeft -= innerWidth;
        cInner.style.left = innerLeft + 'px';
    }
});

next.addEventListener('click', e => {
    if(innerLeft < 0) {
        innerLeft += innerWidth;
        cInner.style.left = innerLeft + 'px';        
    }
});