import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { OrderComponent } from './order/order.component';
import { TradesComponent } from './trades/trades.component';


const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'registration', component: RegistrationComponent},
  {path:'buy', component: BuyComponent},
  {path:'sell', component: SellComponent},
  {path:'order', component: OrderComponent},
  {path:'trades', component: TradesComponent},
  {path:'**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
