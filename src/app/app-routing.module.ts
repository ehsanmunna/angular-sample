import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'feature',
    loadChildren: () => import('./feature/feature.module').then(e => e.FeatureModule)
  },{
    path: 'auth',
    loadChildren: () => import('./feature/authorizatoin/authorizatoin.module').then(e => e.AuthorizatoinModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
