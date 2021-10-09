function timeToWalk(steps, footPrint, speedInKm) {
    let stepsNumber = Number(steps);
    let stepsMetersHr = Number(footPrint);
    let studentSpeed = Number(speedInKm);

    let distance = stepsNumber * stepsMetersHr;
    let speed = studentSpeed / 3.6;
    let time = distance / speed;
    let breaks = Math.floor(distance / 500);

    let timeMin = Math.floor(time / 60);
    let timeSec = Math.round(time - (timeMin * 60));
    let timeHr = Math.floor(time / 3600);

    console.log((timeHr < 10 ? "0" : "") + timeHr + ":" + (timeMin + breaks < 10 ? "0" : "") + (timeMin + breaks) + ":" + (timeSec < 10 ? "0" : "") + timeSec);

}



timeToWalk(4000,0.6,5);
timeToWalk(2564,0.7,5.5);