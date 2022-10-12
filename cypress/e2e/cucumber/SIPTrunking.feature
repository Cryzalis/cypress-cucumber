Feature: Dashboard SIP Trunking

    Feature Testing dashboard telynx.com

    Background:
        Given A web browser is at the loged in
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