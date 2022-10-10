import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginInfo } from '../Models/User/loginInfo.model';
import { UserLog } from '../Models/User/userLog.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _client: HttpClient) { }


  loginPost(loginToPost: LoginInfo): Observable<UserLog>{
    return this._client.post<UserLog>(`${environment.apiUrl}api/Auth/auth`, loginToPost)
  }

}
