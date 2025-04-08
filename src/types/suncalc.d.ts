declare module 'suncalc' {
  interface SunCalcTimes {
    sunrise: Date;
    sunset: Date;
    solarNoon: Date;
    nadir: Date;
    sunriseEnd: Date;
    sunsetStart: Date;
    dawn: Date;
    dusk: Date;
    nauticalDawn: Date;
    nauticalDusk: Date;
    nightEnd: Date;
    night: Date;
    goldenHourEnd: Date;
    goldenHour: Date;
  }

  function getTimes(date: Date, latitude: number, longitude: number): SunCalcTimes;
  function getPosition(timeAndDate: Date, latitude: number, longitude: number): { altitude: number, azimuth: number };
  function getMoonPosition(timeAndDate: Date, latitude: number, longitude: number): { altitude: number, azimuth: number, distance: number, parallacticAngle: number };
  function getMoonIllumination(timeAndDate: Date): { fraction: number, phase: number, angle: number };
  function getMoonTimes(date: Date, latitude: number, longitude: number): { rise: Date, set: Date, alwaysUp: boolean, alwaysDown: boolean };

  export = {
    getTimes,
    getPosition,
    getMoonPosition,
    getMoonIllumination,
    getMoonTimes
  };
} 