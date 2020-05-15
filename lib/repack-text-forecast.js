module.exports = (textForecast, areaIds) => {
  return textForecast.textforecast.time.map(period => {
    const areas = period.forecasttype.location
    const filteredAreas = areaIds ? areas.filter(area => areaIds.includes(area['@_id'])) : areas

    const areaForcasts = filteredAreas.map(area => {
      return {
        id: area['@_id'],
        name: area['@_name'],
        forecast: area['#text']
      }
    })

    return {
      from: new Date(period['@_from']),
      to: new Date(period['@_to']),
      areas: areaForcasts
    }
  })
}
