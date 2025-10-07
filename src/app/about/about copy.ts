import { Component, inject, OnInit } from '@angular/core';
import { AboutItem, AboutSVC } from '../about-svc';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements OnInit{
  
  private aboutSvc = inject(AboutSVC);
  aboutItem: any;

  //his. parseData = JSON.parse(aboutItem);
  /*name = this.aboutItems.filter( i => i.param === 'name');
  title = this.aboutItems.filter( i => i.param === 'title');
  department = this.aboutItems.filter( i => i.param === 'Information Technology');
  location = this.aboutItems.filter( i => i.param === 'Wilmington, NC, USA');
  email = this.aboutItems.filter( i => i.param === 'imad.hashem1@gmail.com');
  linkedIn = this.aboutItems.filter( i => i.param === 'https://www.linkedin.com/in/imad-hashem-30991854');
  */
  
  
  ngOnInit(): void {
    this.aboutSvc.getAboutItem().subscribe(data => {
      this.aboutItem = data;
      })
  }

}
