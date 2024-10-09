import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.schema';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:3000/auth/login';

  constructor(private http: HttpClient) { //Al declararlo como privado lo conviertes directamente en un atributo
  }

  public login(user:User){

    /*Función Subscribe: se encarga de manejar los datos recibidos, puedes recibir un error, o data
    */

    this.http.post<User>(this.apiUrl, user).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.error('Error: ', error);
      }
    )
  }
}
