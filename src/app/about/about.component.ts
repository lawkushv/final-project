import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about = {
    text: 'About',
   name: 'Lawkush Prasad' ,
   age: '24',
   country: 'India',
   location: 'Pune',
   experience: '1 Years',
   email: 'lawkushv@gmail.com',
   phone: '+919616517144'
  };

  constructor( private config: ConfigService) { }
  ngOnInit() {
    this.about = this.getAbout();
  }
  getAbout() {
    return this.config.getConfig().about;
  }

}
