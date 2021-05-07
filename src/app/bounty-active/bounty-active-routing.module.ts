import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BountyActivePage } from './bounty-active.page';

const routes: Routes = [
  {
    path: '',
    component: BountyActivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BountyActivePageRoutingModule {}
