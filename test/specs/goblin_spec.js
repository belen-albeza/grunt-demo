'use strict';

/*globals Goblin:false*/

describe('Goblin', function () {
  it('has name', function () {
    var goblin = new Goblin('Dakka');
    expect(goblin.name).toEqual('Dakka');
  });

  it('speaks', function () {
    spyOn(console, 'log');
    var goblin = new Goblin();
    goblin.speak();
    expect(console.log).toHaveBeenCalledWith('Waaagh!');
  });
});
