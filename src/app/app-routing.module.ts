import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoadgamesComponent } from './components/loadgames/loadgames.component';
import { LoginComponent } from './components/login/login.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { RandomGameComponent } from './components/random-game/random-game.component';
import { RegisterComponent } from './components/register/register.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { AuthGuard } from './services/auth.guard';

// canActivate: [AuthGuard]

const routes: Routes = [
  {path: 'home' , component : HomeComponent, pathMatch: "full",canActivate: [AuthGuard]},
  {path: 'product' , component : ProductPageComponent, pathMatch: "full",canActivate: [AuthGuard]},
  {path: 'random' , component : RandomGameComponent, pathMatch: "full",canActivate: [AuthGuard]}, 
  {path: 'list' , component : GamesListComponent, pathMatch: "full",canActivate: [AuthGuard]},
  {path: 'register' , component : RegisterComponent, pathMatch: "full"},
  {path: 'login' , component : LoginComponent, pathMatch: "full"},
  {path: 'loadgames' , component : LoadgamesComponent, pathMatch: "full",canActivate: [AuthGuard]},
  {path: 'gamedetails' , component : GameDetailsComponent, pathMatch: "full",canActivate: [AuthGuard]}, 
  {path: 'adminhome' , component : AdminHomeComponent, pathMatch: "full",canActivate: [AuthGuard]},
  {path: '' , component : LoginComponent, pathMatch: "full",canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
