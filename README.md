# Storydriven

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



## CODING CHALLENGE - STEPS OF DEVELOPEMENT

Firstly I have estimated the basic components needed for the application like header, footer and added the given images into new angular application assets file.

Next, I have spend a good time in creating the <nav> bar and the basic routings. I had implemented the background color change while scrolling down for the top-menu bar. If I had more time I would have worked with RoutingMoudle and would have made more UI rich features like Active-hover, language dropdown.

Then I worked on global stylings and mounted the all componets(header, footer and home) into the app-component.html file. After that I have worked on images from needed for the app. Initally I have kept the screenshot for top-menu bar bu then i have coded for that to make it feel more user responsive.

Next, I moved on to the form component, made my best to replicate the exisiting form from the website you mentioned, but i felt i could do it more effictive using Reative forms or Template-Driven forms concepts in angular. I have imported necessary modules for forms(FormsModule).

Then i have worked with services, for using REST API conepts, I have created a service file(imageapi.service.ts) where i have used the angular Dependency Injection concept to utilize the sources in home-component. It would have been an easy implementation you have provided the link to any public api for fetching data. *** I would like to hear from you if it was you, how you would have figured out this step ***.

For footer, i just added the screenshot, plaaced into assets folder and did some stylings to fit into the page.

For minification, I have used gulp, created gulpfile in the root folder of the app.

Steps to follow while installing:

1. Clone or download the repo from the git hub link here:

2. Open the terminal in VS and change the directory to the project folder

3. Then type npm install to install all the dependencies 

4. Once done, from the terminal type ng serve,  you should see the application up and runnig on locallost://4200

