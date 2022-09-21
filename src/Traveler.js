class Traveler {
  constructor (traveler) {
    this.id = traveler.id
    this.name = traveler.name
    this.travelerType = traveler.travelerType
    this.pastTrips = []
    this.upcomingTrips = []
    this.pendingTrips = []
    this.totalSpentTraveling = 0
  }
}

export default Traveler