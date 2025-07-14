import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.html',
})
export class LoginComponent {
 private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  loginForm: FormGroup;
  errorMessage = '';

  constructor() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: data => {
          console.log('Login erfolgreich!', data);
          this.router.navigate(['/dashboard']);
        },
        error: err => {
          this.errorMessage = 'Login fehlgeschlagen. Bitte überprüfe deine Anmeldeinformationen.';
          console.error(err);
        }
      });
    }
  }
}
