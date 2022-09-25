import Destinations from "./Destinations"

class Trip {
  constructor (trip) {
    this.id = trip.id
    this.userID = trip.userID
    this.destinationID = trip.destinationID
    this.destinationInfo = []
    this.travelers = trip.travelers
    this.date = trip.date
    this.duration = trip.duration
    this.status = trip.status
    this.suggestedActivities = []
    this.tripTotal
  }

  calculateTripCost() {
    Destinations.allDestinations.forEach(location => {
      if(location.id === this.destinationID) {
        const lodgingCost = this.duration * location.estimatedLodgingCostPerDay
        const flightCost = this.travelers * location.estimatedFlightCostPerPerson
        const tripTotal = lodgingCost + flightCost
        const totalPlusFee = tripTotal + (tripTotal * .10)
        this.tripTotal = totalPlusFee
        return totalPlusFee
      }
    })
  }
}

export default Trip