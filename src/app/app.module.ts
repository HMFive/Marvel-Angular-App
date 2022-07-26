import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { CharacterListComponent } from './character-list/character-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthInterceptorService} from "./auth/auth-interceptor.service";
import { CharacterItemComponent } from './character-list/character-item/character-item.component';
import { ComicListComponent } from './comic-list/comic-list.component';
import { ComicItemComponent } from './comic-list/comic-item/comic-item.component';
import { ComicDetailComponent } from './comic-list/comic-detail/comic-detail.component';
import { CharacterDetailComponent } from './character-list/character-detail/character-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    CharacterListComponent,
    CharacterItemComponent,
    ComicListComponent,
    ComicItemComponent,
    ComicDetailComponent,
    CharacterDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
