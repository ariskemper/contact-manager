import { NgModule } from '@angular/core'
import { DashboardRoutingModule } from './dashboard-routing.module'
import {
  NbLayoutModule,
  NbUserModule,
  NbMenuModule,
  NbSidebarModule,
  NbMenuService,
  NbCardModule,
} from '@nebular/theme';
import { DashboardComponent } from './dashboard.component'

@NgModule({
  imports: [
    NbLayoutModule,
    NbUserModule,
    NbMenuModule,
    NbSidebarModule,
    NbCardModule,
    DashboardRoutingModule
  ],
  providers: [ NbMenuService ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule {}
