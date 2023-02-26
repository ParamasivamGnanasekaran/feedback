import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { MatSidenavModule } from '@angular/material/sidenav'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatFormFieldModule } from '@angular/material/form-field';
import { UsersComponent } from './users/users.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon';
import { ProfileComponent } from './profile/profile.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatLegacyPaginatorModule } from '@angular/material/legacy-paginator'
import { MatSortModule } from '@angular/material/sort'
import { A11yModule } from '@angular/cdk/a11y';
import { UserComponent } from './users/user/user.component'
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [
    HomeComponent,
    UsersComponent,
    ProfileComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule, 
    MatToolbarModule, 
    MatCheckboxModule,     
    MatFormFieldModule,
    HomeRoutingModule,
    MatListModule,
    MatIconModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatSortModule,
    MatTableModule,
    MatLegacyPaginatorModule,
   A11yModule,
   MatDialogModule,
   ReactiveFormsModule,
   MatTableModule,
   MatSortModule,
   MatFormFieldModule,
   MatInputModule,
   MatDatepickerModule,
   MatNativeDateModule,
   MatIconModule,
   MatSelectModule,
   MatRadioModule,
   MatButtonModule,
   MatCardModule,
   MatButtonToggleModule,
  ],
  exports: [
    // CDK
    A11yModule,
  ]
})
export class HomeModule { }
