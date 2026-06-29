import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private currentTheme = 'light';

    constructor() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            this.setTheme(savedTheme);
        }
    }

    toggleTheme(): void {
        const theme = this.currentTheme === 'light' ? 'dark' : 'light';

        this.setTheme(theme);
    }

    setTheme(theme: string): void {
        this.currentTheme = theme;
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
        localStorage.setItem('theme', theme);
    }

    getTheme(): string {
        return this.currentTheme;
    }
}
