import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SozioOkonomieComponent } from './sozio-okonomie.component';

describe('SozioOkonomieComponent', () => {
  let component: SozioOkonomieComponent;
  let fixture: ComponentFixture<SozioOkonomieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SozioOkonomieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SozioOkonomieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
