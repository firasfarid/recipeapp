import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Recipe7PageRoutingModule } from './recipe7-routing.module';

import { Recipe7Page } from './recipe7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Recipe7PageRoutingModule
  ],
  declarations: [Recipe7Page]
})
export class Recipe7PageModule {}
