import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [inputCity,SetInputCity]=useState("");
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bce93e41f89eb673d5682b47d9d1be5c`).then((res) => res.json()).then((data) => setWeatherData(data))
  }, [city])

  const handleSearch=()=>{
    setCity(inputCity);
    SetInputCity('');
  }
  return (
    <div className='main'>
      <div className="container">
        <h1>Weather App</h1>
        <input onInput={(e)=>SetInputCity(e.target.value)} value={inputCity} ontype="text" id="locationInput" placeholder="Enter a city" />
        <button onClick={()=>handleSearch()} id="searchButton">Search</button>
        <div className="weather-info">
          {weatherData.cod===200?<><h2 id="location">{weatherData.name}</h2>
          <p id="temperature">{Math.round(weatherData.main.temp-273)} <sup>o</sup>C</p>
          <p id="description">{weatherData.weather[0].main}</p></>:"Input the City name"}
        </div>
      </div>
    </div>
  );
}


export default App;
