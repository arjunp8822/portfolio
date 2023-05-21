// loader

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

// mobile navbar

const mobileIcon = document.querySelector('.mobile-icon')
const navLinks = document.querySelector('.nav-links')
const mobileOne = document.querySelector('.mob-one')
const mobileTwo = document.querySelector('.mob-two')
const mobileThree = document.querySelector('.mob-three')
const sections = document.querySelectorAll('section')

let openMobileNav = 0

mobileIcon.addEventListener('click', () => {
    if (openMobileNav === 1) {
        navLinks.classList.remove('nav-links-show')
        mobileOne.classList.remove('mob-one-open')
        mobileTwo.classList.remove('mob-two-open')
        mobileThree.classList.remove('mob-three-open')
        openMobileNav = 0
        sections.forEach((section) => {
            section.classList.remove('blur')
        })
    } else {
        navLinks.classList.add('nav-links-show')
        mobileOne.classList.add('mob-one-open')
        mobileTwo.classList.add('mob-two-open')
        mobileThree.classList.add('mob-three-open')
        openMobileNav = 1
        sections.forEach((section) => {
            section.classList.add('blur')
        })
    }
})

// work scroller

const workScroller = document.querySelector('.work-scroller')
const ri = document.querySelector('.work-role-ri')
const wesfarmers = document.querySelector('.work-role-wesfarmers')
const mazars = document.querySelector('.work-role-mazars')
const jdri = document.querySelector('.jd-ri')
const jdwesfarmers = document.querySelector('.jd-wesfarmers')
const jdmazars = document.querySelector('.jd-mazars')

ri.addEventListener('click', () => {
    workScroller.classList.remove('work-role-one')
    workScroller.classList.remove('work-role-two')
    workScroller.classList.remove('work-role-three')
    workScroller.classList.add('work-role-one')
    mazars.classList.remove('work-role-active')
    wesfarmers.classList.remove('work-role-active')
    ri.classList.add('work-role-active')
    jdwesfarmers.classList.remove('jd-active')
    jdmazars.classList.remove('jd-active')
    jdri.classList.add('jd-active')
})

wesfarmers.addEventListener('click', () => {
    workScroller.classList.remove('work-role-one')
    workScroller.classList.remove('work-role-two')
    workScroller.classList.remove('work-role-three')
    ri.classList.remove('work-role-active')
    mazars.classList.remove('work-role-active')
    workScroller.classList.add('work-role-two')
    wesfarmers.classList.add('work-role-active')
    jdri.classList.remove('jd-active')
    jdmazars.classList.remove('jd-active')
    jdwesfarmers.classList.add('jd-active')
})

mazars.addEventListener('click', () => {
    workScroller.classList.remove('work-role-one')
    workScroller.classList.remove('work-role-two')
    workScroller.classList.remove('work-role-three')
    ri.classList.remove('work-role-active')
    wesfarmers.classList.remove('work-role-active')
    workScroller.classList.add('work-role-three')
    mazars.classList.add('work-role-active')
    jdri.classList.remove('jd-active')
    jdwesfarmers.classList.remove('jd-active')
    jdmazars.classList.add('jd-active')
})