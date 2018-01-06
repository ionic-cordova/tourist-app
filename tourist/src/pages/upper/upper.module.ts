import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpperPage } from './upper';

@NgModule({
  declarations: [
    UpperPage,
  ],
  imports: [
    IonicPageModule.forChild(UpperPage),
  ],
})
export class UpperPageModule {}
