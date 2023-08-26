class Explore {
    distance;
    expectedTime;

    constructor(location_a, location_b) {
        this.location_a = this.setLocation(location_a);
        this.location_b = this.setLocation(location_b);
        this.setDistance()
    }

    setLocation(location) {
        // Validate location by checking if provided location is an array of two items;
        if (Array.isArray(location) && location.length == 2) {
            return location;
        } else {
            throw new Error(`The provided location: ${location} is not a valid location`)
        }
    }

    setDistance(){
        this.distance = Math.sqrt((this.location_a[0] - this.location_b[0])**2 + (this.location_a[1] - this.location_b[1])**2)
    }

    setExpectedTime(machine_speed) {
        this.expectedTime = this.distance / machine_speed
    }

    getExpectedTime() {
        return this.expectedTime;
    }

    // fuction takes two parameters: the time taken so far and the machine speed
    // then determine using the provided value to check for obstruction prescence
    obstructionExists(timeTaken,machine_speed) {
        this.validateTime(timeTaken);
        this.setExpectedTime(machine_speed);
        return (timeTaken > this.expectedTime ) ? true : false;
    }

    // function validates time to ensure a positive integer is entered
    validateTime(time){
        if (typeof time == "number" && time <= 0) {
            throw new Error(`The provided time: ${time} is not a valid time. Enter a time in minutes`)
        }
    }

    // function requires two parameters the total time taken so far and the machine speed
    isObstructionPenetrable(timeTaken,machine_speed) {
        // function returns true if obstruction is penetrable and false otherwise
        this.validateTime(timeTaken);
        this.setExpectedTime(machine_speed);
        return (timeTaken - this.expectedTime >= 60) ? false : true;
    }

}


let a = [223,34.2]
let b = [123, 26.2];
let explore = new Explore(a,b)

