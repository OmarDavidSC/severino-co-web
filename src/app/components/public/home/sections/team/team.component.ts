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
      name: 'Mary Magdalena Severino Pupuche',
      position: 'Asesora Contable',
      description: 'Bachiller en Contabilidad con experiencia en asesoriá contable, tributaria, laboral y financiera. Comprometida con brindar soluciones eficientes, confiables y personalizadas para impulsar el crecimiento de empresas y emprendedores.',
      specialty: 'Contabilidad y Tributación',
      experience: '+2 años',
      email: 'maryspuche@gmail.com',
      image: 'assets/img/team/mary.jpeg'
    },

    {
      name: 'C.PC Jorge Daniel Zárate Rojas',
      position: 'Asesor Contable',
      description: 'Contador Público Colegiado con experiencia en contabilidad, tributación, asesoría financiera y gestión empresarial. Comprometido con brindar soluciones estratégicas, eficientes y confiables, orientadas al cumplimiento normativo, la optimización de recursos y el crecimiento sostenible de empresas y emprendedores.',
      specialty: 'Contabilidad, Tributación y Asesoría Empresarial',
      experience: '+2 años',
      email: 'dzasesoria01@gmail.com',
      image: 'assets/img/team/person-2.jpg'
    },

    // {
    //   name: 'Carlos Medina',
    //   position: 'Asesor Tributario',
    //   description: 'Experto en planeamiento tributario y cumplimiento de obligaciones fiscales para empresas.',

    //   specialty: 'Tributación',

    //   experience: '+12 años',

    //   email: 'carlos@severino.pe',

    //   image: 'assets/img/team/person-3.jpg'
    // },

    // {
    //   name: 'María Torres',
    //   position: 'Especialista Laboral',
    //   description: 'Responsable de planillas, legislación laboral y asesoría en recursos humanos.',

    //   specialty: 'Gestión Laboral',

    //   experience: '+8 años',

    //   email: 'maria@severino.pe',

    //   image: 'assets/img/team/person-4.jpg'
    // }

  ];

  selectedMember: TeamMember = this.teamMembers[0];

  selectMember(member: TeamMember): void {

    this.selectedMember = member;

  }

}
