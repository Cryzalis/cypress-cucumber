Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given A web browser is at the saucelabs login page
    Scenario: Wrong Login
        When A user enters wrong the username "dmytromaslo@gmail.com", the password "123456789!Pp!", and clicks on the login button
        Then the error message is visible
    Scenario: Success Login
        When A user enters the username "dmytromaslo@gmail.com", the password "123456789!Pp", and clicks on the login button
        Then the url will contains the inventory subdirectory
