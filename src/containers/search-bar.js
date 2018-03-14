import React, { Component } from 'react';
import { videoSearch } from '../actions';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            term: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState(({ term: event.target.value }));
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.history.push({
            pathname: '/videos',
            state: {
                term: this.state.term
            }
        });
        this.setState({ term: ''});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
               <input 
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
               />
            </form>
        )
    }
}

export default SearchBar;