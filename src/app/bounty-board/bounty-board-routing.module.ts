import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BountyBoardPage } from './bounty-board.page';

const routes: Routes = [
  {
    path: '',
    component: BountyBoardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BountyBoardPageRoutingModule {}
