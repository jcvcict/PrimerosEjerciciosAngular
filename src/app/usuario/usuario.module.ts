import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { RegistroService } from './registro.service';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component'; // Importa ReactiveFormsModule
import { LoginService } from './login.service';




@NgModule({
  declarations: [
    RegistroComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule,
  ],
  exports:[
    RegistroComponent,LoginComponent
  ],
  providers:[RegistroService,LoginService]
})
export class UsuarioModule {


}

