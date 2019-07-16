import React from "react";

class Rating extends React.Component {
  state = {
    rating: this.props.rating || 2.5,
    temp_rating: null
  };
  rate = rating => {
    this.setState({
      rating: rating,
      temp_rating: rating
    });
  };
  star_over = rating => {
    this.setState({
      rating: this.state.rating,
      temp_rating: this.state.temp_rating
    });
  };
  star_out = () => {
    this.setState({ rating: this.state.rating });
  };
  render() {
    console.log(this.props.rating);
    var stars = [];

    for (var i = 1; i <= 5; i++) {
      var klass = "star-rating__star";

      if (this.state.rating >= i && this.state.rating != null) {
        klass += " is-selected";
      }

      stars.push(
        <label
          className={klass}
          onClick={this.rate.bind(this, i)}
          onMouseOver={this.star_over.bind(this, i)}
          onMouseOut={this.star_out}
        >
          ★
        </label>
      );
    }

    return <div className="star-rating">{stars}</div>;
  }
}
export default Rating;
