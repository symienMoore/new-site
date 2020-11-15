import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsComponent } from './posts.component';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let mockPosts = [
    {
      id: 1,
      title: "my test post",
      desc: "test",
      body: "this is a test",
      category: "networking"
    }
  ]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should return mock posts", (post) => {
    
  })
});
