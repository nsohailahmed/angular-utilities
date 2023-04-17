import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MileToKmPipePipe } from './mile-to-km-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MileToKmPipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
