import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-float',
  templateUrl: './whatsapp-float.component.html',
  styleUrls: ['./whatsapp-float.component.scss']
})
export class WhatsappFloatComponent {
  Telefono = '51922933790';

  menuOpen = false;

  getWhatsappUrl(message: string): string {

    return `https://wa.me/${this.Telefono}?text=${encodeURIComponent(message)}`;

  }

  toggleMenu() {

    this.menuOpen = !this.menuOpen;

  }
}
