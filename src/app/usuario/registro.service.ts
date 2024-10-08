import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.schema';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private apiUrl = 'http://localhost:3000/auth'; // Cambia esto si tu URL es diferente


  constructor(private http:HttpClient) {

  }

  public register(user: User) {

    this.http.post<User>(this.apiUrl, user).subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);

      },
      (error) => {
        console.error('Error en la solicitud POST:', error);
      }
    );
  }
}
