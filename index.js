// Code your solution in this file!
function distanceFromHqInBlocks(value) {
    const headquartersBlock = 42;
    const distance = Math.abs(value - headquartersBlock);
    return distance;
  }
  
  const distance = distanceFromHqInBlocks(43);
  console.log(distance); // Output: 1

  function distanceFromHqInFeet(someValue) {
    const headquartersFeet = 43;
    const distanceInBlocks = distanceFromHqInBlocks(someValue);
    const distanceInFeet = distanceInBlocks * 264; // Assuming each block is 264 feet long
    return distanceInFeet;
  }

  function distanceTravelledInFeet(startBlock, endBlock) {
    const blockSize = 264; // Assuming each block is 264 feet long
    const distanceInBlocks = Math.abs(endBlock - startBlock);
    const distanceInFeet = distanceInBlocks * blockSize;
    return distanceInFeet;
  }
  
  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    let farePrice;
  
    if (distanceInFeet <= 400) {
      farePrice = 0;
    } else if (distanceInFeet <= 2000) {
      farePrice = (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet <= 2500) {
      farePrice = 25;
    } else {
      farePrice = 'cannot travel that far';
    }
  
    return farePrice;
  }

