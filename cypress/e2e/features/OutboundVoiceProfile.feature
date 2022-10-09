Feature: Dashboard

    Feature Testing dashboard telynx.com

    Background:
        Given A web browser is at the loged in
    Scenario: Add SIM to Cart
        Given A web browser is at the home page
        When A user click to Cart and add SIM to cart
        Then SIM added to Order
    Scenario: Add new Profile
        Given A web browser is at the Programmable Messaging page
        When A user click create Profile and save it
        Then new profile added to list
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
    Scenario: WhatsApp Business (negative)
        Given A web browser is at the WhatsApp Business page
        When A user go to WhatsApp Business click to checkBox fill url and click start WhatsApp
        Then WhatsApp Sign-up not started error message is visible
    Scenario: SIP Trunking add connection
        Given A web browser is at the SIP Trunking page
        When A user click Add SIP connection after fill connection name click create SIP connection and click save
        Then Connection added to list and displayed correctly
    Scenario: SIP Trunking add connection(negative)
        Given A web browser is at the SIP Trunking page
        When A user click Add SIP connection fill connection name as existing connection and click Create
        Then Connection not added to list error message is displayed
    Scenario: SIP Trunking edit name for last connection
        Given A web browser is at the SIP Trunking page
        When A user edit last connection
        Then Connection is edited message is displayed
    Scenario: SIP Trunking delete last connection
        Given A web browser is at the SIP Trunking page
        When A user click delete connection for last connection
        Then Connection deleted correctly      
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