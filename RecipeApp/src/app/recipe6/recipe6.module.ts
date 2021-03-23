import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Recipe6PageRoutingModule } from './recipe6-routing.module';

import { Recipe6Page } from './recipe6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Recipe6PageRoutingModule
  ],
  declarations: [Recipe6Page]
})
export class Recipe6PageModule {}
