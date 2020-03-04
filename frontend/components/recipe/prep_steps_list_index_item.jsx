import React from 'react';

const PrepStepListIndexItem = (props) => {
  return (
    <div>
    <li key={props.index} className="prepStep">
      Step {props.prepStep.step}
      <p><span className="prepStep-desc">{props.prepStep.description}</span></p>
    </li>
    </div>
  )
};

export default PrepStepListIndexItem;