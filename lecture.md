route parameters - part of the route that may change value
ex/. localhost:3000/blogs/:id

findById() finds the object with the certain id

in node, we cannot set redirect as a response

partials are usable components
views are template engines for embedding js

mongoose is use for mongoDB simplification of codes
morgan is use for console logs

MVC basics
Model, View, Controller approach
-way of structuring codes
-keeps code modular and more reusable and easier to read

-MVC is an architectural pattern consisting of three parts: Model, View, Controller.
Model: Handles data logic.
View: It displays the information from the model to the user.
Controller: It controls the data flow into a model object and updates the view whenever data changes.

Model
It is known as the lowest level which means it is responsible for maintaining data. Handle data logically so it basically deals with data. The model is actually connected to the database so anything you do with data. Adding or retrieving data is done in the model component. It responds to the controller requests because the controller never talks to the database by itself. The model talks to the database back and forth and then it gives the needed data to the controller. Note: the model never communicated with the view directly.

View
Data representation is done by the view component. It actually generates UI or user interface for the user. So at web applications when you think of the view component just think the Html/CSS part. Views are created by the data which is collected by the model component but these data aren’t taken directly but through the controller, so the view only speaks to the controller.

Controller
It’s known as the main man because the controller is the component that enables the interconnection between the views and the model so it acts as an intermediary. The controller doesn’t have to worry about handling data logic, it just tells the model what to do. After receiving data from the model it processes it and then it takes all that information it sends it to the view and explains how to represent to the user. Note: Views and models can not talk directly.
