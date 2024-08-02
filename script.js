let btnMenu = document.getElementById('btn-mobile')
let menu = document.getElementById('menu-mobile')
let overlei =document.getElementById('overlei-menu')

btnMenu.addEventListener('click',() => {
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click',() => {
    menu.classList.remove('abrir-menu')
})

menu.addEventListener('click',() => {
    menu.classList.remove('abrir-menu')
})


function abrirModal(){
    const modal = document.getElementById('janela-modal')
    modal.classList.add('abrir')

    modal.addEventListener('click',(e) => {
            if(e.target.id == 'fechar' || e.target.id == 'janela-modal'){
                modal.classList.remove('abrir')
            }
    })
}
function abrirModalDois(){
    const modal = document.getElementById('janela-modal2')
    modal.classList.add('abrir')

    modal.addEventListener('click',(e) => {
            if(e.target.id == 'fechar1' || e.target.id == 'janela-modal2'){
                modal.classList.remove('abrir')
            }
    })
}
function abrirModalTres(){
    const modal = document.getElementById('janela-modal3')
    modal.classList.add('abrir')

    modal.addEventListener('click',(e) => {
            if(e.target.id == 'fechar2' || e.target.id == 'janela-modal3'){
                modal.classList.remove('abrir')
            }
    })
}