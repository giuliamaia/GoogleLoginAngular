import { Component } from '@angular/core';
import { GoogleApiService, UserInfo } from './services/google-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userInfo?: UserInfo;
  constructor(private readonly google: GoogleApiService){
    google.userProfileSubject.subscribe(info => {
      this.userInfo = info;
    })
  }

  isLoggedIn(): boolean {
    return this.google.isLoggedIn();
  }

  logout() {
    this.google.signOut();
  }
}
