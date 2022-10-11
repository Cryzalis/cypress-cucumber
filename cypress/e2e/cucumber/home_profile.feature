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
   