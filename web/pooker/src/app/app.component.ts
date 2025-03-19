import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IUser } from './models/Iuser';
import { UserHelper } from './services/user-helper.service';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent {
  selectedTheme: string = '';
  title = 'pooker';
  userHelper: UserHelper;
  constructor(private themeService: ThemeService) {
    this.userHelper = new UserHelper()
  }
  ngOnInit() {
    this.getTokenDetails();
    this.selectedTheme = this.themeService.getStoredTheme();
    this.themeService.setTheme(this.selectedTheme);
    // this.getDecodedAccessToken();
  }

  changeTheme(theme: string): void {
    this.selectedTheme = theme;
    this.themeService.setTheme(theme);
  }

  getTokenDetails() {
    var token: any = localStorage.getItem('pooker_token')

    if (!token) {
      return;
    }
    const helper = new JwtHelperService();

    const decodedToken = helper.decodeToken(token);

    // Other functions
    const expirationDate = helper.getTokenExpirationDate(token);
    //debugger;
    const isExpired = helper.isTokenExpired(token);
    if (!isExpired) {
      var user = <IUser>{};
      // var userType = EmployeeType;
      // user.role = +userType[decodedToken.userType]; //EmployeeType.Mother. decodedToken.userType;
      user.token = token;
      user.username = decodedToken.username;
      user.email = decodedToken.email;
      user.id = +decodedToken.userId;
      this.userHelper.setData(user.id, user.email, user.username)
      // this.service.userSubject.next(user);
    } else {
      localStorage.removeItem('pooker_token')
    }
  }
}
