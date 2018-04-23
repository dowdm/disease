import { Disease } from './../src/disease.js';

describe('Disease', function() {
  let flu = new Disease("flu");

  beforeEach(function() {
    jasmine.clock().install();
    let flu = new Disease("flu");
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
    jasmine.clock().tick(20001);
    expect(flu.name).toEqual("flu");
    expect(flu.infectedNew).toEqual(4);
    expect(flu.infectedSick).toEqual(0);
    expect(flu.infectedTerminal).toEqual(0);
    expect(flu.infectedDead).toEqual(0);
    console.log(flu);
  });
  // it('should get very hungry if the food level drops below zero', function() {
  //   fuzzy.foodLevel = 0;
  //   expect(fuzzy.didYouGetEaten()).toEqual(true);
  // });
  //
  // it('should get very hungry if 10 seconds pass without feeding', function() {
  //   jasmine.clock().tick(10001);
  //   expect(fuzzy.didYouGetEaten()).toEqual(true);
  // });
  //
  // it('should have a food level of ten if it is fed', function() {
  //   jasmine.clock().tick(9001);
  //   fuzzy.feed();
  //   expect(fuzzy.foodLevel).toEqual(10);
  // });
});
