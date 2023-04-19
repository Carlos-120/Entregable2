import React, { useState } from 'react'

const WeatherCard = ({ weather, temperature, isCelsius, changeUnitTemperature, newCallAPISearch }) => {

  const [place, setPlace] = useState("")

  const handleChangePlace = (e) => {
    setPlace(e.target.value)

  }


  return (

    <article className='time'>

      <h1>Weather App</h1>
      <h3>{`${weather.name} ${weather.sys.country}`}</h3>
      <section className='grid'>
        <div className='conten'>
          <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
        </div>
        <div className='conten1'>
          <ul>
            <li className='Mayusculas'>{weather.weather[0].description}</li>
            <li>Wind speed:{weather.wind.speed} m/s</li>
            <li>Clouds:{weather.clouds.all} %</li>
            <li>Pressure:{weather.main.pressure} hPa</li>
          </ul>
        </div>

      </section>
      <section className='grid'>
        <div>
          <p>{isCelsius ? `${temperature.celsius} °C ` : `${temperature.fahrenheit} °F`} K</p>
          <button className='boton' onClick={changeUnitTemperature}> <span>Degrees °F/°C</span> </button>
        </div>
        <div>
          <input
            type="text"
            value={place}
            onChange={handleChangePlace} />
          <br />
          <button className='icon_serch' onClick={() => newCallAPISearch(place)} ><i class='bx bx-search' ></i></button>
        </div>
      </section>


    </article>

  )
}

export default WeatherCard