import { Component, NgModule, signal } from '@angular/core';
import { Header } from './header/header';
import { Content } from './content/content';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Content, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('about_me');
}
