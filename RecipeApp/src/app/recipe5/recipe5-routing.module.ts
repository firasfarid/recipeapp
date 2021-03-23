import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Recipe5Page } from './recipe5.page';

const routes: Routes = [
  {
    path: '',
    component: Recipe5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Recipe5PageRoutingModule {}
