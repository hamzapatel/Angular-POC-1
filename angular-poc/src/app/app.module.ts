import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { WellComponent } from './well/well.component';
import { WellListComponent } from './well-list/well-list.component';
import { ButtonComponent } from './button/button.component';
import { TextboxComponent } from './textbox/textbox.component';
import { LayoutComponent } from './layout/layout.component';
import { DynamicDirective } from './layout/directive/dynamic.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    WellComponent,
    WellListComponent,
    ButtonComponent,
    TextboxComponent,
    LayoutComponent,
    DynamicDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
