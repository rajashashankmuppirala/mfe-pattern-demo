Feature: About MFE feature

  Scenario: About MFE loads
    Given I have logged successfully and navigate to about link
    Then I should see the page with text "about from angular mfe works!"
