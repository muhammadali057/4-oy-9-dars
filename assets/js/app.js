const btnEl = document.querySelector(".btn")
const kunEl = document.querySelector(".kun")
const tunEl = document.querySelector(".tun")

kunEl.addEventListener(('click'), () => {
    kunEl.style.display = "none"
    tunEl.style.display = "block"
    document.body.style.backgroundColor = "black"
})
tunEl.addEventListener(('click'), () => {
    kunEl.style.display = "block"
    tunEl.style.display = "none"
    document.body.style.backgroundColor = "white"
})