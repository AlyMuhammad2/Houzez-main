import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { PropertyManagementComponent } from "./property-management/property-management.component";
import { RentalProgramComponent } from "./rental-program/rental-program.component";
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PropertyManagementComponent, RentalProgramComponent, RouterLink, RouterModule],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.css'
})
export class ProgramsComponent {

}
