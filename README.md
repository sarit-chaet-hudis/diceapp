# A two-player hot-seat dice game

![mobile screenshot](https://github.com/sarit-chaet-hudis/diceapp/blob/main/src/assets/mobile-screenshot.png)

![components structure](https://github.com/sarit-chaet-hudis/diceapp/blob/main/src/assets/components.png)

Players choose how many times to roll the dice and whoever gets faster to the target score- wins!
The catch is, if you roll 6-6 or any other double, you lose all the points of the current round, and lose your turn.

responsive and tested for desktop and mobile.

## live link available at https://dice-app-sarit.netlify.app/

## Components

_Game_ component holds most of the game logic and states.
player's scores and turns, handling all dice events, winning, etc. New game and changing the points to win.

_GameControls_ holds the game buttons and dice rolling logic, all ascend to be handeled in the parent Game component. Also displays current score and user message.

Player display is handled in the _Player_ components (child of Game).

Dice display is handled in the _Die_ components (child of GameControls).

## Known Issues and Backlog

- cannot accept number smaller than 20 to PointsToWin
- Option to change player's names (and avatars)
  Code Cleaning:
- set initial state as outside file and import on init game
- create all buttons and input field as components

created by sarit chaet hudis over a cold rainy weekend. enjoy!

bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
