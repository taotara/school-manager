import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeashboardComponent } from './deashboard/deashboard.component';
import { StaffInformationComponent } from './staff-information/staff-information.component';
import { SponsorInformationComponent } from './sponsor-information/sponsor-information.component';
import { FeesComponent } from './fees/fees.component';
import { InventoryComponent } from './inventory/inventory.component';
import { FleetComponent } from './fleet/fleet.component';
import { FacilityComponent } from './facility/facility.component';
import { SettingsComponent } from './settings/settings.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DeashboardComponent},
  {path: 'staff-info', component: StaffInformationComponent},
  {path: 'sponsor-info', component: SponsorInformationComponent},
  {path: 'fees', component: FeesComponent},
  {path: 'inventory', component: InventoryComponent},
  {path: 'fleet', component: FleetComponent},
  {path: 'facility', component: FacilityComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'message', component: MessageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
