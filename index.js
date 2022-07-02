// let drivers = (['Antonia', 'Nuru', 'Amari', 'Mo'])
function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2)
}
function returnLastTwoDrivers(drivers){
    return drivers.slice(2,4)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier(number){
    return function(fareMultiplier){
    return number * fareMultiplier
    }
}
function fareDoubler(number){
    const double = createFareMultiplier(2)
    return double(number)
}
function fareTripler(number){
    const triple = createFareMultiplier(3)
    return triple(number)
}
function selectDifferentDrivers(x, driverFunc){ 
    return driverFunc(x)
}