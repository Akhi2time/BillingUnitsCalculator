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