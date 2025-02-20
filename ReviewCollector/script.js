const allStars = document.querySelectorAll('i')
const reviewContainer = document.querySelector('#review-container')
const sumbit = document.querySelector('#sumbit')
const username = document.querySelector('#username')
const review = document.querySelector('#review')
let starCount = 0

allStars.forEach((item, idx) => {
    item.addEventListener('click', () => {
        starCount = 0
        allStars.forEach((item) => {
            item.classList.replace('fa-solid', 'fa-regular')
        })
        for(let i = 0; i < allStars.length; i++) {
            if(i <= idx){
                starCount++;
                allStars[i].classList.replace('fa-regular', 'fa-solid')
                allStars[i].classList.add('solid-yellow')
            }
        }
    })
})

sumbit.addEventListener('click', () => {
    if(starCount === 0) return alert('Please give rating!')
    if(username.value === '' || review.value === '') return alert('Please fill all the fields!')
    const newReview =  document.createElement('li') 
    const rating = document.createElement('div')
    rating.classList.add('rating')
    for(let i = 1; i <= 5; i++){
        if(i <= starCount) rating.innerHTML += `<i class="fa-solid fa-star solid-yellow"></i>`
        else rating.innerHTML += `<i class="fa-regular fa-star solid-yellow"></i>`
    }
   newReview.innerHTML = `<div><span class="user-container"><i class="fa-solid fa-user user-img"></i>${username.value.trim()}</span>${rating.outerHTML}</div><span>${review.value.trim()}</span></li>`
   console.log(newReview);
   reviewContainer.appendChild(newReview)

   username.value = ''
   review.value = ''

   allStars.forEach((star) => {
        star.classList.replace('fa-solid', 'fa-regular')
   })
})

