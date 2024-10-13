import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PropertyService } from '../../../../Services/property.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ApartmentRequestDto } from '../../../../Types/ApartmentRequestDto';
import { AuthService } from '../../../../Services/auth.service';
import { HouseRequestDTO } from '../../../../Types/HouseRequestDTO';
import { VillaRequestDTO} from '../../../../Types/VillaRequestDTO'
@Component({
  selector: 'app-add-property',
  standalone:true,
  imports:[ReactiveFormsModule, CommonModule , FormsModule],
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  propertyForm: FormGroup;
  propertyTypes: string[] = ['Villa', 'Apartment', 'House'];
  selectedFile: File | null = null;
  selectedPropertyType: string = ''; // القيمة الافتراضية


  constructor(
    private fb: FormBuilder,
    private propertyService: PropertyService,
    private http: HttpClient,
    private auth:AuthService
  ) {
    this.propertyForm = this.fb.group({
      // propertyType: ['', Validators.required],
      // title: ['', Validators.required],
      // description: ['', Validators.required],
      // price: ['', [Validators.required, Validators.min(0)]],
      // location: ['', Validators.required]
    });
  }
  
  apartment: ApartmentRequestDto = {
    title: '',
    description: '',
    price: 0,
    location: '',
    Area : 0,
    isForRent: false,
    numOfBedroom: 0,
    numOfBathrom: 0,
    numOfCars: 0,
    createdDate: new Date(),
    isAvailable: true,
    primaryImg: '',
    images: [],
    floorNumber: 0,
    hasElevatorAccess: false,
    agencyId:0,
    agentId: 0
  };
  house:HouseRequestDTO = {
    title: '',
    description: '',
    area : 0,
    price: 0,
    location: '',
    createdDate: new Date(),
    isAvailable: false,
    numberOfRooms: 0,
    hasGarage: false,
    hasBackyard: false,
    primaryImg: '',
    images: [],
    agencyId: 0,
    agentId: 0
  };
  villa:VillaRequestDTO = {
    title: '',
    description: '',
    area: 0,
    price: 0,
    location: '',
    createdDate: new Date(),
    isAvailable: false,
    primaryImg: '',
    images: [],
    numberOfFloors: 0,
    hasSwimmingPool: false,
    hasGarden: false,
    agencyId: 0,
    agentId: 0
  };
  addProperty() {
    if(this.selectedPropertyType=="apartment"){
    this.apartment.agencyId=this.auth.agencyId;
    //console.log((this.apartment.agencyId))
    this.apartment.agentId=this.auth.agentId;
    //console.log(this.apartment); // عرض البيانات قبل الإرسال
    
    this.propertyService.addApartment(this.apartment).subscribe(
      (response) => {
        console.log('Apartment added successfully:', response);
      },
      (error) => {
        console.error('Error adding apartment:', error.error);
      }
    );
  }
  else if(this.selectedPropertyType == "house"){
    this.house.agencyId = this.auth.agencyId;
    this.house.agentId=this.auth.agentId;

    this.propertyService.addHouse(this.house).subscribe(
      (response)=>{
        console.log('House Added Successfully :',response)
      },
      (error) => {
        console.error('Error adding apartment:', error.error);
      }
    );
  }
  else{
    this.villa.agencyId = this.auth.agencyId;
    this.villa.agentId=this.auth.agentId;

    this.propertyService.addVilla(this.villa).subscribe(
      (response)=>{
        console.log('Villa Added Successfully :',response)
      },
      (error) => {
        console.error('Error adding apartment:', error.error);
      }
    );
  }
  }

  ngOnInit(): void {}

  onFileChange(event: any) {
    const files = event.target.files;
    this.apartment.images = []; // إعادة تعيين قائمة الصور

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      this.apartment.images.push(file.name); // أضف اسم الملف إلى قائمة الصور
    }
  }
  onSubmit(): void {
    if (this.propertyForm.valid) {
      const formData = new FormData();
      formData.append('propertyType', this.propertyForm.get('propertyType')?.value);
      formData.append('title', this.propertyForm.get('title')?.value);
      formData.append('description', this.propertyForm.get('description')?.value);
      formData.append('price', this.propertyForm.get('price')?.value);
      formData.append('location', this.propertyForm.get('location')?.value);

      if (this.selectedFile) {
        formData.append('image', this.selectedFile, this.selectedFile.name);
      }

      this.propertyService.addProperty(formData).subscribe(
        (response) => {
          console.log('Property added successfully');
        },
        (error) => {
          console.error('Error adding property', error);
        }
      );
    }
  }
}
