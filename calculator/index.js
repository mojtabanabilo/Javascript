const display = document.querySelector(".display");
const buttonsNumber = document.querySelectorAll("div .btn");
const allClear = document.querySelector(".btnAllClear");
const clear = document.querySelector(".btnClear");
const mean = document.querySelector(".btnMeans");

buttonsNumber.forEach((x) => {
    const numbersValue = x.innerText;
    x.addEventListener("click", () => {
        if(display.innerText == ""){
            return display.innerText = numbersValue;
        }
        return display.innerText += numbersValue;
    })
});

allClear.addEventListener("click", () => {
    display.innerText = "";
});

clear.addEventListener("click", () => {
    let text = display.innerText;
    if(text.length === 1){
        display.innerText = "";
    } else {
        display.innerText = text.substring(0, text.length - 1);
    }
});

mean.addEventListener("click", () => {
    let result = display.innerText;
    const res = eval(result);
    display.innerText = res;
});
