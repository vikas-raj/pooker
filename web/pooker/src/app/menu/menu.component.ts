import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: false
})
export class MenuComponent implements OnInit {
  @Output() selectedTheme = new EventEmitter<string>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogOut() {
    localStorage.removeItem('pooker_token');
    this.router.navigate(['/user-management/login']);
  }

  changeTheme(theme: string): void {
    this.selectedTheme.emit(theme);
  }

  logout(){
    
  }
}
