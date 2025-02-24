const toggleBtn = document.querySelector('.toggle-btn')
const panel = document.querySelector('.panel')
const closeBtn = document.querySelector('.close-btn')
const allMenuItems = document.querySelectorAll('.menu-item')

toggleBtn.addEventListener('click', () => {
    panel.classList.add('active')
})

function closePanel(){
    panel.classList.remove('active')
}


closeBtn.addEventListener('click', closePanel)

allMenuItems.forEach((item) => {
    item.addEventListener('click', () => {
        alert(`you are clicke on ${item.textContent}`)
        closePanel()
    })
})

document.addEventListener('click', (e) => {
    if(!e.target.matches('.toggle-btn, .close-btn, .panel, .menu-item')) closePanel()
})


