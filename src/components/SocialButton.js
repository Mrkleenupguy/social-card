import React, {Component} from 'react';

class SocialButton extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      actionCount: 0
    }
  }

  handleClick() {
    this.setState({ actionCount: this.state.actionCount + 1 });
  }

  render() {
    return (
      <div className="socialButton">
        <button onClick={this.handleClick}>{this.props.name}</button>
        <p>{this.state.actionCount}</p>
      </div>
    );
  }
}

export default SocialButton;