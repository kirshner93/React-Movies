import React from "react";

class RadioBtn extends React.Component {

    state = {
        TypeFilm : '',
    }

    handlRadio = (e) => {
        this.setState({[e.target.name]: e.target.value})
        this.props.searchMovies(undefined, this.state.TypeFilm)
    }

    render() {
        return   <div>
        <p>
          <label>
            <input name="TypeFilm" type="radio" value='' onChange={this.handlRadio} />
            <span>ALL</span>
          </label>
        </p>
        <p>
          <label>
            <input name="TypeFilm" value='movie' type="radio" onChange={this.handlRadio} />
            <span>MOVIE</span>
          </label>
        </p>
        <p>
          <label>
            <input name="TypeFilm" value='series' type="radio" onChange={this.handlRadio} />
            <span>SERIES</span>
          </label>
        </p>
        
      </div>
    }
}

export {RadioBtn}