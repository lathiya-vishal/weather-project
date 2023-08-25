const apikey = "636f94e3ad8def134472c8787379aa26";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const serchbox = document.querySelector(".search input");
const serchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkweather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "°C";
    document.querySelector(".country").innerHTML=data.sys.country;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weathericon.src = "image/cloudy.png";
    } else if (data.weather[0].main == "Clear") {
      weathericon.src = "image/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weathericon.src = "image/rainy.png";
    } else if (data.weather[0].main == "Drizzle") {
      weathericon.src = "image/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weathericon.src = "image/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

serchbtn.addEventListener("click", () => {
  checkweather(serchbox.value);
});
