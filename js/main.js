    apiKey = config.apiKey
    apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");
    const cuerpo = document.getElementById("cuerpo")


    async function chkWeather(city) {
      const response = await fetch(apiURL + city + `&appid=${apiKey}`);
      if (response.status == 404) {
        document.querySelector(".error").style.display= "block";
        document.querySelector(".weather").style.display= "none";
      } else {
        document.querySelector(".error").style.display = "none";
        const data = await response.json();
        document.querySelector(".city").innerHTML = data.name
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C'
        document.querySelector(".humedad").innerHTML = data.main.humidity + '%'
        document.querySelector(".viento").innerHTML = data.wind.speed + ' km/h'
        
         switch (data.weather[0].main) {
           case 'Rain':
             weatherIcon.src = "../img/rain.png";
             cuerpo.style.backgroundImage = "url('../img/lluvioso.jpg')";
             break;
           case 'Thunderstorm': 
             weatherIcon.src = "../img/thunderstorm.png";
             cuerpo.style.backgroundImage = "url('../img/tormenta.jpg')";
             break;
           case 'Drizzle':
             weatherIcon.src = "../img/drizzle.png";
             cuerpo.style.backgroundImage = "url('../img/nublado.jpg')";           
             break;
           case 'Snow':
             weatherIcon.src = "../img/snow.png";
             cuerpo.style.backgroundImage = "url('../img/nieve.jpg')";           
             break;
           case 'Mist': 
             weatherIcon.src = "./img/mist.png";           
             break;
           case 'Clear':
             weatherIcon.src = "../img/clear.png"; 
             cuerpo.style.backgroundImage = "url('../img/despejado.jpg')";                               
             break;
             case 'Clouds':
              weatherIcon.src = "../img/clouds.png";
              cuerpo.style.backgroundImage = "url('../img/nublado.jpg')";                      
              break;    
           default:                             
           cuerpo.style.backgroundImage = "url('../img/earth-8067366_1280.png')";           
             break;
        } 
        document.querySelector(".weather").style.display= "block"
      } 
    } 

    searchBtn.addEventListener("click", () => {
      chkWeather(searchBox.value); 
      //chkWeather('resistencia'); //
    });
  