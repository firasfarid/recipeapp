import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Recipe7Page } from './recipe7.page';

const routes: Routes = [
  {
    path: '',
    component: Recipe7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Recipe7PageRoutingModule {}
