import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyA6fVi2Fv8qsbj63es9bFS0z3h-CWyN_o4';


// create a new component. this component should produce some HTML

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}


// Take this component's generated HTML and put it on the DOM

ReactDOM.render(<App />, document.querySelector('.container'));