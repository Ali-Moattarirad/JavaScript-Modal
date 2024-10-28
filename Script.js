const Openbtn = document.querySelector('.open');
const Modalcontainer = document.querySelector('.modal-container');
const Closebtn = document.querySelector('.modal-btn');

Openbtn.addEventListener("click",function(){
    Modalcontainer.classList.add('show');
})

Closebtn.addEventListener("click",function(){
    Modalcontainer.classList.remove("show");
})