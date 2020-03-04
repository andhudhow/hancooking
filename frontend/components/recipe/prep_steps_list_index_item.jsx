import React from 'react';

const PrepStepListIndexItem = (props) => {
  return (
    <div>
    <p>Step {props.index}</p>
    <li key={props.index} className="prepStep">
      <span className="prepStep-quantity">{props.prepStep.quantity}</span>
      <span className="prepStep-desc">{props.prepStep.description}</span>
    </li>
    </div>
  )
};

export default PrepStepListIndexItem;