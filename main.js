function dogNames (array) {
  if ( !array ) { return []; }
  return array.map(function (dogObj) {
    return dogObj.name;
  });
}

function dogSize (array, size) {
  var result1 = array.filter(function (dogObj) {
    return dogObj.size === size;
  });
  
  var result2 = result1.map(function (dogObj) {
    return dogObj.name;
  });

  return result2;
}

function bySize (array) {
  // 1. we need an object
  // 2. in that object, the keys are the sizes
  // 3. in that object, the values are arrays
  // 4. in those arrays, are just the names of
  //    the dogs.

  // var obj = {};
  // for ( var i = 0; i < array.length; i++ ) {
  //   var dog = array[i];
  //   obj[dog.size] = [];
  // }

  // return obj;

  return array.reduce(function (obj, dog) {
    //
  }, {});
}

module.exports = {
  dogNames: dogNames,
  dogSize: dogSize,
  bySize: bySize
};