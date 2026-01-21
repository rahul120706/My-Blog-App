import { Component } from '@angular/core';
import { BlogService } from '../blog.service';
import { CommonService } from '../common-shared/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  blogPosts: any;
  subscription: any[] = [];

  constructor(private blogService: BlogService,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.loadBlogs();
  }

  loadBlogs() {
    const blogSubscribtion = this.blogService.getAllBlog().subscribe(res => {
      this.blogPosts = res;
      console.log("Loaded Blogs -> ", this.blogPosts);
    })
    console.log("push Notification", blogSubscribtion)
    this.subscription.push(blogSubscribtion);
  }

  onDestroy() {
    this.commonService.preComponentDestroyTasks(this.subscription);
  }
}
