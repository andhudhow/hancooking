
import React from 'react';
import { connect } from 'react-redux';

import LoginFormContainer from '../main/login_form_container';
import SignupFormContainer from '../main/signup_form_container';
import ConfirmSaveRemovalContainer from '../recipe_box/confirm_save_removal_container';
import { closeModal } from '../../actions/modal_actions';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  let className;
  
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      className = "modal-child"
      break;
    case 'signup':
      component = <SignupFormContainer />;
      className = "modal-child"
      break;
    case 'removeSave':
      component = <ConfirmSaveRemovalContainer />;
      className = "remove-confirm"
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className={className} onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
