import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { NavbarService } from './services/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ADN';

// Récupération du token pour voir si connecté ou non
connected: boolean = false;

// navbar visible ou pas
navbarVisibleApp?: boolean ;

  constructor(//private primengConfig: PrimeNGConfig,
  public _navbarService: NavbarService,
  ) {}

    ngOnInit() {

    

      localStorage.getItem('')
      sessionStorage.getItem('')
       // this.primengConfig.ripple = true;
    }


    changeNavbarVisibility(value: boolean){
      this.navbarVisibleApp = value;
      this._navbarService.hide();
    }

}
