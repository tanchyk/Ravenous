import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BuisnessList';

class App extends React.Component {
    render() {
        return (
            <div class="App">
                <h1>ravenous</h1>
                <SearchBar />
                <BusinessList />
            </div>
        );
    }
};

export default App;