import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import React, {  useState } from 'react'
function App() {
  const [searchTerm,setSearchTerm]=useState('');
  const [toggle,settoggle]=useState(false)
  return (
    <div className="App">
      <header>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </header>
      <body>
        <Home searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> 
      </body>
    </div>
  );
}

export default App;
