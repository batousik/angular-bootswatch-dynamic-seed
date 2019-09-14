import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { DOCUMENT } from "@angular/common";

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private THEME_LINK_ID: string = 'theme-link';
    private THEME_LINK: HTMLElement;

    constructor(
        @Inject(DOCUMENT) private document: Document
    ) {
        this._selectedTheme = new BehaviorSubject<string>('lux');
        this.THEME_LINK = this.document.getElementById(this.THEME_LINK_ID);
    }

    private _selectedTheme: BehaviorSubject<string>;

    get selectedTheme(): Observable<string> {
        return this._selectedTheme.asObservable().pipe(
            map(t => "theme-" + t)
        );
    }

    private _themes = [
        'cerulean',
        'cosmo',
        'cyborg',
        'darkly',
        'flatly',
        'journal',
        'litera',
        'lumen',
        'lux',
        'materia',
        'minty',
        'pulse',
        'sandstone',
        'simplex',
        'sketchy',
        'slate',
        'solar',
        'spacelab',
        'superhero',
        'united',
        'yeti'
    ];

    get themes(): string[] {
        return this._themes;
    }

    private static getLink(theme: string): string {
        return "assets/" + theme + "/bootstrap.min.css";
    }

    public setTheme(theme) {
        if (!(this._themes.indexOf(theme) > -1)) {
            console.error('No such theme available: ' + theme);
            return;
        }

        this.THEME_LINK.setAttribute("href", ThemeService.getLink(theme))
    }
}
