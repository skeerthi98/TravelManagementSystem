import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router'
import { MainComponent } from './main/main.component';

import { RegisterComponent } from './register/register.component';
import { Tracking } from './tracking/tracking.component';
import { LoginComponent } from './login/login.component';

//if ("path"=="about"){"component":"AboutComponent"}

export const myRouteConfig:Routes =[
  //if no parameters are passed after localhost
  {path:'',redirectTo:'products',pathMatch:'full'} //plese match full path after localhost
  ,{path:"about",component:AboutComponent} //passing parameter to url we use :
  ,{path:"products",component:ProductsComponent},
  {path:"login",component:LoginComponent},
  {path:"**",component:ErrorComponent}]; //any thing not equal to the above ones, we use **

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(myRouteConfig) //forRoot means for top most in the hierarchy.(appmodule.ts)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutesModule { }
