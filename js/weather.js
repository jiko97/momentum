const API_ID_KEYS = "f426f8e673575eba579cfcedc06bd8b4";
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_ID_KEYS}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃ /`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}
// .getCurrentPosition(성공 시 함수, 실패 시 함수) -> 현재 사용자의 위치 정보 가져오는 함수
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);