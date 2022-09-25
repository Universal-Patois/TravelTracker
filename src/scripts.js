// An example of how you tell webpack to use an image (also need to link to it in the index.html)

//// Imports ////
// import "src/images/blue-map-with-borders-.png"
import "./css/styles.css";
import { fetchAllData, postTripApplication } from "./apiCalls";
import {
  displayAllTrips, displayUserGreeting, populateDropDownLocations
} from "./domManipulation";
// displayAnnualSpending,
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
let trip;
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
    travelersRepo = new Travelers(data[0].travelers);
    tripsRepo = new Trips(data[1].trips);
    destinationsRepo = new Destinations(data[2].destinations);
    traveler = new Traveler(data[0].travelers[25], todaysDate);
    displayUserGreeting(traveler.greetUser())
    getTravelerTrips(traveler, tripsRepo);
    displayAllTrips(traveler)
    populateDropDownLocations(destinationsRepo.allDestinations)
    // displayAnnualSpending(traveler)

    // console.log("local", destinationsRepo.allDestinations)
    // console.log("Traveler", traveler);
    // console.log("Traveler Past", traveler.pastTrips);
    // console.log("Traveler Upcoming", traveler.upcomingTrips);
    // console.log("Traveler Pending", traveler.pendingTrips);
    
  });
};

const getTravelerTrips = (traveler, tripsRepo) => {
  traveler.getTrips(tripsRepo.trips);
  // traveler.getAnnualSpending(tripsRepo.trips)
};

const getDestinationId = (location) => {
  const destinationId = destinationsRepo.allDestinations.find(place => place.destination === location)
  return destinationId.id
}

const sendTripApplication = () => {
  const tripInfo = {
    id: Date.now(),
    userID: traveler.id,
    destinationID: getDestinationId(dropDownLocations.value),
    travelers: parseInt(numberOfTravelers.value),
    date: tripStartDate.value.split("-").join("/"),
    duration: parseInt(tripDuration.value),
    status: 'pending',
    suggestedActivities: []
  };
  // console.log(tripInfo)
  postTripApplication(tripInfo)
}

//// Event Listeners ////
bookButton.addEventListener("click", sendTripApplication)
window.addEventListener("load", pageLoad);
