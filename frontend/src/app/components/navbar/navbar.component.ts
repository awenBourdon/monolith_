import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',

})
export class NavbarComponent {
  @Input() isDark = true;
  @Output() themeToggle = new EventEmitter<void>();
  mobileMenuOpen = false;
}
