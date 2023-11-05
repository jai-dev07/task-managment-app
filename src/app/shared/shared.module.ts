import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
// import { MatSidenavModule } from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {
  MatSidenavModule,
} from '@angular/material/sidenav';
import { MatDialogModule } from "@angular/material/dialog";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSidenavModule,
    MatIconModule,
    MatTableModule,
    MatSelectModule,
    DragDropModule,
    MatDialogModule

  ],
  exports:[
    LoginComponent,
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSidenavModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    DragDropModule,
    MatDialogModule
    
  ]
})
export class SharedModule { }
