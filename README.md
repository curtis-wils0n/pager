# Pager 📖

Created by [Emily Villett](https://github.com/MeowPup) and [Curtis Wilson](https://github.com/curtis-wils0n) for Lighthouse Labs' full-time web development bootcamp final project.

> This project is intended as a proof of concept, and should not be hosted or used as a secure, stand-alone site.

## Summary

Pager is a simple, user-driven social media platform designed for readers to collect, review, and curate lists of their favourite books.

![homepage](https://github.com/curtis-wils0n/pager/blob/main/public/docs/homepage.png?raw=true)

By paring down the plethora of features offered by current book-review platforms, Pager offers a cleaner, more approachable solution that focuses on expanding your collections.

## Tech Stack

Pager utilizes React, Material UI, and Express to interact with its PostgreSQL database, hosted [here](https://github.com/curtis-wils0n/pager-api).

## Screenshots

![dashboard](https://github.com/curtis-wils0n/pager/blob/main/public/docs/dashboard.png?raw=true)

Your dashboard updates with all the latest reviews and popular books.

![my shelf](https://github.com/curtis-wils0n/pager/blob/main/public/docs/shelf.png?raw=true)

Your shelf is your core collection of books you've read, or want to read.

![reviews](https://github.com/curtis-wils0n/pager/blob/main/public/docs/reviews.png?raw=true)

Keep track of how you enjoyed each book, and recommend it to your friends (or tell them to steer clear)!

![lists](https://github.com/curtis-wils0n/pager/blob/main/public/docs/lists.png?raw=true)

Curate and share lists of books, joined together by a common theme unique to you.

## Dependencies

- `@mui` - v 5.10.15
  - `/material`
  - `/icons-material`
- `axios` - v 1.2.0
- `react` - v 18.2.0
- `react-dom` - v 18.2.0
- `react-router-dom` - v 6.4.3
- `react-scripts` - v 5.0.1
- `web-vitals` - v 2.1.4

## Setting Up
1. Clone this repository onto your local device
2. Install dependencies with `npm install`
3. Follow steps to set up server [here](https://github.com/curtis-wils0n/pager-api)
4. Start web server by running `npm start`, which should open a React app in your default browser.