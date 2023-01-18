## Available Scripts
Getting Started

Firstly run  `npm install`

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run jsdoc`

Generates jsdoc file if it is not exists. After that go to directory jsdoc/index.html and run it via Live Server vs code extension to see documentation details on the browser as a html.  

## Description

Rendered leaflet world map on home page. By clicking to any country popup will appear with clicked country name on it. When double click to any country map will zoom on it and after 1.5 second app will redirect to detail page. If occurs any error on data fetching, the user will redirect to ErrorBoundry page. 

## Note
I can not handle with appeared errors on testing proccess with leaflet 3th party library. That's why I am aware that I need to improve myself in ui testing. Thanks in advance for your respond.
