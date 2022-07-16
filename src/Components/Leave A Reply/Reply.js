import React from "react";

import "./Reply.css";

const Reply = () => {
  return (
    <div>
      <div className="reply">
        <div className="reply_container">
          <div className="reply_head">
            <h2>Leave a Reply </h2>
            <hr />
          </div>
          <div className="reply_para">
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
          </div>
          <form action="post" className="reply_form">
            <label for="name">Name*</label>
            <br />
            <input required type="text" name="name" id="name" />
            <br />
            <label for="email">Email*</label>
            <br />
            <input required type="email" id="email" name="email"></input>
            <br />
            <label for="w3review">Comment*</label>
            <br />
            <textarea
              required
              id="w3review"
              name="w3review"
              rows="8"
              cols="60"
            ></textarea>
            <br />
            <button type="submit" id="reply_btn" value="Submit">
              Post Comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reply;
