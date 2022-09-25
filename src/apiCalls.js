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

export { fetchAllData }
