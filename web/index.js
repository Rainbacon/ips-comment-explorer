import React from 'react';
import ReactDOM from 'react-dom';

var App = require('./output/IPSComments.App');

function main() {
    ReactDOM.render(<App.app />, document.getElementById('app'));
}

if (module.hot) {
    module.hot.accept(function() {
        console.log('Realoaded, running main again');
        main();
    });
}

console.log('Starting app');
main();