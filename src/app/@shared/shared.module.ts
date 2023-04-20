import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilityModule } from '../@utility/utility.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const EXPORTABLE_MODULE = [
  FormsModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...EXPORTABLE_MODULE,
    UtilityModule
  ],
  exports: [
    ...EXPORTABLE_MODULE,
    UtilityModule
  ]
})
export class SharedModule { }
