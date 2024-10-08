import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesForAgencyComponent } from './properties-for-agency.component';

describe('PropertiesForAgencyComponent', () => {
  let component: PropertiesForAgencyComponent;
  let fixture: ComponentFixture<PropertiesForAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertiesForAgencyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertiesForAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
