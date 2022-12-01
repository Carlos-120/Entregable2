import React from 'react'

const WeatherCard = ({ weather, temperature, isCelsius, changeUnitTemperature }) => {



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
      <p>{isCelsius ? `${temperature.celsius} °C ` : `${temperature.fahrenheit} °F`} K</p>
      <button className='boton' onClick={changeUnitTemperature}> <span>Degrees °F/°C</span> </button>
    </article>

  )
}

export default WeatherCard