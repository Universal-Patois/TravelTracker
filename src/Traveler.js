import Travelers from "./Travelers"
import Trips from "./Trips"
import Trip from "./Trip"

class Traveler {
  constructor (traveler, date) {
    this.id = traveler.id
    this.name = traveler.name
    this.travelerType = traveler.travelerType
    this.pastTrips = []
    this.upcomingTrips = []
    this.pendingTrips = []
    this.todaysDate = date
  }

  greetUser() {
    let firstName = this.name.split(' ')
    return `Welcome back ${firstName[0]}! The World Awaits You!`
  }

  getTrips(trips, destinations) {
    this.getPastTrips(trips, destinations)
    this.getUpcomingTrips(trips, destinations)
    this.getPendingTrips(trips, destinations)
  }

  getPastTrips(trips, destinations) {
    let totalTrips = trips.filter(trip => trip.userID === this.id);
    totalTrips.forEach(trip => {
      let tripDate = new Date(`${trip.date}`).getTime()
      if(tripDate < this.todaysDate ) {
        trip.getDestinationInfo(destinations)
        // console.log(trip.destination['estimatedLodgingCostPerDay'])
        this.pastTrips.push(trip)
      }
    })
    return totalTrips
  }

  getUpcomingTrips(trips, destinations) {
    let totalTrips = trips.filter(trip => trip.userID === this.id);
    totalTrips.forEach(trip => {
      let tripDate = new Date(`${trip.date}`).getTime()
      if(tripDate > this.todaysDate ) {
        trip.getDestinationInfo(destinations)
        this.upcomingTrips.push(trip)
      }
    })
    return totalTrips
  }

  getPendingTrips(trips, destinations) {
    let totalTrips = trips.filter(trip => trip.userID === this.id);
    totalTrips.forEach(trip => {
      if(trip.status === 'pending') {
        trip.getDestinationInfo(destinations)
        this.pendingTrips.push(trip)
      }
    })
    return totalTrips
  }


  getAnnualSpending(trips, destinations) {
    let currentYear = new Date().getFullYear()
    let totalTrips = trips.filter(trip => trip.userID === this.id);
    let tripsThisYear = totalTrips.filter(trip => new Date(`${trip.date}`).getFullYear() === currentYear)
    let annualSpending = tripsThisYear.reduce((acc, trip) => {
      trip.calculateTripCost(destinations)
      acc += trip.tripTotal
      return acc
    },0)
    return `You Have Spent $${annualSpending} On Travel So Far This Year!`;
  }


export default Traveler