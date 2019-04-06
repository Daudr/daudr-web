import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenzeComponent } from './competenze.component';

describe('CompetenzeComponent', () => {
  let component: CompetenzeComponent;
  let fixture: ComponentFixture<CompetenzeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetenzeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
