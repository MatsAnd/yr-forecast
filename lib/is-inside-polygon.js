const inside = require('point-in-polygon-hao')
const convertToPoint = require('./get-xy-point')

module.exports = function (lat, lon, polygon) {
  const poly = polygon.split(' ').map(poly => poly.split(',')).map(convertToPoint)
  return inside([lon, lat], [poly])
}
