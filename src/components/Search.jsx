import React from 'react';

class Search extends React.Component {
    state = {
        search: '',
        type: '',
    };

    handlerSearch = (e) => {
        if (e.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    };

    handlerRadio = (e) => {
        this.setState(
            () => ({
                type: e.target.value,
            }),
            () => {
                this.props.searchMovies(this.state.search, this.state.type);
            }
        );
    };

    handlerBTn = () => {
        this.props.searchMovies(this.state.search, this.state.type);
    };

    render() {
        return (
            <div className='row'>
                <div className='search'>
                    <input
                        placeholder='Search'
                        type='search'
                        className='validate'
                        value={this.state.search}
                        onChange={(e) => {
                            this.setState({ search: e.target.value });
                        }}
                        onKeyDown={this.handlerSearch}
                    />
                    <button className='btn' onClick={this.handlerBTn}>
                        Search
                    </button>
                </div>

                <div>
                    <label>
                        <input
                            name='type'
                            value='all'
                            type='radio'
                            onChange={this.handlerRadio}
                        />
                        <span>ALL</span>
                    </label>

                    <label>
                        <input
                            name='type'
                            value='movie'
                            type='radio'
                            onChange={this.handlerRadio}
                        />
                        <span>MOVIE</span>
                    </label>

                    <label>
                        <input
                            name='type'
                            value='series'
                            type='radio'
                            onChange={this.handlerRadio}
                        />
                        <span>SERIES</span>
                    </label>
                </div>
            </div>
        );
    }
}

export { Search };
