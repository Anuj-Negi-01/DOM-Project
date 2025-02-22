const buttons = document.querySelectorAll('button');
const mainHeading = document.querySelector('#mainHeading');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    switch (button.textContent) {
      case 'Red':
        mainHeading.style.color = '#e74c3c'
        break;
      case 'Green':
        mainHeading.style.color = '#2ecc71'
        break;
      case 'Blue':
        mainHeading.style.color = '#3498db'
        break;
      case 'Purple':
        mainHeading.style.color = '#9b59b6'
        break;
      default: mainHeading.style.color = '#34495e'
    }
  });
});