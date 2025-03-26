import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../interfacess/user.interface';

@Injectable({
  providedIn: 'root',
})
export class FollowersService {
  private apiUrl = 'https://api.github.com/users/';

  constructor(private http: HttpClient) {}

  getFollowers(username: string) {
     return this.http.get(`${this.apiUrl}${username}/followers`)
  };

  getUserDetail(username:string){
    return this.http.get<User>(`${this.apiUrl}${username}`)
  };
 }
