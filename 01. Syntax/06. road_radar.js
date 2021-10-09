function road_radar(speed, zone) {
    const speedLimits = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20,
    }
    let status = '';

    if (speed > speedLimits[zone]){
        let overLimit = speed - speedLimits[zone];

        switch(true){
            case (overLimit <= 20):
                status = 'speeding';
                break;
            case (overLimit <= 40 ):
                status = 'excessive speeding';
                break;
            default:
                status = 'reckless driving';
        }

        console.log(`The speed is ${overLimit} km/h faster than the allowed speed of ${speedLimits[zone]} - ${status}`);

    } else {
        console.log(`Driving ${speed} km/h in a ${speedLimits[zone]} zone`)
    }

}

road_radar(40,'city');
road_radar(21,'residential');
road_radar(120,'interstate');
road_radar(200, 'motorway');