import React, {useState, useEffect} from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {
  const [poems, setPoems] = useState([])
  const [show, setShow] = useState(true)

  function handleShow(){
    setShow((show)=> !show)
  }

  useEffect(() => {
    fetch('http://localhost:8004/poems')
  .then((response) => response.json())
  .then((data) => setPoems(data));
  }, []);

  function createNewPoem(poem3){
    console.log(poems)
    setPoems( [{...poems, id:poems, poem3}])
  }

  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={handleShow}>Show/hide new poem form</button>
        {show ? <NewPoemForm createNewPoem={createNewPoem}/> : null}
      </div>
      <PoemsContainer poems={poems}/>
    </div>
  );
}

export default App;