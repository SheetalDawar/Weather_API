const inputValue = document.querySelector('.input-val');
const searchBtn = document.getElementById('searchButton');
const weather_status = document.querySelector('.weather-status');
const not_found = document.querySelector('.not-found');
const display = document.querySelector('.display');
const temperature = document.querySelector('.weather-data');
const description = document.querySelector('.weather-data2');
const humidity = document.getElementById('humidity');
const visibility = document.getElementById('visibility');
const wind_speed = document.getElementById('wind-speed');

async function weatherCheck(city){

    if(inputValue.value == '')
        return;

    const API_KEY = "61efc05ba330715acf081c9329ac3ca4";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    const weather_data = await fetch(`${URL}`).then(response => response.json());

        
    if(weather_data.cod === `404`){

        not_found.style.display = "flex";
        display.style.display = "none";

        return;
    }

    not_found.style.display = "none";
    display.style.display = "flex";

    temperature.innerHTML = `${Math.round(weather_data.main.temp-273.15)}<sup>°C</sup>`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    visibility.innerHTML = `${weather_data.visibility/1000} Km`;
    humidity.innerHTML = `${weather_data.main.humidity} %`; 
    wind_speed.innerHTML = `${weather_data.wind.speed} Km/h`;

    switch(weather_data.weather[0].main){

        case 'Rain':
            weather_status.src = "https://www.bing.com/images/search?view=detailV2&ccid=QQpJJ2Bn&id=CC426CD52678509F445460B72438CCEB7F02A3A3&thid=OIP.QQpJJ2BnnTsMeEbyq6dYbAHaHa&mediaurl=https%3a%2f%2fmedia.giphy.com%2fmedia%2f3ov9jCEFMBtCy54q6Q%2fgiphy.gif&exph=618&expw=618&q=rain+gif&simid=608054850317215177&FORM=IRPRST&ck=A3EAE704795C2ACCAA4A072062B5001F&selectedIndex=21&itb=0";
            break;

        case 'Clouds':
            weather_status.src = "https://www.bing.com/images/search?view=detailV2&ccid=jq%2bRoydw&id=461453EB90D478913B765FF24F751FC55917CB59&thid=OIP.jq-RoydwElet-ZgVmbEMTAHaDy&mediaurl=https%3a%2f%2fmedia1.giphy.com%2fmedia%2fyLrLQPkyz7dLYshVhO%2fgiphy.gif&exph=246&expw=480&q=cloudy+gif&simid=608008756751855076&FORM=IRPRST&ck=E64B398ED78F69591187DA5BC8EB2217&selectedIndex=2&itb=0";
            break;

        case 'Mist':
            weather_status.src = "https://www.bing.com/images/search?view=detailV2&ccid=MvFXePid&id=623C293E2DAD59D10B4F5B94C56BF08B857D8D2C&thid=OIP.MvFXePiddO-5-obvUjmEPAHaEK&mediaurl=https%3a%2f%2fmedia.giphy.com%2fmedia%2fECcPsYSTDXB0Q%2fgiphy.gif&exph=281&expw=500&q=mist+gif&simid=608030394764713298&FORM=IRPRST&ck=C8865ADD182F30030494F758ADD1C4FA&selectedIndex=7&itb=0";
            break;

        case 'Snow':
            weather_status.src = "https://www.bing.com/images/search?view=detailV2&ccid=uBeeSxy5&id=34920F6A97EA96555D99C17A9B6374E3AEA09522&thid=OIP.uBeeSxy5jIN3qFK0EE5STAEsCo&mediaurl=https%3a%2f%2fbestanimations.com%2fNature%2fwinter%2fwinter-snow-nature-animated-gif-9.gif&exph=281&expw=500&q=snow+gif&simid=608047939734083073&FORM=IRPRST&ck=1A86B38671B10B974080F10D44241EBF&selectedIndex=11&itb=0";
            break;

        case 'Clear':
            weather_status.src = "https://www.bing.com/images/search?view=detailV2&ccid=7LMgKlEx&id=5327B4B62E747E11611C5090A8AADAA1699D1514&thid=OIP.7LMgKlEx-hNzeNsEZuK-agHaD7&mediaurl=https%3a%2f%2fimages.gr-assets.com%2fhostedimages%2f1450885578ra%2f17481062.gif&exph=265&expw=500&q=clear+skygif&simid=608036704077025276&FORM=IRPRST&ck=90E216E81A7453559EA217F1F87FF0FE&selectedIndex=72&itb=0";
            break; 

        case 'Smoke':
            weather_status.src = "https://www.bing.com/images/search?view=detailV2&ccid=MvFXePid&id=623C293E2DAD59D10B4F5B94C56BF08B857D8D2C&thid=OIP.MvFXePiddO-5-obvUjmEPAHaEK&mediaurl=https%3a%2f%2fmedia.giphy.com%2fmedia%2fECcPsYSTDXB0Q%2fgiphy.gif&exph=281&expw=500&q=mist+gif&simid=608030394764713298&FORM=IRPRST&ck=C8865ADD182F30030494F758ADD1C4FA&selectedIndex=7&itb=0";
            break;

        case 'Haze':
            weather_status.src = "https://www.bing.com/images/search?view=detailV2&ccid=MvFXePid&id=623C293E2DAD59D10B4F5B94C56BF08B857D8D2C&thid=OIP.MvFXePiddO-5-obvUjmEPAHaEK&mediaurl=https%3a%2f%2fmedia.giphy.com%2fmedia%2fECcPsYSTDXB0Q%2fgiphy.gif&exph=281&expw=500&q=mist+gif&simid=608030394764713298&FORM=IRPRST&ck=C8865ADD182F30030494F758ADD1C4FA&selectedIndex=7&itb=0";
            break; 
        
        case 'Fog':
            weather_status.src = "https://www.bing.com/images/search?view=detailV2&ccid=MvFXePid&id=623C293E2DAD59D10B4F5B94C56BF08B857D8D2C&thid=OIP.MvFXePiddO-5-obvUjmEPAHaEK&mediaurl=https%3a%2f%2fmedia.giphy.com%2fmedia%2fECcPsYSTDXB0Q%2fgiphy.gif&exph=281&expw=500&q=mist+gif&simid=608030394764713298&FORM=IRPRST&ck=C8865ADD182F30030494F758ADD1C4FA&selectedIndex=7&itb=0";
            break;

    }
}

searchBtn.addEventListener('click', ()=>{

    weatherCheck(inputValue.value)

});