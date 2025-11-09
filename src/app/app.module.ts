import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildDefaultComponent, ChildOnPushComponent } from './child-component/child-component.component';

@NgModule({
  declarations: [	
    AppComponent,
      ChildDefaultComponent,
      ChildOnPushComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
