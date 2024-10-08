import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { PropertiesService } from '../../Services/properties.service';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { property, properties } from '../../Types/properties.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-administration-capital',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink, RouterModule, CommonModule],
  providers: [PropertiesService],
  templateUrl: './new-administration-capital.component.html',
  styleUrl: './new-administration-capital.component.css'
})
export class NewAdministrationCapitalComponent implements OnInit {
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
