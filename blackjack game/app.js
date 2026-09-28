


let plyer = {
    name: "bipul",
    chips: 122
}

let sum = 0
let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""


let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

let plyerEl = document.getElementById("plyer-el")
plyerEl.textContent = plyer.name + " : $" + plyer.chips

function getRandomNum() {
    let randomNum = Math.floor(Math.random() * 13) + 1
    console.log(randomNum)
    if (randomNum === 1) {
        return 11
    } else if (randomNum > 10) {
        return 10
    } else {
        return randomNum
    }
}


function startGame() {
    if (cards.length < 3) {
        isAlive = true
        let firstCard = getRandomNum()
        let secondCard = getRandomNum()
        sum = firstCard + secondCard
        cards.push(firstCard, secondCard)
        renderGame()
    }
}


function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = " Cards:"

    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }

    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wooho! you've got a Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game."
        isAlive = false
    }
    messageEl.textContent = message

}

function newCard() {

    if (isAlive === true && hasBlackJack === false) {

        let card = getRandomNum()
        cards.push(card)
        sum += card
        renderGame()
    }
}
