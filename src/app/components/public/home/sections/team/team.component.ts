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
      name: 'C.P Mary Magdalena Severino Pupuche',
      position: 'Asesora Contable',
      description: 'Bachiller en Contabilidad con experiencia en asesoriá contable, tributaria, laboral y financiera. Comprometida con brindar soluciones eficientes, confiables y personalizadas para impulsar el crecimiento de empresas y emprendedores.',
      specialty: 'Contabilidad y Tributación',
      experience: '+2 años',
      email: 'maryspuche@gmail.com',
      image: 'assets/img/team/mary.jpeg'
    },

    {
      name: 'C.P.C Jorge Daniel Zárate Rojas',
      position: 'Asesor Contable',
      description: 'Contador Público Colegiado con experiencia en contabilidad, tributación, asesoría financiera y gestión empresarial. Comprometido con brindar soluciones estratégicas, eficientes y confiables, orientadas al cumplimiento normativo, la optimización de recursos y el crecimiento sostenible de empresas y emprendedores.',
      specialty: 'Contabilidad, Tributación y Asesoría Empresarial',
      experience: '+2 años',
      email: 'dzasesoria01@gmail.com',
      image: 'assets/img/team/jorge.jpeg'
    },

    {
      name: 'C.P Neftalí Yampufe Monje',
      position: 'Asesora Contable',
      description: 'Contadora Pública con experiencia en asesoría contable, tributaria, laboral y financiera Me caracterizo por ser una profesional responsable, organizada, proactiva y comprometida con el cumplimiento de los objetivos institucionales, manteniendo siempre un alto sentido de ética y confidencialidad. Tengo facilidad para el trabajo en equipo, la resolución de problemas y el aprendizaje continuo, orientando mi desempeño a brindar un servicio eficiente y de calidad.',
      specialty: 'Contabilidad, Tributación',
      experience: '+2 años',
      email: 'yampufeneftali@gmail.com',
      image: 'assets/img/team/net.jpeg'
    },

  ];

  selectedMember: TeamMember = this.teamMembers[0];

  selectMember(member: TeamMember): void {

    this.selectedMember = member;

  }

}
