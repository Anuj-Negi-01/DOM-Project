const textarea = document.querySelector("textarea");
const counter = document.querySelector(".counter");
const warning = document.querySelector(".warning");
const maxChars = 200;

textarea.addEventListener("input", () => {
  const currentLength = textarea.value.length;
  counter.textContent = `${currentLength}/${maxChars}`;
  if (currentLength >= maxChars) {
    warning.classList.add("show");
    counter.classList.add("exceeded");
  } else {
    warning.classList.remove("show");
    counter.classList.remove("exceeded");
  }
});
