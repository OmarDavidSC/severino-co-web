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
      initials: 'CR',
      name: 'Carlos Rojas',
      company: 'Constructora ABC',
      comment: 'Excelente servicio, siempre atentos y comprometidos con nuestra empresa.'
    },

    {
      initials: 'MP',
      name: 'María Pérez',
      company: 'Centro Médico Vida',
      comment: 'Profesionales, organizados y con respuestas rápidas.'
    },

    {
      initials: 'JL',
      name: 'José López',
      company: 'JL Comercial',
      comment: 'Nos ayudan a mantener nuestras obligaciones tributarias al día.'
    },

    {
      initials: 'AT',
      name: 'Ana Torres',
      company: 'Grupo Andino',
      comment: 'Su asesoría ha sido clave para el crecimiento de nuestra empresa.'
    },

    {
      initials: 'RV',
      name: 'Ricardo Vargas',
      company: 'Transportes RV',
      comment: 'Siempre encontramos soluciones rápidas y eficientes.'
    }

  ];

}
