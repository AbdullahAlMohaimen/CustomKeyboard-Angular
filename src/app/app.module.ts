import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IntlModule } from '@progress/kendo-angular-intl';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { FormFieldModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { IconsModule } from '@progress/kendo-angular-icons';

import { AppComponent } from './app.component';

@NgModule({
  bootstrap:    [ AppComponent ],
  declarations: [ AppComponent ],
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    IntlModule,
    LabelModule,
    ButtonsModule,
    DateInputsModule,
    FormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    IconsModule
  ]
})

export class AppModule { }
