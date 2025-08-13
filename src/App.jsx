import { useEffect, useState } from "react";
import { DataWarapper } from "./components/data-warapper";
import ResultWrapper from "./components/result-wrapper";
const initialData = {
  bill: 0,
  tip: 0,
  people: 1
}
export default function App() {
  const [data, setData] = useState(initialData); 
  const [total, setTotal] = useState(0);
  const [totalTip, setTotalTip] = useState(0);

  useEffect(() => {
    const {bill, tip, people} = data;
    if (bill && tip && people) {

      const fixed_tip = tip / 100;
      const tip_total = bill * fixed_tip;

      const tip_amount = tip_total / people;
      const total_account = (bill + tip_total) / people;

      setTotalTip(tip_amount.toFixed(2));
      setTotal(total_account.toFixed(2));
    }
  }, [data])

  return (
    <>
      <header>
        <img src="./images/logo.svg" alt="" />
      </header>
      <div className="general-wrapper">
        <DataWarapper
           data={data}
           setData={setData}
        />
        <ResultWrapper
          total={total}
          totalTip={totalTip}
        />
      </div>

    </>
  )
} 
