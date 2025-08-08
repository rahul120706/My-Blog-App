import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../blog.service';
import { blogPayload } from './blog-payload';
import { Blogs } from '../blog/blogs';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.component.html',
  styleUrl: './createblog.component.css'
})

export class CreateblogComponent implements OnInit{  
  blogForm: FormGroup;
  blogs: Blogs[] = [];
  editing = false;
  currentId: string | null = null;
  // _UserId:string| null = null;

  ngOnInit(): void{

      // const blogId = Number(this.route.snapshot.paramMap.get('id'));
      this.authservice.getUserId().subscribe({
        next: (user) =>{
          this.blogservice.getAllBlogById(user._id).subscribe({
          next: (data)=>{this.blogs = data},
          error: (error)=>{ console.log(error)}
        })
      }
    })

      
  }
  
  constructor(private fb: FormBuilder,private blogservice: BlogService,private authservice:AuthService) {

     

    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      excerpt: ['', Validators.required],
      image: ['']
    });
  }

  onSubmit() {
    if (this.blogForm.invalid) return;
    
    if (this.editing && this.currentId !== null) {
      const index = this.blogs.findIndex(b => b._id === this.currentId);
      if (index > -1) {
        const updatedData = {...this.blogForm.value };
        this.blogs[index] = updatedData as Blogs;
        this.blogservice.updateBlog(this.currentId,updatedData).subscribe({
            next: (response) => console.log("Updated the Blod",response)
        })
      }
       this.resetForm()
    } else {

      this.authservice.getUserId().subscribe({
        next: (user)=>{
          const blogPayload: blogPayload = {
          _UserId: user._id as string, 
          ...this.blogForm.value
      };
        console.log("onSubmit called");
        this.blogservice.createBlog(blogPayload).subscribe({
          next: (data)=>{
              console.log('Blog Created', data);
              this.blogs.push(data);
              this.resetForm()
          },
          error: (err)=>{
            console.log('Error Detected',err)
          }
        })
        }           
      })
    }
  }

  editBlog(blog: Blogs) {
    this.blogForm.setValue({
      title: blog.title,
      author: blog.author,
      excerpt: blog.excerpt,
      image: blog.image|| ''
    });
    this.editing = true;
    this.currentId = blog._id;
    console.log(blog._id);
    console.log(this.currentId)
  }

  deleteBlog(id: string) {
    this.blogs = this.blogs.filter(b => b._id !== id);
    this.blogservice.deleteBlog(id).subscribe({
      next: ()=>{
        console.log("Blog Deleted")
      }
    })
  }

  cancelEdit() {
    this.editing = false;
    this.currentId = null;
    this.blogForm.reset();
  } 

  startCreatingBlog(){
    
  }

  resetForm(){
    this.editing = false;
    this.currentId = null;
    this.blogForm.reset({
    title: '',
    author: '',
    excerpt: '',
    image: ''
  });

  this.blogForm.markAsPristine();
  this.blogForm.markAsUntouched();
  this.blogForm.updateValueAndValidity();
  }


  
}
