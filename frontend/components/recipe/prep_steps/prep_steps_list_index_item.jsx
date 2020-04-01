import React from 'react';

const PrepStepListIndexItem = (props) => {
  return (
    <div>
    <li key={props.index} className="prep-step">
      Step {props.prepStep.step}
      <p><span className="prep-step-desc">{props.prepStep.description}</span></p>
    </li>
    </div>
  )
};

export default PrepStepListIndexItem;