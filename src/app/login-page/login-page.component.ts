import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  userForm: FormGroup

  constructor(private formBuilder: FormBuilder, 
              private authService: LoginService,
              private router: Router) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      username: '',
      password: ''
    })
  }

  doLogin() {
    const {
      username,
      password
    } = this.userForm.value

    this.authService.login(username, password).subscribe(data => {
      if (data) {
        this.router.navigate(["/dbcliping"]);
      } else {
        alert('Usuário ou senha inválidos!')
      }
    })
  }

}
