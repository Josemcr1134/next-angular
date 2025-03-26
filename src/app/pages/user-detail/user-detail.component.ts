import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface User {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  followers: number;
  type: string;
  company: string;
  location: string;
  created_at: string;
  bio: string;
  following: number;
  public_repos: number;
}

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  standalone:false
})
export class UserDetailComponent implements OnInit {
  user$!: Observable<User>;
  // Puedes agregar una propiedad para seguidores si lo requieres
  followers: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const username = this.route.snapshot.paramMap.get('username') || 'octocat';
    this.user$ = this.http.get<User>(`https://api.github.com/users/${username}`);

     this.http.get<any[]>(`https://api.github.com/users/${username}/followers`)
       .subscribe(data => this.followers = data);
  }
}