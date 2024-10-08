
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RegistroService } from '../registro.service';
import { User } from '../user.schema';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  private fb = inject(FormBuilder);
  private registroService = inject(RegistroService);

  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')

  })



  public onSubmit(){
    const user: User = this.profileForm.value as User;

      // Llamar al servicio con el objeto User y suscribirse a la respuesta
      this.registroService.register(user);
      this.profileForm.reset();

  }
/*

  private fb = inject(FormBuilder);
  private registroService = inject(RegistroService);

  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')

  })


  /*En el constructor del Componente tenemos que indicar como parámetros los servicios que vamos a utilizar





  public onSubmit(){
    console.warn("Se intentan registrar");
    console.log(this.profileForm.value.name);

    this.registroService.register(this.profileForm.value.name);
    //this.registroService.register(this.profileForm.value)

  }
*/

}
