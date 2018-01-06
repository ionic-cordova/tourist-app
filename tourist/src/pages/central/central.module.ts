import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CentralPage } from './central';

@NgModule({
  declarations: [
    CentralPage,
  ],
  imports: [
    IonicPageModule.forChild(CentralPage),
  ],
})
export class CentralPageModule {}
