# IT-jobb i Kalmar

![Repo status](https://img.shields.io/badge/status-maintained-brightgreen.svg)

![Travis build status](https://travis-ci.org/IT-jobb-Kalmar/gatsby-it-jobb-i-kalmar.svg?branch=master)

[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

This site runs in a serverless environment backed by static resources and generated JSON structures.

## 🚀 Quick start

1.  **Install the Gatsby CLI.**

    The Gatsby CLI is needed to start development env or build a public dist

    ```sh
    # install the Gatsby CLI globally
    npm install -g gatsby-cli
    ```

2.  **Create a Gatsby site.**

    Install dependencies

    ```sh
    npm install
    ```

3.  **Start developing.**

    Start the development server.
    The page will automatically reload if you make changes to the code.
    You will see the build errors and lint warnings in the console.

    ```sh
    gatsby develop
    ```

4.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    *Note: You'll also see a second link: `http://localhost:8000___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://next.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).*

## GIT-flow

This project follows [GIT-flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) where master should always be considered to be the latest stable version, all development will be done on either `develop` or `feature/xx` branch.

## CI (Travis)

This project uses [Travis](https://travis-ci.org/) as a CI provider and will automatically deploy new releases on the master branch to live environment.

To install [Travis CLI](https://github.com/travis-ci/travis.rb) on OSX run the following command:

`ARCHFLAGS=-Wno-error=unused-command-line-argument-hard-error-in-future gem install travis`
