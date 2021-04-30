import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle } from 'reactstrap';

const GraveStone = ({ firstName, lastName }) => (
  <Card className="GraveStone">
    <CardTitle tag="h5">{firstName} {lastName}</CardTitle>
  </Card>
);

GraveStone.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
};

export default GraveStone;
