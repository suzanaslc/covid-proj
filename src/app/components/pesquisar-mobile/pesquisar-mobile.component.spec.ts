import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarMobileComponent } from './pesquisar-mobile.component';

describe('PesquisarMobileComponent', () => {
  let component: PesquisarMobileComponent;
  let fixture: ComponentFixture<PesquisarMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisarMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisarMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
