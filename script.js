const city = document.querySelector('.city')
const temp = document.querySelector('.temp')
const humidity = document.querySelector('.humidity')
const wind = document.querySelector('.wind')
const searchBox = document.querySelector('.search input');
const searchBTN = document.querySelector('.search button');
const error = document.querySelector('.error');
const weatherIcon = document.querySelector('.weather-icon');
const weather = document.querySelector(".weather");


 
const apiKey = "e3b5d95e9b4fb099e210166ae9d1852f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";







async function checkWeather(cityName){
    const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
    let data = await response.json();

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        weather.style.display = "none"
    }
    else{
        city.innerHTML = data.name;
        temp.innerHTML = Math.round( data.main.temp ) + 'ºc';
        humidity.innerHTML = data.main.humidity + '%';
        wind.innerHTML = data.wind.speed + ' km/h';
    
        if(data.weather[0].main == 'Clear'){
            weatherIcon.src = 'img/clear.png'
        }
    
        else if(data.weather[0].main == 'Clouds.png'){
            weatherIcon.src = 'img/clouds.png'
        }
        else if(data.weather[0].main == 'Drizzle.png'){
            weatherIcon.src = 'img/Drizzle.png'
        }
        else if(data.weather[0].main == 'Humidity.png'){
            weatherIcon.src = 'img/humidity.png'
        }
        else if(data.weather[0].main == 'Mist.png'){
            weatherIcon.src = 'img/mist.png'
        }
        else if(data.weather[0].main == 'Rain.png'){
            weatherIcon.src = 'img/rain.png'
        }
        else if(data.weather[0].main == 'Snow.png'){
            weatherIcon.src = 'img/snow.png'
        }
        else{
            const ero = weatherIcon.src = "img/Humidity.png";
            ero.style.borderRadius = 'var(--border-radius)'
        }
        
        document.querySelector(".error").style.display = "none";
        weather.style.display = "block"
    }

}



searchBTN.addEventListener('click', ()=>{
    checkWeather(searchBox.value)
})

