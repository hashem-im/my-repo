import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-content',
  imports: [RouterOutlet, Sidebar],
  templateUrl: './content.html',
  styleUrl: './content.css'
})
export class Content {

}
