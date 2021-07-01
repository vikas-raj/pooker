import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRegisterUserDto } from '../models/IRegisterUserDto';
import { ILoginUserDto } from '../models/ILoginUserDto';
import { API_Constants } from "../../infrastructure/constants/api-constants";

@Injectable()
export class UserManagementService {

  constructor(private httpClient: HttpClient) { }

  loginUser(loginUserDto: ILoginUserDto): Observable<any> {
    const url = API_Constants.Register_USER;
    return this.httpClient.post<any>(url, loginUserDto);
  }

  registerUser(registerUserDto: IRegisterUserDto): Observable<any> {
    const url = API_Constants.Login_USER;
    return this.httpClient.post<any>(url, registerUserDto);
  }
}
