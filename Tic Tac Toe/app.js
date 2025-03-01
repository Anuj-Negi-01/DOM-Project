const winingConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let turnofO = false
const cells = document.querySelectorAll('.cell')
const winnerBox = document.querySelector('.winner-box')
const replayBtn = winnerBox.children[1]

replayBtn.addEventListener('click', () => {
    winnerBox.classList.add('hidden')
    cells.forEach((cell) => {
        cell.innerText = ''
        cell.style.pointerEvents = ""
        turnofO = false
    })
})

cells.forEach((cell) => {
    cell.addEventListener('click', () => {
        if(turnofO){
            cell.textContent = 'O'
            checkWin()
            turnofO = false
        } else {
            cell.textContent = 'X'
            checkWin()
            turnofO = true
        }
        cell.style.pointerEvents = "none"
    })
})

function checkWin(){
    for (const element of winingConditions) {
        const position1Val = cells[element[0]].innerText
        const position2Val = cells[element[1]].innerText
        const position3Val = cells[element[2]].innerText
    
        if(position1Val && position2Val && position3Val){
            if(position1Val === position2Val && position2Val === position3Val){
                setTimeout(() => {
                    winnerBox.classList.remove('hidden')
                    winnerBox.style.zIndex = 1
                    winnerBox.children[0].innerText = `Winner is ${position1Val} 🎉`
                }, 200)
            }
        }
    }
}