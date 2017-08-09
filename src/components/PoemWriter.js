import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      error: true
    };
  }

  handleChange = event =>{
    let messageByLine = event.target.value.split('\n').filter(function(element){return element})
    let lines = messageByLine.length
    let firstLineNumWords
    let thirdLineNumWords
    if(lines>2){
      firstLineNumWords = messageByLine[0].split(' ').length
      thirdLineNumWords = messageByLine[2].split(' ').length
    }
    this.setState({
      value: event.target.value
    })
    if(lines === 3 && firstLineNumWords===5 && thirdLineNumWords===5){
      this.setState({
        error: false
      })
    } else {
      this.setState({
        error: true
      })
    }
  }

  render() {
    if(this.state.error){
      return (
        <div>
          <textarea
            rows="3"
            cols="60"
            value = {this.state.value}
            onChange={this.handleChange}
          />
          <div
            id="poem-validation-error"
            style={{color: 'red'}}
          >
             This poem is not written in the right structure!
          </div>
        </div>
      )} else {
        return (
          <div>
            <textarea
              rows="3"
              cols="60"
              value = {this.state.value}
              onChange={this.handleChange}
            />
          </div>
        )
      }

  }
}

export default PoemWriter;
