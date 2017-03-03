# Angular Superhero Phonebook

> Source: [https://github.com/hannahhoward/angular-starter-wdi](https://github.com/hannahhoward/angular-starter-wdi)

## Prompt

What's the single worse feeling in the world? Answer: When disaster strikes, and you need to call a superhero, but you've forgot their phone number.

That's why you're going to build a Superhero Phone Book!

Your application will display a list of superheroes and their phone numbers in the browser. The user should be able to search that list and the list should be color-coded based on the hero's comics affiliation (e.g., DC, Marvel). You'll also want to add a button next to each superhero that, when clicked, causes the hero's image to be displayed on the page.

## Getting Started

Fork and clone this repository. You will be working in the provided three files: `index.html`, `app.js` and `style.css`.

To complete this assignment, you'll need to complete the following steps:

  X1. Bootstrap your angular application (i.e., create a module, use `ng-app`).
  X2. Create a controller.
  X3. Attach a controller to your view.
  X4. Define a collection of superheroes in your `app.js`. Each superhero should have a name, phone number, comics affiliation and image URL.
  X5. Use `ng-repeat` to render the list of superheroes.
  X6. Create a search form. Use `ng-model` to bind that form's input to a value in the view model.
  X7. Use `filter` to limit the number of superheroes shown in the browser based on user input
  X8. Use `ng-class` to add a class to each superhero in the list indicating their comics affiliation (e.g., `ng-class="marvel"`). Use that class to color code the list depending on their affiliation (e.g., all Marvel heroes should appear as blue).
  9. Add a button next to each superhero. When clicked, their image should appear within their listing (hint: use `$index`).

## Resources

* [Filter Documentation](https://docs.angularjs.org/api/ng/filter/filter)
* [ngClass Documentation](https://docs.angularjs.org/api/ng/directive/ngClass)
* [Intro to Angular Lesson Plan](https://github.com/ga-wdi-lessons/angular-intro)
* [AngularJS Tutorial](https://www.tutorialspoint.com/angularjs/)
* [ngRepeat Documentation](https://docs.angularjs.org/api/ng/directive/ngRepeat)

## Bonus

* Create a form that allows the user to add a superhero to the list.
* Create another form that allows you to edit a superhero in the list. This form should only appear when the user clicks an "Edit Hero" button.
