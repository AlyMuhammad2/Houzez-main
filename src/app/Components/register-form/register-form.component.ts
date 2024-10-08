import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { subscriptionsService } from "../../Services/Subscription.service";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
  ],
  templateUrl: 'register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterComponent {

  rgisterForm: FormGroup;

  constructor(private _AuthService: AuthService, private myrout: Router,private toastr:ToastrService,private subscriptionsService: subscriptionsService) {
    this.rgisterForm = new FormGroup({
      name : new FormControl(null, [
        Validators.required,
        Validators.minLength(3)
      ]),
      // email: new FormControl(null, [
      //   Validators.required,
      //   Validators.email
      // ]),
      email : new FormControl(null,[
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)
      ]),
      password : new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
      ]),
      confirmPassword : new FormControl(null, [
        Validators.required
      ]),
      phoneNumber : new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(010|011|012|015)\d{8}$/)
      ]),
      accountType :new FormControl(null, [
        
      ]),
    }, { validators: this.passwordMatchValidator() });
    this.rgisterForm.get('accountType')?.setValue(localStorage.getItem("subtype"));
    console.log(this.rgisterForm.get('accountType')?.value);


  }
  isSubmitted:Boolean=false;

  passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const password = control.get('password')?.value;
      const confirmPassword = control.get('confirmPassword')?.value;
      return password === confirmPassword ? null : { 'mismatch': true };
    };
  }

  getUserTypeValue() {
    return this.rgisterForm.get('accountType')?.value;
  }
  handelRegister() {
    this.isSubmitted=true;
    console.log(this.rgisterForm.get('accountType')?.value);
    if (this.rgisterForm.valid) {
      
      this._AuthService.register(this.rgisterForm.value).subscribe({
        next: (response:any) => {
         this._AuthService.isLoggedIn=true;
            this.rgisterForm.reset();
            this.isSubmitted=false;
            this.toastr.success("Create New"+this.rgisterForm.get("accountType"),"Registeration Successful")
            this._AuthService.storeToken(response.token);

           this.subscriptionsService.OnlinePayment(Number(localStorage.getItem("subid")))
          
        },
        error: (err) => {
          this.toastr.error("Registration failed")
        }
      });
    }
  }
}
