import React from 'react';
import MovieItem from './MovieItem';
import ListGroup from 'react-bootstrap/ListGroup';

class Display extends React.Component {
    render() {
        let displayMovies = this.props.movies.map((movie) => {
            return <MovieItem 
                        key={movie.imdbID} 
                        movie={movie} 
                        handleClick={this.props.handleClick} 
                        displayNominate={this.props.displayNominate}
                        isNominated={this.props.isNominated}
                        nominations={this.props.nominations}
                    />
        });
        let msg = this.props.displayNominate ? this.props.error : "No nominations";
        let displayMsg = <p>{msg}</p>;

        return (
            <div className="display">
                <h5>{this.props.title}</h5>
                {
                    displayMovies.length ?
                    <ListGroup>
                        {displayMovies}
                    </ListGroup> :
                    displayMsg
                }
            </div>
        );
    }
}

export default Display;