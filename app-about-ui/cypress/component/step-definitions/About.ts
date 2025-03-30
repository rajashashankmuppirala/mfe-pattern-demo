import {Given, Then} from "@badeball/cypress-cucumber-preprocessor";
import { AboutComponent } from "../../../src/app/about/about.component";


Given("I have logged successfully and navigate to about link", function () {
  cy.viewport(1920, 1080).then(() => {
    cy.mount(AboutComponent);
  })

});

Then("I should see the page with text {string}", function (text: string) {
  cy.get('p').should("have.text", text);
});
