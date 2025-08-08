import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blogs } from './blog/blogs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { blogPayload } from './createblog/blog-payload';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http : HttpClient) { }

  getAllBlogById(UserId:string): Observable<Blogs[]>{
        const apiUrl = `http://localhost:3000/api/blogs/${UserId}`;
        return this.http.get<Blogs[]>(apiUrl)
    }

  getAllBlog(): Observable<Blogs[]>{
        const apiUrl = `http://localhost:3000/api/blogs`;
        return this.http.get<Blogs[]>(apiUrl)
    }  

  createBlog(blogpayload: blogPayload) : Observable<Blogs>{
    const apiUrl = 'http://localhost:3000/api/createblog';
    return this.http.post<Blogs>(apiUrl,blogpayload)
  }  

  // This is for Individual blog routes with id like /blog/1,/2,/3
  getBlogbyUserId(id:string): Observable<Blogs>{
    return this.http.get<Blogs>(`http://localhost:3000/api/blogs/${id}`)
  }

  updateBlog(id:string,updateBlog: any) : Observable<Blogs>{
    return this.http.put<Blogs>(`http://localhost:3000/api/blogs/${id}`,updateBlog);
  }
  
  deleteBlog(id:string){
    return this.http.delete(`http://localhost:3000/api/blogs/${id}`)
  }

  getPaginatedBlogs(page:number,limit:number): Observable<any>{
      const apiUrl = 'http://localhost:3000/api/blogs/history';
      const params = new HttpParams()
        .set('page',page)
        .set('limit',limit)
      return this.http.get<any>(apiUrl,{params})
  }

}
