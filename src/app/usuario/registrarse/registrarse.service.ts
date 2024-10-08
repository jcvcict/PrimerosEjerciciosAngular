import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  name: string;
  email: string;
  password: string; // No olvides manejar las contraseñas de forma segura
}

@Injectable({
  providedIn: 'root',
})
export class RegistrarseService {
  private apiUrl = 'http://localhost:3000/usuario/registrase'; // Cambia esto si tu URL es diferente

  constructor(private http: HttpClient) {}

  register(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
}
