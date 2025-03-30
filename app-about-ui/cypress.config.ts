import { defineConfig } from "cypress";
import * as Webpack from 'webpack';
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { devServer } from '@cypress/webpack-dev-server';
import DevServerConfig = Cypress.DevServerConfig;
import * as path from "path";


const webpackConfig = (cypressConfig: Cypress.PluginConfigOptions): Webpack.Configuration => {
 return {
   resolve: {
     extensions: ['.js','.ts']
   },
   module: {
     rules:[
       {
         test: /\.feature$/,
         use: [
           {
             loader: '@badeball/cypress-cucumber-preprocessor/webpack',
             options: cypressConfig
           }
         ]
       }
     ]
   }
 }
}
export default defineConfig({
  component: {
    devServer(devserverConfig: DevServerConfig): any {
      return devServer({
         ...devserverConfig,
        framework: "angular",
        webpackConfig: webpackConfig(devserverConfig.cypressConfig),
        options: {
           projectConfig: {
             root: '',
             sourceRoot: '.',
             buildOptions: {
               tsConfig: 'cypress/tsconfig.json'
             }
           }
        }
      });
    },
    specPattern: "cypress/component/**/*.feature",
    supportFolder: 'cypress/support',
    screenshotOnRunFailure: true,
    video: false,
    setupNodeEvents: async (on, config) => {
      await addCucumberPreprocessorPlugin(on, config);
      await on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
  },
});
