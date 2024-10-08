import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule
import {  HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    RegistrarseComponent
  ],
  imports: [
    CommonModule,HttpClientModule,BrowserModule,ReactiveFormsModule
  ],
  exports:[
    RegistrarseComponent
  ]

})
export class UsuarioModule { }
