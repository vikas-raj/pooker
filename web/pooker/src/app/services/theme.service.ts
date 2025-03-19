import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  setTheme(theme: string): void {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme); // Store the theme in local storage
  }

  getStoredTheme(): string {
    return localStorage.getItem('theme') || 'light'; // Default theme is 'light'
  }
}