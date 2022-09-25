const fetchAllData = (dataPath) => {
    return fetch(`http://localhost:3001/api/v1/${dataPath}`)
      .then(response => response.json())
      .catch(error => console.log(`Error: ${dataPath} fetch error`, error))
    }
  
  // const fetchSingleTravelerData = (userNumber) => {
  //   return fetch(`http://localhost:3001/api/v1/travelers/${userNumber}`)
  //     .then(response => response.json())
  //     .catch(error => console.log(`Error: ${userNumber} fetch error`, error))
  // }

const postTripApplication = (tripInfo) => {
  return fetch('http://localhost:3001/api/v1/trips', {
    method: 'POST',
    body: JSON.stringify(tripInfo),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .catch(err => console.log(err.message));
 
}

export { fetchAllData, postTripApplication }
