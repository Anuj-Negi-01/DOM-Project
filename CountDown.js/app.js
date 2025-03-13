const button = document.querySelector("button");
let h3 = document.querySelector("h3");
let input = document.querySelector('input[type="text"]');

button.addEventListener("click", () => {
  let time = +input.value;
  if (!time || isNaN(time) || time <= 0) {
    alert("Enter valid Time");
    input.value = "";
    return;
  }
  input.value = "";
  h3.innerText = `${time}s`;
  const timmer = setInterval(() => {
    --time;
    if (time === 0) {
      h3.innerText = "Time is Completed ⏰";
      clearInterval(timmer);
    } else h3.innerText = `${time}s`;
  }, 1000);
});
