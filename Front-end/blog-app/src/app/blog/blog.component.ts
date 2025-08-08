import { Component } from '@angular/core';
import { Blogs } from './blogs';
import { ApiService } from '../api.service';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
     blogs : Blogs[] = [];

  constructor(private blogservice:BlogService){
      console.log("entered Blog Compoenent");
      // see blogservice
      this.blogservice.getAllBlog().subscribe({
        next: (data) => { 
        this.blogs = data
        console.log(data);
      },
        error: (err) => { console.log("Error Loading Bidu",err)}
      })
  }
}