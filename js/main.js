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
             weatherIcon.src = "./img/rain.png";
             cuerpo.style.backgroundImage = "url('./img/lluvioso.jpg')";
             document.querySelector(".descripcion").innerHTML = "lluvia";
             break;
           case 'Thunderstorm': 
             weatherIcon.src = "./img/thunderstorm.png";
             cuerpo.style.backgroundImage = "url('./img/tormenta.jpg')";
             document.querySelector(".descripcion").innerHTML = "tormentas";
             break;
           case 'Drizzle':
             weatherIcon.src = "./img/drizzle.png";
             cuerpo.style.backgroundImage = "url('./img/nublado.jpg')";    
             document.querySelector(".descripcion").innerHTML = "parcialmente nublado";       
             break;
           case 'Snow':
             weatherIcon.src = "./img/snow.png";
             cuerpo.style.backgroundImage = "url('./img/nieve.jpg')";   
             document.querySelector(".descripcion").innerHTML = "Nieve";        
             break;
           case 'Mist': 
             weatherIcon.src = "./img/mist.png";           
             break;
           case 'Clear':
             weatherIcon.src = "./img/clear.png"; 
             cuerpo.style.backgroundImage = "url('./img/despejado.jpg')";
             document.querySelector(".descripcion").innerHTML = "Despejado";                               
             break;
             case 'Clouds':
              weatherIcon.src = "./img/clouds.png";
              cuerpo.style.backgroundImage = "url('./img/nublado.jpg')";                      
              document.querySelector(".descripcion").innerHTML = "Nublado";
              break;    
           default:                             
              cuerpo.style.backgroundImage = "url('./img/earth-8067366_1280png')";
              document.querySelector(".descripcion").innerHTML = "";
              break;
        }
        document.querySelector(".weather").style.display= "block"
      } 
    } 

    searchBtn.addEventListener("click", () => {
      chkWeather(searchBox.value); 
      //chkWeather('resistencia'); //
    });
  