import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EasternPage } from './eastern';

@NgModule({
  declarations: [
    EasternPage,
  ],
  imports: [
    IonicPageModule.forChild(EasternPage),
  ],
})
export class EasternPageModule {}
