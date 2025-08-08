import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogHistoryComponent } from './blog-history.component';

describe('BlogHistoryComponent', () => {
  let component: BlogHistoryComponent;
  let fixture: ComponentFixture<BlogHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
