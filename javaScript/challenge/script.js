function statsUntilDoubles(sides, num) {
    var rollArr = [];
    var doubleCount = 0;
    var avgAmmount = 0;
    // var temp;
    for (num; num > 0; num--) {
        var roll = Math.ceil(Math.random() * sides);
        rollArr.push(roll);
    }
    for (var i = 0; i < rollArr.length - 1; i++) {
        avgAmmount = avgAmmount + rollArr[i];
        if (rollArr[i] == rollArr[i + 1]) {
            doubleCount++;
        }
    }
    var minRoll = rollArr[0];
    var maxRoll = rollArr[0];
    for (i = 1; i < rollArr.length; i++) {
        if (rollArr[i] < minRoll) {
            minRoll = rollArr[i];
        }
        if (rollArr[i] > maxRoll) {
            maxRoll = rollArr[i];
        }
    }
    console.log('Average ammount of rolls is ' + avgAmmount / rollArr.length);
    console.log('Ammount of doubles is ' + doubleCount);
    console.log('Min roll is ' + minRoll);
    console.log('Max roll is ' + maxRoll);
    return rollArr;
}
console.log(statsUntilDoubles(20, 10));