Feature: Forget password feature
  @e2e-test
  Scenario: Forgot password feature works
    Given I open Forget Password Page
    When I fill the username input with "chiragverma"
    And I click on Submit button
    Then I see "Reset Email has been Sent!" message
