import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'property-dekho';
  isLog!:boolean;
  constructor(public dialog: MatDialog,private authService:AuthService) {}
  ngOnInit(){
    this.authService.isLogin$.subscribe(a=>this.isLog=a);
  }
  logout(){
    this.authService.setIsLogin(false);
    localStorage.clear();
  }

  
}
