import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { RandomGameComponent } from './components/random-game/random-game.component';

const routes: Routes = [
  {path: 'home' , component : HomeComponent, pathMatch: "full"},
  {path: 'product' , component : ProductPageComponent, pathMatch: "full"},
  {path: 'random' , component : RandomGameComponent, pathMatch: "full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
