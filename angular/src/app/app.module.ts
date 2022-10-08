import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http'
import { NavbarComponent } from './Main/navbar/navbar.component';
import { HomeComponent } from './Main/home/home.component';
import { Page404Component } from './Main/page404/page404.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } 
    from '@angular/platform-browser/animations';
import {MenubarModule} from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {InputTextModule} from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import{MatRippleModule} from '@angular/material/core';
import { CustomrippleDirective } from './Main/navbar/directives/customripple.directive'
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import {AvatarModule} from 'primeng/avatar';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    Page404Component,
    CustomrippleDirective,


  ],
  imports: [
    BrowserModule,
    RippleModule,
    BrowserAnimationsModule, 
    TabViewModule,
    ButtonModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    MenubarModule,
    InputTextModule,
    MatRippleModule,
    AutoCompleteModule,
    FormsModule,
    AvatarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
