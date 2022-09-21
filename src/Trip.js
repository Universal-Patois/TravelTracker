class Trip {
  constructor (trip) {
    this.id = trip.id
    this.userID = trip.userID
    this.travelers = trip.travelers
    this.date = trip.date
    this.duration = trip.duration
    this.status = trip.status
    this.suggestedActivities = []
  }
}

export default Trip