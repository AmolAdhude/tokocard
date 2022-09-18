import "./index.css";
import Contact from "../Contact";
import About from "../About";
import Services from "../Services";
import Portfolio from "../Portfolio";
import Videos from "../Videos";
import Logo from "../Logo";
import Reviews from "../Reviews";

import { Component } from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FaSnapchat } from "react-icons/fa";

class Profile extends Component {
  state = {
    profileData: [],
  };

  componentDidMount = () => {
    this.getData();
  };

  getData = async () => {
    const url = "https://hxu2ux.sse.codesandbox.io/data";
    const response = await fetch(url);
    const output = await response.json();
    this.setState({ profileData: output });
  };

  render() {
    const { profileData } = this.state;
    const { name, post, company, profileImg } = profileData;
    return (
      <div className="profile-container">
        <div>
          <h1 className="banner">BANNER</h1>
        </div>
        <div className="profile-wrapper">
          <div className="profile-info">
            <img src={profileImg} alt="profile" className="profile-image" />
          </div>

          <div className="profile-text-container">
            <h1 className="name">{name}</h1>
            <p className="position">{post}</p>
            <h2 className="company-name">{company}</h2>
            <div className="social-icon">
              <FaFacebook className="facebook" />
              <AiFillTwitterCircle className="twitter" />
              <AiFillInstagram />
              <AiFillLinkedin className="linkedin" />
              <FaSnapchat className="snapchat" />
            </div>
          </div>
        </div>
        <Contact />
        <About />
        <Services />
        <Portfolio />
        <Videos />
        <Logo />
        <Reviews />
      </div>
    );
  }
}

export default Profile;
