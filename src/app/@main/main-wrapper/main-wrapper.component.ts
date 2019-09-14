import { Component, OnInit } from '@angular/core';
import { ThemeService } from "../service/theme.service";
import { Observable } from "rxjs";

@Component({
    selector: 'app-main-wrapper',
    templateUrl: './main-wrapper.component.html',
    styleUrls: ['./main-wrapper.component.scss']
})
export class MainWrapperComponent implements OnInit {

    public selectedTheme: Observable<string>;
    public themes = [];

    constructor(
        private themeService: ThemeService
    ) {
        this.themes = this.themeService.themes;
    }

    ngOnInit() {
        this.selectedTheme = this.themeService.selectedTheme;
    }
}
