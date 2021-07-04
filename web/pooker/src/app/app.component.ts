import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IUser } from './models/Iuser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pooker';

  ngOnInit() {
    this.getTokenDetails();
    // this.getDecodedAccessToken();
  }

  getTokenDetails() {
    var token: any = localStorage.getItem('pooker_token')
    
    if(!token){
      return;
    }
    const helper = new JwtHelperService();

    const decodedToken = helper.decodeToken(token);

    // Other functions
    const expirationDate = helper.getTokenExpirationDate(token);
    debugger;
    const isExpired = helper.isTokenExpired(token);
    if (!isExpired) {
      var user = <IUser>{};
      // var userType = EmployeeType;
      // user.role = +userType[decodedToken.userType]; //EmployeeType.Mother. decodedToken.userType;
      user.token = token;
      user.userName = decodedToken.sub;
      user.id = +decodedToken.userId;
      // this.service.userSubject.next(user);
    } else {
      localStorage.removeItem('pooker_token')
    }
  }
}
