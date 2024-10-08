import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-individuals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './individuals.component.html',
  styleUrl: './individuals.component.css'
})
export class IndividualsComponent {
  subscriptionPlans = [
    {
      name: 'Free Plan',
      price: '0 $',
      duration: '1 Month',
      features: [
        'Add up to 5 properties',
        '8 images per property',
        'Add contact methods',
        'Manage customer relationships',
        'Dashbord Access',
        'Display Your Page'

      ]
    },
    {
      name: 'Monthly Plan',
      price: '500 $',
      duration: '1 Year',
      features: [
        'Add up to 50 properties',
        '15 images per property',
        'Add contact methods',
        'Manage customer relationships',
        'Dashboard Access',
        'Display Your Page',
        'Special Ad for 15 properties'
      ]
    },
    {
      name: 'Yearly Plan',
      price: '1000 $',
      duration: '1 Year',
      features: [
        'Add up to 100 properties',
        '20 images per property',
        'Add contact methods',
        'Manage customer relationships',
        'Dashboard Access',
        'Display Your Page',
        'Special Ad for 20 properties'
      ]
    }
  ];
}
