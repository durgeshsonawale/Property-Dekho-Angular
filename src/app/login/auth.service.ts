import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api:string="http://localhost:8081/user/validate"
  api1:string="http://localhost:8081/user/restricted"
  isLogin:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  isLogin$=this.isLogin.asObservable();
  getIsLogin(){
    return this.isLogin.getValue();
  }
  setIsLogin(value:any){
    return this.isLogin.next(value);
  }

  constructor(private http:HttpClient) { }

  validateUser(user:any){
    return this.http.post(this.api,user)

  }
  getAll(){
    return this.http.get(this.api1)
  }
}
