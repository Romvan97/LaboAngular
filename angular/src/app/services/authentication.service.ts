import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginInfo } from '../Models/User/loginInfo.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _client: HttpClient) { }

  // login(logInfos: LoginInfo){
  //   if( logInfos.username == 'pol' && logInfos.password == 'pass' ){
  //     localStorage.setItem('token', logInfos.token);
  //   }
  // }


}
