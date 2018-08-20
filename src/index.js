import React from 'react';
import ReactDOM from 'react-dom';

// create a new component. this component should produce some HTML

const App = () => {
    return <div>Hi!</div>;
}


// Take this component's generated HTML and put it on the DOM

ReactDOM.render(<App />, document.querySelector('.container'));