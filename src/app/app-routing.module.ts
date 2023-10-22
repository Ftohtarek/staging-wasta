import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { langGuard } from './core/guards/lang.guard';
import { HomeComponent } from './screen/home/home.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'en', pathMatch: 'full'
  },
  {
    path: ':lang',
    canActivate: [langGuard],
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
