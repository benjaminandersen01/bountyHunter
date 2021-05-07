import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BountyActivePageRoutingModule } from './bounty-active-routing.module';

import { BountyActivePage } from './bounty-active.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BountyActivePageRoutingModule
  ],
  declarations: [BountyActivePage]
})
export class BountyActivePageModule {}
