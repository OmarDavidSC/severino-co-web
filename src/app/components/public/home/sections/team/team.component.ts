import { Component, OnInit } from '@angular/core';

interface TeamMember {
  name: string;
  position: string;
  description: string;
  specialty: string;
  experience: string;
  email: string;
  image: string;
}

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  teamMembers: TeamMember[] = [

    {
      name: 'CPC. Juan Severino',
      position: 'Director General',
      description: 'Especialista en asesoría contable y tributaria con amplia experiencia acompañando empresas de distintos sectores económicos.',

      specialty: 'Contabilidad General',

      experience: '+15 años',

      email: 'juan@severino.pe',

      image: 'assets/img/team/person-1.jpg'
    },

    {
      name: 'Ana Rodríguez',
      position: 'Contadora Senior',
      description: 'Especialista en gestión contable, estados financieros y optimización de procesos administrativos.',

      specialty: 'Estados Financieros',

      experience: '+10 años',

      email: 'ana@severino.pe',

      image: 'assets/img/team/person-2.jpg'
    },

    {
      name: 'Carlos Medina',
      position: 'Asesor Tributario',
      description: 'Experto en planeamiento tributario y cumplimiento de obligaciones fiscales para empresas.',

      specialty: 'Tributación',

      experience: '+12 años',

      email: 'carlos@severino.pe',

      image: 'assets/img/team/person-3.jpg'
    },

    {
      name: 'María Torres',
      position: 'Especialista Laboral',
      description: 'Responsable de planillas, legislación laboral y asesoría en recursos humanos.',

      specialty: 'Gestión Laboral',

      experience: '+8 años',

      email: 'maria@severino.pe',

      image: 'assets/img/team/person-4.jpg'
    }

  ];

  selectedMember: TeamMember = this.teamMembers[0];

  selectMember(member: TeamMember): void {

    this.selectedMember = member;

  }

}
