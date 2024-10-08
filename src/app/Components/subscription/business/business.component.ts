import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-business',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './business.component.html',
  styleUrl: './business.component.css'
})
export class BusinessComponent {
  subscriptionPlans = [
    {
      name: 'Free Plan',
      price: '0 $',
      duration: '1 Year',
      features: [
        'Add up to 10 properties',
        '10 images per property',
        'Add contact methods',
        'Manage customer relationships',
        'Dashbord Access',
        'Display Your Page'

      ]
    },
    {
      name: 'Monthly Plan',
      price: '1500 $',
      duration: '1 Year',
      features: [
        'Add up to 150 properties',
        '20 images per property',
        'Add contact methods',
        'Manage customer relationships',
        'Dashboard Access',
        'Display Your Page',
        'Ability To Add 10 Agents',
        'Special Ad for 30 properties',
        'Tecnical Support'
      ]
    },
    {
      name: 'Yearly Plan',
      price: '2500 $',
      duration: '1 Year',
      features: [
        'Add up to 250 properties',
        '25 images per property',
        'Add contact methods',
        'Manage customer relationships',
        'Dashboard Access',
        'Display Your Page',
        'Ability To Add 5 Agents',
        'Special Ad for 40 properties',
        'Technical Support'
      ]
    }
  ];
}
