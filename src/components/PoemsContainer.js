import React from "react";
import Poem from "./Poem";

function PoemsContainer({poems}) {
  // console.log(poems)

  const poemOne = poems.map((poem1)=>{
    return(
      <Poem key={poem1.id} poem1={poem1}/>
    )
  })

  return (
    <div className="poems-container">
      {/* render a list of <Poem> components in here */}
      {poemOne}
    </div>
  );
}

export default PoemsContainer;
