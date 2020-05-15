# yr-forecast

Get the forecast for a geographic location from [Yr](https://yr.no), the weather service by [Norwegian Meteorological Institute](https://met.no) and the [Norwegian Broadcasting Corporation](https://nrk.no).
All the data is gathered from different API endpoints thats publicly available from [this page (api.met.no)](https://api.met.no/). 

**Please read [the conditions for usage here](https://api.met.no/conditions_service.html) before starting using this module!**


## Installation
```
$ npm i yr-forecast
```

## Usage
### Get forecast for a location
This returns a full forecast for one location, that is, a forecast with several parameters for a nine-day period.

The parameters are temperature, wind speed, wind direction, pressure, precipitation, cloudiness, fog, lowClouds, mediumClouds, highClouds and humidity.


#### Example
```javascript
const yr = require('yr-forecast')
const lat = 59.2667259
const lon = 10.4045301

const forecast = await yr.getForecast(lat, lon)
```

#### Returns
```json
[
  {
    "from": "2020-05-17T18:00:00.000Z",
    "instant": {
      "air_pressure_at_sea_level": 1007,
      "air_temperature": 11.5,
      "cloud_area_fraction": 0,
      "cloud_area_fraction_high": 0,
      "cloud_area_fraction_low": 0.1,
      "cloud_area_fraction_medium": 0,
      "dew_point_temperature": -1.5,
      "fog_area_fraction": 0,
      "relative_humidity": 41.6,
      "ultraviolet_index_clear_sky": 0.2,
      "wind_from_direction": 303.5,
      "wind_speed": 4.3,
      "wind_speed_of_gust": 9.7
    },
    "next_1_hours": {
      "symbol_code": "clearsky_day",
      "precipitation_amount": 0,
      "precipitation_amount_max": 0,
      "precipitation_amount_min": 0,
      "probability_of_precipitation": 0,
      "probability_of_thunder": 0
    },
    "next_6_hours": {
      "symbol_code": "clearsky_night",
      "air_temperature_max": 10.3,
      "air_temperature_min": 5.3,
      "precipitation_amount": 0,
      "precipitation_amount_max": 0,
      "precipitation_amount_min": 0,
      "probability_of_precipitation": 0
    }
  },
  ...
]
```

### Get nowcast for a specific place
This returns the forcast for the next two hours.

The output is precipitation with unit mm/h. Currently only the area where we have radar coverage is supported. If the requests is outside the supported range, an error is thrown.


#### Example
```javascript
const yr = require('yr-forecast')
const lat = 59.2667259
const lon = 10.4045301

const forecast = await yr.getForecast(lat, lon)
```

#### Returns
```json
[
  {
    "from": "2020-05-15T17:25:00.000Z",
    "to": "2020-05-15T17:25:00.000Z",
    "precipitation": {
      "unit": "mm/h",
      "value": "0.0"
    }
  },
  {
    "from": "2020-05-15T17:30:00.000Z",
    "to": "2020-05-15T17:30:00.000Z",
    "precipitation": {
      "unit": "mm/h",
      "value": "0.0"
    }
  },
  {
    "from": "2020-05-15T17:35:00.000Z",
    "to": "2020-05-15T17:35:00.000Z",
    "precipitation": {
      "value": "0.0",
      "unit": "mm/h"
    }
  },
  ...
]
```

### Get text forecast for location
Get text forecasts for land areas in Norway. Land forecasts are currently only issued in Norwegian.


#### Example
```javascript
const yr = require('yr-forecast')
const lat = 59.2667259
const lon = 10.4045301

const forecast = await yr.getTextForecast(lat, lon)
```

#### Returns
```json
[
  {
    "from": "2020-05-17T22:00:00.000Z",
    "to": "2020-05-18T22:00:00.000Z",
    "areas": [
      {
        "id": "0513",
        "name": "Østafjells",
        "forecast": "Nordvest bris. Opphold. Fra om ettermiddagen skiftende bris, sørvest periodevis frisk bris på kysten. Kan hende litt regn i Agder, ellers stort sett opphold."
      }
    ]
  },
  ...
]
```