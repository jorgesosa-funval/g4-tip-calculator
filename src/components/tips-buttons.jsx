
export function TipsButtons({ data, setData }) {
    const tips = [5, 10, 15, 25, 50,];

    return (
        <ul>
            {
                tips.map((btn) => (
                    <li id={`percentage-${btn}`} key={btn}>
                        <button type="button" className={`percentage-button ${btn === data.tip && 'active'} `} value={btn} onClick={(e) => setData({ ...data, tip: parseFloat(e.target.value) })}>
                            {btn}%
                        </button>
                    </li>
                ))
            }
            <li>
                <input
                    type="number"
                    placeholder="Custom"
                    id="custom-percentage-button"
                    className="percentage-button"
                    onChange={(e) => setData({ ...data, tip: parseFloat(e.target.value) })}

                />
            </li>
        </ul>
    )
} 