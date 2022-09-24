// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********



// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './css/styles.css';
import { fetchAllData, fetchSingleTravelerData } from './apiCalls'
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
          console.log('data', data)
          destinationsRepo = new Destinations(data[2].destinations)
          // traveler = new Traveler()
        }) 
      }
     
   

        window.addEventListener('load', pageLoad)

