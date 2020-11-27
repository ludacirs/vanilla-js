const titleModalElem = document.querySelector('.title-modal');
const modalElem = document.querySelector('.modal');
const closeElem = document.querySelector('.modal-close');

const titleSideBarElem = document.querySelector('.title-sidebar');
const bodyElem = document.querySelector('body');

function modalClickEvent(target) {
    if(target === titleModalElem){
        if(bodyElem.classList.contains('body-move')){
            modalElem.style.left ='-20vw';
        } else modalElem.style.left ='0';

        modalElem.style.display ='flex';
    }
    if(target === closeElem){
        modalElem.style.display ='none';
    }
    if(target === modalElem){
        modalElem.style.display ='none';
    }
}

function sideBarClickEvent(target) {
    if(target === titleSideBarElem){
        bodyElem.classList.toggle('body-move');
    }
}

function clickHandler(e) {
    modalClickEvent(e.target);
    sideBarClickEvent(e.target);
}

window.addEventListener('click',clickHandler);