import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventivoComponent } from './preventivo.component';

describe('PreventivoComponent', () => {
  let component: PreventivoComponent;
  let fixture: ComponentFixture<PreventivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreventivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
