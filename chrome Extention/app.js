


let inputBtn = document.getElementById("input-btn")
let inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-El")

let myLeads = []



inputBtn.addEventListener('click', function () {
    myLeads.push(inputEl.value)
    ulEl.innerHTML += "<li>" + inputEl.value + "</li>"
    renderLead()
    inputEl.value = ''
    // console.log(myLeads)
})


// function renderLead() {
//     let listItem = "<li>" + inputEl.value + "</li>"
//     ulEl.innerHTML += listItem
// }


function renderLead() {
    let listItem = ""
    for (let i = 0; i < myLeads.length; i++) {
        // ulEl.innerHTML += "<li>"+myLeads[i]+"</li>"
        // const li =  document.createElement("li")
        // li.textContent=myLeads[i]
        // ulEl.append(li)
        // listItem += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItem += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
        </li>`

    }
    ulEl.innerHTML = listItem
}
