/*
const { fetchMyIP } = require('./iss');
fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP :' , ip);
});

// first run => node index.js https://api.ipify.org?format=json
// returns => It worked! Returned IP : 162.245.144.188

const { fetchCoordsByIP } = require('./iss');
fetchCoordsByIP('162.245.144.188', (error, coords) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned Coords:' , coords);
});
// second run => node index.js https://ipvigilante.com/json
// returns => It worked! Returned IP : 162.245.144.188
// It worked! Returned Coords: { latitude: '49.26200', longitude: '-123.09230' }
// https://ipvigilante.com => returns {"status":"success","data":{"ipv4":"162.245.144.188","continent_name":"North America",
// "country_name":"Canada","subdivision_1_name":"British Columbia","subdivision_2_name":null,"city_name":"Vancouver",
// "latitude":"49.26200","longitude":"-123.09230"}}

const { fetchISSFlyOverTimes } = require('./iss');
const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };
fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned flyover times:' , passTimes);
});
// third run => node index https://api.open-notify.org/iss-pass.json
/* It worked! Returned flyover times: [ { duration: 653, risetime: 1564708574 },
  { duration: 651, risetime: 1564714390 },
  { duration: 646, risetime: 1564720195 },
  { duration: 539, risetime: 1564726016 },
  { duration: 312, risetime: 1564780657 } ]
It worked! Returned IP : 162.245.144.188
It worked! Returned Coords: { latitude: '49.26200', longitude: '-123.09230' } */


/** 
 * Input: 
 *   Array of data objects defining the next fly-overs of the ISS.
 *   [ { risetime: <number>, duration: <number> }, ... ]
 * Returns: 
 *   undefined
 * Sideffect: 
 *   Console log messages to make that data more human readable.
 *   Example output:
 *   Next pass at Mon Jun 10 2019 20:11:44 GMT-0700 (Pacific Daylight Time) for 468 seconds!
 */

const { nextISSTimesForMyLocation } = require('./iss');
const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});
