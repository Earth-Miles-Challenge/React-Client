# Client App

The platform frontend is created using React, with Redux used for state management. We will use functional components with hooks and React Router for routing.

## Current Project

The current frontend project is to build the initial version of the Commutes feature. When this project is complete, people can use the platform to link their Strava account and track the CO2 emissions savings they are generating by swapping their fossil fuel-powered commute for a human-powered commute.

The purpose of this initial version is to build a working model of the front-end application while keeping the back-end as slim as possible. When finished, you will be able to use the platform like this:

1. Connect your Strava account. 
2. See a list of your past Commute activities and calculate the CO2 emissions savings for each of those activities.
3. Return to the site after adding a new Commute activity in Strava and get your CO2 emissions by clicking a button. 

Instead of wiring up a backend, we will use `localStorage` for persistent user data. We will also not use Strava webhooks yet but will save that for the second iteration.

You can find the project status here: 

https://github.com/orgs/Earth-Miles-Challenge/projects/4

## Folder Structure

We will implement the feature-driven project structure outlined in [this article](https://profy.dev/article/react-folder-structure) from Profy. 


```sh
src
|
+-- assets            # assets folder can contain all the static files such as images, fonts, etc.
|
+-- components        # shared components used across the entire application
|
+-- config            # all the global configuration, env variables etc. get exported from here and used in the app
|
+-- features          # feature based modules
|
+-- pages             # individual pages
|
+-- test              # test utilities and mock server
|
+-- utils             # shared utility functions
```

Additional root-level folders may be necessary as the application grows, though initially the above should suffice and is simple enough to work with. Where a new file appears to require a new folder, we can find inspiration from the [Bulletproof React project structure](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md), which is a more detailed breakdown of the feature-driven project structure.
