import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputNumberComponent } from './component/input-number/input-number.component';

const EXPORTABLE_COMPONENT = [
  InputNumberComponent
];

@NgModule({
  declarations: [
    ...EXPORTABLE_COMPONENT
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...EXPORTABLE_COMPONENT
  ]
})
export class UtilityModule { }
