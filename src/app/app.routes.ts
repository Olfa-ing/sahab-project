import {RouterModule, Routes} from '@angular/router';
import {OverviewComponent} from './overview/overview/overview.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports/reports.component';
import { PlanningComponent } from './planning/planning/planning.component';
import { RequestsComponent } from './requests/requests/requests.component';
import { StaffComponent } from './staff/staff/staff.component';
import { CentersComponent } from './centers/centers/centers.component';
import { TeamsComponent } from './teams/teams/teams.component';
import {LoginComponent} from './auth/login/login.component';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'planning', component: PlanningComponent },
  { path: 'requests', component: RequestsComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'centers', component: CentersComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
