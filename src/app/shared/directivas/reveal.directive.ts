import {
    Directive,
    ElementRef,
    OnInit
} from '@angular/core';

@Directive({
    selector: '[appReveal]'
})
export class RevealDirective implements OnInit {

    constructor(
        private el: ElementRef
    ) { }

    ngOnInit(): void {

        const observer = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add('active');

                }

            });

        }, {
            threshold: .15
        });

        this.el.nativeElement.classList.add('reveal');

        observer.observe(this.el.nativeElement);
    }
}