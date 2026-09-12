let score1 = 0;
let score2 = 0;

let teamOne = document.getElementById("teamOne")
let teamtwo = document.getElementById("teamTwo")

function addOne() {
    score1 += 1
    teamOne.textContent = score1
}

function addTwo() {
    score1 += 2
    teamOne.textContent = score1
}

function addThree() {
    score1 += 3
    teamOne.textContent = score1
}

function guestAddOne() {
    score2 += 1
    teamtwo.textContent = score2
}

function guestAddTwo() {
    score2 += 2
    teamtwo.textContent = score2
}

function guestAddThree() {
    score2 += 3
    teamtwo.textContent = score2
}

function reset() {
    score1 = 0
    score2 = 0
    teamOne.textContent = ""
    teamtwo.textContent = ""
}