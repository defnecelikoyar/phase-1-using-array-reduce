const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
function batteryCounter(totalAmount, batch) {
    return totalAmount + batch;
}
const firstAttempt = function (arr, reducer, init) {
    let accum = init;
    for (const element of arr) {
        accum = reducer(accum, element);
    };
    return accum;
}

//console.log(totalBatteries(batteryBatches, batteryCounter, 0));

const totalBatteries = [4, 5, 3, 4, 4, 6, 5].reduce(function(accumulator, element){ return element + accumulator;}, 0)


// Create a new variable called totalBatteries, which holds the sum of all of the battery amounts in the batteryBatches array.
//Naturally, you should use reduce() for this!
//const couponLocations = [
//    { room: 'Living room', amount: 5 },
//    { room: 'Master bedroom', amount: 7 }
//  ];

//  function couponCounter(totalAmount, location) {
//    return totalAmount + location.amount;
//  }
//  console.log(ourReduce(couponLocations, couponCounter, 0)); // LOG: 15