import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CustomCursorComponent } from './components/cursor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent, CustomCursorComponent],
  templateUrl: './app.component.html',
})

export class AppComponent {
  darkMode = signal<boolean>(true);

  toggleTheme() {
    this.darkMode.update(dark => !dark);
  }
}
