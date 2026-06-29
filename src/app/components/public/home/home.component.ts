import { Component, OnInit } from '@angular/core';

interface Proyecto {
  id: number;
  titulo: string;
  tecnologia: string;
  descripcion: string;
  features: string[];
  evidencias: string[];
  mostrarEvidencias: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  proyectos: Proyecto[] = [
    {
      id: 1,
      titulo: 'Sistema de Trámite Documentario',
      tecnologia: 'Angular + ASP.NET + SQL',
      descripcion: 'Plataforma integral que optimiza el flujo de documentos entrantes, internos y de salida en un 80%. Control total de documentación empresarial.',
      features: [
        '✓ Gestión de documentos entrantes/internos/salida',
        '✓ Optimización de flujo 80%',
        '✓ Reportes automáticos',
        '✓ Historial completo de trámites'
      ],
      evidencias: [
      ],
      mostrarEvidencias: false
    },
    {
      id: 2,
      titulo: 'Tienda Online CATA-STORE',
      tecnologia: 'Angular + PHP/LARAVEL + MYSQL',
      descripcion: 'Tienda online de ropa completa con catálogo de productos, carrito de compras y sistema de pago integrado vía WhatsApp.',
      features: [
        '✓ Catálogo de productos dinámico',
        '✓ Carrito de compras funcional',
        '✓ Integración con WhatsApp',
        '✓ Gestión de inventario'
      ],
      evidencias: [
        'assets/img/proyectos/imagen1.png',
        'assets/img/proyectos/imagen2.png',
        'assets/img/proyectos/imagen3.png'
      ],
      mostrarEvidencias: false
    },
    {
      id: 3,
      titulo: 'Sistema de Registro de Asistencia',
      tecnologia: 'Angular + PHP/LARAVEL + MYSQL',
      descripcion: 'Sistema de control de asistencia del personal por área con reportes detallados, administración de trabajadores y módulo de cedastro de empleados.',
      features: [
        '✓ Registro por área de trabajo',
        '✓ Reportes de asistencia',
        '✓ Administración de personal',
        '✓ Módulo de cédastro de empleados'
      ],
      evidencias: [
        'assets/img/proyectos/ft1.png',
        'assets/img/proyectos/ft2.png',
        'assets/img/proyectos/ft4.png'
      ],
      mostrarEvidencias: false
    },
    {
      id: 4,
      titulo: 'Componentes y Módulos Reutilizables',
      tecnologia: 'Angular Components + TypeScript',
      descripcion: 'Librería de componentes compartidos de alta calidad incluyendo header, modal, paginación avanzada y cargadores animados.',
      features: [
        '✓ Modal personalizable',
        '✓ Paginación avanzada',
        '✓ Grid loader animado',
        '✓ Header responsive'
      ],
      evidencias: [
        
      ],
      mostrarEvidencias: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleEvidencias(proyecto: Proyecto): void {
    proyecto.mostrarEvidencias = !proyecto.mostrarEvidencias;
  }

  imagenSeleccionada: string | null = null;

  verImagen(img: string): void {
    this.imagenSeleccionada = img;
  }

  cerrarImagen(): void {
    this.imagenSeleccionada = null;
  }

}
