# Recxtension

Do you want to create a chrome extension that show up on the devtools?
<br>
but most important... do you ❤️ React?
<br>
<br>
So, this template is for you!
<br>
<br>
I based my project on the [Yuri Drabik's tutorial](https://medium.com/@yuridrabik/create-chrome-devtools-extension-using-react-js-1b8e16e8dc72) (please support him on his [repo](https://github.com/yurist38/chromeDevToolsReactBoilerplate/tree/color-picker) 🙏) but I wanted to update it and add just the necessary dependencies to get a custom template/boilerplate and learning a bit about webpack 😄

## How does it work?
Please clone the repo
<br>
`git clone https://github.com/Darkensses/recxtension.git`
<br>
<br>
Then navigate to the folder and install the dependencies:
```
cd recxtension
npm install
```
To build the extension please type
<br>
`npm run build-ext`
<br>
<br>
This command executes a gulp task that build all the react project and the output will be on the build-ext folder. 

## Installing the extension
Go to [chrome://extensions/](chrome://extensions/) and activate the **developer mode**. 
<br>
Then click on `Load unpacked extension...` button and navigate to *~/build-ext* folder in your filesystem.
<br>
<br>
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and also with Webpack 📦🧊 and gulp 🥤


