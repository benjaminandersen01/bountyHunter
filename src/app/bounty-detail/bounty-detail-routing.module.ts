import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BountyDetailPage } from './bounty-detail.page';

const routes: Routes = [
  {
    path: ':id',
    component: BountyDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BountyDetailPageRoutingModule {}
