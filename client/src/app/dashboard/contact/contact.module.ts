import { NgModule } from '@angular/core'
import { ContactRoutingModule } from './contact-routing.module'
import { ContactComponent } from './contact.component'
import { ContactService } from './contact.service'
import { NbLayoutModule, NbContextMenuModule, NbUserModule, NbIconModule, NbButtonModule, NbCardModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table'
import { DialogModule } from 'src/app/main/dialog/dialog.module'

@NgModule({
  imports: [
    NbLayoutModule,
    NbContextMenuModule,
    NbUserModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule,
    Ng2SmartTableModule,
    ContactRoutingModule,
    DialogModule
  ],
  declarations: [
    ContactComponent
  ],
  providers: [ ContactService ]
})
export class ContactModule {}
