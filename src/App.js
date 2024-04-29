import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bce93e41f89eb673d5682b47d9d1be5c`).then((res) => res.json()).then((data) => setWeatherData(data))
  }, [city])
  // console.log(weatherData);
  return (
    <body>
      <div class="container">
        <h1>Weather App</h1>
        <input type="text" id="locationInput" placeholder="Enter a city" />
        <button id="searchButton">Search</button>
        <div class="weather-info">
          <h2 id="location">Jaipur</h2>
          <p id="temperature">33</p>
          <p id="description">hahhhah</p>
        </div>
      </div>
    </body>
  );
}

export default App;
