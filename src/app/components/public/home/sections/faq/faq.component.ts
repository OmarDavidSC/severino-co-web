import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  activeIndex = 0;

  faqs = [
    {
      question: '¿Qué servicios contables ofrecen?',
      answer: 'Brindamos servicios de contabilidad general, asesoría tributaria, planillas, constitución de empresas, estados financieros y consultoría empresarial.'
    },

    {
      question: '¿Atienden empresas pequeñas y grandes?',
      answer: 'Sí. Trabajamos con emprendedores, pequeñas, medianas y grandes empresas adaptando nuestros servicios a sus necesidades.'
    },

    {
      question: '¿Realizan declaraciones ante SUNAT?',
      answer: 'Sí. Nos encargamos de las declaraciones mensuales, anuales y del cumplimiento oportuno de las obligaciones tributarias.'
    },

    {
      question: '¿Puedo contratar solo una asesoría?',
      answer: 'Por supuesto. También ofrecemos asesorías puntuales para resolver consultas específicas.'
    },

    {
      question: '¿Cómo puedo solicitar una cotización?',
      answer: 'Puedes comunicarte mediante WhatsApp, correo electrónico o utilizando el formulario de contacto de esta página.'
    }

  ];

  toggle(index: number): void {
    this.activeIndex = this.activeIndex === index ? -1 : index;
  }

}
