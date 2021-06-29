import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRegisterUserDto } from '../models/IRegisterUserDto';
import { ILoginUserDto } from '../models/ILoginUserDto';

@Injectable()
export class UserManagementService {

  constructor(private httpClient: HttpClient) { }

  loginUser(loginUserDto: ILoginUserDto) :Observable<any>{
    return this.httpClient.post<any>('', loginUserDto );
  }
  
  registerUser(registerUserDto: IRegisterUserDto): Observable<any>{
    return this.httpClient.post<any>('', registerUserDto);
  }
}
