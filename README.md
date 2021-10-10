# Code Quiz | Javascript

Timed quiz on Javascript fundamentals that stores the high-scores.

## Description

In this application, I created a code quiz meant to check the user's knowledge of JavaScript fundaments.

## User Story

```
AS a user
I WANT to take a timed quiz on JavaScript fundamentals that stores my high score
SO THAT I can compare it with other users' high scores.

WHEN I open the application, I am presented with a start quiz container and instructions.

WHEN I click on start quiz button, I am presented with a question and timer starts

WHEN I click on an answer button:
* IF answer is CORRECT, I am displayed with another question
* IF answer is WRONG, I am deducted 5 seconds of the timer and question is displayed until I click the correct answer

WHEN all questions are answered, timer reaches 0 and a submit score container is displayed, where I am typing my 2 name initials and press submit score button. Then I can check my scores by visiting high scores page

WHEN timer reaches 0 but not all questions have been answered, I am presented with a game over container
```

## Link deployed application

Click [here](https://lianavaleria15.github.io/code-quiz/) to view to live deployed application.

## Technical steps

### HTML

- created start quiz container, which contains quiz information and `start quiz ` button
- built the quiz, game over and submit score containers in here, before building them dynamically in JavaScript

### CSS

- added style properties, used flex property and media queries for responsive design on different viewport sizes

### JAVASCRIPT

- added event listener on `start quiz` button to remove start container on click and render quiz questions
- added event handler on each `answer button` to submit the answer
- to check the answer given, used event handler
- added a timer function to display the time left
- when all questions were responded, added function to remove `quiz container` and display ` submit score container`
- added event listener on `submit score` button to set score to local storage
- in `high-scores.js` file added function to get high scores from local storage and display on page; added event listeners to clear local storage and go back to start quiz page

## Screenshots

### Start quiz container

![start quiz view](assets/images/screenshot_1.png)

### Question quiz container

![question quiz container view](assets/images/screenshot_2.png)

### Submit score container

![Submit score container viw](assets/images/screenshot_3.png)

### High scores page

![High scores page view](assets/images/screenshot_4.png)

### Game over container

![Game over container view](assets/images/screenshot_5.png)
