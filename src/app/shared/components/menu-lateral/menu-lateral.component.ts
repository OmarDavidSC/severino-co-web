import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { Component, OnInit, ViewChild, Inject, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../services/auth.service';
import { Eusuario } from '../../models/entidades/Eusuario';
import { AuthStoreService } from '../../stores/auth-store.service';


@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  public Drawer: MatDrawer | undefined;
  @Output() cerrarSesion = new EventEmitter<void>();

  @ViewChild('drawer') set MatDrawer(value: MatDrawer) {
    this.Drawer = value;
  }

  UsuarioActual: Eusuario | null = null;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private spinnerService: NgxSpinnerService,
    private authService: AuthService,
    private authStore: AuthStoreService
  ) { }

  ngOnDestroy(): void {
  }

  async ngOnInit(): Promise<void> {
    this.UsuarioActual = this.authStore.getUser();
  }

  irAPerfil() {
    this.router.navigate(['/mi-perfil']);
  }

  public irAlHome(): void {
    this.router.navigate(['/bandeja-contratos']);
    this.Drawer?.toggle();
  }

  OnClickLogout() {
    this.authService.logout();
    this.cerrarSesion.emit();
  }
}
