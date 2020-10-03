import React from "react";
import "./Login.scss";

import FormInput from "../formInput/FormInput";
import CustomButton from "../customButton/CustomButton";
import { auth, signInWithGoogle } from "../../firebase/firebase";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  // handles
  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="login">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            label="email"
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            label="password"
            onChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Login</CustomButton>
            <CustomButton type="button" isGoogleBtn onClick={signInWithGoogle}>
              Google Login
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
