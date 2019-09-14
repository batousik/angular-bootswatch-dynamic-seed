import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainWrapperComponent } from "./main-wrapper/main-wrapper.component";

const routes: Routes = [
    {
        path: 'main-component',
        component: MainWrapperComponent
    },
    {
        path: '**',
        redirectTo: 'main-component'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule {
}
