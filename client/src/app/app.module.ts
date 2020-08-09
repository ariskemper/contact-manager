import { BrowserModule } from '@angular/platform-browser'
import { NgModule, ErrorHandler } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { JwtInterceptor } from './core/interceptors'
import {
  NbThemeModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbGlobalPosition,
  NbActionsModule,
  NbIconModule
} from '@nebular/theme'
import { NbPasswordAuthStrategy, NbAuthModule, NbAuthJWTToken } from '@nebular/auth'
import { NbEvaIconsModule } from '@nebular/eva-icons'
import { environment } from '../environments/environment'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AuthGuard } from './auth/auth.guard.service'
import { AppErrorHandler } from './core/handlers/error-handler'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NbEvaIconsModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          token: {
            class: NbAuthJWTToken,
            key: 'accessToken',
          },
          baseEndpoint: environment.apiUrl,
          login: {
            endpoint: '/auth/login',
            redirect: {
              success: '/dashboard',
              failure: '/login'
            },
          },
          register: {
            endpoint: '/auth/register',
            redirect: {
              success: '/dashboard',
              failure: '/register'
            },
          },
          logout: {
            endpoint: null
          }
        }),
      ]
    }),
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbActionsModule,
    NbIconModule,
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbToastrModule.forRoot({
      position: 'top-right' as NbGlobalPosition,
      preventDuplicates: true
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: ErrorHandler, useClass: AppErrorHandler },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
