import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ContactComponent } from "./contact.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: '', component: ContactComponent }
];

const aboutRoutes = RouterModule.forChild(routes);

@NgModule({
  declarations: [ContactComponent],
  imports: [aboutRoutes],
  providers: [ ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContactModule {
  constructor() {
    console.log('contact module init');
  }
}
