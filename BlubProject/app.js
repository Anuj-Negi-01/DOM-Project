const bulb = document.getElementById('bulb')
const toggleButton = document.getElementById('toggleButton')
const bulbStatus = document.getElementById('status')
const body = document.getElementById('body')


toggleButton.addEventListener('click', () => {
    if(toggleButton.textContent == 'Turn On'){
        bulb.classList.remove('off')
        toggleButton.textContent = 'Turn Off'
        bulbStatus.textContent = 'Status: On'
        body.classList.add('dark-mode')
    } else{
        bulb.classList.add('off')
        toggleButton.textContent = 'Turn On'
        bulbStatus.textContent = 'Status: Off'
        body.classList.remove('dark-mode')
    }
})