import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  public users: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: users => this.users = users,
      error: error => console.error('There was an error loading the users, ', error),
      complete: () => console.log('Users loaded successfully')
    });
  }
  title = 'Bebokowanie na śniadanie';
}
