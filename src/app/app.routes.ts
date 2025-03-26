import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    loadChildren:() => import('./pages/user-detail/user-detail.module').then(m => m.UserDetailModule)
  },
  {
    path:'**',
    redirectTo:'',
    pathMatch:'full'
  }
];
