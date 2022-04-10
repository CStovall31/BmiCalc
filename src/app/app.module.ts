import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BMIComponent } from './bmi/bmi.component';
import { BMIService } from './shared/bmi.service';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    BMIComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BMIService,FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
