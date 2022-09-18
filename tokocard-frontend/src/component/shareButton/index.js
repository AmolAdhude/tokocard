import React from "react";
import Popup from "reactjs-popup";
import "./index.css";

const ShareButton = () => (
  <Popup trigger={<button className="btn-book-now">share</button>} modal nested>
    {(close) => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header">
          <h1 className="card-heading ">
            Sharing Akhil Chakkravarthy's Tako Card
          </h1>
        </div>
        <div className="content">
          <form>
            <input
              type="text"
              className="input-field"
              placeholder="full name"
            />
            <ul className="share-list">
              <li>
                <input
                  type="radio"
                  id="whatsapp"
                  name="share_mode"
                  value="Whatsapp"
                />
                  <label for="whatsapp">Whatsapp</label>
              </li>
              <li>
                  <input type="radio" id="sms" name="share_mode" value="SMS" />
                  <label for="sms">SMS</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="email"
                  name="share_mode"
                  value="radio"
                />
                  <label for="email">Email</label>
              </li>
            </ul>
            <input
              type="text"
              className="input-field"
              placeholder="Enter Phone Number /  Enter Email"
            />
          </form>
        </div>
        <div className="actions">
          <button
            className="button submit-btn"
            onClick={() => {
              console.log("modal closed ");
              close();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    )}
  </Popup>
);

export default ShareButton;
