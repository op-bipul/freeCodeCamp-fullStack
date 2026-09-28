let myLeads = []

// let myLead = JSON.parse(myLeads)
// console.log(typeof myLead)
// myLead.push("www.facebook.com")
// console.log(myLead)
// myLead= JSON.stringify(myLead)
// console.log(typeof myLead)


const leadsLocalSorage = JSON.parse(localStorage.getItem("myLeads"))
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const saveTabBtn = document.getElementById("tab-btn")
const ulEl = document.getElementById("ul-el")

// localStorage.setItem("myLeads", "www.google.com")
// let storage = localStorage.getItem("myLeads")
// console.log(storage)
// localStorage.clear()


if (leadsLocalSorage.length != 0) {
    myLeads = leadsLocalSorage
    render(myLeads)
}


inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    // Save the myLeads array to localStorage 
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    // PS: remember JSON.stringify()

    render(myLeads)

    // To verify that it works:
    // console.log(localStorage.getItem("myLeads"))
})


deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    // ulEl.innerHTML=''
    myLeads = []
    render(myLeads)
})



saveTabBtn.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})



function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>`
    }
    ulEl.innerHTML = listItems
}