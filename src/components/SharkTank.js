import React from 'react';
import PropTypes from 'prop-types';
import LiveStudent from './LiveStudent';

function SharkTank({ aliveStudents }) {
  return (
    <div className='SharkTank'>
      <h2 className="title">Shark Tank</h2>
      {aliveStudents.map((student) => (
        <LiveStudent key={student.id}
          firstName={student.firstName}
          lastName={student.lastName}
        />
      ))}
    </div>
  );
}

SharkTank.propTypes = {
  aliveStudents: PropTypes.array.isRequired
};

export default SharkTank;
