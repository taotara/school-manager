import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BodyComponent } from './body/body.component';
import { DeashboardComponent } from './deashboard/deashboard.component';
import { FrontDeskComponent } from './front-desk/front-desk.component';
import { StudentInformationComponent } from './student-information/student-information.component';
import { StaffInformationComponent } from './staff-information/staff-information.component';
import { SponsorInformationComponent } from './sponsor-information/sponsor-information.component';
import { FeesComponent } from './fees/fees.component';
import { InventoryComponent } from './inventory/inventory.component';
import { FleetComponent } from './fleet/fleet.component';
import { FacilityComponent } from './facility/facility.component';
import { SettingsComponent } from './settings/settings.component';
import { MessageComponent } from './message/message.component';
import { HeaderComponent } from './header/header.component';

import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    BodyComponent,
    DeashboardComponent,
    FrontDeskComponent,
    StudentInformationComponent,
    StaffInformationComponent,
    SponsorInformationComponent,
    FeesComponent,
    InventoryComponent,
    FleetComponent,
    FacilityComponent,
    SettingsComponent,
    MessageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule,
    CdkMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
