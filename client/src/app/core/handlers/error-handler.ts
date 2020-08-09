import { ErrorHandler, Inject, Injector, Injectable } from '@angular/core'
import { NbToastrService } from '@nebular/theme'

@Injectable()
export class AppErrorHandler extends ErrorHandler {

  constructor(
    private injector: Injector) {
    super()
  }

  // Need to get ToastrService from injector rather than constructor injection to avoid cyclic dependency error
  private get toastService(): NbToastrService {
    return this.injector.get(NbToastrService)
  }

  public handleError(error: any): void {
    this.toastService.show(
      'An unexpected error has occurred.',
      'Error',
      { status: 'danger'}
    )

    super.handleError(error)
  }
}
