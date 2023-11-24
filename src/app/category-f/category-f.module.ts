import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryFPageRoutingModule } from './category-f-routing.module';

import { CategoryFPage } from './category-f.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryFPageRoutingModule
  ],
  declarations: [CategoryFPage]
})
export class CategoryFPageModule {}
