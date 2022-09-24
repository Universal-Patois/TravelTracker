const travelerPastTrips = document.getElementById('pastTrips')
const travelerUpcomingTrips = document.getElementById('upcomingTrips')
const travelerPendingTrips = document.getElementById('pendingTrips')
// const travelerSpending = document.getElementById('totalSpent')

const displayPastTrips = (traveler) => {
  // travelerPastTrips.innerHTML = ''
  if (traveler.pastTrips.length > 0) {
    traveler.pastTrips.forEach(trip => {
      travelerPastTrips.innerHTML += `
      <p>Trip date: ${trip.date} <br>
      Travelers: ${trip.travelers} <br>
      Duration: ${trip.duration} <br>
      Status: ${trip.status} <br> </p>
      ` 
    })
  }
}

const displayUpcomingTrips = (traveler) => {
  if (traveler.upcomingTrips.length > 0) {
    traveler.upcomingTrips.forEach(trip => {
      travelerUpcomingTrips.innerHTML += `
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

// const displayAnnualSpending = (traveler) => {

// }

export { displayPastTrips, displayUpcomingTrips, displayPendingTrips }