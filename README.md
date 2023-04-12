# Converting numbers to English words
As a super hip person who thinks numbers are passe, I want to create a tool that allows me to convert numbers formatted in Arabic numerals to the English word equivalent, e.g.:

1,572 => one thousand seventy two

I want to be able to do this for at least numbers from 0 (zero) through 1,000,000,000 (1 billion), and handle negative signs. AND! I want to be able to convert between numbers and words, so if I have a properly formatted word:

one million six hundred seventy five thousand four ->  1,675,004

To make this a little fun and interesting, I have three React component use-cases for you to build out to test out this tool in interesting ways!

1. A simple text input that will convert between number and text.
2. A real-time clock that will convert between number and text.
3. A silly little clicky game of "99 bottles of beer on the wall" where you can set the initial number in numbers or text, and play it until you hit 0.

Take as many liberties as you want, both in terms of the logic and in terms of making the components your own, as long as it is demoable! You can do one, two, or all three of them, or make your own fun use case!

## Running React on Repl.it

[React](https://reactjs.org/) is a popular JavaScript library for building user interfaces.

[Vite](https://vitejs.dev/) is a blazing fast frontend build tool that includes features like Hot Module Reloading (HMR), optimized builds, and TypeScript support out of the box.

Using the two in conjunction is one of the fastest ways to build a web app.

### Getting Started
- Hit run
- Edit [App.tsx](#src/App.tsx) and watch it live update!

By default, Replit runs the `dev` script, but you can configure it by changing the `run` field in the [configuration file](#.replit). Here are the vite docs for [serving production websites](https://vitejs.dev/guide/build.html)