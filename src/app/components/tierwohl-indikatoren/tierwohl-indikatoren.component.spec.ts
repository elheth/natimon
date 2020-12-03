import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TierwohlIndikatorenComponent } from './tierwohl-indikatoren.component';

describe('TierwohlIndikatorenComponent', () => {
  let component: TierwohlIndikatorenComponent;
  let fixture: ComponentFixture<TierwohlIndikatorenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TierwohlIndikatorenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TierwohlIndikatorenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
