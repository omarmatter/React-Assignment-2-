import './App.css';
import Change from './components/Change';
import Random from './components/Random';
import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import Hellow from './components/Hellow';

function App() {


return (
  <div className=" mt-5">
    <Row>
  <Hellow/>
 <Change/>
 <Random/>
 </Row>
 </div>
);

}


export default App;
