import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/add/operator/map';
//http://localhost:3000/users?username=${username}&password=${password}
@Injectable()
export class LoginService {
  constructor(private http: HttpClient) { }
  userAuthenticated: EventEmitter<boolean> = new EventEmitter<boolean>()

  login(username: string, password: string) : Observable<boolean> {    
    return this.http.get(`http://192.168.100.38:3000/users?username=${username}&password=${password}`)
      .map((data: any[]) => {
        const userIsLogged = data.length > 0;       

        this.userAuthenticated.emit(userIsLogged)

        if (userIsLogged) {
          const user = data.pop()
          delete user.password
          localStorage.setItem('user', JSON.stringify(user))
        }

        return userIsLogged;
      })
  }

  isLogged() : boolean {
    const user = localStorage.getItem('user')
    
    if (!user) {
      return false
    }

    return true
  }
  logout() {
    localStorage.removeItem('user')
    this.userAuthenticated.emit(false)
  }

}
