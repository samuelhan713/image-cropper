import { useState } from 'react';
import { usePython } from 'react-py';
import Main from './components/Main';
import Left from './components/Left';
import RightTop from './components/RightTop';
import RightMiddle from './components/RightMiddle';
import RightBottom from './components/RightBottom';


function App() {
  const [input, setInput] = useState('')

  // Use the usePython hook to run code and access both stdout and stderr
  const { runPython, stdout, stderr, isLoading, isRunning } = usePython()

  return (
    <>
      <Main />
    </>
  )
}

export default App;