const menu = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById("navbar")

if(menu) {
    menu.addEventListener('click',()=>{
        nav.classList.add('active')
        console.log('hello');
    })
}

if(close) {
    close.addEventListener('click',()=>{
        nav.classList.remove('active')
        console.log('hello');
    })
}

