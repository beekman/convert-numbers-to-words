# Arabic Number to English Word Representation converter
A tool that allows me to convert numbers formatted in Arabic numerals to the English word equivalent, e.g.:

1,572 => one thousand seventy two

Works for numbers from 0 (zero) through 1,000,000,000 (1 billion), and handle negative signs. Converts between numbers and words, so if I have a properly formatted word:

one million six hundred seventy five thousand four ->  1,675,004

There are three React component use-cases to test out this tool in interesting ways:

1. A simple text input that will convert between number and text.
2. A real-time clock that will convert between number and text.
3. A silly little clicky game of "99 bottles of beer on the wall" where you can set the initial number in numbers or text, and play it until you hit 0.

## Running React on Repl.it

[React](https://reactjs.org/) is a popular JavaScript library for building user interfaces.

[Vite](https://vitejs.dev/) is a blazing fast frontend build tool that includes features like Hot Module Reloading (HMR), optimized builds, and TypeScript support out of the box.

Using the two in conjunction is one of the fastest ways to build a web app.

### Getting Started
- Hit run
- Edit [App.tsx](#src/App.tsx) and watch it live update!

By default, Replit runs the `dev` script, but you can configure it by changing the `run` field in the [configuration file](#.replit). Here are the vite docs for [serving production websites](https://vitejs.dev/guide/build.html)