// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import "./images/blue-map-without-borders-.jpeg"
import "./css/styles.css";
import { fetchAllData } from "./apiCalls";
import {
  displayAllTrips, displayUserGreeting, populateDropDownLocations
} from "./domManipulation";
// displayAnnualSpending,
import Traveler from "./Traveler";
import Travelers from "./Travelers";
import Trip from "./Trip";
import Trips from "./Trips";
import Destinations from "./Destinations";

console.log("This is the JavaScript entry file - your code begins here.");

let travelersRepo;
let tripsRepo;
let destinationsRepo;
let trip;
let traveler;
let todaysDate = new Date().getTime();

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
    traveler = new Traveler(data[0].travelers[34], todaysDate);
    displayUserGreeting(traveler.greetUser())
    travelerTrips(traveler, tripsRepo);
    displayAllTrips(traveler)
    // displayAnnualSpending(traveler)
    populateDropDownLocations(destinationsRepo.allDestinations)

    // console.log("local", destinationsRepo.allDestinations)
    // console.log("Traveler", traveler);
    // console.log("Traveler Past", traveler.pastTrips);
    // console.log("Traveler Upcoming", traveler.upcomingTrips);
    // console.log("Traveler Pending", traveler.pendingTrips);
    
  });
};

const travelerTrips = (traveler, tripsRepo) => {
  traveler.getTrips(tripsRepo.trips);
  // traveler.getAnnualSpending(tripsRepo.trips)
};

window.addEventListener("load", pageLoad);
