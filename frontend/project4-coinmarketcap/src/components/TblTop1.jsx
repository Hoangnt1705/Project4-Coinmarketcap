function TblTop1() {
    let top1Info = [
        {
            coinName: "STEPN",
            token: "GMT",
            value: "8.89%",
            img: "https://s2.coinmarketcap.com/static/img/coins/64x64/18069.png"
        },
        {
            coinName: "Ordinal BTC",
            token: "OBTC",
            value: "$0.06948",
            img: "https://s2.coinmarketcap.com/static/img/coins/64x64/23655.png"
        },
        {
            coinName: "PROFESSIONAL",
            token: null,
            value: "$699/month",
            img: null
        },
    ]
    return (
        <div className='top'>
            <div className='topLeft'>
                <span>1</span>
                <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/21032.png" alt="" />
                <p className='coinName'>Coin</p>
                <span className='coinToken'>TOKEN</span>
            </div>
            <div className='topRight'>
                <span>Value</span>
            </div>
        </div>
    )
}
export default TblTop1;