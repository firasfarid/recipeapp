import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Recipe4PageRoutingModule } from './recipe4-routing.module';

import { Recipe4Page } from './recipe4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Recipe4PageRoutingModule
  ],
  declarations: [Recipe4Page]
})
export class Recipe4PageModule {}
