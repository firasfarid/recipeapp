import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Recipe5PageRoutingModule } from './recipe5-routing.module';

import { Recipe5Page } from './recipe5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Recipe5PageRoutingModule
  ],
  declarations: [Recipe5Page]
})
export class Recipe5PageModule {}
