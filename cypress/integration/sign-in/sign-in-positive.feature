Feature: Successful login feature
  @e2e-test
  Scenario: Login successfully
    Given I open Login Page
    When I fill the username input with "chiragverma"
    And I fill the password input with "Zidaneforu1@"
    And I click on Login button
    Then I see "Welcome to TestYou - Attempt Unlimited Online Tests" message