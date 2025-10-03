import { Component, inject, OnInit } from '@angular/core';
import { AboutSVC } from '../about-svc';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements OnInit{
  
  aboutItem: any;

  private aboutSvc = inject(AboutSVC);
  
  
  ngOnInit(): void {
    this.aboutSvc.getAboutItem().subscribe(data => {
      this.aboutItem = data;

      })
  }

}
