import { useMemo, useState } from 'react';
import './App.css'
import Memouse from './components/Memouse';
import Pure from './components/Pure';
import useCusMemo from './hooks/useCusMemo'
import Reduce from './components/Reduce';
import Callback from './components/Callback';
import Form from './components/Form';
import Memo from './components/Memo';


function App() {
  const {count,handleName,handleCount,name} = useCusMemo();
  const [numbers] = useState([1,2,3,4,5,6])
 return (
  <>
    {/* <Pure name={name} />
    <Memouse numbers={numbers}/>
    <h2>Count: {count}</h2>
    <button onClick={handleCount}>Increment</button>
    <button onClick={handleName}>Change Name</button> */}
    {/* <Reduce/> */}
    {/* <Callback/> */}
    {/* <Form/> */}
    <Memo />
  </>
 )
}

export default App
