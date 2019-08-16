import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {

  constructor() { }
  CurrentPosition:any[];
  CurrentLocation:string[];
  CurrentTime:string[];
  Source:string;
  Destination:string;
  OnTrack:boolean=false;
  ngOnInit() {
  }
    PassengerLocation:string="";
    BusCurrentLocation:string="Goa";
   

    // static getBusCurrentLocation():string {
    //     return "gets the Current Location";
    // }
    // public  getPassengerLocation=():string=>{
    //     return "gets the Current Location of passenger";
    // }
    // public ShowPathInBetween =()=>{

    //   var BusL =()=> {
    //         return "gets the Current Location";
    
    //     // BusTracking.getPassengerLocation();
    //     // return "gets the Curren tLocation of passenger";
    // }
    // var PassL=()=>{
    //         return "gets the Current Location of passenger";
    //      }
    // }
    //return " "+busL+" * " + passL;

// console.log(BusTracking.getBusCurrentLocation());
// console.log(BusTracking.getPassengerLocation());
  // console.log(showPathInBetween());

  Track(BusNum:string){
    if(BusNum == '12345'){
      this.OnTrack=true;

      this.Source="Secunderabad";
      this.Destination="Goa";

      this.CurrentPosition=[
        {Time:"12:00", Loc:"Secunderabad"},
        {Time:"01:25", Loc:"Hyderabad"},
        {Time:"23:50", Loc:"Belgaum"},
      ];
      // this.CurrentLocation[1]="Secunderabad";
      // this.CurrentLocation[2]="Hyderabad";
      // this.CurrentLocation[3]="Belgaum";
      
      // this.CurrentTime[1]="12:00";
      // this.CurrentTime[2]="01:25";
      // this.CurrentTime[3]="23:50";
      
    }
    if(BusNum == '54321'){
      this.OnTrack=true;
      
      this.Source="Hyderabad";
      this.Destination="Bangalore";

      this.CurrentPosition=[
        {Time:"05:30", Loc:"Hyderabad"},
        {Time:"20:25", Loc:"Kurnool"},
        {Time:"21:55", Loc:"Raichur"},
        {Time:"01:30", Loc:"Mangalore"}
      ];

      // this.CurrentLocation[1]="Hyderabad";
      // this.CurrentLocation[2]="Kurnool";
      // this.CurrentLocation[3]="Raichur";
      // this.CurrentLocation[4]="Mangalore";
      
      // this.CurrentTime[1]="05:30";
      // this.CurrentTime[2]="20:25";
      // this.CurrentTime[3]="21:55";
      // this.CurrentTime[4]="01:30";
    }
  }
  



  

}
