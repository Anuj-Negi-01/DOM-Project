const images = [
    {
      url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Beautiful Mountain Landscape',
    },
    {
      url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Ocean Sunset View',
    },
    {
      url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Autumn Forest Path',
    },
    {
      url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Urban City Skyline',
    },
];

let counter = 0
const carouselTrack = document.getElementById('carouselTrack')
const nextButton = document.getElementById('nextButton')
const prevButton = document.getElementById('prevButton')
const carouselNav = document.getElementById('carouselNav')
const autoPlayButton = document.getElementById('autoPlayButton')
const timerDisplay = document.getElementById('timerDisplay')
let autoPlayInterval;
let updateDisplayTimer;
let time;


document.addEventListener('DOMContentLoaded', () => { 
    carouselTrack.innerHTML = `
    <img src='${images[0].url}' class="carousel-slide">
    <div class="carousel-caption">${images[0].caption}</div>
    `
    images.forEach((_, i) => {
        const carouselIndicator = document.createElement('div')
        carouselIndicator.className = 'carousel-indicator'
        carouselIndicator.setAttribute('id', `${i}`)
        carouselNav.appendChild(carouselIndicator)
        carouselIndicator.addEventListener('click', () => {
            const id = carouselIndicator.getAttribute('id')
            carouselTrack.innerHTML = `
            <img src='${images[id].url}' class="carousel-slide">
            <div class="carousel-caption">${images[id].caption}</div>
            `
            images.forEach((_, i) => {
                const ele = document.getElementById(`${i}`)
                ele.classList.remove('active')
            })
            counter = id
            carouselIndicator.classList.add('active')
        })
    })
    const firstIndicator = document.getElementById('0') 
    firstIndicator.classList.add('active')
})


function changeNextSlide() {
    const prevIndicator = document.getElementById(`${counter}`)
    prevIndicator.classList.remove('active')
    if(counter == images.length - 1){
        carouselTrack.innerHTML = `
        <img src='${images[0].url}' class="carousel-slide">
        <div class="carousel-caption">${images[0].caption}</div>
        `
        counter = 0
        const firstIndicator = document.getElementById('0')
        firstIndicator.classList.add('active')
    }
    else{
        ++counter
        carouselTrack.innerHTML = `
        <img src='${images[counter].url}' class="carousel-slide">
        <div class="carousel-caption">${images[counter].caption}</div>
        `
        const indicator = document.getElementById(`${counter}`)
        indicator.classList.add('active')
    }
}

nextButton.addEventListener('click', changeNextSlide)

prevButton.addEventListener('click', () => {
    const prevIndicator = document.getElementById(`${counter}`)
    prevIndicator.classList.remove('active')
    if(counter == 0){
        console.log(typeof images.length)
        carouselTrack.innerHTML = `
        <img src='${images[Number(images.length) - 1].url}' class="carousel-slide">
        <div class="carousel-caption">${images[Number(images.length) - 1].caption}</div>
        `
        counter = images.length - 1
        const lastIndicator = document.getElementById(`${images.length - 1}`)
        lastIndicator.classList.add('active')
    }
    else{
        --counter
        carouselTrack.innerHTML = `
        <img src='${images[counter].url}' class="carousel-slide">
        <div class="carousel-caption">${images[counter].caption}</div>
        `
        const indicator = document.getElementById(`${counter}`)
        indicator.classList.add('active')
    }
})



autoPlayButton.addEventListener('click', () => {
    time = 5
    if(autoPlayButton.innerText == 'Start Auto Play'){
        updateDisplayTimer = setInterval(() => {
            time--
            if(time === 0) {
                time = 5;
            }
            timerDisplay.innerText = `Slide will upadte in ${time}s`
           }, 1000)
       autoPlayInterval =  setInterval(changeNextSlide, 5 * 1000)
       autoPlayButton.innerText = 'Stop Auto Play'
    } else{
        clearInterval(autoPlayInterval)
        clearInterval(updateDisplayTimer)
        timerDisplay.innerText = ''
        autoPlayButton.innerText = 'Start Auto Play';
    }
})






  