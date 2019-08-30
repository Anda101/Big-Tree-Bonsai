import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeciduousTreePage } from './deciduous-tree.page';

describe('DeciduousTreePage', () => {
  let component: DeciduousTreePage;
  let fixture: ComponentFixture<DeciduousTreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeciduousTreePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeciduousTreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
