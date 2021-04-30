import React from 'react';
import { Button } from 'reactstrap';
import SharkTank from '../components/SharkTank';
import Graveyard from '../components/Graveyard';
import { dearlyBeloved, followTheLight, livingStudents } from '../helpers/data/studentsData';
import './App.scss';

function App() {
  const handleClick = (e) => {
    e.preventDefault();
    followTheLight();
  };
  return (
    <div className='App'>
      <Button className='btn' onClick={handleClick}>SHARK ATTACK</Button>
      <SharkTank livingStudents={livingStudents} />
      <Graveyard dearlyBeloved={dearlyBeloved}/>
    </div>
  );
}

export default App;
