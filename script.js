'use strict';

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const closeBtn = document.querySelector('.close-modal')
const openBtns = document.querySelectorAll('.show-modal')

function closeModal()  {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}
for (let i = 0; i < openBtns.length; i++) {
    openBtns[i].addEventListener('click', function() {
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
    })
}

closeBtn.addEventListener('click',closeModal)

overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function(e) {
if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
        closeModal()
    }
}
})