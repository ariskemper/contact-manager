import { NgModule } from '@angular/core'
import {
  NbDialogModule,
  NbCardModule,
  NbButtonModule
} from '@nebular/theme';
import { DialogComponent } from './dialog.component'

@NgModule({
  imports: [
    NbDialogModule.forRoot(),
    NbButtonModule,
    NbCardModule
  ],
  declarations: [ DialogComponent ],
  entryComponents: [ DialogComponent ]
})
export class DialogModule {}
