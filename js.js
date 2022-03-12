
function showMenu(){

    let menu = document.querySelector('.social-media');
    

    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
        menu.classList.add('show');
    }else{
        menu.classList.remove('show');
        menu.classList.add('hidden');
    }

}

function addEvents(){
    let burgerMenu = document.querySelector('.burger-menu');
    let closeButton = document.querySelector('.close-button');
    burgerMenu.addEventListener('click',showMenu);
    closeButton.addEventListener('click',showMenu);
}

addEvents()
