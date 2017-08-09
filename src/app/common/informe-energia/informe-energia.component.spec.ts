import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeEnergiaComponent } from './informe-energia.component';

describe('InformeEnergiaComponent', () => {
  let component: InformeEnergiaComponent;
  let fixture: ComponentFixture<InformeEnergiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformeEnergiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeEnergiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
