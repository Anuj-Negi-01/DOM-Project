const changeColorBtn = document.querySelector("#changeColorBtn");
const colorCode = document.querySelector("#colorCode");

function generateRandomColor() {
  const str = "0123456789ABCDEF";
  let colorString = "#";
  for (let i = 1; i <= 6; i++) {
    const randomIndex = Math.floor(Math.random() * str.length);
    colorString += str[randomIndex];
  }
  return colorString;
}

changeColorBtn.addEventListener("click", () => {
  const bgColor = generateRandomColor();
  document.body.style.backgroundColor = `${bgColor}`;
  colorCode.textContent = `${bgColor}`;
});
