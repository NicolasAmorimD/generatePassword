
const inputEl = document.querySelector("#password")
let passwordlength = 8

const uppercaseCharsEl = document.querySelector("#uppercase-check")
const numbersCharsEl = document.querySelector("#number-check")
const symbolCharsEl = document.querySelector("#symbol-check")

const securityIndicatorBarEl = document.querySelector("#security-indicator-bar")


function generatePassword() {

    let chars = "abcdefghjklmnpqrstuvwxyz"

    const uppercaseChars = "ABCDEFGHJKLMNPQRSTUVWXYZ"
    const numbersChars = "123456789"
    const symbolChars = "?!@&*()[]"


    if (uppercaseCharsEl.checked) {
        chars += uppercaseChars
    }

    if (numbersCharsEl.checked) {
        chars += numbersChars
    }

    if (symbolCharsEl.checked) {
        chars += symbolChars
    }

    let password = ""

    for (let i = 0; i < passwordlength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber + 1)

    }


    inputEl.value = password

    calculateQuality()
    fontSize()
}

function calculateQuality () {
    const percent = Math.round((passwordlength / 30) * 25 + (uppercaseCharsEl.checked ? 20 : 0) + (numbersCharsEl.checked ? 30 : 0) + (symbolCharsEl.checked ? 25 : 0))

    securityIndicatorBarEl.style.width = `${percent}%`

    if (percent > 70) {
        securityIndicatorBarEl.classList.remove("warning")
        securityIndicatorBarEl.classList.remove("critical")
        securityIndicatorBarEl.classList.add("safe")
    } else if (percent > 40 && percent < 70) {
        securityIndicatorBarEl.classList.add("warning")
        securityIndicatorBarEl.classList.remove("critical")
        securityIndicatorBarEl.classList.remove("safe")
    } else {
        securityIndicatorBarEl.classList.remove("warning")
        securityIndicatorBarEl.classList.add("critical")
        securityIndicatorBarEl.classList.remove("safe")
    }

    if (percent >= 100) {
        securityIndicatorBarEl.classList.add("completed")
    } else {
        securityIndicatorBarEl.classList.remove("completed")
    }
}

function fontSize () {
    if (passwordlength >= 20) {
        inputEl.classList.add("font-sm")
        inputEl.classList.remove("font-m")
    } else if (passwordlength >= 16) {
        inputEl.classList.add("font-m")
        inputEl.classList.remove("font-sm")
    } else {
        inputEl.classList.remove("font-sm")
        inputEl.classList.remove("font-m")
    }
}

function copy() {
    navigator.clipboard.writeText(inputEl.value)
}

const passwordlengthEl = document.querySelector("#password-length")
passwordlengthEl.addEventListener("input", function () {
    passwordlength = passwordlengthEl.value

    document.querySelector("#password-length-text").innerText = passwordlength
    
    generatePassword()
})

uppercaseCharsEl.addEventListener("click", generatePassword)
numbersCharsEl.addEventListener("click", generatePassword)
symbolCharsEl.addEventListener("click", generatePassword)

document.querySelector("#copy-1").addEventListener("click", copy)
document.querySelector("#copy-2").addEventListener("click", copy)

document.querySelector("#renew").addEventListener("click", generatePassword)

generatePassword()
