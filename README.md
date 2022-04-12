# Skin Packer for Minecraft Education Edition

This form was developed so that those who use Minecraft's Education Edition (who may have not used Mojang's online store) could easily compile the respective JSON files and information without worrying too much about the code, and UUIDs and all the other complicated stuff.

Link to the skin packer: https://mattheffnt.github.io/skin-packer/

## Features

This is a form where a user inputs the respective details for their skin file, uploads their custom skin PNG file and the MCPack is generated for them.In version two, users can now add multiple skins to their MCPack. Users can also now see their skin in realtime and how it will look in-game.

Additionally, run this command in command pro
  
```
  
  curl https://raw.githubusercontent.com/MattHeffNT/skin-packer/master/removeSkins.bat -o removeSkins.bat
  
```
  
remove skins script</a>) that Windows users can download and use by simply double clicking the file and following through the prompts. The batch script is an easy automated way to delete any custom skinpacks that they user may have imported into Minecraft Education. When I get time I'll add a script for Linux and OSX.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Dependencies

-   UUID
-   JSZip
-   Filesaver
-   React Bootstrap
-   React-Dom
-   gh-pages-deploy
-   react-skinview3d

## To Do

-   Some errors occuring when a user clicks button without filled out inputs.

-   Getting a "required field" tool tip when add skin button pressed....also need to improve UX as can be confusing to user when they've pressed add skin button and "nothing" seems to happen.

## Acknowledgements

Just wanted to give a big thank you to the creators of the react-skinview3d package (link below), and for working with me through some of the issues in intergrating it into this app.

https://github.com/Hacksore/react-skinview3d

## License

MIT © [MattHeffNT](https://github.com/MattHeffNT)
