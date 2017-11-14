import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {CdkTableModule} from '@angular/cdk/table';
import { RouterModule, Routes } from '@angular/router';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import { IndexComponent } from './index/index.component';
import { FilmComponent } from './film/film.component';
import {IndexService} from './index.service';
import {HttpModule,Headers,Response} from '@angular/http';
//Define routes

const appRoutes:Routes = [
  {path:'',redirectTo:'index' ,pathMatch:"full"},
  { path: 'index', component: IndexComponent },
  { path: 'films/:filmNum', component: FilmComponent },
  {path:'**',redirectTo:'' ,pathMatch:"full"}
];
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FilmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [IndexService],
  bootstrap: [AppComponent]
})
export class AppModule { }
