import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blogs } from '../blog/blogs';
import { BlogService } from '../blog.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent {
     blog!: Blogs;

  constructor(private route: ActivatedRoute,private blogservice:BlogService,private location: Location) {}

  ngOnInit() {
    const blogId = this.route.snapshot.paramMap.get('id');

    console.log(blogId)

    // When You Send this service Function it makes the route as _id of the blog which is a mongo Object Id ,
    this.blogservice.getBlogbyUserId(blogId as string).subscribe({
      next: (data)=>{
          this.blog = data;
          console.log(data);
      },
      error: (err)=>{
        console.log('Eroor FOund',err)
      }
    })
    
  }

  goBack(): void {
  this.location.back();
} 
}
