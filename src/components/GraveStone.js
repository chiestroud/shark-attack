import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody } from 'reactstrap';

const GraveStone = ({ firstName, lastName }) => (
  <Card className="GraveStone">
    <CardBody tag="h5">{firstName} {lastName}</CardBody>
    <CardBody tag="h6">R.I.P.</CardBody>
    <CardBody tag="h6">Shark Said You Were Delicious</CardBody>
  </Card>
);

GraveStone.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
};

export default GraveStone;
