import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDasboardComponent } from './views/client-dasboard/client-dasboard.component';
import {LoginComponent} from './views/login/login.component' ;
import { ManagerDasboardComponent } from './views/manager-dasboard/manager-dasboard.component';

const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path: 'client-dashboard', component:ClientDasboardComponent},
  {path: 'manager-dashboard', component:ManagerDasboardComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,ClientDasboardComponent,ManagerDasboardComponent]
