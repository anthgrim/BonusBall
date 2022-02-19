# Bonus Ball Coding Challenge - Full Stack With MERN MIT/xPro

## Description

This coding challenge is based on previous exercises of the Week 3 of the course.
The student is assigned with a task to add whatever new features is posible to create
for the student at this point of the course. 

This repository, showcases the a series of buttons to trigger an action directly to the ball
element, such as: 

1. Hide. When clicking this button, we add a class called **hide** which set the display property to none.
2. Unhide. This button removes the class **hide** from the ball element.
3. Get Random colors. This button triggers an event listener that calls the function **randomRGB** which returns a random rgb cluster, then this result is set to the background color of the ball element.
4. Move Right. This button triggers an event listener to move the ball element to the right.
5. Move Left. This button triggers an event listener to move the ball element to the left.
6. Move Down. This button triggers an event listener to move the ball element down.
7. Move Up. This button triggers an event listener to move the ball element up.
8. Random Ball. This button adds an interval to the ball to repeat a movement from left to right, and reversing direction when hitting an edge. 
9. Stop Random. Stops the random ball interval.

## Functions used

* calculateMove: Is a function that needs three arguments, the ball element, moveType and moveDirection. This function prompts the user to input the number of pixels the ball should move in the respective direction. This input is parse to an integer to make the calculations possible. Then it gets the current position on X or Y, depending on the move direction that was passed, and then adds the move direction to a result variable. This result will depend on the move type (plus or minus).

### Link to the gitPage

https://anthgrim.github.io/BonusBall/