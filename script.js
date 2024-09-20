// Convert minutes to units
function convertMinutesToUnits(minutes) {
    const unitRanges = [8, 22, 37, 52, 67, 82, 97, 112, 127, 142, 157, 172, 187, 202, 217, 232, 247];
    for (let i = 0; i < unitRanges.length; i++) {
        if (minutes < unitRanges[i]) {
            return i;
        }
    }
    return "Invalid input: Exceeds the defined range.";
}

// Convert time (HH:MM) to total minutes
function convertTimeToMinutes(time) {
    const [hours, minutes] = time.split(":").map(Number);
    return (hours * 60) + minutes;
}

// Calculate the difference in units between two times
function calculateUnitsBetweenTimes(startTime, endTime) {
    const startMinutes = convertTimeToMinutes(startTime);
    const endMinutes = convertTimeToMinutes(endTime);
    
    const totalMinutes = endMinutes - startMinutes;
    
    if (totalMinutes < 0) {
        return "End time must be after start time!";
    }
    
    return convertMinutesToUnits(totalMinutes);
}

// Example usage:
let startTime = "09:07";
let endTime = "09:18";
let units = calculateUnitsBetweenTimes(startTime, endTime); // Calculate units between the times
console.log(`Units: ${units}`);