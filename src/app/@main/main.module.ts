import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainWrapperComponent } from "./main-wrapper/main-wrapper.component";
import { ThemeChangerComponent } from './theme-changer/theme-changer.component';
import { MainRoutingModule } from "./main-routing.module";
import { BsDropdownModule } from "ngx-bootstrap";


@NgModule({
    declarations: [
        MainWrapperComponent,
        ThemeChangerComponent
    ],
    imports: [
        CommonModule,
        MainRoutingModule,
        BsDropdownModule.forRoot()
    ]
})
export class MainModule {
}
