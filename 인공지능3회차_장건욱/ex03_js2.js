
let num = document.querySelector("#num")

let plus = document.querySelector("#btn-puls")
plus.addEventListener("click", function () {
    let i = Number(num.textContent)
    i += 1;
    num.textContent = i;
})

let minus = document.querySelector("#btn-minus")
minus.addEventListener("click", function () {
    let i = Number(num.textContent)
    i -= 1;

    if (i <= 0) {
        i = 0;
    }

    num.textContent = i;
})

let reset = document.querySelector("#btn-reset")
reset.addEventListener("click", function () {
    let i = Number(num.textContent)
    i = 0;
    num.textContent = i;
})