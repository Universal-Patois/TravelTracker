
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './css/styles.css';
import { fetchAllData } from './apiCalls'
import { displayPastTrips, displayUpcomingTrips, displayPendingTrips  } from './domManipulation';
import Traveler from './Traveler';
import Travelers from './Travelers';
import Trip from './Trip';
import Trips from './Trips';
import Destinations from './Destinations';


console.log('This is the JavaScript entry file - your code begins here.');


let travelersRepo
let tripsRepo
let destinationsRepo
let trip
let traveler
let todaysDate = new Date().getTime()

const pageLoad = () => {
    initializeData()
  }

const initializeData = () => {
    Promise.all([
        fetchAllData('travelers'),
        fetchAllData('trips'),
        fetchAllData('destinations'),
        // fetchSingleTravelerData(15)
      ]).then(data => {
          travelersRepo = new Travelers(data[0].travelers)
          tripsRepo = new Trips(data[1].trips)
          destinationsRepo = new Destinations(data[2].destinations)
          traveler = new Traveler(data[0].travelers[6], todaysDate)
          travelerTrips(traveler, tripsRepo)
          displayPastTrips(traveler)
          displayUpcomingTrips(traveler)
          displayPendingTrips(traveler)
          console.log('today', todaysDate)
          console.log('Emmet', traveler)
          console.log('Emmet Past', traveler.pastTrips)
          console.log('Emmet Upcoming', traveler.upcomingTrips)
          console.log('Emmet Pending', traveler.pendingTrips)
        }) 
      }
      
      const travelerTrips = (traveler, tripsRepo) => {
    traveler.getTrips(tripsRepo.trips)
}     
  
        window.addEventListener('load', pageLoad)

