import React from 'react';

import PrepStepListIndexItem from './prep_steps_list_index_item'

const PrepStepListIndex = (props) => {
  return (
    <div className="prepStep-wrap">
      <ul className="prepStep-list">
      {props.prepSteps.map((prepStep, index) => (
        <PrepStepListIndexItem prepStep={prepStep} key={index} />
      ))}
      </ul>
    </div>
  )
}

export default PrepStepListIndex;