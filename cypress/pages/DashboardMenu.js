import Pages from './Pages'
const linkHome = "#main_content  [href='/#/app/home']"
const linkProgrammableMessaging = "#main_content  [href='/#/app/programmable-messaging/profiles']"
const linkHostedSMS = "#main_content  [href='/#/app/messaging-hosted-sms-v2/numbers']"
// const linkProgrammableVoice = '#main_content  [href="/#/app/call-control/applications"]'
// const linkSIPTrunking = '#main_content  [href="/#/app/connections"]'
// const linkOutboundVoiceProfiles = '#main_content  [href="/#/app/outbound-profiles"]'
// const linkWebDialer= '#main_content  [href="/#/app/voice/web-dialer"]'
// const linkNumberLookup = '#main_content  [href="/#/app/lookup"]'
// const linkVideo = '#main_content  [href="/#/app/video/video-rooms"]'
// const linkWireless = '#main_content  [href="/#/app/wireless/dashboard"]'
// const linkNetworking = '#main_content  [href="/#/app/networking/networks"]'
// const linkMyAccount = '#main_content  [href="/#/app/account/general"]'
// const linkKeysCredentials = '#main_content  [href="/#/app/api-keys"]'
// const linkAdvancedFeatures = '#main_content  [href="/#/app/advanced-features/organizations"]'
// const linkPricing = '#main_content  [href="/#/app/pricing"'
class DashboardMenu extends Pages{
    navigate(){
    cy.visit('/')
    }
    clickLinkHome(){
        cy.get(linkHome).click({ force: true})
    }
    clicklinkProgrammableMessaging(){
        cy.get(linkProgrammableMessaging).click({ force: true})
    }
    clickLinkHostedSMS(){
        cy.get(linkHostedSMS).click({ force: true})
    }
}
export default new DashboardMenu();
