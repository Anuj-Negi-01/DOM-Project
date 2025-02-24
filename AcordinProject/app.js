const accordionButtons = document.querySelectorAll('.accordion-button')
const accordionItem = document.querySelectorAll('.accordion-item')

accordionButtons.forEach((accordionButton) => {
        accordionButton.addEventListener('click', () => {
        const  accordinContainer = accordionButton.parentElement
        const isActive = accordinContainer.classList.contains('active')
        
        accordionItem.forEach((item) => item.classList.remove('active'))

        if(!isActive){
            accordinContainer.classList.add('active')
        }
    })
})
