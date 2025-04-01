export type WeatherData = {
    current:WeatherCurrent
    forecast:WeatherForecast,
    location:WeatherLocation
}

export type WeatherCurrent = {
    humidity:string
    temp_c:number
    temp_f:number
    wind_kph:number
    wind_mph:number
    uv:number
    air_quality:{
        'us-epa-index': number;
    }
    condition:{
        text:string,
        icon:string
    }
}
export type WeatherForecast = {
    forecastday: WeatherDay[]
}
export type WeatherLocation = {
    name:string
    country : string,
    localtime:string
}
export type WeatherDay = {
    astro:{
        sunrise:string,
        sunset:string
    }
    date:string,
    day:{        
        daily_chance_of_rain:number
        avgtemp_c:number,
        avgtemp_f:number,

        condition:{
            icon:string,
            text:string
        }

    }
}