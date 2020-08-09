import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

export const DIALOG_SUBMIT = 'submit'
export const DIALOG_CANCEL = 'cancel'

@Component({
  template: `
    <nb-card class="dialog-card">
      <nb-card-header>{{ title }}</nb-card-header>
      <nb-card-body>
        {{ text }}
      </nb-card-body>
      <nb-card-footer>
        <button nbButton status="success" left (click)="submit()">{{submitLabel}}</button>
        <button nbButton status="primary" class="f-right" (click)="cancel()">{{cancelLabel}}</button>
      </nb-card-footer>
    </nb-card>
  `,
  styleUrls: [ './dialog.component.scss' ]
})
export class DialogComponent {
  @Input() title: string
  @Input() text: string
  @Input() cancelLabel: string
  @Input() submitLabel: string

  constructor(protected ref: NbDialogRef<DialogComponent>) {}

  cancel(): void {
    this.ref.close(DIALOG_CANCEL);
  }

  submit(): void {
    this.ref.close(DIALOG_SUBMIT)
  }
}
