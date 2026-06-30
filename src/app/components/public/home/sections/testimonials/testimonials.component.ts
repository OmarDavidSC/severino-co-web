import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  testimonials = [

    {
      initials: 'EV',
      name: 'Emilio Vasquez',
      company: 'Emprendedor',
      comment: 'Excelente servicio, siempre atentos y comprometidos con nuestra empresa.'
    },
    {
      initials: 'EB',
      name: 'Eugenio Bravo',
      company: 'Transportes Bravo Express',
      comment: 'Profesionales, organizados y con respuestas rápidas.'
    },
    {
      initials: 'CR',
      name: 'Cristonal Rinza',
      company: 'Transportes Keyler',
      comment: 'Nos ayudan a mantener nuestras obligaciones tributarias al día.'
    },
    {
      initials: 'LM',
      name: 'Lucy Mayanga',
      company: 'Lucy Mayanga',
      comment: 'Su asesoría ha sido clave para el crecimiento de nuestra empresa.'
    },
    {
      initials: 'AP',
      name: 'Alfredo Polanco',
      company: 'Alfredo Polanco',
      comment: 'Siempre encontramos soluciones rápidas y eficientes.'
    }

  ];

}
