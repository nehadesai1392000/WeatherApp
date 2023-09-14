import React, { useEffect, useState } from 'react'
import "./Style/WetherSearchSection.css"
import perfectDay from "../assets/perfect-day.svg"
import axios from 'axios';
import { useDispatch } from "react-redux"
import { searchButton } from './redux/WeatherSlice';


const WetherSearchSection = ({ setChang }: any) => {
  const [cityName, setCityName] = useState('');
  const dispatch = useDispatch()


  const handleSearch = async () => {
    const result: any = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=fe4feefa8543e06d4f3c66d92c61b69c`)
    dispatch(searchButton(result.data));
    setChang(false);
  }

  return (
    <div className='wether-search-main-section'>
      <div className='wether-box-section'>
        <div className='all-input-section'>
          <h1>React Weather App</h1>
          <img src={perfectDay} alt="" />
          <p>Find Weather of your city</p>
          <div className='search-btnInput'>
            <input type="text" value={cityName} onChange={(e) => setCityName(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WetherSearchSection