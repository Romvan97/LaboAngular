import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  constructor(private _navbarService: NavbarService) {  }

  ngOnInit(): void {
   
    this._navbarService.hide();
    
  }

  

}
