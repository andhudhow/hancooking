import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="login-error" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleDemoLogin(e) {
    this.props.closeModal();
    return this.props.login({ email: 'andhudhow@gmail.com', password: 'password'})
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <img src={window.logoURL} />
          <br/>
          Please {this.props.headerText} below or {this.props.otherForm}
          <div onClick={this.props.closeModal} className="close-x">&times;</div>
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label className ="login-form-box">
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
                placeholder="Email Address"
              />
            </label>
            <br/>
            <label className ="login-form-box">
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="Password"
              />
            </label>
            <br/><br/>
            <input className="session-submit" type="submit" value={this.props.buttonText} />
          </div>
        </form>
        <button className="session-submit demo" onClick={this.handleDemoLogin}>🇰🇷 Log in as demo user 🇰🇷</button>
      </div>
    );
  }
}

export default withRouter(SessionForm);
