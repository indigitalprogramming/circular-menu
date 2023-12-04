// (@indigitalprogramming) => {código-fonte na bio} 
const menu = document.querySelector('.menu')
menu.addEventListener('click', active)

function active() {
    const items = document.querySelectorAll('.item')
    menu.style.transform = 'rotate(315deg)'
    items.forEach((item, indice) => {
        let icon = item.querySelector('img')
        item.style.transform = 
        `rotate(calc(360deg / 8 * ${indice + 1}))`
        item.style.transformOrigin = '125px'
        item.style.left = '0'
        item.style.opacity = '1'
        icon.style.transform = 
        `rotate(calc(360deg / -8 * ${indice + 1}))`
    })

    menu.addEventListener('click', disable)
    menu.removeEventListener('click', active)
}

function disable() {
    const items = document.querySelectorAll('.item')
    menu.style.transform = 'rotate(0deg)'
    items.forEach((item, indice) => {
        let icon = item.querySelector('img')
        item.style.transform = `rotate(0deg)`
        item.style.transformOrigin = '125px'
        item.style.left = '0'
        item.style.opacity = '0'
        icon.style.transform = 
        `rotate(calc(360deg / 8 * ${indice + 1}))`
    })

    menu.addEventListener('click', active)
    menu.removeEventListener('click', disable)
}
// (@indigitalprogramming) => {código-fonte na bio} 