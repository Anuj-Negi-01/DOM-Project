const hourHand = document.querySelector('.hour')
const minHand = document.querySelector('.minute')
const secHand = document.querySelector('.second')
const digitalClock = document.querySelector('.digital-clock')
const displayDate = document.querySelector('.date')
const clock = document.querySelector('.clock');


for (let i = 1; i <= 12; i++) {
    const number = document.createElement('div');
    number.className = 'number';
    number.style.setProperty('--rotation', `${i * 30}deg`);
    const span = document.createElement('span')
    span.textContent = `${i}`
    span.style.setProperty('--rotation', `${i * 30}deg`)
    number.appendChild(span)
    clock.appendChild(number);
  }

  
setInterval(() => {
    const now = new Date()
    const hours = now.getHours()
    const mins = now.getMinutes()
    const sec = now.getSeconds()

    const hourRotation = (hours * 30) + (mins / 2)
    const minRotation = (mins * 6) + ( sec / 10)
    const secRotation = 6 * sec

    hourHand.style.transform = `rotate(${hourRotation}deg)`
    minHand.style.transform = `rotate(${minRotation}deg)`
    secHand.style.transform = `rotate(${secRotation}deg)`

    const hoursInString = String(now.getHours()).padStart('2', '0')
    const MinsInString = String(now.getMinutes()).padStart('2', '0')
    const secInsString = String(now.getSeconds()).padStart('2', '0')
    digitalClock.textContent = `${hoursInString}:${MinsInString}:${secInsString}`
    displayDate.textContent = `${now.toDateString()}`

}, 1000)

