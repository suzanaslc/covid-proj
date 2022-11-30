import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbrirPostComponent } from './abrir-post.component';

describe('AbrirPostComponent', () => {
  let component: AbrirPostComponent;
  let fixture: ComponentFixture<AbrirPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbrirPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbrirPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
