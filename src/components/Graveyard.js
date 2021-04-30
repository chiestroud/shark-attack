import React from 'react';
import PropTypes from 'prop-types';
import GraveStone from './GraveStone';

function Graveyard({ dearlyBeloved }) {
  return (
    <div className='Graveyard'>
      <h2 className='title'>Graveyard</h2>
      {dearlyBeloved.map((student) => (
        <GraveStone key={student.id}
          firstName={student.firstName}
          lastName={student.lastName}
        />
      ))}
    </div>
  );
}

Graveyard.propTypes = {
  dearlyBeloved: PropTypes.array.isRequired
};

export default Graveyard;
