import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { AboutComponent } from "./about.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: '', component: AboutComponent }
];

const aboutRoutes = RouterModule.forChild(routes);

@NgModule({
  declarations: [AboutComponent],
  imports: [aboutRoutes],
  providers: [ ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutModule {
  constructor() {
    console.log('about module init');
  }
}
