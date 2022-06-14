Feature: Unsuccessful signup feature
  @e2e-test
  Scenario: User cannot sign up with a invalid user name or password
    Given I am on the sign up page
    When I sign in as chirag and Kapten2017@
    Then I should a error Invalid email

  Scenario: User cannot sign up with a invalid user name or password
    Given I am on the sign up page
    When I sign in as chirag@ and Kapten2017@
    Then I should a error Invalid email

  Scenario: User cannot sign up with a invalid user name or password
    Given I am on the sign up page
    When I sign in as chirag@gmail and Kapten2017@
    Then I should a error Invalid email

   Scenario: User cannot sign up with a invalid user name or password
    Given I am on the sign up page
    When I sign in as chirag@gmail.com and KaptenKapten
    Then I should a error Too weak

  Scenario: User cannot sign up with a invalid user name or password
    Given I am on the sign up page
    When I sign in as chirag@gmail.com and Kapten
    Then I should a error Too weak

  











