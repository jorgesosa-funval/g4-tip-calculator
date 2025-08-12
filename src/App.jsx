import { useState } from "react";
import { DataWarapper } from "./components/data-warapper";
import ResultWrapper from "./components/result-wrapper";

export default function App() { 
  const [bill, setBill] = useState(0)
  const [tip, setTip] = useState(0)
  const [people, setPeople] = useState(1)
  const [total, setTotal] = useState(0)
  const [totalTip, setTotalTip] = useState(0)
  
  console.log(bill, people, tip)
  return (
    <>
      <header>
        <img src="./images/logo.svg" alt="" />
      </header>
      <div className="general-wrapper">
        <DataWarapper 
          bill={bill}
          setBill={setBill}
          people={people}
          setPeople={setPeople}
          tip={tip}
          setTip={setTip}        
        />
        <ResultWrapper />
      </div>

    </>
  )
} 