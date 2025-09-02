// Speed limit checker

const speedLimit = 30; // kph
const currentSpeed = 0; // kph

if (currentSpeed > speedLimit) {
    console.log(`Slow down! You are over the speed limit of ${speedLimit} mph.`);
} else {
    console.log(`You are within the speed limit of ${speedLimit} mph.`);
}