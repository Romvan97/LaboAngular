import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';


//!!! installer angularMaterial pour utiliser cet evenement
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import{MatRippleModule} from '@angular/material/core'
import{MatRipple} from '@angular/material/core'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})



export class NavbarComponent implements OnInit {

 


  //   items!: MenuItem[];

  isBlur = true;
  isBlurAvatar = true;
  isBlurBurgerMenu = true;
  

  mobile?: boolean;


// reference à la directive matripple
@ViewChild(MatRipple) ripple?: MatRipple;
@ViewChild(MatRipple) ripplea?: MatRipple;


  constructor(private breakpoint$: BreakpointObserver
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
    if(!this.isBlurAvatar || !this.isBlurBurgerMenu){
      this.isBlurAvatar = true;
      this.isBlurBurgerMenu = true;
    }
    this.isBlur = !this.isBlur;
  }


  onBlurAvatar() {
    if(!this.isBlur || !this.isBlurBurgerMenu){
      this.isBlur = true;
      this.isBlurBurgerMenu = true;
    }
    this.isBlurAvatar = !this.isBlurAvatar;
  }



  onBlurBurgerMenu() {
   
    if(!this.isBlur || !this.isBlurAvatar){
      this.isBlur = true;
      this.isBlurAvatar = true;
    }
    this.isBlurBurgerMenu = !this.isBlurBurgerMenu;
  }





  launchRipple(){
  
    const rippleRef = this.ripple?.launch({
    persistent: false,
    centered: true,
    animation: {
      enterDuration: 1000,
      exitDuration: 1000,
    }
    
  });

  // Fade out the ripple later.
  rippleRef?.fadeOut();
 
  
  
}


launchRipplea(){
  this.ripple?.rippleDisabled;
 console.log('yo')
  const rippleRefa = this.ripplea?.launch({
  persistent: false,
  centered: true,
  animation: {
    enterDuration: 1900,
    exitDuration: 1900,
  }
  
});

// Fade out the ripple later.
rippleRefa?.fadeOut();



}
launchRippleb(){
  
  
  const rippleRef = this.ripple?.launch({
  persistent: false,
  centered: true,
  animation: {
    enterDuration: 1900,
    exitDuration: 1900,
  }
  
});

// Fade out the ripple later.
rippleRef?.fadeOut();



}
launchRipplec(){
  
  const rippleRef = this.ripple?.launch({
  persistent: false,
  centered: true,
  animation: {
    enterDuration: 1900,
    exitDuration: 1900,
  }
  
});

// Fade out the ripple later.
rippleRef?.fadeOut();
}



  login(): void { }

  logout(): void { }

  ngOnInit(): void {



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


}


