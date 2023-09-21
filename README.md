# knight-trevails

Live preview of the site is available  [here](https://lknapp1888.github.io/knight-travails/)

## Project aims

To use a data structure that is similar to a binary tree to establish the shortest possible sequence of moves for a knight on a chess board to get from one given square to another.

To create a webpage to visualise the sequence of moves from the start point to the end point.

## Technologies used

HTML, CSS and JavaScript

## Methodology

We have a Knight class with three properties:

1. Current coordinates (starting position)
2. An array of it's previous path: `prevMov`
3. An array of the potential coordinates it can move to (maximum 8): `moveList`

A `trevail()` function accepts a starting coordinate and a target coordinate. It initialises a Knight with the starting coordinate and a queue using a `Queue` constructor. The Knight is enqueued to the queue.

While there is a knight in the queue, we check to see if its current coordinates match the target coordinates, if it does then we save its path to the path array and break out of the loop as this means we have found a correct path. If the target coordinate do not match then we take the Knights potential move list array and create a new knight for coordinate on the movelist. We add each of these knights to the queue and repeat the loop.

This loop establishes the shortest possible set of moves from one coordinate to another by calculating all of the potential target coordinates from one point, then all of the potential target coordinates from each of those points, repeating this loop until a 'match' is found with the original target coordinates.

Given that the travail function keeps track of visited squares (and have therefore already checked that squares move list) and does not create a new knight for visited squares, the time complexity of the algorithm is reduced.

## Outcomes

- Learnt to utilise queue algorithm with `enqueue()` and `dequeue()` operations
- Improved understanding of 'tree-like' data structures. How these can solve problems such as 'Knight Travails' in addition to considering other potential use cases

## Challenges

I set out to not rely on an existing solution for the problem so it was quite challenging to establish an algorithm. My research point me towards using a queue algorithm, but the remainder of the travail function was written with minimal online research, and was built off previous learning of data structures (etc. Binary search trees, linked lists). This did ensure that the project was an exercise in logical thinking and problem solving, and was at times quite difficult.

## Potential improvements

- Improve commenting throughout the application.
- Use a more time efficient algorithm.
- Spell 'trevail' correctly throughout the application