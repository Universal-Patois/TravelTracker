class Trip {
  constructor (trip) {
    this.id = trip.id
    this.userID = trip.userID
    this.destinationID = trip.destinationID
    this.travelers = trip.travelers
    this.date = trip.date
    this.duration = trip.duration
    this.status = trip.status
    this.suggestedActivities = []
    this.destination
    this.tripTotal
  }

  calculateTripCost(destinations) {
    let currentDestination = destinations.find(destination => destination.id === this.destinationID)
    const lodgingCost = this.duration * currentDestination.estimatedLodgingCostPerDay
    const flightCost = this.travelers * currentDestination.estimatedFlightCostPerPerson
    const tripTotal = lodgingCost + flightCost
    const totalPlusFee = tripTotal + (tripTotal * .10)
    this.tripTotal = totalPlusFee
  }

  getDestinationInfo(destinations) {
    let currentDestination = destinations.find(destination => destination.id === this.destinationID)
    this.destination = currentDestination
  }
}

export default Trip