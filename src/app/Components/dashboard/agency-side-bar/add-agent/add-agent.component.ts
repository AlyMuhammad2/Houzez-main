import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgentService } from '../../../../Services/Agent.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../../Services/auth.service';

@Component({
  selector: 'app-add-agent',
  standalone : true ,
  imports : [ ReactiveFormsModule ,RouterModule , CommonModule],
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.css']
})
export class AddAgentComponent {

  addAgentForm: FormGroup;

  constructor(private fb: FormBuilder, private agentService: AgentService,private toastr:ToastrService , private authService : AuthService) {
    this.addAgentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword:['',Validators.required],
      accountType:['' , [Validators.required]]
    },{
      validators: this.passwordMatchValidator // إضافة التحقق من مطابقة كلمة المرور

    }
  );
  }
  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (!password || !confirmPassword) {
      return null; // إذا كان أي منهما غير موجود، لا تقم بأي شيء
    }
    if (password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
    } else {
      confirmPassword.setErrors(null);
    }
    return null;
  }

  onSubmit() {
    if (this.addAgentForm.valid) {
      const newAgent = this.addAgentForm.value;
      const agencyId = Number(this.authService.getUserId(localStorage.getItem("token")));  // استبدل بـ agencyId المناسب
      this.agentService.addAgent(agencyId, newAgent).subscribe({
        next: (response) => {
          this.toastr.success("Create New Agent", "Registration Successful", {
            timeOut: 1000,
            positionClass: 'toast-top-right', // لضبط التوستر على اليمين
            progressBar: true, // شريط التقدم
            closeButton: true, // زر الإغلاق
            toastClass: 'ngx-toastr toast-success', 
          });
          this.addAgentForm.reset();
          console.log('Agent added successfully', response);
        },
        error: (error) => {
          this.toastr.error("Registration failed", "Error", {
            timeOut: 1000,
            positionClass: 'toast-top-right', // لضبط التوستر على اليمين
            progressBar: true, // شريط التقدم
            closeButton: true, // زر الإغلاق
            toastClass: 'ngx-toastr toast-error', // لون خلفية حمراء
          });
          console.error('Error adding agent', error);
        }
      });
    }
  }
}
