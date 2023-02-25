import Header1 from "./Header";
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
let Page = (props) => {
    let { cryptocurrencyListings } = props;
    return (
        <>
            <div className='tBody '>
                <div className='coinInfo items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6'>
                    <div className='coinInfoLeft'>
                        <div className='coinTitle'>
                            <img className='coinLogo' src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" height="32" width="32" alt="BTC"></img>
                            <h3 className='coin-name'>Bitcoin</h3>
                            <small className='symbol'>BTC</small>
                            <button className='star'><i className="fa-solid fa-star"></i></button>
                            <button className='share'><i className="fa-sharp fa-solid fa-arrow-up-from-bracket"></i></button>
                        </div>
                        <div className='coinInfo2'>
                            <button className='coinRank'>Rank #1</button>
                            <button className='type'>Coin</button>
                            <button className='onWatchlist icon'>On........... watchlists</button>
                        </div>
                        <ul className='content'>
                            <li>
                                <a href='https://bitcoin.org/en/' className='content1'>
                                    <p id='content1Name'>bitcoin.org</p>
                                    <i className="fa-solid fa-up-right-from-square"></i>
                                </a>
                            </li>
                            <li>
                                <div>

                                </div>
                            </li>
                            <li>

                            </li>
                        </ul>
                        <div className='coinInfo3'>
                            <p className='tags'>Tags:</p>
                            <ul className='content'>
                                <li>
                                    <a href='#' className='content1'>
                                        <p id='contentName'>Mineable</p>
                                    </a>
                                </li>
                                <li>
                                    <a href='#' className='content1'>
                                        <p id='contentName'>PoW</p>
                                    </a>
                                </li>
                                <li>
                                    <a href='#' className='content1'>
                                        <p id='contentName'>SHA-256</p>
                                    </a>
                                </li>
                                <li>
                                    <a href='#' className='content1'>
                                        <p id='contentName'>Store of Values</p>
                                    </a>
                                </li>
                                <li>
                                    <a href='#' className='content1'>
                                        <p id='contentName'>View all</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='coinInfoCenter'>
                        <div className='priceHeader'>
                            <p className='priceTitle'>Bitcoin Price (BTC)</p>
                        </div>
                        <div className='priceBody'>
                            <h1 className='priceValue'>$24,890.26</h1>
                            <span className='pricePercent'>
                                <i className="fa-solid fa-caret-up" id='caretInBtn'></i>1,70%
                            </span>
                        </div>
                        <div className='priceBody2'>
                            <span className='priceValue2'>14.66 ETH</span>
                            <span className='pricePercent2'>
                                <i className="fa-solid fa-caret-up"></i>11,6%
                            </span>
                        </div>
                        <div className='centerEnd'>
                            <span className='low'>Low:</span>
                            <span className='price'>$24,428.63</span>
                            <span>.......</span>
                            <span className='low'>High:</span>
                            <span className='price'>$25,044.57</span>
                        </div>
                    </div>
                    <div className='coinInfoRight'>
                        <button className='btnCoinRight'>Buy</button>
                        <button className='btnCoinRight'>Exchange</button>
                        <button className='btnCoinRight'>Gaming</button>
                        <button className='btnCoinRight' id="earn">Earn Crypto</button>
                    </div>
                </div>
                <div className='coinInfo items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6'>
                    <div className='hideContainer'>
                        <div className='statsBlock'>
                            <div className='statsBlockInner'>
                                <span className='statsBlockInnerTitle'>Market Cap</span>
                                <div className='statsItemRight'>
                                    <p className='startsItemPrice'>$480,317,709,927</p>
                                    <span className='pricePercent2'>
                                        <i className="fa-solid fa-caret-up"></i>17,1%
                                    </span>
                                </div>
                            </div>
                            <div className='statsBlockInner2'>
                                <span className='statsFooter1'>24h Volume / Market Cap</span>
                                <span className='statsFooter2'>0.0572</span>
                            </div>
                        </div>

                        <div className='statsBlock'>
                            <div className='statsBlockInner'>
                                <span className='statsBlockInnerTitle'>Fully Diluted Market Cap</span>
                                <div className='statsItemRight'>
                                    <p className='startsItemPrice'>$522,717,374,269</p>
                                    <span className='pricePercent2'>
                                        <i className="fa-solid fa-caret-up"></i>17,0%
                                    </span>
                                </div>
                            </div>
                        </div>


                        <div className='statsBlock'>
                            <div className='statsBlockInner'>
                                <span className='statsBlockInnerTitle'>Volume</span>
                                <div className='statsItemRight'>
                                    <p className='startsItemPrice'>$27,469,226,683</p>
                                    <span className='pricePercent2'>
                                        <i className="fa-solid fa-caret-up"></i>5,14%
                                    </span>
                                </div>
                            </div>
                            <div className='statsBlockInner2'>
                                <span className='statsFooter1'>CEX Vol</span>
                                <span className='statsFooter2'>$27,548,485,365</span>
                            </div>
                            <div className='statsBlockInner2'>
                                <span className='statsFooter1'>DEX Vol</span>
                                <span className='statsFooter2'>$7,569,760</span>
                            </div>
                        </div>

                        <div className='statsBlock'>
                            <div className='statsBlockInner'>
                                <span className='statsBlockInnerTitle'>Circulating Supply</span>
                                <div className='statsItemRight'>
                                    <span className='startsItemPrice'>19,297,418 BTC</span>
                                    <span className='pricePercent2'>
                                        <i className="fa-solid fa-caret-up"></i>17,1%
                                    </span>
                                </div>
                            </div>
                            <div className='statsBlockInner2'>
                                <span className='statsFooter1'>24h Volume / Market Cap</span>
                                <span className='statsFooter2'>0.0572</span>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='coinInfo items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6'>
                    <div className='routerSwitch'>
                        <Link to="/page/overview">
                            <a className="routerBtn" style={{ borderRadius: "8px" }}>Overview</a>
                        </Link>
                        <Link to="/page/markets">
                            <a className="routerBtn" style={{ borderRadius: "8px" }}>Markets</a>
                        </Link>
                        <Link to="/page/historical-data">
                            <a className="routerBtn" style={{ borderRadius: "8px" }}>Historical Data</a>
                        </Link>
                        <Link to="/page/news">
                            <a className="routerBtn" style={{ borderRadius: "8px" }}>News</a>
                        </Link>
                        <Link to="/page/price-estimates">
                            <a className="routerBtn" style={{ borderRadius: "8px" }}>Price Estimates</a>
                        </Link>
                        <Link to="/page/more-info">
                            <a className="routerBtn" style={{ borderRadius: "8px" }}>More Info</a>
                        </Link>
                        <Outlet />
                    </div>

                </div>
            </div>

        </>
    )
}
export default Page;