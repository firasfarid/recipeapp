import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Recipe8PageRoutingModule } from './recipe8-routing.module';

import { Recipe8Page } from './recipe8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Recipe8PageRoutingModule
  ],
  declarations: [Recipe8Page]
})
export class Recipe8PageModule {}
