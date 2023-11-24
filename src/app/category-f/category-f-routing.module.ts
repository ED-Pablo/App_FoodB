import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryFPage } from './category-f.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryFPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryFPageRoutingModule {}
