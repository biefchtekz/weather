export interface Country {
  country: string,
  cities: string[],
}

export interface Weather {
  weather: [{
    icon: string
  }],
  main: {
    temp: string,
    pressure: string,
    humidity: string,
    feels: string,
  },
  wind: {
    speed: string
  },
  sys: {
    sunrise: number,
    sunset: number
  }
  name: string,
  coord: {
    lon: string,
    lat: string
  }
}
