import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const partialsComponents = [

];

@NgModule({
    declarations: partialsComponents,
    exports: partialsComponents,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class PartialsModule {}
