import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name: any;
  password: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  login(): any {
    console.log(this.name, this.password);
    if (this.name === 'tanvir' && this.password === '123456') {
      this.router.navigate(['home', {name: this.name, password: this.password}]);
    }
  }

}
