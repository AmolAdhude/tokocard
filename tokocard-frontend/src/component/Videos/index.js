import "./index.css";
import ReactPlayer from "react-player";

const Videos = () => (
  <div className="videos-container">
    <h1 className="videos-heading">Videos</h1>
    <p className="videos-info">
      Lorem lpsum is simply dummy text of the parinting and typesettig industry.
      Lorem Ipsum has been the industry's standard dummy te ever since the
      1500s.
    </p>
    <div className="player-container">
      <ReactPlayer
        url="https://youtu.be/sIYx-OuytSs"
        className="yt"
        width="480px"
        height="240px"
      />
      <ReactPlayer
        url="https://youtu.be/sIYx-OuytSs"
        className="yt"
        width="480px"
        height="240px"
      />
      <ReactPlayer
        url="https://youtu.be/sIYx-OuytSs"
        className="yt"
        width="480px"
        height="240px"
      />
      <ReactPlayer
        url="https://youtu.be/sIYx-OuytSs"
        className="yt"
        width="480px"
        height="240px"
      />
    </div>
  </div>
);

export default Videos;
