import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { environment } from 'src/environments/environment';
import { Repository } from '../repository';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  user!:User;
  repos!:Repository;
  constructor(private http:HttpClient) { 
    
    this.user = new User("",0,0,0,"","", "");
    this.repos = new Repository("","","","",new Date());
    
  }

  get_user_profile(userName:string){
    interface ApiResponse{
        userName:string;
        login: string;
        url:string
        user_followers:number;
        user_following:number;
        repositories:number;
        avatar_url: string;
    }

    let userUrl = 'https://api.github.com/users/'+userName+'?client_id='+environment.clientId + "&client_secret="+environment.clientSecret;
    let promise = new Promise<void>((resolve,reject) =>{
      this.http.get<ApiResponse>(userUrl).toPromise().then
      (response => {
        this.user = response;

        resolve()
      },
      error=>{
        this.user.userName = `Sorry, no repository associated with ${this.user.userName}...please try another one`;


        reject(error)
        })
      })
      return promise;
    }

    getRepository(userName:string){
      interface ApiResponse{
        repo_name:string;
        repo_language:string;
        repo_url:string;
        repo_info:string;
        created_at:Date
        
      }
      let repoUrl = 'https://api.github.com/users/'+userName+'/repos?order=created&sort=asc?client_id='+environment.clientId + '&client_secret='+environment.clientSecret;
      let promise = new Promise<void>((resolve,reject) =>{
        this.http.get<ApiResponse>(repoUrl).toPromise().then
        (response => {
            this.repos = response;
            console.log(this.repos);
          resolve()
        },
        error=>{
          this.repos.repo_name = "No match"
  
          reject(error)
          })
        })
        return promise;

    }

  }


