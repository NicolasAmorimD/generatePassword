
const inputEl = document.querySelector("#password")
let passwordlength = 8


function generatePassword() {

    const chars = "abcdefghjklmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789?!@&*()[]"

    let password = ""

    for (let i = 0; i < passwordlength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber + 1)
        
    }


    inputEl.value = password

    console.log(password)
}

function copy () {
    navigator.clipboard.writeText(inputEl.value)
}

const passwordlengthEl = document.querySelector("#password-length")
passwordlengthEl.addEventListener("input", function() {

    passwordlength = passwordlengthEl.value
    generatePassword()
})

const copyBtnEl = document.querySelector("#copy")
copyBtnEl.addEventListener("click", copy)

generatePassword()
