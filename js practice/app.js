// let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
// let appleShelf = document.getElementById("apple-shelf")
// let orangeShelf = document.getElementById("orange-shelf")


// function appleOrange() {
//     for (let i = 0; i < fruit.length; i++) {
//         if (fruit[i] === "🍊") {
//             orangeShelf.textContent += fruit[i]
//         } else {
//             appleShelf.textContent += fruit[i]
//         }
//     }
// }

// appleOrange()

let data = [{
    player: "Jane",
    score: 52
},
{
    player: "Mark",
    score: 41
}]

const scoreBtn = document.getElementById("data-btn")

scoreBtn.addEventListener('click', function () {
    console.log(`${data[0].player} score is ${data[0].score}`)
})



function sentenceGen(desc, arr) {
    let sentence = ""
    const arrLength = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
        if (arrLength === i) {
            sentence += arr[i] + "."
        } else {
            sentence += arr[i] + ", "
        }
    }
    return `The ${arr.length} ${desc} are ${sentence}`
}


console.log(sentenceGen("lergest contries", ["India", "China", "Russia", "America"]))





const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

const imageDiv = document.getElementById("images")


function renderImg(arr) {
    let allImg = ''
    for (let i = 0; i < arr.length; i++) {
        allImg += `<img class="team-img" src = "${arr[i]}" alt = "employee image">`
    }
    imageDiv.innerHTML = allImg
}


renderImg(imgs)