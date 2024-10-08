import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-agencies',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './agencies.component.html',
  styleUrl: './agencies.component.css'
})
export class AgenciesComponent {

}
