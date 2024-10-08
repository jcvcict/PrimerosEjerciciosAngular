import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrarseService, User } from './registrarse.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrl: './registrarse.component.css'
})
export class RegistrarseComponent {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private RegistrarseService: RegistrarseService) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const user: User = this.registerForm.value;
      this.RegistrarseService.register(user).subscribe(
        (response) => {
          console.log('Usuario Registrado',response);
        },
        (error) => {
          console.error('Error al registrar el usuario',error);
        }
      );

    }
  }

}
