import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { RegistroService } from './registro.service';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule




@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule,
  ],
  exports:[
    RegistroComponent
  ],
  providers:[RegistroService]
})
export class UsuarioModule {


}

