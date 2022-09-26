// An example of how you tell webpack to use an image (also need to link to it in the index.html)

//// Imports ////
// import "src/images/blue-map-with-borders-.png"
import "./css/styles.css";
import { fetchAllData, postTripApplication, fetchSingleTravelerData } from "./apiCalls";
import {
  displayPendingTrips, displayAllTrips, displayUserGreeting, populateDropDownLocations, displayAnnualSpending, toggleMainPage, displayLoginError
} from "./domManipulation";

import Traveler from "./Traveler";
import Travelers from "./Travelers";
import Trip from "./Trip";
import Trips from "./Trips";
import Destinations from "./Destinations";

//// Query Selectors ////
const usernameInput = document.getElementById("username")
const passwordInput = document.getElementById("password")
const loginButton = document.getElementById("loginButton")
const tripStartDate = document.getElementById("tripStartDate")
const tripDuration = document.getElementById("tripDuration")
const numberOfTravelers = document.getElementById("numberOfTravelers")
const bookButton = document.getElementById("bookButton")
const estimateButton = document.getElementById("estimateButton")
const logoutButton = document.getElementById("logoutButton")

//// Global Variables ////
let travelersRepo;
let tripsRepo;
let destinationsRepo;
let tripInfo
let traveler;
let travelerId
let todaysDate = new Date().getTime();

//// Functions ////
const loginUser = () => {
  if (usernameInput.value.slice(0, 8) === 'traveler' && passwordInput.value === 'travel') {
    travelerId = usernameInput.value.slice(8)
    initializeUser()
  } else {
    displayLoginError()
  }
}

const initializeUser = () => {
  fetchSingleTravelerData(travelerId).then((data) => {
    traveler = new Traveler(data, todaysDate)
    initializeData()
    toggleMainPage()
  })
}

const initializeData = () => {
  Promise.all([
    fetchAllData("travelers"),
    fetchAllData("trips"),
    fetchAllData("destinations"),
  ]).then((data) => {
    const trips = data[1].trips.map(trip => new Trip(trip))
    travelersRepo = new Travelers(data[0].travelers);
    tripsRepo = new Trips(trips);
    destinationsRepo = new Destinations(data[2].destinations);
    displayUserGreeting(traveler.greetUser())
    getTravelerTrips()
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

// const getDestinationLodgingCost = (location) => {
//   const destination = destinationsRepo.allDestinations.find(place => place.destination === location)
//   return destination.estimatedLodgingCostPerDay
// }

// const getDestinationFlightCost = (location) => {
//   const destination = destinationsRepo.allDestinations.find(place => place.destination === location)
//   return destination.estimatedFlightCostPerPerson
// }

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
  // displayPendingTrips(traveler)
}

// const calculateInputTripCost = () => {
//   const lodgingCost = parseInt(tripDuration.value) * getDestinationFlightCost(dropDownLocations.value)
//   const flightCost = parseInt(numberOfTravelers.value) * getDestinationLodgingCost(dropDownLocations.value)
//   const tripTotal = lodgingCost + flightCost
//   const totalPlusFee = tripTotal + (tripTotal * .10)
//   console.log(calculateInputTripCost())
//   return totalPlusFee
// }

const logoutUser = () => {
  location.reload()
}

//// Event Listeners ////
loginButton.addEventListener("click", loginUser)
bookButton.addEventListener("click", sendTripApplication)
// estimateButton.addEventListener("click", calculateInputTripCost)
logoutButton.addEventListener("click", logoutUser)
