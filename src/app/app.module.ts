import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from './app.routes';
import {AuthModule} from './auth/auth.module';
import {CentersModule} from './centers/centers.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {OverviewModule} from './overview/overview.module';
import {PlanningModule} from './planning/planning.module';
import {ReportsModule} from './reports/reports.module';
import {RequestsModule} from './requests/requests.module';
import {SharedModule} from './shared/shared.module';
import {StaffModule} from './staff/staff.module';
import {TeamsModule} from './teams/teams.module';
import {AppComponent} from './app.component';
import {MatSidenav, MatSidenavContainer, MatSidenavContent, MatSidenavModule} from '@angular/material/sidenav';
import {ToolbarModule} from 'primeng/toolbar';
import {SidebarComponent} from './shared/components/sidebar/sidebar.component';
import {TopbarComponent} from './shared/components/topbar/topbar.component';
import {MatToolbar} from '@angular/material/toolbar';
import { provideHttpClient } from '@angular/common/http'; // New import method


@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    MatSidenavContent,
    MatSidenavContainer,
    MatSidenav,
    MatSidenavModule,
    ToolbarModule,
    AppRoutingModule,
    AuthModule,
    CentersModule,
    DashboardModule,
    OverviewModule,
    PlanningModule,
    ReportsModule,
    RequestsModule,
    SharedModule,
    StaffModule,
    TeamsModule,
    SidebarComponent,
    TopbarComponent,
    MatToolbar
  ],providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
