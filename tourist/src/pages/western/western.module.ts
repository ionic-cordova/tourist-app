import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WesternPage } from './western';

@NgModule({
  declarations: [
    WesternPage,
  ],
  imports: [
    IonicPageModule.forChild(WesternPage),
  ],
})
export class WesternPageModule {}
