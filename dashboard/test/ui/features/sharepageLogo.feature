@as_student
@no_mobile
Feature: Lab share page logo

  Scenario: Select the logo on an applab share page while logged in and visit the homepage
    Given I am on "http://studio.code.org/projects/applab"
    And I wait for the page to fully load
    Then I click selector ".project_share"
    And I wait until element "#sharing-input" is visible
    And I navigate to the share URL
    And I wait for the page to fully load
    And element "div:contains('STUDIO')" does not exist
    And I press "logo-img" to load a new page
    And check that I am on "http://studio.code.org/courses"

  Scenario: Select the logo on a playlab share page while logged in and visit the homepage
    Given I am on "http://studio.code.org/projects/playlab"
    And I wait for the page to fully load
    Then I click selector ".project_share"
    And I wait until element "#sharing-input" is visible
    And I navigate to the share URL
    And I wait for the page to fully load
    And element "div:contains('STUDIO')" does not exist
    And I press "logo-img" to load a new page
    And check that I am on "http://studio.code.org/courses"

  Scenario: Select the logo on a gamelab share page while logged in and visit the homepage
    Given I am on "http://studio.code.org/projects/gamelab"
    And I wait for the page to fully load
    Then I click selector ".project_share"
    And I wait until element "#sharing-input" is visible
    And I navigate to the share URL
    And I wait for the page to fully load
    And element "div:contains('STUDIO')" does not exist
    And I press "logo-img" to load a new page
    And check that I am on "http://studio.code.org/courses"

  Scenario: Select the logo on an artist share page while logged in and visit the homepage
    Given I am on "http://studio.code.org/projects/artist"
    And I wait for the page to fully load
    Then I click selector ".project_share"
    And I wait until element "#sharing-input" is visible
    And I navigate to the share URL
    And I wait for the page to fully load
    And element "div:contains('STUDIO')" does not exist
    And I press "logo-img" to load a new page
    And check that I am on "http://studio.code.org/courses"

  Scenario: Select the logo on a playlab share page while logged out and visit the homepage
    Given I am on "http://studio.code.org/projects/playlab"
    And I wait for the page to fully load
    Then I click selector ".project_share"
    And I wait until element "#sharing-input" is visible
    And I navigate to the share URL
    And I wait for the page to fully load
    And I am on "http://studio.code.org/users/sign_out"
    And I reload the page
    And I navigate to the last shared URL
    And element "div:contains('STUDIO')" does not exist
    And I press "logo-img" to load a new page
    And check that I am on "http://code.org/"

  Scenario: Select the logo on a gamelab share page while logged out and visit the homepage
    Given I am on "http://studio.code.org/projects/gamelab"
    And I wait for the page to fully load
    Then I click selector ".project_share"
    And I wait until element "#sharing-input" is visible
    And I navigate to the share URL
    And I wait for the page to fully load
    And I am on "http://studio.code.org/users/sign_out"
    And I reload the page
    And I navigate to the last shared URL
    And element "div:contains('STUDIO')" does not exist
    And I press "logo-img" to load a new page
    And check that I am on "http://code.org/"
