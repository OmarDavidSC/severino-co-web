import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements AfterViewInit  {

  constructor() { }


  ngAfterViewInit(): void {

    const cards =
      document.querySelectorAll('.tech-card');

    cards.forEach((card: any) => {

      card.addEventListener('mousemove', (e: MouseEvent) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
      });
    });
  }

  tecnologias = [
    {
      nombre: 'Angular',
      descripcion: 'Aplicaciones web modernas y escalables.',
      icono: 'assets/icons/angular.svg'
    },
    {
      nombre: 'Vue.js',
      descripcion: 'Interfaces rápidas y experiencias interactivas.',
      icono: 'assets/icons/vue.svg'
    },
    {
      nombre: 'Laravel',
      descripcion: 'APIs robustas y sistemas empresariales.',
      icono: 'assets/icons/laravel.svg'
    },
    {
      nombre: 'PHP',
      descripcion: 'Desarrollo backend flexible y eficiente.',
      icono: 'assets/icons/php.svg'
    },
    {
      nombre: '.NET',
      descripcion: 'Soluciones corporativas de alto rendimiento.',
      icono: 'assets/icons/dotnet.svg'
    },
    {
      nombre: 'SQL Server',
      descripcion: 'Procesamiento y análisis de información.',
      icono: 'assets/icons/sqlserver.svg'
    },
    {
      nombre: 'MySQL',
      descripcion: 'Gestión eficiente de bases de datos.',
      icono: 'assets/icons/mysql.svg'
    },
    {
      nombre: 'Docker',
      descripcion: 'Implementación y despliegue profesional.',
      icono: 'assets/icons/docker.svg'
    },
    {
      nombre: 'AWS',
      descripcion: 'Infraestructura cloud escalable y segura.',
      icono: 'assets/icons/aws.svg'
    }
  ];

}
