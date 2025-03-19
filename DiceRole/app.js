function rollDice() {
  const dice = document.getElementById("dice");
  const para = document.querySelector(".para");
  const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
  dice.classList.add("rolling");
  setTimeout(() => {
    dice.classList.remove("rolling");
    const randomIdx = Math.floor(Math.random() * 6);
    dice.textContent = diceFaces[randomIdx];
    para.textContent = `Your Number is ${randomIdx + 1}`;
  }, 500);
}
