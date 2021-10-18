import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile-service/profile.service';
import { User } from '../user';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user !: User;
  repos : any;
  constructor(private profileService: ProfileService ) { 
    
  }
  searchRepo(userName:string){
    this.profileService.get_user_profile(userName).then((success)=>{
     this.user = this.profileService.user;
    },
    (error)=>{
      console.log(error)
    });
    this.profileService.getRepository(userName).then((success)=>{
     this.repos = this.profileService.repos;
    },
    (error)=>{
      console.log(error)
    });
  }
  
  ngOnInit(): void {
    this.searchRepo('mugambi645');
  }

}
