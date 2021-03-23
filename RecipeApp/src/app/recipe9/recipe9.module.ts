import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Recipe9PageRoutingModule } from './recipe9-routing.module';

import { Recipe9Page } from './recipe9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Recipe9PageRoutingModule
  ],
  declarations: [Recipe9Page]
})
export class Recipe9PageModule {}
