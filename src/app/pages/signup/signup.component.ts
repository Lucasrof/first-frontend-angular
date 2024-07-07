import { LoginService } from './../../services/login.service';
import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { ImputPrimaryComponent } from '../../components/imput-primary/imput-primary.component';
import { Router } from '@angular/router';
import { provideToastr } from 'ngx-toastr';


interface SignupForm{
  name: FormControl,
  email: FormControl,
  password: FormControl,
  passwordConfirm: FormControl
}


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    ImputPrimaryComponent
  ],
  providers:[
    LoginService
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm!: FormGroup<SignupForm>;
  toastService!: any;

  constructor(
    private router: Router,
    private loginService: LoginService
  ){
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  submit(){
    this.loginService.login(this.signupForm.value.email, this.signupForm.value.password).subscribe({
      next: () => this.toastService.success("Login realizar com sucesso!"),
      error: () => this.toastService.console.error("Erro Inesperado! Tente novamente mais tarde")

    })
  }

  navigate(){
    this.router.navigate(["login"])
  }
}
