let readBtn = document.querySelector('.breakfast-right-read');
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
