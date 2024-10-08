import { Component,OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { IndividualsComponent } from "./individuals/individuals.component";
import { BusinessComponent } from "./business/business.component";
import { subscriptionsService } from "../../Services/Subscription.service";
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription, Subscriptions } from '../../Types/subscription.type';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, IndividualsComponent, BusinessComponent,RouterLink, RouterModule, CommonModule],
  providers:[subscriptionsService],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})
export class SubscriptionComponent implements OnInit {
  // هحتاج اعمل type اسمه property عشان يخزن بيانات العقار زي اللي عملنا قبل كدا ف المحاضره
  Subscriptions: Subscription[] = [];
  property: any;
  features: string[] = [ // Ensure features is typed as string[]
    'Add contact methods',
    'Manage customer relationships',
    'Dashboard Access',
    'Display Your Page'
  ];
  constructor(private subscriptionsService: subscriptionsService, private router:Router,
    private readonly http: HttpClient,private _AuthService: AuthService) {
    
  }
  ngOnInit(): void {
    this.subscriptionsService.GetAllsubscription().subscribe({
      next: (data: Subscription[]) => {
       this.Subscriptions = data; 
      
      console.log(data);
      console.log(this.features);

      },
      error: (err) => { console.log(err) },
    })
  }


  gotopayment(id:number)
  {
    var s:any= this.subscriptionsService.GetsubscriptionById(id);
   localStorage.setItem("subtype",this.Subscriptions[id-2].userType)
   localStorage.setItem("subid",this.Subscriptions[id-2].id.toString())

   if(localStorage.getItem("token")!==null)
   { if(id==2||id==5)
      this.router.navigate(["/dashboard"])
    else
    {
    this.subscriptionsService.OnlinePayment(id)
    
  }
  }
  else
  {
    this.router.navigate(["/register"])
  }
  
  }

}