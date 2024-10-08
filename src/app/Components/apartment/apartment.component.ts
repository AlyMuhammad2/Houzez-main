import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { PropertiesService } from '../../Services/properties.service';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { property, properties } from '../../Types/properties.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-apartment',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, RouterLink, RouterModule, CommonModule],
  providers: [PropertiesService],
  templateUrl: './apartment.component.html',
  styleUrl: './apartment.component.css'
})
export class ApartmentComponent implements OnInit {
  Properties: property[] = [];
  property: any;
  constructor(private propertiesService: PropertiesService) {}
  ngOnInit(): void {
    this.propertiesService.GetAllProperties().subscribe({
      next: (data: property[]) => {
        this.Properties = data; // property[]
      },
      error: (err) => { console.log(err) },
    })
  }
}
