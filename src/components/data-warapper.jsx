import { TipsButtons } from "./tips-buttons"


function DataWarapper({ bill, setBill, people, setPeople, tip, setTip }) {
    return (
        <div className="data-wrapper">
            <h1>Bill</h1>
            <label htmlFor="input-bill">
                <input
                    className="input-bill"
                    id="input-bill"
                    type="number"
                    value={bill}
                    min="0"
                    onChange={(e) => setBill(e.target.value)}
                />

            </label>
            <h2>Select Tip %</h2>
            <TipsButtons 
                tip={tip}
                setTip={setTip}
            />
            <h2>Number of People</h2>
            <label htmlFor="input-people">
                <input
                    id="input-people"
                    className="input-people"
                    type="number"
                    value={people}
                    min="1"
                    onChange={(e) => setPeople(e.target.value)}
                />
            </label>
        </div>
    )
}

export { DataWarapper } 