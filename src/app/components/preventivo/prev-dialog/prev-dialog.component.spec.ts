import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevDialogComponent } from './prev-dialog.component';

describe('PrevDialogComponent', () => {
  let component: PrevDialogComponent;
  let fixture: ComponentFixture<PrevDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
