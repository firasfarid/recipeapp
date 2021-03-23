import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Recipe8Page } from './recipe8.page';

const routes: Routes = [
  {
    path: '',
    component: Recipe8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Recipe8PageRoutingModule {}
