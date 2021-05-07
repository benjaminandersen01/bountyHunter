import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BountyBoardPageRoutingModule } from './bounty-board-routing.module';

import { BountyBoardPage } from './bounty-board.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BountyBoardPageRoutingModule
  ],
  declarations: [BountyBoardPage]
})
export class BountyBoardPageModule {}
