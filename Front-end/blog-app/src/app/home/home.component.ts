import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    blogPosts = [
  {
    title: '🚀 Getting Started with Angular',
    date: 'July 21, 2025',
    excerpt: 'A quick guide to set up and create your first Angular app.'
  },
  {
    title: '💡 CSS Tips for Clean UI',
    date: 'July 18, 2025',
    excerpt: '5 useful CSS tricks to make your UI modern and responsive.'
  },
  {
    title: '📘 How I Built My First Blog',
    date: 'July 15, 2025',
    excerpt: 'From idea to launch: steps I followed to build this site.'
  }
];
}
