import { Disease } from './../src/disease.js';

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
    expect(flu.spreadRate).toEqual(2)
    expect(flu.infectedNew).toEqual(8);
    expect(flu.infectedSick).toEqual(4);
    expect(flu.infectedTerminal).toEqual(4);
    expect(flu.infectedDead).toEqual(0);
  });

  it('should have a dead level of 16 after 2 minutes', function() {
    flu.diseaseSpread();
    flu.spreadRateIncrease();
    jasmine.clock().tick(120001);
    expect(flu.spreadRate).toEqual(3)
    expect(flu.infectedNew).toEqual(12);
    expect(flu.infectedSick).toEqual(8);
    expect(flu.infectedTerminal).toEqual(8);
    expect(flu.infectedDead).toEqual(16);
  });
});
