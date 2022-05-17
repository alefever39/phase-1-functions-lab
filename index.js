function distanceFromHqInBlocks(block) {
    return Math.abs(block - 42);
}

function distanceFromHqInFeet(block) {
    return (Math.abs(block - 42))*264;
}

function distanceTravelledInFeet(block1, block2) {
    return (Math.abs(block1 - block2))*264;
}

function calculatesFarePrice(start, destination) {
    const dis = distanceTravelledInFeet(start, destination);
    let fare;
    if (dis <= 400) {
        fare = 0;
    }
    else if (dis > 400 && dis <= 2000) {
        fare = (dis - 400) * .02;
    }
    else if (dis > 2000 && dis <= 2500) {
        fare = 25;
    }
    else {
        fare = 'cannot travel that far';
    }
    return fare;
}