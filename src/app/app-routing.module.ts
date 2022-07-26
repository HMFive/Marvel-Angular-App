import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharacterListComponent} from "./character-list/character-list.component";
import {AuthComponent} from "./auth/auth.component";
import {AuthGuard} from "./auth/auth.guard";
import {ComicListComponent} from "./comic-list/comic-list.component";
import {CharacterDetailComponent} from "./character-list/character-detail/character-detail.component";
import {ComicDetailComponent} from "./comic-list/comic-detail/comic-detail.component";

const routes: Routes = [

  {path: '', redirectTo: '/character-list', pathMatch: 'full' },
  {path:'character-list', component: CharacterListComponent, canActivate:[AuthGuard]},
  {path:'character-detail', component: CharacterDetailComponent, canActivate:[AuthGuard],children: [
      {path:':id', component: CharacterDetailComponent},
    ] },
  {path:'comic-list', component: ComicListComponent, canActivate:[AuthGuard]},
  {path:'comic-detail', component: ComicDetailComponent, canActivate:[AuthGuard],children: [
      {path:':id', component: ComicDetailComponent},
    ] },
  {path:'auth', component: AuthComponent},
  {path: '**', redirectTo: '/character-list' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
