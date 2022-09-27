import chai from "chai";
import { expect } from 'chai';
import Traveler from "../src/Traveler";
import Destinations from "../src/Destinations.js"
import Trips from "../src/Trips.js"
import Trip from "../src/Trip.js"

describe('Traveler', () => {
  let traveler1
  let traveler2
  let date = Date.now()
  let sampleTravelerData
  let sampleDestinations
  let sampleTrips
  let sampleTripsRepo
  
  beforeEach(() => {
    sampleTravelerData = [
      {
        id: 7,
        name: "Emmet Sandham",
        travelerType: "relaxer",
        pastTrips: [],
        upcomingTrips: [],
        pendingTrips: [],
        todaysDate: 1664226086986
      },
      {
        id: 15,
        name: "Emeline Winslet",
        travelerType: "history buff",
        pastTrips: [],
        upcomingTrips: [],
        pendingTrips: [],
        todaysDate: 1664226086986
      },
    ]

    traveler1 = new Traveler(sampleTravelerData[0], date)
    traveler2 = new Traveler(sampleTravelerData[1], date)
    sampleDestinations = new Destinations([
      {
      id: 1,
      destination: "Lima, Peru",
      estimatedLodgingCostPerDay: 70,
      estimatedFlightCostPerPerson: 400,
      image: "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
      alt: "overview of city buildings with a clear sky"
      },
      {
      id: 2,
      destination: "Stockholm, Sweden",
      estimatedLodgingCostPerDay: 100,
      estimatedFlightCostPerPerson: 780,
      image: "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      alt: "city with boats on the water during the day time"
      },
      {
      id: 3,
      destination: "Sydney, Austrailia",
      estimatedLodgingCostPerDay: 130,
      estimatedFlightCostPerPerson: 950,
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      alt: "opera house and city buildings on the water with boats"
      },
      {
      id: 4,
      destination: "Cartagena, Colombia",
      estimatedLodgingCostPerDay: 65,
      estimatedFlightCostPerPerson: 350,
      image: "https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
      alt: "boats at a dock during the day time"
      },
      {
      id: 5,
      destination: "Madrid, Spain",
      estimatedLodgingCostPerDay: 150,
      estimatedFlightCostPerPerson: 650,
      image: "https://images.unsplash.com/photo-1543785734-4b6e564642f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      alt: "city with clear skys and a road in the day time"
      },
      {
      id: 6,
      destination: "Jakarta, Indonesia",
      estimatedLodgingCostPerDay: 70,
      estimatedFlightCostPerPerson: 890,
      image: "https://images.unsplash.com/photo-1555333145-4acf190da336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      alt: "lit up city at night"
      },
      {
      id: 7,
      destination: "Paris, France",
      estimatedLodgingCostPerDay: 100,
      estimatedFlightCostPerPerson: 395,
      image: "https://images.unsplash.com/photo-1524396309943-e03f5249f002?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
      alt: "city during the day time with eiffel tower"
      },
      {
      id: 8,
      destination: "Tokyo, Japan",
      estimatedLodgingCostPerDay: 125,
      estimatedFlightCostPerPerson: 1000,
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1971&q=80",
      alt: "city with people walking in crosswalk and brightly lit shops at night"
      },
      {
      id: 9,
      destination: "Amsterdam, Netherlands",
      estimatedLodgingCostPerDay: 100,
      estimatedFlightCostPerPerson: 950,
      image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      alt: "canal with boats and trees and buildings along the side"
      },
      {
      id: 10,
      destination: "Toronto, Canada",
      estimatedLodgingCostPerDay: 90,
      estimatedFlightCostPerPerson: 450,
      image: "https://images.unsplash.com/photo-1535776142635-8fa180c46af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2756&q=80"
      }
    ])
    sampleTrips = [
      {
      id: 1,
      userID: 7,
      destinationID: 1,
      travelers: 1,
      date: "2022/09/16",
      duration: 8,
      status: "approved",
      suggestedActivities: [ ]
      },
      {
      id: 2,
      userID: 15,
      destinationID: 2,
      travelers: 5,
      date: "2022/10/04",
      duration: 18,
      status: "approved",
      suggestedActivities: [ ]
      },
      {
      id: 3,
      userID: 7,
      destinationID: 3,
      travelers: 4,
      date: "2022/05/22",
      duration: 17,
      status: "approved",
      suggestedActivities: [ ]
      },
      {
      id: 4,
      userID: 15,
      destinationID: 4,
      travelers: 2,
      date: "2022/02/25",
      duration: 10,
      status: "approved",
      suggestedActivities: [ ]
      },
      {
      id: 5,
      userID: 7,
      destinationID: 5,
      travelers: 3,
      date: "2022/04/30",
      duration: 18,
      status: "approved",
      suggestedActivities: [ ]
      },
      {
      id: 6,
      userID: 15,
      destinationID: 6,
      travelers: 3,
      date: "2022/06/29",
      duration: 9,
      status: "approved",
      suggestedActivities: [ ]
      },
      {
      id: 7,
      userID: 7,
      destinationID: 7,
      travelers: 5,
      date: "2022/5/28",
      duration: 20,
      status: "approved",
      suggestedActivities: [ ]
      },
      {
      id: 8,
      userID: 15,
      destinationID: 8,
      travelers: 6,
      date: "2022/02/07",
      duration: 4,
      status: "approved",
      suggestedActivities: [ ]
      },
      {
      id: 9,
      userID: 7,
      destinationID: 9,
      travelers: 5,
      date: "2022/12/19",
      duration: 19,
      status: "approved",
      suggestedActivities: [ ]
      },
      {
      id: 10,
      userID: 15,
      destinationID: 10,
      travelers: 6,
      date: "2022/07/23",
      duration: 17,
      status: "approved",
      suggestedActivities: [ ]
      }
    ]
    const trips = sampleTrips.map(trip => new Trip(trip))
    sampleTripsRepo = new Trips(trips)
  })
  
    it('should be a function', function() {
      expect(Traveler).to.be.a('function')
    })
  
    it('should be an instantiation of Traveler', () => {
      expect(traveler1).to.be.an.instanceOf(Traveler);
      expect(traveler2).to.be.an.instanceOf(Traveler);
    });

    it('should have an id, name, and traveler type', () => {
      expect(traveler1.id).to.equal(7);
      expect(traveler1.name).to.equal('Emmet Sandham');
      expect(traveler1.travelerType).to.equal('relaxer');
      expect(traveler2.id).to.equal(15);
      expect(traveler2.name).to.equal('Emeline Winslet');
      expect(traveler2.travelerType).to.equal('history buff');
    });

    it('should be able to store trips- past, present, and pending', () => {
      expect(traveler1.pastTrips).to.deep.equal([])
      expect(traveler1.upcomingTrips).to.deep.equal([])
      expect(traveler1.pendingTrips).to.deep.equal([])
    })

    it('should be able to store todays date', () => {
        expect(traveler1.todaysDate).to.equal(date)
    })

    it('should greet a user by their first name', () => {
      expect(traveler1.greetUser()).to.equal(`Welcome back Emmet! The World Awaits You!`)
      expect(traveler2.greetUser()).to.equal(`Welcome back Emeline! The World Awaits You!`)
    })

    it('should get the users past trips', () => {
      traveler1.getPastTrips(sampleTripsRepo.trips, sampleDestinations.allDestinations)
      expect(traveler1.pastTrips).to.deep.equal(
        [
         {
          id: 1,
          userID: 7,
          destinationID: 1,
          travelers: 1,
          date: '2022/09/16',
          duration: 8,
          status: 'approved',
          suggestedActivities: [],
          destination: {
            id: 1,
            destination: 'Lima, Peru',
            estimatedLodgingCostPerDay: 70,
            estimatedFlightCostPerPerson: 400,
            image: 'https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
            alt: 'overview of city buildings with a clear sky'
          }
        },
         {
          id: 3,
          userID: 7,
          destinationID: 3,
          travelers: 4,
          date: '2022/05/22',
          duration: 17,
          status: 'approved',
          suggestedActivities: [],
          destination: {
            id: 3,
            destination: 'Sydney, Austrailia',
            estimatedLodgingCostPerDay: 130,
            estimatedFlightCostPerPerson: 950,
            image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            alt: 'opera house and city buildings on the water with boats'
          }
        },
         {
          id: 5,
          userID: 7,
          destinationID: 5,
          travelers: 3,
          date: '2022/04/30',
          duration: 18,
          status: 'approved',
          suggestedActivities: [],
          destination: {
            id: 5,
            destination: 'Madrid, Spain',
            estimatedLodgingCostPerDay: 150,
            estimatedFlightCostPerPerson: 650,
            image: 'https://images.unsplash.com/photo-1543785734-4b6e564642f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            alt: 'city with clear skys and a road in the day time'
          }
        },
         {
          id: 7,
          userID: 7,
          destinationID: 7,
          travelers: 5,
          date: '2022/5/28',
          duration: 20,
          status: 'approved',
          suggestedActivities: [],
          destination: {
            id: 7,
            destination: 'Paris, France',
            estimatedLodgingCostPerDay: 100,
            estimatedFlightCostPerPerson: 395,
            image: 'https://images.unsplash.com/photo-1524396309943-e03f5249f002?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
            alt: 'city during the day time with eiffel tower'
          }
        }
      ])
    })

    it('should get the users upcoming trips', () => {
      traveler1.getUpcomingTrips(sampleTripsRepo.trips, sampleDestinations.allDestinations)
      console.log(traveler1.upcomingTrips)
      expect(traveler1.upcomingTrips).to.deep.equal(
        [
         {
          id: 9,
          userID: 7,
          destinationID: 9,
          travelers: 5,
          date: '2022/12/19',
          duration: 19,
          status: 'approved',
          suggestedActivities: [],
          destination: {
            id: 9,
            destination: 'Amsterdam, Netherlands',
            estimatedLodgingCostPerDay: 100,
            estimatedFlightCostPerPerson: 950,
            image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            alt: 'canal with boats and trees and buildings along the side'
          }
        }
      ])
    })

    it('should get the users pending trips', () => {
      traveler1.getPendingTrips(sampleTripsRepo.trips, sampleDestinations.allDestinations)
      expect(traveler1.pendingTrips).to.deep.equal([])
    })

    it('should get the users annual spending', () => {
      expect(traveler1.getAnnualSpending(sampleTripsRepo.trips, sampleDestinations.allDestinations)).to.equal(`You Have Spent $24469.5 On Travel So Far This Year!`)
    })
  })