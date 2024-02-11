const dice = document.getElementById('dice');
const rollDice = document.getElementById('roll-dice')
const rollHistory = document.getElementById('roll-history')

let listhistory = []


rollDice.addEventListener('click', () => {
    dice.classList.add("roll-animation")
    setTimeout(() => {
        dice.classList.remove("roll-animation")
    }, 1000)
    play()
})

function play() {
    const randomnumber = Math.floor(Math.random() * 6 + 1);
    console.log(randomnumber);
    const diceface = getDiceFace(randomnumber);
    console.log(diceface);
    dice.innerHTML = diceface
    listhistory.push(randomnumber)
    updaterollhistory()
}

function getDiceFace(randomnumber) {
    switch (randomnumber) {
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
        default:
            return ""
    }
}

function updaterollhistory(){
    rollHistory.innerHTML = ""
    for(let i =0; i < listhistory.length; i++){
        const listitem = document.createElement('li');
        listitem.innerHTML = `Roll :${i + 1} <span>${getDiceFace(listhistory[i])}</span>`
        rollHistory.appendChild(listitem)
    }
}