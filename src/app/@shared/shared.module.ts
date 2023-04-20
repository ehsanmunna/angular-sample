import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilityModule } from '../@utility/utility.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UtilityModule
  ],
  exports: [
    UtilityModule
  ]
})
export class SharedModule { }
