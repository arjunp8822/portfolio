window.addEventListener('load', () => {
    const loader = document.querySelector('.loader')
    const lineOne = document.querySelector('.line-1')
    const lineTwo = document.querySelector('.line-2')
    const lineThree = document.querySelector('.line-3')
    const lineFour = document.querySelector('.line-4')

    lineOne.classList.add('move-1')
    lineTwo.classList.add('move-2')
    lineThree.classList.add('move-3')
    lineFour.classList.add('move-4')

    setTimeout(() => {
        loader.classList.add('hide-loader')
    }, 4100)
})

const mobileIcon = document.querySelector('.mobile-icon')
const navLinks = document.querySelector('.nav-links')
mobileIcon.addEventListener('click', () => {
    navLinks.classList.add('.nav-links-show')
})