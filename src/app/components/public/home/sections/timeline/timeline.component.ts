import { Component, OnInit } from '@angular/core';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  timeline: TimelineItem[] = [
    {
      year: '2024',
      title: 'Primeras Landing Pages',
      description: 'Desarrollo de páginas web para emprendimientos y pequeños negocios.',
      icon: 'language'
    },

    {
      year: '2025',
      title: 'Sistema de Asistencia',
      description: 'Primer sistema empresarial para control de asistencia.',
      icon: 'fact_check'
    },

    {
      year: '2025',
      title: 'Sistemas Empresariales',
      description: 'Desarrollo de plataformas administrativas e incidencias.',
      icon: 'business_center'
    },

    {
      year: '2026',
      title: 'WorkFace',
      description: 'Plataforma para gestión operativa e incidencias.',
      icon: 'dashboard'
    },

    {
      year: '2026',
      title: 'Coronado Software',
      description: 'Consolidación de la consultora tecnológica.',
      icon: 'rocket_launch'
    }];

}
