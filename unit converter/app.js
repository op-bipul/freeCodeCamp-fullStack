const inputEl = document.getElementById("input-el")
const converterBtn = document.getElementById("converter-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const MassEl = document.getElementById("mass-el")


converterBtn.addEventListener('click', function () {
    if (inputEl.value >= 1) {
        const feet = inputEl.value * 3.281
        const meter = inputEl.value / 3.281
        lengthEl.textContent = `${inputEl.value} meter = ${feet.toFixed(2)} feets | 
        ${inputEl.value} feet = ${meter.toFixed(2)} meters`

        const gallons = inputEl.value * 0.264
        const liters = inputEl.value / 0.264
        volumeEl.textContent = `${inputEl.value} liters = ${gallons.toFixed(2)} gallons | 
        ${inputEl.value} gallons = ${liters.toFixed(2)} liters`

        const pound = inputEl.value * 2.204
        const kilog = inputEl.value / 2.204
        MassEl.textContent = `${inputEl.value} kilograms = ${pound.toFixed(2)} pounds | 
        ${inputEl.value} pounds = ${kilog.toFixed(2)} kilograms`
    }
})
