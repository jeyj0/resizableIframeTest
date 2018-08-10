# Resizable iframe Test

A simple project to test an url in a resizable iFrame. This is especially helpful for testing on mobile devices.

## How to use

### Initial setup

Just run `$ npm i`

### General

Run `$ npm start`, which will start the tool on http://localhost:1234/.

Then simply type in the url you want to load in the dedicated input field, hit enter (or otherwise invoke an onChange-event) and you will see the iframe loading the desired page. You can then adjust the size of the iframe by using the Width and Height input fields. Note: on iOS the height does not work - the iframe will always have the full required height to display the content. 