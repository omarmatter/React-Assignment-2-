import './App.css';
import Change from './components/Change';
import Random from './components/Random';
import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import Hellow from './components/Hellow';

function App() {
//   const [text, setText] = useState('Hello World')
        
//   const changeText = () => 
//       text === 'Hello World' ? setText('Hello Palestine') : setText('Hello World')
  

// return (
//   <div className="container mt-5">
//       <p className="success"  onClick={changeText}>
         
//           {text}
//       </p>
//       <hr />
//       <Change/>
//       <hr />
//       <Random />
//   </div>
// )


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
