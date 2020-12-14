import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterAnzahlComponent } from './filter-anzahl.component';

describe('FilterAnzahlComponent', () => {
  let component: FilterAnzahlComponent;
  let fixture: ComponentFixture<FilterAnzahlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterAnzahlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterAnzahlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
