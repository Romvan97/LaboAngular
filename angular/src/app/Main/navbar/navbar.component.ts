import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

//!!! installer angularMaterial pour utiliser cet evenement
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
// autocomplete d'angulgar material
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/Models/Movie/movie.model';
import { AvatarModule } from 'primeng/avatar';
import { Output, EventEmitter } from '@angular/core';
import { UserLog } from 'src/app/Models/User/userLog.model';
import { ConnectionService } from 'src/app/services/connection.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss', './styles/styles/navbarnotconnected.component.scss']
})



export class NavbarComponent implements OnInit {

  // liste des films
  moviesForView: Movie[] = [];

  //   items!: MenuItem[];


  //visibilité de la navbar
  @Output()
  navbarVisibleEvent = new EventEmitter<boolean>();

  // Récupération du token pour voir si connecté ou non
  connected: boolean = false;

  // Savoir ce qui a été sélectionner
  isBlur = true;
  isBlurAvatar = true;
  isBlurBurgerMenu = true;

  // On est sur mobile ou pc
  mobile?: boolean;

  // variables pour l'autocompletion
  text?: string;
  result: string[] = []; // suggestions qui vont être retournées
  filmNameList: string[] = []; // Liste des films pour autocompletion

  // utilisateur du localstorage
  localStorageUser!: UserLog;

  //utilisateur connecté
  currentUser!: UserLog;

  constructor(private breakpoint$: BreakpointObserver,
    private _getMoviesService: MovieService,
    private _connectionInfoService: ConnectionService,
  ) {



    // Observe Breakpoint for menu mobile/pc
    this.breakpoint$.observe(["(max-width: 700px)"]).subscribe((result: BreakpointState) => {

      if (result.matches) {
        this.mobile = true;
      }
      else {
        this.mobile = false;
      }

    });

  }




  onBlur() {
    if (!this.isBlurAvatar || !this.isBlurBurgerMenu) {
      this.isBlurAvatar = true;
      this.isBlurBurgerMenu = true;
    }
    this.isBlur = !this.isBlur;
  }


  onBlurAvatar() {
    if (!this.isBlur || !this.isBlurBurgerMenu) {
      this.isBlur = true;
      this.isBlurBurgerMenu = true;
    }
    if (!this.connected) {
      this.isBlurAvatar = false
    }
    this.isBlurAvatar = !this.isBlurAvatar;
  }



  onBlurBurgerMenu() {

    if (!this.isBlur || !this.isBlurAvatar) {
      this.isBlur = true;
      this.isBlurAvatar = true;
    }
    this.isBlurBurgerMenu = !this.isBlurBurgerMenu;
  }


  // Permet de rechercher des suggestions
  search(event) {

    let suggestionsFinales: string[] = [];

    this.filmNameList.forEach(filmName => {

      let filmNameLowerCaser = filmName.toLowerCase();
      if (filmNameLowerCaser.includes(event.query.toLowerCase())) {
        suggestionsFinales.push(filmName);
      }

    });

    if (suggestionsFinales != null) {
      this.result = suggestionsFinales;
    }


  }



  login(value: boolean): void {
    this.navbarVisibleEvent.emit(value);
  }

  logout(): void {

    localStorage.removeItem('currentUser');
    sessionStorage.removeItem('currentUser');

    this.connected = false;
    this.isBlurAvatar = true; // remonte le sous menu si se deco
  }

  ngOnInit(): void {

    this.connected = this._connectionInfoService.isConnected;
    this.currentUser = this._connectionInfoService.User;

    this._getMoviesService.getMovies().subscribe({

      next: m => {
        // Initialisation de la liste de films
        this.moviesForView = m;

        // Initialisation de la liste des suggestions possibles
        this.moviesForView.forEach(element => {
          this.filmNameList.push(element.title)

        });
      }
    })




  }

  // this.items = [
  //   {
  //       label:'File',
  //       id: 'item',
  //       icon:'pi pi-fw pi-file',
  //   items:[
  //       {
  //           label:'New',
  //           icon:'pi pi-fw pi-plus',
  //           items:[
  //           {
  //               label:'Bookmark',
  //               icon:'pi pi-fw pi-bookmark'
  //           },
  //           {
  //               label:'Video',
  //               icon:'pi pi-fw pi-video'
  //           },

  //           ]
  //       },
  //       {
  //           label:'Delete',
  //           icon:'pi pi-fw pi-trash'
  //       },
  //       {
  //           separator:true
  //       },
  //       {
  //           label:'Export',
  //           icon:'pi pi-fw pi-external-link'
  //       }
  //   ]
  //   },
  //   {
  //       label:'Edit',
  //       icon:'pi pi-fw pi-pencil',

  //   items:[
  //       {
  //           label:'Left',
  //           icon:'pi pi-fw pi-align-left'
  //       },
  //       {
  //           label:'Right',
  //           icon:'pi pi-fw pi-align-right'
  //       },
  //       {
  //           label:'Center',
  //           icon:'pi pi-fw pi-align-center'
  //       },
  //       {
  //           label:'Justify',
  //           icon:'pi pi-fw pi-align-justify'
  //       },

  //   ]
  //   },
  //   {
  //       label:'Users',
  //       icon:'pi pi-fw pi-user',
  //   items:[
  //       {
  //           label:'New',
  //           icon:'pi pi-fw pi-user-plus',

  //       },
  //       {
  //           label:'Delete',
  //           icon:'pi pi-fw pi-user-minus',

  //       },
  //       {
  //           label:'Search',
  //           icon:'pi pi-fw pi-users',
  //           items:[
  //           {
  //               label:'Filter',
  //               icon:'pi pi-fw pi-filter',
  //               items:[
  //                   {
  //                       label:'Print',
  //                       icon:'pi pi-fw pi-print'
  //                   }
  //               ]
  //           },
  //           {
  //               icon:'pi pi-fw pi-bars',
  //               label:'List'
  //           }
  //           ]
  //       }
  //   ]
  //   },
  //   {
  //       label:'Events',
  //       icon:'pi pi-fw pi-calendar',
  //   items:[
  //       {
  //           label:'Edit',
  //           icon:'pi pi-fw pi-pencil',
  //           items:[
  //           {
  //               label:'Save',
  //               icon:'pi pi-fw pi-calendar-plus'
  //           },
  //           {
  //               label:'Delete',
  //               icon:'pi pi-fw pi-calendar-minus'
  //           },

  //           ]
  //       },
  //       {
  //           label:'Archieve',
  //           icon:'pi pi-fw pi-calendar-times',
  //           items:[
  //           {
  //               label:'Remove',
  //               icon:'pi pi-fw pi-calendar-minus'
  //           }
  //           ]
  //       }
  //   ]
  //       },

  //   ];
}



