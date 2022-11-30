import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasMobileComponent } from './categorias-mobile.component';

describe('CategoriasMobileComponent', () => {
  let component: CategoriasMobileComponent;
  let fixture: ComponentFixture<CategoriasMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriasMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
