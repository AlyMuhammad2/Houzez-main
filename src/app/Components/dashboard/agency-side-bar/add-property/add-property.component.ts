import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PropertyService } from '../../../../Services/property.service';

@Component({
  selector: 'app-add-property',
  standalone:true,
  imports:[ReactiveFormsModule,CommonModule],
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  
  propertyForm !: FormGroup;
  propertyType!: 'Villa' | 'House' | 'Apartment';
  propertyTypes = ['Villa', 'House', 'Apartment'];
  agentId!: number;
 
  constructor(private fb: FormBuilder, 
    private http: HttpClient,
     private router: Router , 
      private propertyService: PropertyService,  // استخدام الخدمة
) { }

  ngOnInit(): void {
    // Initialize the form
    this.propertyForm = this.fb.group({
      propertyType: ['', Validators.required], // Dropdown selection
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      location: ['', Validators.required],
      isForRent: [false],
      numOfBedroom: [null, Validators.required],
      numOfBathrom: [null, Validators.required],
      numOfCars: [null],
      images: [[], Validators.required],
      primaryImg: ['', Validators.required],
      specificFields: this.fb.group({
        // Dynamic fields for Villa, House or Apartment will go here
      })
    });

    // Get agentId from localStorage or token
   //this.agentId | null= localStorage.getItem('token');  // Make sure it's stored in localStorage

    // React to the change in property type
    this.onPropertyTypeChange();
  }

  onPropertyTypeChange() {
    this.propertyForm.get('propertyType')?.valueChanges.subscribe(selectedType => {
      if (selectedType) {
        this.propertyType = selectedType;
        this.updateFormFieldsForPropertyType(selectedType);
      }
    });
  }

  updateFormFieldsForPropertyType(propertyType: string) {
    const specificFieldsGroup = this.fb.group({});

    switch (propertyType) {
      case 'Villa':
        specificFieldsGroup.addControl('numberOfFloors', this.fb.control('', Validators.required));
        specificFieldsGroup.addControl('hasSwimmingPool', this.fb.control(false));
        specificFieldsGroup.addControl('hasGarden', this.fb.control(false));
        break;

      case 'House':
        specificFieldsGroup.addControl('numberOfRooms', this.fb.control('', Validators.required));
        specificFieldsGroup.addControl('hasGarage', this.fb.control(false));
        specificFieldsGroup.addControl('hasBackyard', this.fb.control(false));
        break;

      case 'Apartment':
        specificFieldsGroup.addControl('floorNumber', this.fb.control('', Validators.required));
        specificFieldsGroup.addControl('hasElevatorAccess', this.fb.control(false));
        break;
    }

    this.propertyForm.setControl('specificFields', specificFieldsGroup);
  }
  onSubmit() {
    if (this.propertyForm.valid) {
      const propertyData = this.propertyForm.value;
      const agentId = localStorage.getItem('agentId'); // الحصول على AgentId من localStorage
      propertyData.agentId = agentId;

      const propertyType = this.propertyForm.get('propertyType')?.value;

      // التحقق من نوع العقار وإرسال الطلب إلى الـ API المناسب
      if (propertyType === 'Villa') {
        this.propertyService.addVilla(propertyData).subscribe(
          response => {
            console.log('Villa added successfully', response);
            this.router.navigate(['/properties']); // إعادة التوجيه بعد النجاح
          },
          error => {
            console.error('Error adding villa', error);
          }
        );
      } else if (propertyType === 'House') {
        this.propertyService.addHouse(propertyData).subscribe(
          response => {
            console.log('House added successfully', response);
            this.router.navigate(['/properties']);
          },
          error => {
            console.error('Error adding house', error);
          }
        );
      } else if (propertyType === 'Apartment') {
        this.propertyService.addApartment(propertyData).subscribe(
          response => {
            console.log('Apartment added successfully', response);
            this.router.navigate(['/properties']);
          },
          error => {
            console.error('Error adding apartment', error);
          }
        );
      }
    }
  }
  onFileChange(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const images: string[] = [];
      for (let i = 0; i < fileList.length; i++) {
        images.push(fileList[i].name); // يمكنك معالجة الملفات أو تحميلها هنا
      }
      this.propertyForm.patchValue({
        images: images
      }); 
    }}
}
