import React, { useEffect, useState } from 'react'
import "../Componate/Style/WetherActioneSection.css"
import sunny from "../assets/sunny.svg"
import day from "../assets/day.svg"
import night from "../assets/night.svg"
import cloudy from "../assets/cloudy.svg"
import cloudyNight from "../assets/cloudy-night.svg"
import rain from "../assets/rain.svg"
import rainNight from "../assets/rain-night.svg"
import storm from "../assets/storm.svg"
import temp from "../assets/temp.svg"
import humidity from "../assets/humidity.svg"
import wind from "../assets/wind.svg"
import pressure from "../assets/pressure.svg"
import { useSelector } from 'react-redux/es/exports'

const WetherActioneSection = () => {
  const [state, setState] = useState("")


  const wetherData = useSelector((state: any) => state.weatherReport.cityData)


  useEffect(() => { setState(wetherData?.weather[0]?.main) }, [wetherData?.weather[0]?.description])


  const date: any = new Date(wetherData.sys.sunset * 1000)
  // Hours part from the timestamp
  const hours = date.getHours();
  // Minutes part from the timestamp
  const minutes = "0" + date.getMinutes();
  // Seconds part from the timestamp
  // Will display time in 10:30:23 format
  const formattedTime = hours + ':' + minutes.substr(-2)

  return (
    <>
      <div className='action-main-section'>
        <div className='action-box-part'>
          <div className='Information-sec'>
            <h1>React Weather App</h1>
            <div className='result-sec'>
              <p>{(wetherData.main.temp - 273.15).toFixed(0)}&deg;C I{wetherData.weather[0].description}</p>

              {(() => { switch (state) {
                 case "Rain": 
                 return <img src={rainNight} alt="rain" />     
                 case 'Clouds': 
                 return <img src={cloudyNight} alt="Clouds" />    
  
                           default: return <img src={wetherData?.weather[0]?.icon.includes("d") ? sunny : night} alt="sunny" />  } 
                           })()}




              {/* <img src={wetherData.weather[0].icon.includes("d") ? sunny : night} alt="" /> */}
            </div>
            <h4>{wetherData.name}, {wetherData.sys.country}</h4>
            <div className='Weather-info'>
              <p>Weather info</p>
            </div>
            <div className='sunHum-section'>
              <div className='sunset'>
                <div>
                  <img src={temp} alt="" />
                </div>
                <div>
                  <span>{formattedTime}</span><br />
                  <span>sunset</span>
                </div>
              </div>
              <div className='humidity'>
                <div>
                  <img src={humidity} alt="" />
                </div>
                <div>
                  <span>{wetherData.main.humidity}</span><br />
                  <span>humidity</span>
                </div>
              </div>
            </div>

            <div className='sunHum-section'>
              <div className='sunset'>
                <div>
                  <img src={wind} alt="" />
                </div>
                <div>
                  <span>{wetherData.wind.speed}</span><br />
                  <span>Wind</span>
                </div>
              </div>
              <div className='humidity'>
                <div>
                  <img src={pressure} alt="" />
                </div>
                <div>
                  <span>{wetherData.main.pressure}</span><br />
                  <span>Pressure</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default WetherActioneSection