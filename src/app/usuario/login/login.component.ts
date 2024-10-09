import { Component, inject } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { User } from '../user.schema';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   private loginService = inject(LoginService);

  profileForm = new FormGroup({
    username: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')

  })

  public onSubmit(){
    const user: User = this.profileForm.value as User;

      // Llamar al servicio con el objeto User y suscribirse a la respuesta
      this.loginService.login(user);
      this.profileForm.reset();

  }

}
