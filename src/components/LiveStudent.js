import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle } from 'reactstrap';

const LiveStudent = ({ firstName, lastName }) => (
    <Card className="LiveStudent">
      <CardTitle tag="h5">{firstName} {lastName}</CardTitle>
    </Card>
);

LiveStudent.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
};

export default LiveStudent;
