import React,{FC, useEffect, useState} from 'react'

import { WeatherData } from '../../types'
import cl from './Watch.module.css'
import watchIcon from './../../assets/icon/watch.png'
import axios from 'axios'


interface WatchProps{
      data:WeatherData
}










const Watch:FC<WatchProps> = ({data}) => {
  const SunCalc = require('suncalc');


 const [goldenHourTime, setGoldenHourTime] = useState<string>('Loading...');

 const [morningGolden, setMorningGolden] = useState<string>('');
  const [eveningGolden, setEveningGolden] = useState<string>('');

  useEffect(() => {
    const fetchGoldenHours = async () => {
      try {
        // 1. Получаем координаты города
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/search?q=${data.location.name}&format=json`
        );
        const { lat, lon } = response.data[0];
        
        // 2. Парсим текущую дату
        const currentDate = new Date(data.location.localtime.replace(/-/g, '/'));

        // 3. Рассчитываем время через SunCalc
        const { sunrise, sunset } = SunCalc.getTimes(currentDate, parseFloat(lat), parseFloat(lon));

        // Утренний Golden Hour (1 час после восхода)
        const morningEnd = new Date(sunrise.getTime() + 3600000);
        
        // Вечерний Golden Hour (1 час до заката)
        const eveningStart = new Date(sunset.getTime() - 3600000);

        // Форматируем время
        setMorningGolden(morningEnd.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        setEveningGolden(eveningStart.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

      } catch (error) {
        console.error('Ошибка:', error);
        setMorningGolden('--:--');
        setEveningGolden('--:--');
      }
    };

    fetchGoldenHours();
  }, [data.location.name, data.location.localtime]);



  return (
    <div  className={cl.watches} >
      <div className={cl.wrapper}>
        <h1 className={cl.title}>Sunrise</h1>
        <div className={cl.watch}>   
          <img  className={cl.arrows} src={watchIcon} alt="watch" />
          <h2 className={cl.timeMain}>
              {data.forecast.forecastday[0].astro.sunrise.replace('AM','')}
            </h2>
            <h2 className={cl.timeSide}>
              AM
            </h2>
        </div>
      </div>
      <div   className={cl.wrapper}>
        <h1 className={cl.title}>Golden Hour</h1>
        <div  className={cl.watch}>
          <img className={cl.arrows} src={watchIcon} alt="watch" />
          <h2 className={cl.timeMain}>
               {morningGolden}
            </h2>
           <h2 className={cl.timeSide}>
            {eveningGolden}
           </h2>
        </div>
      </div >
      <div  className={cl.wrapper}>
        <h1 className={cl.title}>Sunset</h1>
        <div className={cl.watch}>
            <img className={cl.arrows} src={watchIcon} alt="watch" />
            <h2 className={cl.timeMain}>
            {data.forecast.forecastday[0].astro.sunset.replace('PM','')}
            </h2>
           <h2 className={cl.timeSide}>
              PM
           </h2>
        </div>
      </div>
    </div>
  )
}

export default Watch