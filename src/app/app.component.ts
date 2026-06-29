import { Component, HostListener } from '@angular/core';
import { ThemeService } from './shared/services/theme.service';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';
import { Eusuario } from './shared/models/entidades/Eusuario';
import { AuthStoreService } from './shared/stores/auth-store.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Loginloaded: boolean = true;

  constructor(
    private authService: AuthService,
    private authStore: AuthStoreService,
    private router: Router) { }

  async ngOnInit(): Promise<void> {

    AOS.init({
      duration: 900,
      once: true
    });

  }

  @HostListener('window:scroll')
  onScroll(): void {

    const winScroll =
      document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled =
      (winScroll / height) * 100;

    document.documentElement.style.setProperty(
      '--scroll-width',
      `${scrolled}%`
    );
  }
}