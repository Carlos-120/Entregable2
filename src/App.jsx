import axios from 'axios'
import { useEffect, useState } from 'react'
import "./App.css"
import WeatherCard from './compontes/WeatherCard'


function App() {
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()
  const [isCelsius, setIsCelsius] = useState(true)
  //Aqui  obtenemos las cordenadas de la api del navegador 
  const success = (pos) => {
    const newCoords = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    }
    setCoords(newCoords)
  }
  const changeUnitTemperature = () => setIsCelsius(!isCelsius)


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])
  //Peticion de datos a la api del clima 
  useEffect(() => {
    if (coords) {
      const API_KEY = "5521018ab4587f6e0352afea5d9179b3";
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}`
      axios.get(URL)
        .then(res => {
          const tempKelvin = res.data.main.temp
          const tempCelsius = (tempKelvin - 273.15).toFixed(1)
          const tempFahrenheit = ((tempCelsius * 9 / 5) + 32).toFixed(1)
          const newTemperature = {
            celsius: tempCelsius,
            fahrenheit: tempFahrenheit
          }
          setTemperature(newTemperature)
          setWeather(res.data)
        })
        .catch(res => console.log(res))
    }
  }, [coords])

  return (
    <div className="App">
      {
        weather ? (<WeatherCard weather={weather} temperature={temperature} changeUnitTemperature={changeUnitTemperature} isCelsius={isCelsius} />) : <p>Loading ... </p>
      }
    </div>
  )
}

export default App
