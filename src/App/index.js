import React, { useState } from 'react';
import { Button } from 'reactstrap';
import SharkTank from '../components/SharkTank';
import Graveyard from '../components/Graveyard';
import { dearlyBeloved, followTheLight, livingStudents } from '../helpers/data/studentsData';
import './App.scss';

function App() {
  const [aliveStudents, setAliveStudents] = useState(livingStudents());
  const [deadStudents, setDeadStudents] = useState(dearlyBeloved());

  const handleClick = (e) => {
    e.preventDefault();
    followTheLight();
    setAliveStudents(livingStudents());
    setDeadStudents(dearlyBeloved());
  };

  return (
    <div className='App'>
      <Button className='btn' onClick={handleClick}>SHARK ATTACK</Button>
      <SharkTank aliveStudents={aliveStudents} />
      <Graveyard deadStudents={deadStudents}/>
    </div>
  );
}

export default App;
