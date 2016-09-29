const assert = require('assert')

/////// THIS IS THE CULPRIT ////////////
// I previously used beforeEach outside of the `describe()` block

// beforeEach( function (done) {
//   console.log('do this before');
// });


describe('Debug tests', function (  ) {

  //// HERE IT WORKS FINE /////
  // beforeEach( function (done) {
  //   console.log('do this before');
  // });


  it('passing test 1===1', function (done) {
    assert.equal(1,1)
    done()
  });

  it('intentional fail 1 != 2 ', function (done) {
    assert.equal(1,2)
    done()
  });

});
