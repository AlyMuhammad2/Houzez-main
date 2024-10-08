import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgModel } from '@angular/forms';
import { PropertiesService } from '../../Services/properties.service';

@Component({
  selector: 'app-property',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink, RouterModule],
  providers: [PropertiesService],
  templateUrl: './property.component.html',
  styleUrl: './property.component.css'
})
export class PropertyComponent implements OnInit {
  ID = 0;
  property: any;
  constructor(myRoute: ActivatedRoute,private PServ: PropertiesService) {
    this.ID = myRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.PServ.GetPropertyById(this.ID).subscribe({
      next: (data) => {
        this.property = data;
      },
      error: (err) => { console.log(err) }
    })
  }
}
