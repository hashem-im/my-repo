import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AboutItem {
  name: string;
  title: string;
  department: string;
  location: string;
  email: string
  linkedIn: string;
}


@Injectable({
  providedIn: 'root'
})

export class AboutSVC {
  private http = inject(HttpClient); 
  private aboutUrl = 'aboutParam.json'; 

  getAboutItem(): Observable<any> {
    return this.http.get<any>(this.aboutUrl);
  }
}

