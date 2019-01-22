import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//import { AgGridModule } from 'ag-grid-angular/main';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactSearchComponent } from './contact-search/contact-search.component';

// import { ContactFilterPipe } from './contact-search/contact-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContactSearchComponent,
    
    // ContactFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  //  AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
