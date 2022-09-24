import chai from "chai";
import { expect } from 'chai';
import Traveler from "../src/Traveler";

describe('Traveler', () => {
  let traveler1
  let traveler2
  let sampleTravelerData
  
  
  beforeEach(() => {
    sampleTravelerData = [
      {
        id: 7,
        name: "Emmet Sandham",
        travelerType: "relaxer"
      },
      {
        id: 15,
        name: "Emeline Winslet",
        travelerType: "history buff"
      },
    ]
    
    traveler1 = new Traveler(sampleTravelerData[0])
    traveler2 = new Traveler(sampleTravelerData[1])
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

    // it('should be able to store trips- past, present, and pending', () => {
    //   expect(traveler1.ps)
    // })
  })