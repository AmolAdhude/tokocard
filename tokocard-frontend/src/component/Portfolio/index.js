import { Component } from "react";

import "./index.css";

class Portfolio extends Component {
  state = {
    imageList: [],
  };

  componentDidMount = () => {
    this.getImages();
  };

  getImages = async () => {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=1&limit=5"
    );
    const data = await response.json();
    if (response.ok === true) {
      const imageData = data.map((each) => ({
        id: each.id,
        url: each.url,
        downloadUrl: each.download_url,
        author: each.author,
        height: each.height,
        width: each.width,
      }));
      this.setState({
        imageList: imageData,
      });
    }
  };

  renderImageDetails = () => {
    const { imageList } = this.state;
    return (
      <div className="list-image">
        {imageList.map((image) => (
          <img
            src={image.downloadUrl}
            key={image.id}
            alt="profileImage"
            className="images"
          />
        ))}
      </div>
    );
  };

  render() {
    return (
      <div className="portfolio-container">
        <h1 className="portfolio-heading">Portfolio</h1>
        <p className="portfolio-info">
          Lorem lpsum is simply dummy text of the parinting and typesettig
          industry. Lorem Ipsum has been the industry's standard dummy te ever
          since the 1500s.
        </p>
        {this.renderImageDetails()}
      </div>
    );
  }
}
export default Portfolio;
