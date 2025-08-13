import { TipsButtons } from "./tips-buttons"


function DataWarapper({ data, setData }) {
    const { bill, people } = data;
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
                    onChange={(e) => setData({ ...data, bill: parseFloat(e.target.value) })}
                />

            </label>
            <h2>Select Tip %</h2>
            <TipsButtons
                data={data}
                setData={setData}
            />
            <h2>Number of People</h2>
            <label htmlFor="input-people">
                <input
                    id="input-people"
                    className="input-people"
                    type="number"
                    value={people}
                    min="1"
                    onChange={(e) => setData({ ...data, people: parseInt(e.target.value) })}

                />
            </label>
        </div>
    )
}

export { DataWarapper } 