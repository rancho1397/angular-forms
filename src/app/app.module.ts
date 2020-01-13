import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule} from '@angular/forms'
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations'
import {ToastModule} from 'ng2-toastr/ng2-toastr'; 

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastModule,
    RouterModule.forRoot([
      {path:'templateform',component:TemplateComponent},
      {path:'reactiveform',component:ReactiveComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
