Feature: Book a Hotel Successfully
  @e2e-test
  Scenario: Book a Hotel in any city
    Given I open Home Page
    When I fill the place input with "London"
    And I fill the nextmonth checkin date "10" and checkout "14" and hit search
    And I select the room
    Then I should be on Get A Room page