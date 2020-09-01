# Wallapop Technical Test

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [CSS](#css)
- [Testing](#testing)
  - [Unit tests](#unit-tests)
  - [E2E](#e2e)
- [Deployment](#deployment)
- [Notes](#notes)
- [Next Steps](#next-steps)

---

## Getting Started

Follow the next instructions to get a copy of the project up and running in your local machine.

### Prerequisites

- Install LTS version of [Node](https://nodejs.org/).
- [Yarn](https://yarnpkg.com/) is optional but highly recommended.

### Installation

Run the following commands:

```
git clone https://github.com/dfvalero/wallapop
cd wallapop
yarn
```

### Development

To be able to develop, follow the next steps:

- Copy the .env.example to a .env file:

```
cp .env.example .env
```

- Run the following command:

```
yarn dev
```

After that, your app will be available at [http://localhost:3000](http://localhost:3000)

### CSS

I used [Styled Components](https://styled-components.com/). There is also a reset and some global styles in src/components/GlobalStyles.tsx.

## Testing

### Unit tests

This app uses [Jest](https://jestjs.io/) to run Unit tests.

To run those tests, run the following command:

```
yarn test:unit
```

### E2E

This app uses [Cypress](https://www.cypress.io/) for all their E2E tests.

To run the tests, run the following commands:

```
yarn dev
yarn test:e2e:run
```

## Deployment

I'm using [Netlify](https://www.netlify.com/) to deploy the site manually.

Last Stable Version: [https://wallapop-test.netlify.app/](https://wallapop-test.netlify.app/)

## Notes

- I didn't have time to implement Sorting. Sorry.
- I didn't have time to unit test the Components. I added E2E tests for all the UI and business
  logic. I also added some unit tests for the context (business logic) and the utils.
- I didn't add Keyboard events in the Selector component.
- Menu UI is too big for mobile.
- I didn't implement the "search match highlight" in the item components.
-

## Next Steps

- Add Sorting.
- Add Components Unit tests.
- Add Keyboard Events to Selector component.
- Improve Menu UI.
- Add "search match highlight" to Item component.
- Add CI/CD
