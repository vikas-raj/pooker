import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private apiUrl = 'your-api-url';  // Replace with your backend API URL

    constructor(private http: HttpClient, private router: Router) { }

    // Save the token to localStorage (or sessionStorage)
    setToken(token: string): void {
        localStorage.setItem('authToken', token);
    }

    // Get the token from localStorage
    getToken(): string | null {
        return localStorage.getItem('authToken');
    }

    // Check if the user is authenticated by verifying the token
    isAuthenticated(): boolean {
        const token = this.getToken();
        if (!token) {
            return false;
        }

        try {
            const helper = new JwtHelperService();

            const decodedToken = helper.decodeToken(token);

            const isExpired = helper.isTokenExpired(token);

            console.log(isExpired);
            console.log(decodedToken);

            // If token is expired, return false
            return !isExpired;
        } catch (e) {
            return false;
        }
    }

    // Log out the user by removing the token
    logout(): void {
        localStorage.removeItem('authToken');
        this.router.navigate(['/user-management/login']);  // Navigate to login page on logout
    }
}