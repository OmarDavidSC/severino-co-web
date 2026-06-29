import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuOpen = false;

  constructor(
    public themeService: ThemeService
  ) { }

  ngOnInit(): void {
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }


  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

}
