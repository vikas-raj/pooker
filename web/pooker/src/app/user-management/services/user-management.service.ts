import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class UserManagementService {

  constructor(private httpClient: HttpClient) { }

  loginUser(loginUserDto: any) :Observable<any>{
    return this.httpClient.post<any>('', loginUserDto );
  }
  
  registerUser(registerUserDto: any): Observable<any>{
    return this.httpClient.post<any>('', registerUserDto);
  }
}
