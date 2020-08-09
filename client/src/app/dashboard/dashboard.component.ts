import { Component, OnInit } from '@angular/core'
import { NbAuthJWTToken, NbAuthService, NbTokenService } from '@nebular/auth'
import { NbMenuService } from '@nebular/theme'
import { Router } from '@angular/router'
import { SIDE_MENU_ITEMS } from './dashboard-menu'

@Component({
  selector: 'app-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  public user
  public sideMenuItems = SIDE_MENU_ITEMS
  public items = [{ prop: 'logout', title: 'Log out' }];

  constructor(
    private router: Router,
    private tokenService: NbTokenService,
    private nbMenuService: NbMenuService,
    private authService: NbAuthService
  ) {

    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {
        if (token.isValid()) {
          console.log('token valid')
          console.log(token.getPayload())
          this.user = token.getPayload()
        }
      })
  }

  ngOnInit(): void {
    this.nbMenuService.onItemClick()
      .subscribe(tag => {
        if (tag.item.title === 'Log out') {
          this.tokenService.clear()
          this.router.navigate(['login'])
        }
      })
  }

  getUser(): string {
    if (this.user) {
      return `${this.user.fullName}`
    }
  }

  logout(): void { this.authService.logout('email') }
}
