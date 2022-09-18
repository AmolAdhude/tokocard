import { Component } from "react";

import { AiFillStar } from "react-icons/ai";

import "./index.css";

class Reviews extends Component {
  state = {
    showAllReviews: false,
    reviewsData: [],
  };
  componentDidMount = () => {
    this.getReviews();
  };

  getReviews = async () => {
    const url = "https://hxu2ux.sse.codesandbox.io/review";
    const response = await fetch(url);
    const output = await response.json();
    this.setState({ reviewsData: output, showAllReviews: true });
  };

  renderReviews = () => {
    const { reviewsData } = this.state;
    return (
      <div>
        <ul className="review-list">
          {reviewsData.map((eachReview) => (
            <li className="review-container" key={eachReview.id}>
              <img
                src={eachReview.image}
                alt="profileImage"
                className="review-pic"
              />
              <div className="review-text-container">
                <p>{eachReview.review}</p>
                <div className="star-container">
                  <AiFillStar className="stars" />
                  <AiFillStar className="stars" />
                  <AiFillStar className="stars" />
                  <AiFillStar className="stars" />
                  <AiFillStar className="stars" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  render() {
    return (
      <div className="reviews-container">
        <h1 className="reviews-heading">Reviews</h1>
        <div>
          <ul className="star-container star-list">
            <li>
              <AiFillStar className="bigstars" />
            </li>
            <li>
              <AiFillStar className="bigstars" />
            </li>

            <li>
              <AiFillStar className="bigstars" />
            </li>

            <li>
              <AiFillStar className="bigstars" />
            </li>

            <li>
              <AiFillStar className="bigstars" />
            </li>
            <span className="rating">5/5</span>
          </ul>
        </div>
        {this.renderReviews()}
      </div>
    );
  }
}
export default Reviews;
