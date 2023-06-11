import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { SettingsComponent } from './settings/settings.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatSidenavModule,
  MatListModule
];

@NgModule({
  declarations: [
    HomeComponent,
    SettingsComponent,
    DashboardLayoutComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ...MATERIAL_MODULES,
    SharedModule
  ],
})
export class DashboardModule { }
