import React, { Component } from "react";

class SignUpForm extends Component {
  state = {
    email: "",
    password: "",
    name: "",
    hasAgreed: false
  };

  handleChange = e => {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("The form was submitted with the following data:");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form-container">
          <div className="formField">
            <label className="formField-label" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="formField-input"
              placeholder="Enter your full name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label className="formField-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formField-input"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label className="formField-label" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formField-input"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="formField">
            <label className="formField-checkboxLabel">
              <input
                className="formField-checkbox"
                type="checkbox"
                name="hasAgreed"
                value={this.state.hasAgreed}
                onChange={this.handleChange}
              />
              I agree all terms and conditions.
            </label>
          </div>

          <div className="formField">
            <button className="button-primary">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}
export default SignUpForm;
