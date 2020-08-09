import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { AuthRoutingModule } from './auth-routing.module'
import { NbAuthModule } from '@nebular/auth'
import { NbLayoutModule, NbCardModule, NbIconModule } from '@nebular/theme'
import { AuthComponent } from './auth.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    NbLayoutModule,
    NbCardModule,
    NbIconModule,
    NbAuthModule,
  ],
  declarations: [
    AuthComponent
  ],
})
export class AuthModule {}
