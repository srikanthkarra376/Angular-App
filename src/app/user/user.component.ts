import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 name : string;
 address:Address;
 hobbies:string[];

  constructor() { }

  ngOnInit() {
    this.name = "srikanth";
    this.address = {
      street:"knr",
      city :"jadbs",
      zip:95545
    }
    this.hobbies = ["watch tv","listening to music","Learning Code"];
    
  }
  changename() {
    this.name = "Your name has changed to karra srikanth";
 
  }
  addhobby(hobby) {
    this.hobbies.unshift(hobby);
      return false;
  }
    deleteHobby(hobby){
     for(let i= 0;i<this.hobbies.length;i++){
      if(this.hobbies[i]== hobby){
     this.hobbies.splice(i,1);
   }
   }  
  }

}

interface Address {
   street : string;
   city:string;
   zip:number;

}