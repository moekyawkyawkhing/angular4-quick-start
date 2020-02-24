import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  email:string;
  phone:string;
  address:Address;
  hobbies:string[];
  hello:any;
  is_edit:boolean = false;
  posts:[];
  
  constructor(private dataservice:DataService) {
    console.log("Constructor run....");  
  }

  clickMe(){
    this.name= "Kyaw Kyaw";
  }

  newHobby(hobby){
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    for(let i=0; i <= this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit(){
    this.is_edit= !this.is_edit;
  }

  ngOnInit(): void {
    this.name= "Mg Mg";
    this.email= "mgmg@gmail.com";
    this.phone= "09232323232";
    this.hobbies= ['football', 'swimming', 'eatting'];
    this.address= {
      street : 'MyintZu',
      road_no : 'No 7'
    }
    this.dataservice.getPosts().subscribe((posts) => {
      this.posts= posts;
    });
  }

}

interface Address{
  street:string;
  road_no:string;
}
