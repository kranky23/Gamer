import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { RandomGameComponent } from './components/random-game/random-game.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { LoadgamesComponent } from './components/loadgames/loadgames.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { LoginService } from './services/login.service';
import { AuthGuard } from './services/auth.guard';
import { UserActivityComponent } from './components/user-activity/user-activity.component';
// import { AuthInterceptor } from './services/auth.interceptor';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientTestingModule } from '@angular/common/http/testing';

@NgModule({
  declarations: [
    AppComponent,
    GameDetailsComponent,
    HomeComponent,
    NavbarComponent,
    ProductPageComponent,
    RandomGameComponent,
    GamesListComponent,
    RegisterComponent,
    LoginComponent,
    LoadgamesComponent,
    AdminHomeComponent,
    UserActivityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forRoot([])
  ],
  // , [{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor,multi:true}]
  providers: [LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {

  


 }
