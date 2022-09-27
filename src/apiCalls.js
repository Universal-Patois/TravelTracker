const userMessage = document.getElementById("errorMessage");

const fetchAllData = (dataPath) => {
  return fetch(`http://localhost:3001/api/v1/${dataPath}`)
    .then((response) => response.json())
    .catch((error) => {
      displayErrorMessage(error);
      console.log(`Error: ${error.message}`);
    });
};

const fetchSingleTravelerData = (userNumber) => {
  return fetch(`http://localhost:3001/api/v1/travelers/${userNumber}`)
    .then((response) => response.json())
    .catch((error) => {
      displayErrorMessage(error);
      console.log(`Error: ${error.message}`);
    });
};

const postTripApplication = (tripInfo) => {
  return fetch("http://localhost:3001/api/v1/trips", {
    method: "POST",
    body: JSON.stringify(tripInfo),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => checkForErrors(response))
    .catch((error) => {
      displayErrorMessage(error);
    });
};

const checkForErrors = (response) => {
  if (!response.ok) {
    console.log(`${response.status} - ${response.statusText}`);
    throw new Error(`Please make sure every input field is complete!`);
  }
  console.log(response);
  return response.json();
};

const displayErrorMessage = (error) => {
  userMessage.innerText = error.message;
};

export { fetchAllData, postTripApplication, fetchSingleTravelerData };
