# cypress-cucumber-docker

Tests for Automating Hotel search Page using Cypress, Cucumber and Docker

URL - https://www.mrandmrssmith.com/


This test consists three parts as below:

Part 1 - BDD scenario

Feature: Book a Hotel Successfully
  @e2e-test
  Scenario: Book a Hotel in any city
    Given I open Home Page
    When I fill the place input with "London"
    And I fill the nextmonth checkin date "10" and checkout "14" and hit search
    And I select the room
    Then I should be on Get A Room page

Part 2 - Javascript code

See Code

Part 3 - Automation understanding

Some of the best Automation practices that one should follow are:

A) Use Test Design Patterns and Principles.
B) Ignore using xpath and rely on id's and name for locators for fast test execution.
C) Using test Parallelization for faster test execution.
D) Using tags on the tests in order to prioritze the test for example - high, medium, low priority.
E) Separate Your Tests From Your Test Automation Framework.
F) Name tests wisely.
G) Take Screenshots for Failure Investigation.
H) All Tests Should Be Independent.
I) Set Up Detailed Test Reporting.

