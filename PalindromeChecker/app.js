const inputString = document.querySelector("#inputString");
const checkBtn = document.querySelector("#checkBtn");
let result = document.querySelector("#result");

checkBtn.addEventListener("click", () => {
  const string = inputString.value.trim().replace(/\s/g, "");
  if (!string) {
    alert("Please enter a string");
    inputString.value = "";
    return;
  }
  let s = 0,
    e = string.length - 1;
  while (e > s) {
    if (string[e] !== string[s]) {
      result.classList.add("error");
      result.innerText = "String is not palindrome";
      return;
    }
    e--;
    s++;
  }
  result.classList.remove("error");
  result.classList.add("success");
  result.innerText = "String is palindrome";
});
