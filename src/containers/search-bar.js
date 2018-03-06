import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { videoSearch } from '../actions';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState(({ term: event.target.value }));
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.videoSearch(this.state.term);
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ videoSearch }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);