import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginInfo } from 'src/app/Models/User/loginInfo.model';
import { UserLog } from 'src/app/Models/User/userLog.model';
import { LoginService } from 'src/app/services/login.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { login_Form } from './formulaire/login.form';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isValid: boolean = true;
  form: FormGroup;
  userLog!: UserLog;
  logInfo: LoginInfo = {};
rememberMe: boolean = false;

  constructor(
    private _navbarService: NavbarService,
    private _loginService: LoginService,
    builder: FormBuilder
  ) {
    this.form = builder.group(login_Form);
  }

  ngOnInit(): void {

    this._navbarService.hide();

  }


  onLogin(): void {

    if (this.form.valid) {
      this.logInfo.email = this.form.value.loginEmail
      this.logInfo.password = this.form.value.loginPassword
    

      this._loginService.loginPost(this.logInfo).subscribe({
       next: (userInfo) => this.userLog = userInfo,
       error: (error) => alert("un problème est survenu"),
       complete: () => {
        console.log(this.rememberMe)

       }
       });
       
      
     

    }

    else this.isValid = false;
  }


  changeValue(){
    this.rememberMe == false ? this.rememberMe = true : this.rememberMe = false;
    console.log(this.rememberMe)
  }

}
