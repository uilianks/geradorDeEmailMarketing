import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string) : Observable<boolean> {
    return this.http.get(`http://localhost:3000/users?username=${username}&password=${password}`)
      .map((data: any[]) => {
        return data.length > 0;
      })
  }

}
