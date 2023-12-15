import { Component } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  users:any
  constructor(private service:AuthService){

  }
  ngOnInit(){
    this.service.getAll().subscribe(a=> {this.users=a;console.log(this.users)});
  }

}
