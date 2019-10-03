import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoMembresiaPage } from './pago-membresia.page';

describe('PagoMembresiaPage', () => {
  let component: PagoMembresiaPage;
  let fixture: ComponentFixture<PagoMembresiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoMembresiaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoMembresiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
