import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routeConfig } from '../helper/route-config.routes';
import { HomeComponent } from '../screen/home/home.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: routeConfig.home, pathMatch: 'full' },
      { path: routeConfig.home, component: HomeComponent },
      { path: routeConfig.cart, component: HomeComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
