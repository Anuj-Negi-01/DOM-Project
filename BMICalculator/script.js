const age = document.getElementById('age-input')
const height = document.getElementById('height-input')
const weight = document.getElementById('weight-input')
const resultValue = document.getElementById('resultVal')
const outputContainer = document.getElementById('output-container')
const suggestion = document.getElementById('suggestion')

const button = document.getElementById('btn')

button.addEventListener('click', () => {
    const ageValue = Number(age.value)
    const heightValue = Number(height.value)
    const weightValue = Number(weight.value)
    if(isNaN(ageValue) || isNaN(heightValue) || isNaN(weightValue)) return alert('Please Enter valid values!')
    if(ageValue === 0 || heightValue === 0 || weightValue === 0 || heightValue <= 0 || weightValue <= 0) return alert('Please fill all the fields!')
    if(ageValue < 2 || ageValue > 120) return alert('Please enter a vaild age')
    const res = (weightValue / (heightValue / 100 * heightValue / 100)).toFixed(2);
    resultValue.innerText = res;
    if(res < 18.5) {
        suggestion.classList.remove('hidden')
        suggestion.classList.remove('run')
        resultValue.classList.remove('overweight')
        suggestion.classList.remove('great-shape')
        resultValue.classList.remove('healthy')
        suggestion.textContent = 'Time to grab a bite!'
        suggestion.classList.add('eat')
        resultValue.classList.add('underweight')
    }
    else if(res > 25){
        suggestion.classList.remove('hidden')
        suggestion.classList.remove('eat')
        resultValue.classList.remove('underweight')
        suggestion.classList.remove('great-shape')
        resultValue.classList.remove('healthy')
        suggestion.textContent = 'Time to run!'
        suggestion.classList.add('run')
        resultValue.classList.add('overweight')
    } else{
        suggestion.classList.remove('hidden')
        suggestion.classList.remove('eat')
        resultValue.classList.remove('underweight')
        resultValue.classList.remove('overweight')
        suggestion.classList.remove('run')
        suggestion.textContent = 'Great shape!'
        suggestion.classList.add('great-shape')
        resultValue.classList.add('healthy')
    }
})

const femaleGenderBtn = document.getElementById('female')
const maleGenderBtn  = document.getElementById('male')

femaleGenderBtn.addEventListener('click', () => {
    maleGenderBtn.classList.remove('onfocus')
    femaleGenderBtn.classList.add('onfocus')
})

maleGenderBtn.addEventListener('click', () => {
    femaleGenderBtn.classList.remove('onfocus')
    maleGenderBtn.classList.add('onfocus')
})

