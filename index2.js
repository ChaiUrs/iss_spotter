/*
const { fetchMyIP } = require('./iss_promised');
fetchMyIP()
  .then(body => console.log(body));

  fetchMyIP()
  .then(fetchCoordsByIP)
  .then(body => console.log(body));

  fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(body => console.log(body));
*/

const { nextISSTimesForMyLocation } = require('./iss_promised');
const printPassTimes = (passTimes) => {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((err) => {
    console.log("It didn't work: ", err.message);
  });
