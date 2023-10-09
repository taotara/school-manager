import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';
import 'chartjs-adapter-date-fns';
import { TeacherInformationComponent } from './teachers/teacher-information/teacher-information.component';
import { TabsComponent } from './tabs/tabs.component';
import {
  NgbModule,
  NgbDatepickerModule,
  NgbAlertModule,
} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NewStudentComponent } from './students/new-student/new-student.component';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { DecimalPipe, NgFor } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BodyComponent } from './body/body.component';
import { DeashboardComponent } from './deashboard/deashboard.component';
import { FrontDeskComponent } from './front-desk/front-desk.component';
import { StudentInformationComponent } from './students/student-information/student-information.component';
import { StaffInformationComponent } from './staff/staff-information/staff-information.component';
import { SponsorInformationComponent } from './sponsors/sponsor-information/sponsor-information.component';
import { FeesComponent } from './fees/fees.component';
import { InventoryComponent } from './inventory/inventory.component';
import { FleetComponent } from './fleet/fleet.component';
import { FacilityComponent } from './facility/facility.component';
import { SettingsComponent } from './settings/settings.component';
import { MessageComponent } from './message/message.component';
import { HeaderComponent } from './header/header.component';
import { StudentsListComponent } from './students/students-list/students-list.component';
import { ViewStudentComponent } from './students/view-student/view-student.component';
import { EditStudentComponent } from './students/edit-student/edit-student.component';
import { StudentCategoriesComponent } from './students/student-categories/student-categories.component';
import { StudentFeesComponent } from './students/student-fees/student-fees.component';
import { StudentReportComponent } from './students/student-report/student-report.component';
import { StudentAttendanceComponent } from './students/student-attendance/student-attendance.component';
import { SponsorListComponent } from './sponsors/sponsor-list/sponsor-list.component';
import { ViewSponsorComponent } from './sponsors/view-sponsor/view-sponsor.component';
import { EditSponsorComponent } from './sponsors/edit-sponsor/edit-sponsor.component';
import { LinkStudentComponent } from './sponsors/link-student/link-student.component';
import { NewSponsorComponent } from './sponsors/new-sponsor/new-sponsor.component';
import { LinkSponsorComponent } from './students/link-sponsor/link-sponsor.component';


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
    HeaderComponent,
    TeacherInformationComponent,
    TabsComponent,
    NewStudentComponent,
    ViewStudentComponent,
    EditStudentComponent,
    StudentCategoriesComponent,
    StudentFeesComponent,
    StudentReportComponent,
    StudentAttendanceComponent,
    ViewSponsorComponent,
    EditSponsorComponent,
    LinkStudentComponent,
    NewSponsorComponent,
    LinkSponsorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule,
    CdkMenuModule,
    BrowserAnimationsModule,
    NgChartsModule,
    NgbModule,
    NgbDatepickerModule,
    FormsModule,
    JsonPipe,
    NgbAlertModule,
    StudentsListComponent,
    HttpClientModule,
    DecimalPipe,
    NgFor,
    SponsorListComponent,
    NgSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
