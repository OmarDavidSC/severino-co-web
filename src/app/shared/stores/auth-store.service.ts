import { Injectable } from '@angular/core';
import { Eusuario } from '../models/entidades/Eusuario';

@Injectable({
  providedIn: 'root'
})
export class AuthStoreService {

  constructor() { }

  private usuario: Eusuario | null = null;

  setUser(data: Eusuario) {
    this.usuario = data;
  }

  getUser(): Eusuario | null {
    return this.usuario;
  }

  deleteUser() {
    this.usuario = null;
  }
}
