import React, {Component} from 'react';

import SocialButton from './SocialButton';

class SocialCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="iconCol">
          <div className="userIcon">
            <img src="logo192.png" className="userImage" alt="React log"></img>
          </div>
        </div>
        <div className="contentCol">
          <div className="userInfo">
              <p className="userName">{this.props.posterUsername}</p>
          </div>

          <div className="cardContent">
            <span className="contentText">Hey! This is a new post from the React Team!</span>
            <img className="contentPreview" src="https://i.ytimg.com/vi/Hf38ewx2bdA/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIZCGAFwAQ==&rs=AOn4CLBDOdpzUL4FAj92kmmCuWaubQohgQ"></img>
          </div>
          
          <div className="socialButtons">    
            <SocialButton name="Like" />
            <SocialButton name="Share" />
            <SocialButton name="Subscribe" />
          </div>
        </div>

      </div>
    );
  }
}

export default SocialCard;
