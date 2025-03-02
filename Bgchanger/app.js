const inputField = document.querySelector('#inputField')
const createBtn = document.querySelector('.create-btn')
const buttonGrid = document.querySelector('.button-grid')


function createButton () {
    // Minimum validation
    if(inputField.value === ''){
        alert('Please Enter a hexCode!' || inputField.value.length < 4 || inputField.value.length > 8)
        inputField.value = ''
        return 
    }

    const button = document.createElement('button')
    button.className = 'grid-btn'
    button.style.backgroundColor = `${inputField.value}`
    button.innerText = inputField.value

    button.addEventListener('click', () => {
        if(document.body.style.backgroundColor !== 'rgb(255, 255, 255)'){
            document.body.style.backgroundColor = 'rgb(255, 255, 255)' 
        }
        else document.body.style.backgroundColor = `${button.innerText}`
    })

    buttonGrid.appendChild(button)

    inputField.value = ''
}

createBtn.addEventListener('click', createButton)
inputField.addEventListener('keydown', (e) => {
    if(e.key !== 'Enter') return;
    createButton()
})