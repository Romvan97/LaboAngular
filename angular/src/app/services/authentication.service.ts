import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginInfo } from '../Models/User/loginInfo.model';
import { UserLog } from '../Models/User/userLog.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _client: HttpClient) { }

  

  login(logInfos: LoginInfo): Observable<UserLog>{

    return this._client.post<UserLog>(`${environment.apiUrl}/api/Auth/auth`, logInfos);

  }
 
}
