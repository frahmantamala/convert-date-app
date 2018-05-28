import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './component/home/home.component';
import { ResultComponent } from './component/result/result.component';

const routes: Routes = [{
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  }, {
    path: 'result/:date',
    component: ResultComponent  
  }, {
    path: '**', redirectTo: ''  
}];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgbModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
