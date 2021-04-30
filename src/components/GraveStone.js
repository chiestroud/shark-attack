import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle } from 'reactstrap';

const GraveStone = ({
  firstName,
  lastName
// eslint-disable-next-line arrow-body-style
}) => {
  return (
    <Card body>
      <CardTitle tag="h5">{firstName} {lastName}</CardTitle>
    </Card>
  );
};

GraveStone.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
};

export default GraveStone;

// function LiveStudent({ students }) {
//   return (
//     <div className='live-student'>
//       {students.map((studentsArray) => (
//         <Card
//           key={studentsArray.id}
//           firstName={studentsArray.firstName}
//           lastName={studentsArray.lastName}
//         >Student</Card>
//       ))}
//     </div>
//   );
// }

// function LiveStudent({ student }) {
//   return (
//     <div className='live-student'>
//       <Card
//         key={student.id}
//       >
//         <CardTitle>{student.firstName} {student.lastName}</CardTitle>
//       </Card>
//     </div>
//   )
// }
