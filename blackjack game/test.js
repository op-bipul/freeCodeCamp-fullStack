// let sentence = ["Hellow", "my", "name", "is", "bipul"]
// let greetingEl = document.getElementById("greeting-el")

// for (let i = 0; i < sentence.length; i++) {
//     greetingEl.textContent += sentence[i] + " "
// }

// let playerTime1 = 102
// let playerTime2 = 105

// function totalRunTime() {
//     return playerTime1 + playerTime2
// }

// let totalTime = totalRunTime()
// console.log(totalTime)

// let person = {
//     name:"bipul",
//     age: 25,
//     country:"India"
// }

// function logData() {
//     return person.name+" is "+ person.age+" years old and lives in "+person.country    
// }

// console.log(logData())

// let age = 27
// console.log(age)
// let message = ""

// if (age <7) {
//     message = "You get free ticket"
// } else if (age < 18) {
// message = "You get child discount ticket"
// } else if (age < 27) {
// message = "You get student discount ticket"
// } else if (age < 67) {
// message = "You have to pay full amount of ticket"
// } else {
// message = "You get senior citizen discount ticket"
// }

// console.log(message)


// let largeCountry = ["China", "Rusia", "India", "America", "Indonesia"]

// for(let i =0; i<largeCountry.length;i++){
//     console.log("- "+largeCountry[i])
// }


// let largeCountry = ["Tavulu", "Rusia", "India", "America", "Monaco"]

// largeCountry.pop()
// largeCountry.shift()
// largeCountry.push("Indonesia")
// largeCountry.unshift("China")

// for(let i =0; i<largeCountry.length;i++){
//     console.log("- "+largeCountry[i])
// }



let fighters = ["🐉", "🐥", "🐊", "💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷", "🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function () {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.

    function randomNum() {
        return Math.floor(Math.random() * 17) + 1
    }

    stageEl.textContent = fighters[randomNum()] + " VS " + fighters[randomNum()]

})