import { Component, OnInit } from '@angular/core'
import { ContactService } from './contact.service'
import { Contact } from './contact.model'
import { NbDialogService } from '@nebular/theme'
import { DialogComponent, DIALOG_SUBMIT } from '../../main/dialog/dialog.component'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: [ './contact.component.scss' ],
})
export class ContactComponent implements OnInit {
  public data: Contact[]

  public settings = {
    mode: 'inline',
    actions: {
      position: 'right'
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true
    },
    columns: {
      firstName: {
        title: 'First Name',
        type: 'string',
        sort: true
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
        sort: true
      },
      email: {
        title: 'Email',
        type: 'string',
        sort: true
      },
      phone: {
        title: 'Phone',
        type: 'string',
        sort: true
      },
    }
  }

  constructor(
    private contactService: ContactService,
    private dialogService: NbDialogService
  ) {}

  ngOnInit(): void {
    this.contactService.list().subscribe(data => {
      this.data = data
    })
  }

  onEditConfirm(event): void {
    this.contactService.update(event.newData).subscribe((data) => {
      if (data.id) {
        event.newData['id'] = data.id
      }
      event.confirm.resolve(event.newData)
    })
  }

  onCreateConfirm(event): void {
    this.contactService.create(event.newData).subscribe((data) => {
      if (data.id) {
        event.newData['id'] = data.id
      }
      event.confirm.resolve(event.newData)
    })
  }

  onDeleteConfirm(event): void {
    const dialogRef = this.dialogService.open(DialogComponent, {
      context: {
        title: 'Delete contact',
        text: 'Are you sure you want to delete this contact?',
        cancelLabel: 'No',
        submitLabel: 'Yes'
      }
    })

    dialogRef.onClose.subscribe((item) => {
      if (item === DIALOG_SUBMIT) {
        this.contactService.destroy(event.data.id).subscribe(() => {
          event.confirm.resolve()
        })
      }
    })
  }
}
