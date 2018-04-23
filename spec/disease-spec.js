import { Disease } from './../src/disease.js';
import { Player } from './../src/player.js';

describe('Disease', function() {
  let flu;

  beforeEach(function() {
    jasmine.clock().install();
    flu = new Disease("flu");
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });
  it('should have a name and a newly infected level of 0 upon creation', function() {
    expect(flu.name).toEqual("flu");
    expect(flu.infectedNew).toEqual(0);
    expect(flu.infectedSick).toEqual(0);
    expect(flu.infectedTerminal).toEqual(0);
    expect(flu.infectedDead).toEqual(0);
  });

  it('should have a name and a newly infected level of 4 after 20 seconds', function() {
    flu.diseaseSpread();
    flu.spreadRateIncrease();
    jasmine.clock().tick(20001);
    expect(flu.infectedNew).toEqual(4);
    expect(flu.infectedSick).toEqual(0);
    expect(flu.infectedTerminal).toEqual(0);
    expect(flu.infectedDead).toEqual(0);
  });

  it('should have a name and a newly infected level of 4 after 40 seconds', function() {
    flu.diseaseSpread();
    flu.spreadRateIncrease();
    jasmine.clock().tick(40001);
    expect(flu.infectedNew).toEqual(4);
    expect(flu.infectedSick).toEqual(4);
    expect(flu.infectedTerminal).toEqual(0);
    expect(flu.infectedDead).toEqual(0);
  });

  it('should have a name and a newly infected level of 8 after 60 seconds', function() {
    flu.diseaseSpread();
    flu.spreadRateIncrease();
    jasmine.clock().tick(60001);
    expect(flu.spreadRate).toEqual(2);
    expect(flu.infectedNew).toEqual(8);
    expect(flu.infectedSick).toEqual(4);
    expect(flu.infectedTerminal).toEqual(4);
    expect(flu.infectedDead).toEqual(0);
  });

  it('should have a dead level of 16 after 2 minutes', function() {
    flu.diseaseSpread();
    flu.spreadRateIncrease();
    jasmine.clock().tick(120001);
    expect(flu.spreadRate).toEqual(3);
    expect(flu.infectedNew).toEqual(12);
    expect(flu.infectedSick).toEqual(8);
    expect(flu.infectedTerminal).toEqual(8);
    expect(flu.infectedDead).toEqual(16);
  });
});

describe("Player", function(){
  let player;
  let flu;

  beforeEach(function() {
    jasmine.clock().install();
    player = new Player("Bob", "Doctor");
    flu = new Disease("flu");
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it("should create a new player object with name and role", function(){
    expect(player.name).toEqual("Bob");
    expect(player.role).toEqual("Doctor");
    expect(player.slowSpread).toEqual(0);
    expect(player.knowledge).toEqual(0);
  });

  it('should subtract its slow disease value from disease.', function() {
    flu.diseaseSpread();
    flu.spreadRateIncrease();
    jasmine.clock().tick(40001);
    player.slowDisease(flu);
    expect(flu.infectedNew).toEqual(4);
    expect(flu.infectedSick).toEqual(4);
    expect(flu.infectedTerminal).toEqual(0);
    expect(flu.infectedDead).toEqual(0);
  });

  it('should create a random value for player.slowSpread between 1 and 4', function(){
    player.playerSpin();
    expect(player.slowSpread).toBeGreaterThan(0);
    expect(player.slowSpread).toBeLessThan(5);
  });

  it('should create a random value for player.slowSpread between 1 and 4', function(){
    player.playerSpin();
    player.makeCure(flu);
    expect(flu.cure).toBeGreaterThan(0);
    expect(flu.cure).toBeLessThan(5);
  });

  it('should create a random value for player.slowSpread between 1 and 4', function(){
    player.knowledgeSpin();
    expect(player.knowledge).toBeGreaterThan(0);
    expect(player.knowledge).toBeLessThan(5);
  });


  it('should create a random value for player.knowledge between 1 and 4', function(){
    player.knowledgeSpin();
    flu.diseaseSpread();
    flu.spreadRateIncrease();
    jasmine.clock().tick(60001);
    player.useKnowledge(flu);
    expect(flu.infectedTerminal).toBeGreaterThan(0);
    expect(flu.infectedTerminal).toBeLessThan(5);
    expect(flu.infectedTerminal).toEqual(4-player.knowledge);
  });
});
