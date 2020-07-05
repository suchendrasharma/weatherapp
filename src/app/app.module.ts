import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TodayComponent } from "./components/today/today.component";
import { from } from "rxjs";

import { AgmCoreModule } from "@agm/core";

@NgModule({
  declarations: [AppComponent, TodayComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: "",
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
