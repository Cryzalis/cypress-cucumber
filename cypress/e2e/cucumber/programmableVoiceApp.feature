Feature: Dashboard Programmable Voice App

    Feature Testing dashboard telynx.com

    Background:
        Given A web browser is at the loged in
    Scenario: Add Programmable Voice App
        Given A web browser is at the Programmable Voice page
        When A user go to Programmable Voice click  add new app and fill inputs and click save
        Then App added to list and displayed correctly
    Scenario: Add Programmable Voice App(negative)
        Given A web browser is at the Programmable Voice page
        When A user go to Programmable Voice click  add new app and fill inputs and click save
        Then App not added to list error message is visible
    Scenario: Edit Programmable Voice App
        Given A web browser is at the Programmable Voice page
        When A user click edit for last app change app name and click save
        Then Edit Voice app Success message is visible
    Scenario: Delete Programmable Voice App
        Given A web browser is at the Programmable Voice page
        When A user click delete for first app
        Then Voice App deleted from list               