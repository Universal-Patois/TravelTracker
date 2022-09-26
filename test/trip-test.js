import chai from "chai";
import { expect } from 'chai';
import Traveler from "../src/Traveler";
import Destinations from "../src/Destinations.js"
import Trip from "../src/Trip.js"

describe('Trip', () => {
  let date = new Date().getTime()
  let sampleTravelerData
  let sampleDestinations
  let sampleTrip

  beforeEach(() => {
    sampleDestinations = new Destinations([
      {
      id: 1,
      destination: "Lima, Peru",
      estimatedLodgingCostPerDay: 70,
      estimatedFlightCostPerPerson: 400,
      image: "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
      alt: "overview of city buildings with a clear sky"
      }
    ])

    sampleTrip = new Trip ({
      id: 1,
      userID: 7,
      destinationID: 1,
      travelers: 1,
      date: "2022/09/16",
      duration: 8,
      status: "approved",
      suggestedActivities: [ ], 
      })  
  })

  it('should be a function', function() {
    expect(Trip).to.be.a('function')
  })

  it('should have an id, userID, destinationID, number of travelers going, date, duration, status, suggested activities', () => {
    expect(sampleTrip.id).to.equal(1);
    expect(sampleTrip.userID).to.equal(7);
    expect(sampleTrip.destinationID).to.equal(1);
    expect(sampleTrip.travelers).to.equal(1);
    expect(sampleTrip.date).to.equal("2022/09/16");
    expect(sampleTrip.duration).to.equal(8);
    expect(sampleTrip.status).to.equal("approved");
    expect(sampleTrip.suggestedActivities).to.deep.equal([]);
  });

  it('should calculate the trip cost', () => {
    expect(sampleTrip.calculateTripCost(sampleDestinations)).to.equal()
  })

})
