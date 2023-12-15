import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!:String
  password!:String
  jwtToken!:any
  constructor(private authService:AuthService,private router:Router){

  }
  

  onSubmit(form:any){
    if(form.valid){
      const user=form.value;
      this.authService.validateUser(user).subscribe((a)=>{this.jwtToken=a;localStorage.setItem("token",this.jwtToken.token.token)})
      this.router.navigate(['home'])
      this.authService.setIsLogin(true);
    console.log(this.email)}
    else{
      console.log("error")
    }

  }

}
