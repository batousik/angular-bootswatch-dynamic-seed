import { Component, OnInit } from '@angular/core';
import { ThemeService } from "../service/theme.service";

@Component({
    selector: 'app-theme-changer',
    templateUrl: './theme-changer.component.html',
    styleUrls: ['./theme-changer.component.scss']
})
export class ThemeChangerComponent implements OnInit {

    public themes = [];

    constructor(
        private themeService: ThemeService
    ) {
    }

    ngOnInit() {
        this.themes = this.themeService.themes;
    }

    changeTheme($event: MouseEvent) {
        this.themeService.setTheme($event.target['id']);
    }
}
