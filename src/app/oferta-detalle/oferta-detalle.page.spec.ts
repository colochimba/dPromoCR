import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaDetallePage } from './oferta-detalle.page';

describe('OfertaDetallePage', () => {
  let component: OfertaDetallePage;
  let fixture: ComponentFixture<OfertaDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertaDetallePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
