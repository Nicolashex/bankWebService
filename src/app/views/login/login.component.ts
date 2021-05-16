import { Component, OnInit } from '@angular/core';

import {FormGroup, FormControl, Validators} from '@angular/forms'
import {ApiService} from '../../services/api/api.service'
import { LoginI } from '../../models/login.interface'
import { Router} from '@angular/router'
import {ResponseI} from '../../models/response.interface'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup ({
    userRut: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })
  constructor(private api: ApiService, private router:Router) { }

  ngOnInit(): void {
  }
  onLogin(form: LoginI){
    this.api.loginbyrut(form).subscribe(data =>{
      let dataResponse: ResponseI =data
      if(dataResponse.status=='ok'){
        localStorage.setItem("token",dataResponse.result.token)
        this.router.navigate([])
      }
    })

  }

}
