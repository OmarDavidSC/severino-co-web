import { Component, OnInit } from '@angular/core';

interface Project {
  title: string;
  type: string;
  description: string;
  technologies: string[];
  status: 'publico' | 'confidencial';
  demoUrl?: string;
  githubUrl?: string;
  icon: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedProject: any = null;

  openProject(project: any): void {
    debugger;
    this.selectedProject = project;
  }

  closeProject(): void {
    this.selectedProject = null;
  }

  projects: Project[] = [
    {
      title: 'Invitación Web para Boda',
      type: 'Landing Page',
      description: 'Invitación digital interactiva con confirmación de asistencia, galería y cuenta regresiva.',
      technologies: ['Angular', 'TypeScript', 'Tailwind CSS'],
      status: 'publico',
      githubUrl: 'https://github.com/OmarDavidSC/invitacion',
      icon: 'celebration'
    },
    {
      title: 'Sitio Web para Barbería',
      type: 'Página Corporativa',
      description: 'Sitio web para promoción de servicios, reservas y contacto directo mediante WhatsApp.',
      technologies: ['Angular', 'Tailwind CSS', 'Node.js'],
      status: 'publico',
      demoUrl: 'https://d1kfpmaes0zodw.cloudfront.net/',
      icon: 'content_cut'
    },
    {
      title: 'Sistema de Gestión de Incidencias',
      type: 'Sistema Empresarial',
      description: 'Control de incidencias, asignaciones, seguimiento y reportes operativos.',
      technologies: ['Angular', 'Laravel', 'MySQL','AWS S3'],
      status: 'publico',
      demoUrl: 'https://workface.netlify.app/',
      icon: 'bug_report'
    },
    {
      title: 'Sistema de Gestión de Contratos',
      type: 'Sistema Empresarial',
      description: 'Administración integral de contratos, vencimientos, documentos y alertas.',
      technologies: ['Angular', '.NET', 'SQL Server'],
      status: 'confidencial',
      icon: 'description'
    },
    {
      title: 'Sistema de Trámite Documentario',
      type: 'Sistema Empresarial',
      description: 'Registro, seguimiento y control de documentos internos y externos.',
      technologies: ['Angular', '.NET', 'SQL Server'],
      status: 'confidencial',
      icon: 'folder_copy'
    },
    {
      title: 'Sistema de Control de Asistencia',
      type: 'Sistema Empresarial',
      description: 'Control de asistencia del personal, reportes y administración de empleados.',
      technologies: ['Angular', 'Laravel', 'MySQL'],
      status: 'confidencial',
      icon: 'fact_check'
    }
  ];
}
