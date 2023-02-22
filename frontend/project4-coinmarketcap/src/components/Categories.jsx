import { BrowserRouter as Router, Link } from "react-router-dom";
let Categories = (props) => {
    let { cryptocurrencyCategories, formatter } = props;
    let cryptocurrencyCategoriesParse = cryptocurrencyCategories.data;
    return (
        <div>

            <section className="bg-gray-50 dark:bg-gray-800" style={{ marginBottom: "-30px" }}>
                <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                    <h3 style={{ fontWeight: "700" }}>Today's Cryptocurrency Price by Market Cap</h3>
                    <span style={{ color: "rgb(88, 102, 126)", marginTop: "0" }}>We have created an index for each cryptocurrency category. Categories are ranked by 24h price change. Click on a crypto category
                        name to see the constiuent parts of the index and their recent price performance. </span>
                </div>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800">
                <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                    <div className='scroll-indicator' style={{ marginBottom: "-85px" }}>
                        <div className='scroll-child'>
                            <div className='scroll-left'>
                                <button className='btnFake'>
                                    <i className="fa-solid fa-star"></i>
                                    <p id='Watchlist'>Watchlist</p>
                                </button>
                                <button className='btnFake'>
                                    <i className="fa-solid fa-earth-asia"></i>
                                    <p id='Watchlist'>Portfolio</p>
                                </button>
                                <div className='kSTIeH'></div>
                            </div>
                            <div className='scroll-center'>
                                <Link to="/">
                                    <button className='btnFake2' id='btnFake'>Cryptocurrencies</button>
                                </Link>
                                <Link to="/categories">
                                    <button className='btnFake2' style={{ backgroundColor: " rgb(207 214 228)" }}>Categories</button>
                                </Link>
                                <button className='btnFake2'>DeFI</button>
                                <button className='btnFake2'>NFT</button>
                                <button className='btnFake2'>Metaverse</button>
                                <button className='btnFake2'>Polkadot</button>
                                <button className='btnFake2'>BNB Chain</button>
                                <button className='btnFake2'>Solana</button>
                                <button className='btnFake2'>Avalanche</button>
                            </div>
                        </div>
                    </div>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    #
                                </th>
                                <th scope="col" className="px-7 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Avg. Price Changes
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Market Cap
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Volume
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {console.log("cryptocurrencyCategoriesParse", cryptocurrencyCategoriesParse)}

                            {cryptocurrencyCategoriesParse ? cryptocurrencyCategoriesParse.map((element, index) => (
                                <tr className="hoverRow bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
                                    <td className="px-6 py-4" key={element.id}>
                                        {index}
                                    </td>
                                    <td className="px-6 py-4">
                                        {element.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {element.avg_price_change}
                                    </td>
                                    <td className="px-6 py-4">
                                        {element.market_cap_change}
                                    </td>
                                    <td className="px-6 py-4">
                                        {element.volume}
                                    </td>

                                </tr>
                            )) : ""}
                            {/* {cryptocurrencyCategories ? cryptocurrencyCategoriesParse.map((element, index) => (
                                <tr className="hoverRow bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <i className="fa-solid fa-star"></i>
                                    </th>
                                    <td className="px-6 py-4" key={element.id}>
                                        {index}
                                    </td>
                                    <td className="px-6 py-4">
                                        {element.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {element.avg_price_change}
                                    </td>

                                </tr>
                            )) : ""} */}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )

}
export default Categories;