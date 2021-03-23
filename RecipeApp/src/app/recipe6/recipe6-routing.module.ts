import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Recipe6Page } from './recipe6.page';

const routes: Routes = [
  {
    path: '',
    component: Recipe6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Recipe6PageRoutingModule {}
