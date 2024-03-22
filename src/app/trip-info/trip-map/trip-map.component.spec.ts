import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripMapComponent } from './trip-map.component';

describe('TripMapComponent', () => {
  let component: TripMapComponent;
  let fixture: ComponentFixture<TripMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TripMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TripMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
