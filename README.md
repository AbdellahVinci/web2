# Projet-DevOps1 - Group 27:

## Group Members

- Azzouz Abdellah
- Diallo Ibrahima
- Kassa Luyinduladio Bryan

## Project Description

This project is a web application that allows users to propose the registration of new planets in the solar system. The application includes validation features to ensure that planet names are unique and that their characteristics are realistic. The project is developed using Node.js and Express, and it follows the principles of Test-Driven Development (TDD) and pair programming.

## How to Run the Project

1. Clone the repository to your local machine.
2. Run `npm install` to install dependencies.
3. Run `npm test` to execute the Jasmine tests.

## Key Files

- `Src/validate.js`: Contains the `Main` class with the `addPlanete` method for validating and adding planets.
- `Spec/planete.spec.js`: Contains the Jasmine tests for the `addPlanete` method.


- `app.js`: The main entry point of the application.
- `routes/form.js`: Handles the routes for adding and displaying planets.
- `views/form.hbs`: The Handlebars template for the form and the list of planets




## Clarification

At the beginning, we thought we had to create the form on the website, so we added `form.js` and `form.hbs`. 
However, after sending an email to you, we were informed that it should be done with Jasmine.
As a result, we added `validate.js` and `planete.spec.js`. 
Additionally, we had many commits where we used "exoplanetes" instead of "planetes" because we didn't realize that we needed to create a planet and not an exoplanet. 
We also encountered issues with Jasmine, which caused many commits to fail in the pipeline. 
We have since corrected this and resolved all these issues.
