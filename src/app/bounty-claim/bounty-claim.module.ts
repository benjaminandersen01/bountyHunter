import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BountyClaimPageRoutingModule } from './bounty-claim-routing.module';

import { BountyClaimPage } from './bounty-claim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BountyClaimPageRoutingModule
  ],
  declarations: [BountyClaimPage]
})
export class BountyClaimPageModule {}
