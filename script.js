// Convert minutes to units
function convertMinutesToUnits(minutes) {
    if (minutes < 8) {
        return 0; // Minutes less than 8 are 0 units
    } else if (minutes <= 22) {
        return 1;
    } else if (minutes <= 37) {
        return 2;
    } else if (minutes <= 52) {
        return 3;
    } else if (minutes <= 67) {
        return 4;
    } else if (minutes <= 82) {
        return 5;
    } else if (minutes <= 97) {
        return 6;
    } else if (minutes <= 112) {
        return 7;
    } else if (minutes <= 127) {
        return 8;
    } else if (minutes <= 142) {
        return 9;
    } else if (minutes <= 157) {
        return 10;
    } else if (minutes <= 172) {
        return 11;
    } else if (minutes <= 187) {
        return 12;
    } else if (minutes <= 202) {
        return 13;
    } else if (minutes <= 217) {
        return 14;
    } else if (minutes <= 232) {
        return 15;
    } else if (minutes <= 247) {
        return 16;
    } else {
        return "Invalid input: Exceeds the defined range.";
    }
}

// Convert units to minutes
function convertUnitsToMinutes(units) {
    switch(units) {
        case 0: return 0;
        case 1: return 8;
        case 2: return 23;
        case 3: return 38;
        case 4: return 53;
        case 5: return 68;
        case 6: return 83;
        case 7: return 98;
        case 8: return 113;
        case 9: return 128;
        case 10: return 143;
        case 11: return 158;
        case 12: return 173;
        case 13: return 188;
        case 14: return 203;
        case 15: return 218;
        case 16: return 233;
        default: return "Invalid input: Units out of range.";
    }
}

// Convert time (HH:MM) to minutes
function convertTimeToMinutes(time) {
    const [hours, minutes] = time.split(":").map(Number);
    return (hours * 60) + minutes;
}

// Convert minutes to time (HH:MM)
function convertMinutesToTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
}

// Example usage:
let minutes = 130;
let units = convertMinutesToUnits(minutes); // Convert minutes to units
console.log(`Units: ${units}`);

let totalMinutes = convertUnitsToMinutes(4); // Convert units to minutes
console.log(`Minutes: ${totalMinutes}`);

let timeString = "02:15";
let minsFromTime = convertTimeToMinutes(timeString); // Convert time to minutes
console.log(`Minutes from time: ${minsFromTime}`);

let timeFromMins = convertMinutesToTime(145); // Convert minutes to time
console.log(`Time: ${timeFromMins}`);