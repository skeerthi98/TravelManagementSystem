<<<<<<< HEAD
function Booking()
{
    this.PassengerDetails={ Name:"Abridge ",Age:15,IdProf:""};
    this.toStation="Goa";
    this.fromStation="Hyd";
    this.onwardDate="09-08-2019";
    this.returnDate = "13-08-2019";
    this.isRoundTrip=false;

    this.availability= function(){
        return "Displays the availability of buses from "+ this.fromStation+" to "+this.toStation+" ("+this.onwardDate+"  to "+this.returnDate+")";
    }
    this.addPassenger=function(){
        return "Add a passenger";
    }
    this.removePassenger=function(){
        return "Removes a passenger";
    }
    this.requestBooking=function(){
        return "Booking the tickets";
    }
    this.cancelBooking=function(){
        return "Cancels booking";
    }
}

var obj = new Booking();
console.log(obj.availability());
console.log(obj.addPassenger());
console.log(obj.removePassenger());
console.log(obj.requestBooking());
=======
function Booking()
{
    this.PassengerDetails={ Name:"Abridge ",Age:15,IdProf:""};
    this.toStation="Goa";
    this.fromStation="Hyd";
    this.onwardDate="09-08-2019";
    this.returnDate = "13-08-2019";
    this.isRoundTrip=false;

    this.availability= function(){
        return "Displays the availability of buses from "+ this.fromStation+" to "+this.toStation+" ("+this.onwardDate+"  to "+this.returnDate+")";
    }
    this.addPassenger=function(){
        return "Add a passenger";
    }
    this.removePassenger=function(){
        return "Removes a passenger";
    }
    this.requestBooking=function(){
        return "Booking the tickets";
    }
    this.cancelBooking=function(){
        return "Cancels booking";
    }
}

var obj = new Booking();
console.log(obj.availability());
console.log(obj.addPassenger());
console.log(obj.removePassenger());
console.log(obj.requestBooking());
>>>>>>> 890006747db75e698e605588d64e75e9fc54bec2
console.log(obj.cancelBooking());