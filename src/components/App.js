import React from 'react'
import { Primer } from './Primer';
import { Segundo } from './Segundo';
import '../styles/App.css';


function App() {
  return (
    <section className='card'>
      <Segundo/>
      <Primer/>
    </section>
    
  );
}

export default App;
