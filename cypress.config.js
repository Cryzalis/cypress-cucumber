const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const webpack = require('@cypress/webpack-preprocessor');
const {
    addCucumberPreprocessorPlugin
} = require('@badeball/cypress-cucumber-preprocessor');

module.exports = defineConfig({
    env: {
        issuePrefix: 'https://your.domain.atlassian.net/browse/',
        tmsPrefix: 'https://some.testrail.instance/path/suite/caseID-'
    },
    defaultCommandTimeout:15000,
    //specPattern: "cypress/e2e/features/*.feature",
    
    e2e: {
        baseUrl:"https://portal.telnyx.com",
        experimentalSessionAndOrigin: true,
        setupNodeEvents: async function (on, config) {
            await addCucumberPreprocessorPlugin(on, config);
            on(
                'file:preprocessor',
                webpack({
                    webpackOptions: {
                        resolve: { extensions: ['.ts', '.js'] },
                        module: {
                            rules: [
                                {
                                    test: /\.feature$/,
                                    use: [
                                        {
                                            loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                                            options: config
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                })
            );
            allureWriter(on, config);
            return config;
        }
    }
});
