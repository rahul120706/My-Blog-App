import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { BlogService } from '../blog.service';
import { Blogs } from '../blog/blogs';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-blog-history',
  templateUrl: './blog-history.component.html',
  styleUrls: ['./blog-history.component.css']
})
export class BlogHistoryComponent implements OnInit {
  blogs: Blogs[] = [];

  //
  page = 1;
  limit = 5;
  currentPage = 0;
  pageSize = 5;
  totalBlogs = 0;
  sort = 'createdAt';
  order = 'desc';

  columns: string[] = ['title', 'author', 'excerpt', 'createdAt','delete'];
  dataSource: MatTableDataSource<Blogs>;
  searchTerm: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sortHeader!: MatSort;

  constructor(private blogService: BlogService) {
    this.dataSource = new MatTableDataSource<Blogs>([]);
  }

  ngOnInit() {
    this.loadBlog();
  }

  ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sortHeader;
  }

  deleteBlog(blogId: string) {
    this.blogService.deleteBlog(blogId).subscribe({
      next: () => {
        this.blogs = this.blogs.filter(blog => blog._id !== blogId);
      },
      error: err => console.error(err)
    });
  }

  loadBlog(){

    // this function fetcheds data in a paginated way from the server

    //   this.blogService.getPaginatedBlogs(this.page,this.limit).subscribe({
    //   next: (response) => {
    //      this.dataSource.data = response.data;
    //     console.log(response)
    //     this.blogs = response.data;
    //     this.totalBlogs = response.totalBlogs;
    //      this.dataSource.paginator = this.paginator;
    //   },
    //   error: (err) => console.error(err)
    // });

    this.blogService.getAllBlog().subscribe({
    next: (response) => {
      this.blogs = response;
      this.dataSource = new MatTableDataSource(this.blogs);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sortHeader;

      // Filter logic: search title or author
      this.dataSource.filterPredicate = (data: Blogs, filter: string) => {
        const searchText = filter.trim().toLowerCase();
        return (
          data.title.toLowerCase().includes(searchText) ||
          data.author.toLowerCase().includes(searchText)
        );
      };
    },
    error: (err) => console.error(err)
  });
  }

  // For Server Side Searching
  // applyFilter(){
  //   const filterValue = this.searchTerm.trim().toLowerCase();
  //   this.blogs = this.blogs.filter((blog)=>
  //       blog.title.toLowerCase().includes(filterValue) || blog.author.toLowerCase().includes(filterValue) 
  //   )
  // }

  applyFilter() {
    this.dataSource.filter = this.searchTerm.trim().toLowerCase();
  }

  onSortChange(sortState: Sort) {
    this.sort = sortState.active;
    this.order = sortState.direction || 'asc';
    this.loadBlog();
  }

  onPageChange(e: any){
      this.page = e.pageIndex+1;
      this.limit = e.pageSize;
      this.loadBlog()
  }

  //  onSearchChange() {
  //   this.page = 1;           // Server Side OnSearchChange Function
  //   this.loadBlog();
  // }

  onSearchChange() {
  this.applyFilter();
  }
}
