function BusTracking()
{
    this.passengerLocation="";
    this.busCurrentLocation="Goa";
   

    this.getBusCurrentLocation= function(){
        return "gets the Current Location";
    }
    this.getPassengerLocation=function(){
        return "gets the Curren tLocation of passenger";
    }
    this.showPathInBetween=function(){
        getBusCurrentLocation();
        getPassengerLocation();
        return "gets the Curren tLocation of passenger";
    }
}

var obj = new Booking();
console.log(obj.getBusCurrentLocation());
console.log(obj.getPassengerLocation());
console.log(obj.showPathInBetween());
