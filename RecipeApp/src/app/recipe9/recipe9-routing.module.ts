import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Recipe9Page } from './recipe9.page';

const routes: Routes = [
  {
    path: '',
    component: Recipe9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Recipe9PageRoutingModule {}
