import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionContactsComponent } from './section-contacts.component';

describe('SectionContactsComponent', () => {
  let component: SectionContactsComponent;
  let fixture: ComponentFixture<SectionContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
