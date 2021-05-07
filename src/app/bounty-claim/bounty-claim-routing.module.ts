import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BountyClaimPage } from './bounty-claim.page';

const routes: Routes = [
  {
    path: '',
    component: BountyClaimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BountyClaimPageRoutingModule {}
