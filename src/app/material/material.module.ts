import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDividerModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatOptionModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatTooltipModule,
  MatChipsModule,
  MatDialogModule,
  MatTableModule,
  MatPaginatorModule,
  MatListModule,
  MatCheckboxModule,
  MatTreeModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatStepperModule,
  MatTabsModule,
  MatSlideToggleModule
} from '@angular/material';

const modules = [
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDividerModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatAutocompleteModule,
  MatOptionModule,
  MatSelectModule,
  MatTooltipModule,
  MatChipsModule,
  MatDialogModule,
  MatTableModule,
  MatPaginatorModule,
  MatListModule,
  MatCheckboxModule,
  MatTreeModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatStepperModule,
  MatTabsModule,
  MatSlideToggleModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [...modules]
})
export class MaterialModule { }
