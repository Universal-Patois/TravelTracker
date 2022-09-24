import Travelers from "./Travelers"
import Trips from "./Trips"

class Traveler {
  constructor (traveler, date) {
    this.id = traveler.id
    this.name = traveler.name
    this.travelerType = traveler.travelerType
    this.pastTrips = []
    this.upcomingTrips = []
    this.pendingTrips = []
    this.totalSpentTraveling = 0
    this.todaysDate = date
  }

  getTrips(trips) {
    this.getPastTrips(trips)
    this.getUpcomingTrips(trips)
    this.getPendingTrips(trips)
  }

  getPastTrips(trips) {
    let totalTrips = trips.filter(trip => trip.userID === this.id);
    totalTrips.forEach(trip => {
      let tripDate = new Date(`${trip.date}`).getTime()
      // console.log('tripDate', tripDate)
      if(tripDate < this.todaysDate ) {
        this.pastTrips.push(trip)
      }
    })
    return totalTrips
  }

  getUpcomingTrips(trips) {
    let totalTrips = trips.filter(trip => trip.userID === this.id);
    totalTrips.forEach(trip => {
      let tripDate = new Date(`${trip.date}`).getTime()
      // console.log('tripDate', tripDate)
      if(tripDate > this.todaysDate ) {
        this.upcomingTrips.push(trip)
      }
    })
    return totalTrips
  }

  getPendingTrips(trips) {
    let totalTrips = trips.filter(trip => trip.userID === this.id);
    totalTrips.forEach(trip => {
      if(trip.status === 'pending') {
        this.pendingTrips.push(trip)
      }
    })
    return totalTrips
  }

  getAnnualSpending() {
    let totalTrips = trips.filter(trip => trip.userID === this.id);
    let tripsThisYear = totalTrips.filter(trip => trip.date)
  }
}

export default Traveler