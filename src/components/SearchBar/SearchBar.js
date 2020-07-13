import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        };

        this.sortByOptions = {
            'Best Match' : 'best_match',
            'Highest Rated' : 'rating',
            'Most Reviewed' : 'review_count'
        };

        this.handleTermByChange = this.handleTermByChange.bind(this);
        this.handleLocationByChange = this.handleLocationByChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    //Sort panel

    getSortByClass(sortByOption) {
        if(sortByOption === this.state.sortBy) {
            return 'active';
        } else {
            return '';
        }
    }

    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>{sortByOption}</li>;
        });
    }

    //Methods for state setting

    handleTermByChange(event) {
        this.setState({term: event.target.value});
    }

    handleLocationByChange(event) {
        this.setState({location: event.target.value});
    }

    handleSortByChange(sortByOption) {
        this.setState({
            sortBy: sortByOption
        });
    }

    //Submit search

    handleSearch(event) {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault()
    }

    //render

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" onChange={this.handleTermByChange}/>
                    <input placeholder="Where?" onChange={this.handleLocationByChange}/>
                </div>
                <div className="SearchBar-submit" onClick={this.handleSearch}>
                    <a>Let's Go</a>
                </div>
            </div>
        );
    }
};

export default SearchBar;