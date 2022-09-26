// An example of how you tell webpack to use an image (also need to link to it in the index.html)

//// Imports ////
// import "src/images/blue-map-with-borders-.png"
import "./css/styles.css";
import { fetchAllData, postTripApplication } from "./apiCalls";
import {
  displayPendingTrips, displayAllTrips, displayUserGreeting, populateDropDownLocations, displayAnnualSpending,
} from "./domManipulation";

import Traveler from "./Traveler";
import Travelers from "./Travelers";
import Trip from "./Trip";
import Trips from "./Trips";
import Destinations from "./Destinations";

//// Query Selectors ////
const tripStartDate = document.getElementById("tripStartDate")
const tripDuration = document.getElementById("tripDuration")
const numberOfTravelers = document.getElementById("numberOfTravelers")
const bookButton = document.getElementById("bookButton")

//// Global Variables ////
let travelersRepo;
let tripsRepo;
let destinationsRepo;
let tripInfo
let traveler;
let todaysDate = new Date().getTime();

//// Functions ////
const pageLoad = () => {
  initializeData();
};

const initializeData = () => {
  Promise.all([
    fetchAllData("travelers"),
    fetchAllData("trips"),
    fetchAllData("destinations"),
    // fetchSingleTravelerData(15)
  ]).then((data) => {
    const trips = data[1].trips.map(trip => new Trip(trip))
    travelersRepo = new Travelers(data[0].travelers);
    tripsRepo = new Trips(trips);
    destinationsRepo = new Destinations(data[2].destinations);
    traveler = new Traveler(data[0].travelers[25], todaysDate);
    displayUserGreeting(traveler.greetUser())
    getTravelerTrips();
    displayAllTrips(traveler)
    populateDropDownLocations(destinationsRepo.allDestinations)
    displayAnnualSpending(traveler, tripsRepo.trips, destinationsRepo.allDestinations)
  });
};

const getTravelerTrips = () => {
  traveler.getTrips(tripsRepo.trips, destinationsRepo.allDestinations);
};

const getDestinationId = (location) => {
  const destinationId = destinationsRepo.allDestinations.find(place => place.destination === location)
  return destinationId.id
}

const sendTripApplication = () => {
   tripInfo = {
    id: Date.now(),
    userID: traveler.id,
    destinationID: getDestinationId(dropDownLocations.value),
    travelers: parseInt(numberOfTravelers.value),
    date: tripStartDate.value.split("-").join("/"),
    duration: parseInt(tripDuration.value),
    status: 'pending',
    suggestedActivities: []
  };
  postTripApplication(tripInfo)
}

// const calculateInputTripCost = (tripInfo) => {
  
//   const lodgingCost = tripInfo.duration * tripInfo.destinationID.
//   const flightCost = tripInfo.travelers *
// }

//// Event Listeners ////
bookButton.addEventListener("click", sendTripApplication)
window.addEventListener("load", pageLoad);
