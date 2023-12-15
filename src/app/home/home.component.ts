import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  res=localStorage.getItem('token') || "hiii";
  bool=false
  toggle(){
    if(this.bool){
      this.bool=!this.bool;
      this.res=localStorage.getItem('token')||"hi"
      localStorage.clear();
    }
    else{
      this.bool=!this.bool;
      localStorage.setItem('token',this.res);

    }
  }

}
