import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value:'', charsLeft: this.props.maxChars};
  }
  handleChange = (event) =>{
    this.setState({
      value: event.target.value,
      charsLeft: (this.props.maxChars - event.target.value.length)
    })

  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.value}/>
        <strong>{this.state.charsLeft}</strong> Characters Left
      </div>
    );
  }
}

export default TwitterMessage;
