import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors, ui }) => {
  return {
    errors: errors.session,
    redirectPath: ui.redirect,
    formType: 'signup',
    headerText: 'sign up',
    buttonText: 'Sign up'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    otherForm: (
      <a onClick={() => dispatch(openModal('login'))}>
        log in here
      </a>
    ),
    closeModal: () => dispatch(closeModal()),
    login: (user) => dispatch(login(user))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SessionForm)
);
