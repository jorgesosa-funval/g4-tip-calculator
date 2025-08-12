

export function TipsButtons({ tip, setTip }) {
    const tips = [5, 10, 15, 25, 50,];


    return (
        <ul>
            {
                tips.map((btn) => (
                    <li id={`percentage-${btn}`} key={btn}>
                        <button type="button" className={`percentage-button ${btn === tip? 'active': ''} `} value={btn} onClick={(e)=>setTip(parseInt(e.target.value))}>
                            {btn}%
                        </button>
                    </li>
                ))
            }
            <li>
                <input type="number" placeholder="Custom" id="custom-percentage-button" className="percentage-button" />
            </li>
        </ul>
    )
} 