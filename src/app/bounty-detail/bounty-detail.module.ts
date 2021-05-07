import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BountyDetailPageRoutingModule } from './bounty-detail-routing.module';

import { BountyDetailPage } from './bounty-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BountyDetailPageRoutingModule
  ],
  declarations: [BountyDetailPage]
})
export class BountyDetailPageModule {}
