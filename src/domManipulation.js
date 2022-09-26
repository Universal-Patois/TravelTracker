//// Query Selectors ////
const userGreeting = document.getElementById('userName')
const travelerPastTrips = document.getElementById('pastTrips')
const travelerUpcomingTrips = document.getElementById('upcomingTrips')
const travelerPendingTrips = document.getElementById('pendingTrips')
const travelerSpending = document.getElementById('totalSpent')

//// Functions ////
const displayAllTrips = (traveler) => {
  displayPastTrips(traveler)
  displayUpcomingTrips(traveler)
  displayPendingTrips(traveler)
}

const displayUserGreeting = (greetingMessage) => {
  userGreeting.innerText = greetingMessage
}

const populateDropDownLocations = (locations) => {
    locations.forEach(location => {
      const locationName = document.createElement('option');
      locationName.innerText = location.destination;
      locationName.value = location.destination;
      dropDownLocations.appendChild(locationName);
  });
};

const displayPastTrips = (traveler) => {
  // travelerPastTrips.innerHTML = ''
  if (traveler.pastTrips.length > 0) {
    traveler.pastTrips.forEach(trip => {
      console.log(trip.destination)
      travelerPastTrips.innerHTML += `
      <div class="image-wrap">
      <img class="destination-image" src=${trip.destination.image} alt=${trip.destination.alt}><hr>
      </div>
      <h4>${trip.destination.destination}</h4><hr>
      <p>Trip date: ${trip.date} <br>
      Travelers: ${trip.travelers} <br>
      Duration: ${trip.duration} <br>
      Status: ${trip.status} <br> </p>
      ` 
    }) 
  }  else {
    travelerPastTrips.innerHTML += `
    <h3> You have no past trips. <br>
    `
  }
}

const displayUpcomingTrips = (traveler) => {
  if (traveler.upcomingTrips.length > 0) {
    traveler.upcomingTrips.forEach(trip => {
      // <h4>${trip.destination.destination}</h4><hr>
      travelerUpcomingTrips.innerHTML += `
      <div class="image-wrap">
      <img class="destination-image" src=${trip.destination.image} alt=${trip.destination.alt}><hr>
      </div>
      <h4>${trip.destination.destination}</h4><hr>
      <p>Trip date: ${trip.date} <br>
      Travelers: ${trip.travelers} <br>
      Duration: ${trip.duration} <br>
      Status: ${trip.status} <br> </p>
      ` 
    })
  } else {
    travelerUpcomingTrips.innerHTML += `
    <h3> You have no trips currently booked. <br>
    `
  }
}

const displayPendingTrips = (traveler) => {
  if (traveler.pendingTrips.length > 0) {
    traveler.pendingTrips.forEach(trip => {
      travelerPendingTrips.innerHTML += `
      <div class="image-wrap">
      <img class="destination-image" src=${trip.destination.image} alt=${trip.destination.alt}><hr>
      </div>
      <h4>${trip.destination.destination}</h4><hr>
      <p>Trip date: ${trip.date} <br>
      Travelers: ${trip.travelers} <br>
      Duration: ${trip.duration} <br>
      Status: ${trip.status} <br> </p>
      ` 
    })
  } else {
    travelerPendingTrips.innerHTML += `
    <h3> You have no pending trips. <br>
    `
  }
}

const displayAnnualSpending = (traveler, trips, destinations) => {
  travelerSpending.innerHTML = traveler.getAnnualSpending(trips, destinations)
}




export { displayPendingTrips, displayAllTrips,  displayUserGreeting, populateDropDownLocations, displayAnnualSpending}