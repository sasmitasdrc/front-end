import { UserService } from './../../service/user/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData: any = {
    username: '',
    password: ''
  }
  form: FormGroup;
  
  constructor(private _userService: UserService) { }

  ngOnInit() {
  }

  login(){

  this._userService.obtainAccessToken(this.loginData)


  }

  getAccessTokenByRefreshToken(){
    this._userService.obtainAccessTokenFromRefreshToken()
  }

}
