import React from 'react'

const WeatherCard = ({ weather, temperature, isCelsius, changeUnitTemperature }) => {



  return (

    <article className='time'>
      <span id='span1'></span>
      <span id='span1'></span>
      <span id='span1'></span>
      <span id='span1'></span>
      <h1>Weather App</h1>
      <h3>{`${weather.name} ${weather.sys.country}`}</h3>
      <section>
        <div>
          <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
        </div>
        <ul>
          <li>{weather.weather[0].description}</li>
          <li>Wind speed:{weather.wind.speed} m/s</li>
          <li>Clouds:{weather.clouds.all} %</li>
          <li>Pressure:{weather.main.pressure} hPa</li>
        </ul>
      </section>
      <p>{isCelsius ? `${temperature.celsius} °C ` : `${temperature.fahrenheit} °F`} K</p>
      <button onClick={changeUnitTemperature}>Degrees °F/°C</button>
    </article>

  )
}

export default WeatherCard