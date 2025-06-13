function distanceFromHqInBlocks(pickupLocation) {
    // Scuber HQ is on 42nd Street
    //Math.abs() ensures we get a positive number
    return Math.abs(pickupLocation - 42);
}
function distanceFromHqInFeet(pickupLocation) {
    // call the function we just wrote to get blocks
    const blocks = distanceFromHqInBlocks(pickupLocation);
    // each block is 264 feet
    return blocks * 264;
}
function distanceTravelledInFeet(start, destination) {
  // Find how many blocks between start and end
  const blocksTravelled = Math.abs(destination - start);
  // Multiply blocks by 264 to get feet
  return blocksTravelled * 264;
}
function calculatesFarePrice(start, destination) {
  // Get total distance in feet
  const feet = distanceTravelledInFeet(start, destination);

  if (feet <= 400) {
    // First 400 feet are free
    return 0;
  } else if (feet > 400 && feet <= 2000) {
    // 2 cents per foot after 400 feet
    return (feet - 400) * 0.02;
  } else if (feet > 2000 && feet <= 2500) {
    // Flat fare
    return 25;
  } else {
    // Too far to travel
    return 'cannot travel that far';
  }
}
