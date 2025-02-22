const allInputFields = document.querySelectorAll('input, textarea')

allInputFields.forEach((inputFiled) => {
    inputFiled.addEventListener('keyup', () => {
        if(inputFiled.getAttribute('id') === 'nameInput'){
            const nameDisplay = document.getElementById('nameDisplay')
            nameDisplay.textContent = inputFiled.value ? inputFiled.value : "Not Provided"
        } else if(inputFiled.getAttribute('id') === 'jobInput') {
            const jobDisplay = document.getElementById('jobDisplay')
            jobDisplay.textContent = inputFiled.value ? inputFiled.value : "Not Provided"
        } else if(inputFiled.getAttribute('id') === 'ageInput'){
            const ageDisplay = document.getElementById('ageDisplay')
            ageDisplay.textContent = inputFiled.value ? inputFiled.value : "Not Provided"
        } else{
            const bioDisplay = document.getElementById('bioDisplay')
            bioDisplay.textContent = inputFiled.value ? inputFiled.value : "Not Provided"
        }
    })
})