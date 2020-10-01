# Skin Packer for Minecraft

Although there are options via Mojang's own account/website to be able to add custom skins etc. This form was developed so that those who primarily use Minecraft's Education Edition (who may have not used Mojang's online store) could easily compile the respective JSON files and information without worrying too much about the code, and UUIDs and all the other complicated stuff.

https://mattheffnt.github.io/skin-packer/

## Features

At the moment, the Skin Packer can only compile one custom skin file for the game, however I do plan on extending this capability. Essentially this is a form where a user inputs the respective details for their skin, uploads their custom skin PNG file and the MCPACK is generated for them.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running the project

clone it, then in the minecraft directory run NPM install, from there you can run the scripts

### Available Scripts

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm deploy` 

To push your respective React production build to a Github pages page. 

## Dependencies 

 - uuid
 - JSZip
 - Browserify
 - Filesaver
 - React Bootstrap
 - React-Dom
 - gh-pages-deploy
 
## To Do 

- future features should include being able to upload more than one image at a time 

- form validation

- better UX / Feedback