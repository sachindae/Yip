import React, { Component } from "react";
import ReactDOM from "react-dom";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }

  render() {
    return (
      <div>
      <h1>YOOOO</h1>
      <form>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
      </div>
    );
  }
}

export default Form;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;