import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: any;
  password?: string | null;

  constructor(private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.name = this.router.snapshot.paramMap.get('name');
    this.password = this.router.snapshot.paramMap.get('password');
    console.log(this.password);
  }

}
