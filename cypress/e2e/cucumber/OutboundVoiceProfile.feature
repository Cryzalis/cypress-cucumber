Feature: Dashboard Outbound Voice Profile

    Feature Testing dashboard telynx.com

    Background:
        Given A web browser is at the loged in
    Scenario: Create Outbound Voice Profile
        Given A web browser is at the Outbound Voice Profiles page
        When A user click  add new profile fill inputs and click create
        Then Outbound Voice Profile added to list and Success message is displayed
    Scenario: Create Outbound Voice Profile(negative)
        Given A web browser is at the Outbound Voice Profiles page
        When A user click  add new profile fill inputs and click create
        Then Outbound Voice Profile not added to list error message is visible
    Scenario: Edit Outbound Voice Profile
        Given A web browser is at the Outbound Voice Profiles page
        When A user click edit for first Outbound Voice Profile and change name
        Then Outbound Voice Profile edit Success message is displayed
    Scenario: Delete Outbound Voice Profile
        Given A web browser is at the Outbound Voice Profiles page
        When A user click delete for first Outbound Voice Profile
        Then Outbound Voice Profile delete Success message is displayed