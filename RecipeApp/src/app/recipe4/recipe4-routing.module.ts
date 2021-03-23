import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Recipe4Page } from './recipe4.page';

const routes: Routes = [
  {
    path: '',
    component: Recipe4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Recipe4PageRoutingModule {}
