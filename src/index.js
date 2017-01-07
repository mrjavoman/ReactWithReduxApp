import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyCXaqx9k8zFRAh4zU3vzQhbBzJ3cJiSodo"

// Create a new component. This component should produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Take Component and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));