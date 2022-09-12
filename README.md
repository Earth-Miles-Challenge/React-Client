# Client App

The platform frontend is created using React, with Redux used for state management. We will use functional components with hooks and React Router for routing.

## Current Project

The current frontend project is to create version 0.1 of the client app. The purpose of this initial version is to create a working model of the frontend application without worrying about any backend components. When this project is complete, a user would be able to experience the key aspects of the system:

- Profile creation for athletes (including Strava connection)
- Creating pledges to athletes
- Viewing the status of pledges
- Browsing and searching for athletes

Instead of wiring up a backend, we will use `localStorage` for persistent user data (including any pledges made by the user) and a hard-coded array of sample athletes. 

You can find the project status here: 

https://github.com/orgs/Earth-Miles-Challenge/projects/2

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
