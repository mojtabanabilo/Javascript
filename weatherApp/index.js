const apiKey = `dc1abd15927030a4cd5d36c8da1f4524`;
const textBox = document.querySelector("input");
const submit = document.querySelector("button");
const info = document.querySelector(".weather-info");
const Alert = document.querySelector(".alert p");
console.log(Alert)

submit.addEventListener("click", () => {
    let textBoxValue = textBox.value;
    const showInfo = document.createElement("div");
    showInfo.classList.add("info");
    info.appendChild(showInfo);
    info.style.display = "flex";
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${textBoxValue}&units=metric&appid=${apiKey}`)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            const {main:{temp}, main, name, sys:{country}, weather} = json;
            const x = `
            <div class="city-country">
            <p class="ct">${name}</p>
            <p class="co">${country}</p>
            </div>
            <div class="th">
            <p>${Math.floor(temp)}</p>
            </div>
            <div class="icon">
            <p>${weather[0]["description"]}</p>
            </div>`;
            showInfo.innerHTML = x;
        })
        .catch(() => {
            Alert.innerText = "invalid city";
            setTimeout(() => {
                window.location.reload();
            }, 2000)
        })
    textBox.value = "";
})

