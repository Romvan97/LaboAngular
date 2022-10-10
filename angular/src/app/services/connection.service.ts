import { Injectable } from '@angular/core';
import { User } from '../Models/User/createUserForm.model';
import { UserLog } from '../Models/User/userLog.model';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  private _connected: boolean = false;
  private _currentUser!: UserLog
  constructor() { }



  get isConnected(): boolean {

    let localStorageObject = localStorage.getItem('currentUser');
    let sessionStorageObject = sessionStorage.getItem('currentUser');


    if (localStorageObject != null) {
      this._currentUser = JSON.parse(localStorageObject);
    }
    if (sessionStorageObject != null) {
      this._currentUser = JSON.parse(sessionStorageObject);
    }

    if (this._currentUser != null || this._currentUser != undefined) {
      // d'abord tester si le token est valide en faisant une requete au serveur
      return true;
    }
    return false;
  }


  get User(): UserLog {

    return this._currentUser;

}

}
