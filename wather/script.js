async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'bc688bd91bb04f4dc27d3b5e9222bc60'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            const weatherInfo = `
                <div id="weather-card" class="card">
                    <div class="card-body">
                        <h2 class="card-title">Weather in ${data.name}</h2>
                        <p class="card-text">Temperature: ${data.main.temp} °C</p>
                        <p class="card-text">Humidity: ${data.main.humidity} %</p>
                        <p class="card-text">Wind Speed: ${data.wind.speed} m/s</p>
                    </div>
                </div>
            `;
            document.getElementById('weather-info').innerHTML = weatherInfo;
        } else {
            document.getElementById('weather-info').innerHTML = `<p>${data.message}</p>`;
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather-info').innerHTML = '<p>Error fetching weather data. Please try again later.</p>';
    }
}
