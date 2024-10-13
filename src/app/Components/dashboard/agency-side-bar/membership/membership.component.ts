import { Component, NgModule, OnInit } from '@angular/core';
import { AgencyService } from '../../../../Services/Agency.service';
import { subscriptionsService } from '../../../../Services/Subscription.service';
import { AuthService } from '../../../../Services/auth.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Agency } from '../../../../Types/Agency.type';

@Component({
  selector: 'app-membership',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './membership.component.html',
  styleUrl: './membership.component.css'
})
export class MembershipComponent implements OnInit {
cancelSubscription() {
throw new Error('Method not implemented.');
}

 
  features: string[] = [ // Ensure features is typed as string[]
    'Add contact methods',
    'Manage customer relationships',
    'Dashboard Access',
    'Display Your Page'
  ];
  agencyId?:number ;
  subscription: any;
  constructor(private subservice:subscriptionsService , private Auth : AuthService , http:HttpClient, private agencyservice:AgencyService){

  }

  
  getAgencyAndSubscriptionDetails(agencyId: number) {
    this.subservice.GetAgencyAndSubscription(agencyId).subscribe(
      (subscriptionData) => {
        this.subscription = subscriptionData;
        console.log('Subscription Details:', this.subscription);
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }
  
  ngOnInit(): void { 
      this.agencyId =this.Auth.agencyId; 
   
      console.log(this.Auth.agencyId)
      // console.error('Invalid agency ID');

    this.getAgencyAndSubscriptionDetails(Number(this.agencyId));

  }
 
  
}
