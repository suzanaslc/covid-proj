import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPostsComponent } from './listar-posts.component';

describe('ListarPostsComponent', () => {
  let component: ListarPostsComponent;
  let fixture: ComponentFixture<ListarPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
