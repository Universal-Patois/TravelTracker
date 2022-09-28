//// Imports ////
import "./css/styles.css";
import {
  fetchAllData,
  postTripApplication,
  fetchSingleTravelerData,
} from "./apiCalls";
import {
  displayAllTrips,
  displayUserGreeting,
  populateDropDownLocations,
  displayAnnualSpending,
  toggleMainPage,
  displayLoginError,
  displayPendingTrips,
  displayUpcomingTrips,
} from "./domManipulation";

import Traveler from "./Traveler";
import Travelers from "./Travelers";
import Trip from "./Trip";
import Trips from "./Trips";
import Destinations from "./Destinations";

//// Query Selectors ////
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginButton");
const tripStartDate = document.getElementById("tripStartDate");
const tripDuration = document.getElementById("tripDuration");
const numberOfTravelers = document.getElementById("numberOfTravelers");
const bookButton = document.getElementById("bookButton");
const estimateButton = document.getElementById("estimateButton");
const tripEstimate = document.getElementById("userMessage");
const logoutButton = document.getElementById("logoutButton");
const travelerPendingTrips = document.getElementById("pendingTrips");
const travelerUpcomingTrips = document.getElementById("upcomingTrips");

//// Global Variables ////
let travelersRepo;
let tripsRepo;
let destinationsRepo;
let tripInfo;
let traveler;
let travelerId;
let todaysDate = new Date().getTime();

//// Functions ////
const loginUser = () => {
  if (
    usernameInput.value.slice(0, 8) === "traveler" &&
    passwordInput.value === "travel"
  ) {
    travelerId = usernameInput.value.slice(8);
    initializeUser();
  } else {
    displayLoginError();
  }
};

const initializeUser = () => {
  fetchSingleTravelerData(travelerId).then((data) => {
    traveler = new Traveler(data, todaysDate);
    initializeData();
    toggleMainPage();
  });
};

const initializeData = () => {
  Promise.all([
    fetchAllData("travelers"),
    fetchAllData("trips"),
    fetchAllData("destinations"),
  ]).then((data) => {
    const trips = data[1].trips.map((trip) => new Trip(trip));
    travelersRepo = new Travelers(data[0].travelers);
    tripsRepo = new Trips(trips);
    destinationsRepo = new Destinations(data[2].destinations);
    displayUserGreeting(traveler.greetUser());
    getTravelerTrips();
    displayAllTrips(traveler);
    populateDropDownLocations(destinationsRepo.allDestinations);
    displayAnnualSpending(
      traveler,
      tripsRepo.trips,
      destinationsRepo.allDestinations
    );
  });
};

const getTravelerTrips = () => {
  traveler.getTrips(tripsRepo.trips, destinationsRepo.allDestinations);
};

const getDestinationId = (location) => {
  const destinationId = destinationsRepo.allDestinations.find(
    (place) => place.destination === location
  );
  return destinationId.id;
};

const sendTripApplication = () => {
  tripInfo = {
    id: Date.now(),
    userID: traveler.id,
    destinationID: getDestinationId(dropDownLocations.value),
    travelers: parseInt(numberOfTravelers.value),
    date: tripStartDate.value.split("-").join("/"),
    duration: parseInt(tripDuration.value),
    status: "pending",
    suggestedActivities: [],
  };
  postTripApplication(tripInfo).then((data) => {
    let newTrip = new Trip(tripInfo);
    newTrip.getDestinationInfo(destinationsRepo.allDestinations);
    traveler.upcomingTrips.push(newTrip);
    traveler.pendingTrips.push(newTrip);
    resetInputs();
  });
};

const clearPending = () => {
  travelerPendingTrips.innerHTML = "";
  travelerUpcomingTrips.innerHTML = "";
  displayUpcomingTrips(traveler);
  displayPendingTrips(traveler);
};
const resetInputs = () => {
  tripStartDate.value = "";
  tripDuration.value = "";
  numberOfTravelers.value = "";
  dropDownLocations.value = "";
  clearPending();
};

const calculateInputTripCost = () => {
  const selectedDestination = dropDownLocations.value;
  const numberOfPeople = numberOfTravelers.value;
  const tripLength = tripDuration.value;
  const destinationFind = destinationsRepo.allDestinations.find(
    (location) => location.destination === selectedDestination
  );
  const flightCost =
    numberOfPeople * destinationFind.estimatedFlightCostPerPerson;
  const lodgingCost = tripLength * destinationFind.estimatedLodgingCostPerDay;
  const tripTotal = lodgingCost + flightCost;
  const totalPlusFee = tripTotal + tripTotal * 0.1;
  return (tripEstimate.innerHTML = `Your Trip Estimate is ${totalPlusFee}`);
};

const logoutUser = () => {
  location.reload();
};

//// Event Listeners ////
loginButton.addEventListener("click", loginUser);
bookButton.addEventListener("click", sendTripApplication);
estimateButton.addEventListener("click", calculateInputTripCost);
logoutButton.addEventListener("click", logoutUser);
