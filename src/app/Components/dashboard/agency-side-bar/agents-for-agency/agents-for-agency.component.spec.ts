import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsForAgencyComponent } from './agents-for-agency.component';

describe('AgentsForAgencyComponent', () => {
  let component: AgentsForAgencyComponent;
  let fixture: ComponentFixture<AgentsForAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentsForAgencyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentsForAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
