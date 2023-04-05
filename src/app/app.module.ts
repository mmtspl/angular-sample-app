import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { NewCmpComponent } from './new-cmp/new-cmp.component';  
//import { ChangeTextDirective } from './change-text.directive';  
import { SqrtPipe } from './app.sqrt';  

@NgModule({
  declarations: [
	SqrtPipe,     
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
