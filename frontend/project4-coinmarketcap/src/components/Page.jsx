import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from "react-router-dom";
import axios from 'axios';
import Header1 from "./Header";
import Footer from './Footer';
import { CircleLoader } from "react-spinners";

function Page({ Socket }) {
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams(); // Get the id parameter from the URL
    const [dataCoin, setDataCoin] = useState(null);
    setTimeout(() => {
        setIsLoading(false);
    }, 3000); // Simulate a 3 second delay

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
                setDataCoin(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [id]);
    if (!dataCoin) {
        return <div>Loading...</div>;
    }
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
    return (
        <>
            {console.log(dataCoin)}
            {isLoading ? <CircleLoader /> : <div>
                <div className='tBody '>
                    <div className='coinInfo items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6'>
                        <div className='coinInfoLeft'>
                            <div className='coinTitle'>
                                <img className='coinLogo' src={dataCoin.image.thumb} height="32" width="32" alt="BTC"></img>
                                <h3 className='coin-name'>{dataCoin.name}</h3>
                                <small className='symbol'>{dataCoin.symbol.toUpperCase()}</small>
                                <button className='star'><i className="fa-solid fa-star">{ }</i></button>
                                <button className='share'><i className="fa-sharp fa-solid fa-arrow-up-from-bracket"></i></button>
                            </div>
                            <div className='coinInfo2'>
                                <button className='coinRank'>Rank #{dataCoin.market_cap_rank}</button>
                                <button className='type'>{dataCoin.categories[2]}</button>
                                <button className='onWatchlist icon'>twitter followers: #{dataCoin.links.homepage[0]}</button>
                            </div>
                            <ul className='content'>
                                <li>
                                    <a href='https://bitcoin.org/en/' className='content1'>
                                        <p id='content1Name'>{dataCoin.links.blockchain_site[0]}</p>
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
                                            <p id='contentName'>{dataCoin.hashing_algorithm ? dataCoin.hashing_algorithm : "Blockchain"}</p>
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
                                <p className='priceTitle'>{dataCoin.name} Price {dataCoin.symbol.toUpperCase()}</p>
                            </div>
                            <div className='priceBody'>
                                <h1 className='priceValue'>{formatter.format(dataCoin.market_data.current_price.usd)}</h1>
                                <span className='pricePercent'>
                                    <i className="fa-solid fa-caret-up" id='caretInBtn'></i>1,70%
                                </span>
                            </div>
                            <div className='priceBody2'>
                                <span className='priceValue2'>{formatter.format(dataCoin.market_data.current_price.usd)}</span>
                                <span className='pricePercent2'>
                                    <i className="fa-solid fa-caret-up"></i>{dataCoin.market_data.price_change_percentage_1h_in_currency.usd}%
                                </span>
                            </div>
                            <div className='centerEnd'>
                                <span className='low'>Low:</span>
                                <span className='price'>{formatter.format(dataCoin.market_data.low_24h.usd)}</span>
                                <span>.......</span>
                                <span className='low'>High:</span>
                                <span className='price'>{formatter.format(dataCoin.market_data.high_24h.usd)}</span>
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
                                        <p className='startsItemPrice'>{formatter.format(dataCoin.market_data.market_cap.usd)}</p>
                                        <span className='pricePercent2'>
                                            <i className="fa-solid fa-caret-up"></i>{dataCoin.market_data.market_cap_change_percentage_24h}%
                                        </span>
                                    </div>
                                </div>
                                <div className='statsBlockInner2'>
                                    <span className='statsFooter1'>24h Volume / Market Cap</span>
                                    <span className='statsFooter2'>{formatter.format(dataCoin.market_data.market_cap_change_24h)}</span>
                                </div>
                            </div>

                            <div className='statsBlock'>
                                <div className='statsBlockInner'>
                                    <span className='statsBlockInnerTitle'>Fully Diluted Market Cap</span>
                                    <div className='statsItemRight'>
                                        <p className='startsItemPrice'>{formatter.format(dataCoin.market_data.fully_diluted_valuation.usd)}</p>
                                        <span className='pricePercent2'>
                                            <i className="fa-solid fa-caret-up"></i>Price change percentage 7d in currency: {dataCoin.market_data.price_change_percentage_7d_in_currency.usd + "%"}
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
                                            <i className="fa-solid fa-caret-up"></i>Price change percentage 1h in currency: {dataCoin.market_data.price_change_percentage_1h_in_currency.usd + "%"}
                                        </span>
                                    </div>
                                </div>
                                <div className='statsBlockInner2'>
                                    <span className='statsFooter1'>High 24h</span>
                                    <span className='statsFooter2'>{formatter.format(dataCoin.market_data.high_24h.usd)}</span>
                                </div>
                                <div className='statsBlockInner2'>
                                    <span className='statsFooter1'>Low 24h</span>
                                    <span className='statsFooter2'>{formatter.format(dataCoin.market_data.low_24h.usd)}</span>
                                </div>
                            </div>

                            <div className='statsBlock'>
                                <div className='statsBlockInner'>
                                    <span className='statsBlockInnerTitle'>Circulating Supply</span>
                                    <div className='statsItemRight'>
                                        <span className='startsItemPrice'>{dataCoin.market_data.circulating_supply} {dataCoin.symbol.toUpperCase()}</span>
                                        <span className='pricePercent2'>
                                            <i className="fa-solid fa-caret-up"></i>Price change percentage 30d in currency: {dataCoin.market_data.price_change_percentage_30d_in_currency.usd + "%"}
                                        </span>
                                    </div>
                                </div>
                                <div className='statsBlockInner2'>
                                    <span className='statsFooter1'>24h Volume / Market Cap</span>
                                    <span className='statsFooter2'>{dataCoin.market_data.market_cap_change_percentage_24h} %</span>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className='coinInfo items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6'>
                        <div className='routerSwitch'>
                            <Link to={`/page/${id}/overview`}>
                                <a className="routerBtn" style={{ borderRadius: "8px" }}>Overview</a>
                            </Link>
                            <Link to={`/page/${id}/markets`}>
                                <a className="routerBtn" style={{ borderRadius: "8px" }}>Coin Heatmap</a>
                            </Link>
                            <Link to={`/page/${id}/historical-data`}>
                                <a className="routerBtn" style={{ borderRadius: "8px" }}>Coin Converter</a>
                            </Link>
                            <Link to={`/page/${id}/news`}>
                                <a className="routerBtn" style={{ borderRadius: "8px" }}>News</a>
                            </Link>
                            <Link to={`/page/${id}/price-estimates`}>
                                <a className="routerBtn" style={{ borderRadius: "8px" }}>Price Estimates</a>
                            </Link>
                            <Link to={`/page/${id}/more-info`}>
                                <a className="routerBtn" style={{ borderRadius: "8px" }}>More Info</a>
                            </Link>
                            <Outlet />
                        </div>

                    </div>
                </div>
                <section>
                    <div className='coinInfo items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6'>
                        {dataCoin.description.en}
                    </div>
                </section>
                <Footer />
            </div>
            }
        </>
    )
}
export default Page;