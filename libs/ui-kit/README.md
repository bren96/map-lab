# ui-kit

UI Primitives and Design System for MAP-LAB.
This library was generated with [Nx](https://nx.dev) using the React+Vite Builder.

This library uses React + Typescript for components, Vite for the build system, Vitest + Jest for unit testing, Storybook for integration testing and isolated component development, and Cypress from e2e testing.

## Running Storybook

Run `nx storybook ui-kit` or `nx run ui-kit:storybook`.
Starts a Storybook development server with HMR powered by Vite.

## Running Unit Tests

Run `nx test ui-kit` to execute the unit tests via [Vitest](https://vitest.dev/).

## Running Integration Tests

Run `nx test-storybook ui-kit` to execute the integrations tests via Storybook.

## Running E2e2 Tests

Run `nx e2e ui-kit` to exectute the e2e tests via Cypress.


## Generate Component

Run `nx g @nx/react:component new-component-name --project=ui-kit --style=scss` to generate a component via the Nx/React component generator.
