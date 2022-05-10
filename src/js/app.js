import axios from 'axios';


// API ключ
let apiKey = 'ee156dfa75ac168863f7c5b85a9e66ae';
// Город погода которого нужна
let city = 'Saint Petersburg';
// Формируем url для GET запроса
// let url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${apiKey}`;
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`;



const header = document.querySelector('.header');

const cityShow = header.querySelector('.header__city');
const temp = header.querySelector('.header__temp');
const overallTemp = header.querySelector('.header__overall-temp');
const feltTemp = header.querySelector('.header__temp-felt');
const weatherStatus = header.querySelector('.header__weather');
const day = header.querySelector('.header__day');
const headerBg = header.querySelector('.header__bg')


// Отправляем запрос и выводим данные о погоде
axios.get(url).then(res => {
    console.log(res.data);
    cityShow.innerText = res.data.name
    overallTemp.innerText = `${Math.round(res.data.main.temp_min)}°C/${Math.round(res.data.main.temp_max)}°C`;
    feltTemp.innerText = `${Math.round(res.data.main.feels_like)}°C`;
    temp.innerText = `${Math.round(res.data.main.temp)}°C`;
    weatherStatus.innerText = res.data.weather[0].description;
});

// Выводим данные о дате

const days = ['Вск', 'Пнд', 'Втр', 'Сре', 'Чтв', 'Птн', 'Суб'];
const months = [
    'Янв',
    'Фев',
    'Мар',
    'Апр',
    'Май',
    'Июн',
    'Июл',
    'Авг',
    'Сен',
    'Окт',
    'Ноя',
    'Дек'
];
             
let myDate = new Date();
day.innerText = `${myDate.getDate()} ${months[myDate.getMonth()]} ${days[myDate.getDay()]}`

console.log(myDate.getHours());


const myHours = myDate.getHours();

if (myHours >= 19 || myHours <= 6) {
    headerBg.style.backgroundImage = "url('../img/icons/bg-night.svg')";
} else {
    headerBg.style.backgroundImage = "url('../img/icons/bg-day.svg')";
}