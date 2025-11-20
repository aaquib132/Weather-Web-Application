    const apiKey = "dbfa83bff3e1f50804d077a2a9d58ce2";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchButton = document.querySelector(".search-button");
    const inputBox = document.querySelector(".input");

    async function checkWeather(city) {
        if (!city) return alert("Please enter a city name!");

        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        const data = await response.json();

        if (data.cod === "404") {
            alert("City not found! Try again.");
            return;
        }

        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity-unit").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind-unit").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main === "Clouds") {
            document.querySelector(".weather-image").src = "images/clouds.png";
        } else if(data.weather[0].main === "Clear") {
            document.querySelector(".weather-image").src = "images/clear.png";
        } else if(data.weather[0].main === "Rain") {
            document.querySelector(".weather-image").src = "images/rain.png";
        } else if(data.weather[0].main === "Drizzle") {
            document.querySelector(".weather-image").src = "images/drizzle.png";
        } else if(data.weather[0].main === "Mist") {
            document.querySelector(".weather-image").src = "images/mist.png";
        } else if(data.weather[0].main === "Snow") {
            document.querySelector(".weather-image").src = "images/snow.png";
        }
    }

    searchButton.addEventListener("click", () => {
        checkWeather(inputBox.value);
    });

    inputBox.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            checkWeather(inputBox.value);
        }
    });