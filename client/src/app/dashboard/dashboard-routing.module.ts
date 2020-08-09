
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DashboardComponent } from './dashboard.component'
import { AuthGuard } from '../auth/auth.guard.service'

export const DashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [ AuthGuard ],
    children: [
      {
        path: 'contacts',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
      }
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(DashboardRoutes) ],
  exports: [ RouterModule ]
})
export class DashboardRoutingModule {}
