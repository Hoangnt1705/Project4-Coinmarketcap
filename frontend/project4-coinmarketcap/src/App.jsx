import './App.css';
import React, { useRef, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Socket from './components/Socket';
import SlideTbl from './components/SlideTbl';
import PostComponent from './components/PostComponent';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, doc, setDoc, updateDoc, getDoc, serverTimestamp, arrayUnion, arrayRemove } from "firebase/firestore";
import Header1 from './components/Header';
import Categories from './components/Categories';
import Page from './components/Page';
import Overview from './components/Overview';
import Markets from './components/Markets';
import HistoricalData from './components/HistoricalData';
import News from './components/News';
import PriceEstimates from './components/PriceEstimates';
import MoreInfo from './components/MoreInfo';
import LoginPage from './components/LoginPage';
import Register from './components/Register';
import BuyAPI from './components/BuyAPI';
import Footer from './components/Footer';
import LineChartTradingView from './components/LineChartTradingView';
import { CircleLoader } from "react-spinners";

let App = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAwZ9eCKfJStYiWM_RVDjKSFmhKuBW7330",
    authDomain: "project4-79573.firebaseapp.com",
    projectId: "project4-79573",
    storageBucket: "project4-79573.appspot.com",
    messagingSenderId: "700261822421",
    appId: "1:700261822421:web:00374d946b79ecfcc8175c"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth();
  const [dataLatest, setDataLatest] = useState('');
  const [cryptocurrencyCategories, setCryptocurrencyCategories] = useState([]);
  const [currentUser, setCurrentUser] = useState('');
  const [cryptocurrencyListings, setCryptocurrencyListings] = useState([]);
  const [listingsPriceIcon, setListingsPriceIcon] = useState('');
  const [listingsPercentChange1HIcon, setListingsPercentChange1HIcon] = useState('');
  const [listingsPercentChange24HIcon, setListingsPercentChange24HIcon] = useState('');
  const [listingsPercentChange7DIcon, setListingsPercentChange7DIcon] = useState('');
  const [listingsPriceColors, setListingsPriceColors] = useState('');
  const [listingsPercentChange1HColors, setListingsPercentChange1HColors] = useState('');
  const [listingsPercentChange24HColors, setListingsPercentChange24HColors] = useState('');
  const [listingsPercentChange7DColors, setListingsPercentChange7DColors] = useState('');
  const [showSlide, setShowSlide] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 6000); // Simulate a 3 second delay

  let compireTotalChange = (newTotalMarketCapYesterdayPercentageChange) => {
    let newTotalMarketCapYesterdayPercentageChangeColor = [];
  }
  let compireMarkets = (newCryptocurrencyListings) => {
    const newListingsPriceColors = [];
    const newListingsPercentChange1HColors = [];
    const newListingsPercentChange24HColors = [];
    const newListingsPercentChange7DColors = [];
    const newListingsPriceIcons = [];
    const newListingsPercentChange1HIcons = [];
    const newListingsPercentChange24HIcons = [];
    const newListingsPercentChange7DIcons = [];
    for (let i = 0; i < cryptocurrencyListings.length; i++) {
      if (cryptocurrencyListings[i].current_price < newCryptocurrencyListings[i].current_price) {
        newListingsPriceColors.push('#16c784');
        newListingsPriceIcons.push('fa-sharp fa-solid fa-arrow-up');
      }
      else if (cryptocurrencyListings[i].current_price > newCryptocurrencyListings[i].current_price) {
        newListingsPriceColors.push('#ea3943');
        newListingsPriceIcons.push('fa-sharp fa-solid fa-arrow-down');
      }
      else {
        newListingsPriceColors.push(listingsPriceColors[i]);
        newListingsPriceIcons.push(listingsPriceIcon[i]);
      }
      //
      if (cryptocurrencyListings[i].price_change_24h < newCryptocurrencyListings[i].price_change_24h) {
        newListingsPercentChange1HColors.push('#16c784');
        newListingsPercentChange1HIcons.push('fa-sharp fa-solid fa-arrow-up');
      }
      else if (cryptocurrencyListings[i].price_change_24h > newCryptocurrencyListings[i].price_change_24h) {
        newListingsPercentChange1HColors.push('#ea3943');
        newListingsPercentChange1HIcons.push('fa-sharp fa-solid fa-arrow-down');
      }
      else {
        newListingsPercentChange1HColors.push(listingsPercentChange1HColors[i]);
        newListingsPercentChange1HIcons.push(listingsPercentChange1HIcon[i]);
      }
      //
      if (cryptocurrencyListings[i].market_cap_change_24h < newCryptocurrencyListings[i].market_cap_change_24h) {
        newListingsPercentChange24HColors.push('#16c784');
        newListingsPercentChange24HIcons.push('fa-sharp fa-solid fa-arrow-up');
      }
      else if (cryptocurrencyListings[i].market_cap_change_24h > newCryptocurrencyListings[i].market_cap_change_24h || cryptocurrencyListings[i].market_cap_change_24h < 0) {
        newListingsPercentChange24HColors.push('#ea3943');
        newListingsPercentChange24HIcons.push('fa-sharp fa-solid fa-arrow-down');
      }
      else {
        newListingsPercentChange24HColors.push(listingsPercentChange24HColors[i]);
        newListingsPercentChange24HIcons.push(listingsPercentChange24HIcon[i]);
      }
      // //
      if (cryptocurrencyListings[i].atl < newCryptocurrencyListings[i].atl) {
        newListingsPercentChange7DColors.push('#16c784');
        newListingsPercentChange7DIcons.push('fa-sharp fa-solid fa-arrow-up');
      }
      else if (cryptocurrencyListings[i].atl > newCryptocurrencyListings[i].atl) {
        newListingsPercentChange7DColors.push('#ea3943');
        newListingsPercentChange7DIcons.push('fa-sharp fa-solid fa-arrow-down');
      }
      else {
        newListingsPercentChange7DColors.push(listingsPercentChange7DColors[i]);
        newListingsPercentChange7DIcons.push(listingsPercentChange7DIcon[i]);
      }
    };
    setListingsPriceColors(newListingsPriceColors);
    setListingsPercentChange1HColors(newListingsPercentChange1HColors);
    setListingsPercentChange24HColors(newListingsPercentChange24HColors);
    setListingsPercentChange7DColors(newListingsPercentChange7DIcons);
    setListingsPriceIcon(newListingsPriceIcons);
    setListingsPercentChange1HIcon(newListingsPercentChange1HIcons);
    setListingsPercentChange24HIcon(newListingsPercentChange24HIcons);
    setListingsPercentChange7DIcon(newListingsPercentChange7DIcons);
    setCryptocurrencyListings(newCryptocurrencyListings);
  };
  useEffect(() => {
    console.log(cryptocurrencyListings);
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    unsubscribe();
    Socket.on('cryptocurrency-listings', (latest) => {
      const newCryptocurrencyListings = latest;
      setCryptocurrencyListings(newCryptocurrencyListings);
      compireMarkets(newCryptocurrencyListings);
    });
    Socket.on('global-metrics-quotes', (latest) => {
      const newTotalMarketCapYesterdayPercentageChange = latest;
      setDataLatest(newTotalMarketCapYesterdayPercentageChange);
      compireTotalChange(newTotalMarketCapYesterdayPercentageChange);
    });
    Socket.on('cryptocurrency-categories', (latest) => {
      setCryptocurrencyCategories(latest);
    });
    return () => {
      Socket.off('global-metrics-quotes');
    };
  }, [dataLatest, currentUser, cryptocurrencyListings]);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  let handleClick = () => {
    setShowSlide(!showSlide)
  }
  return (
    <div>
      {isLoading ? <CircleLoader style={{textAlign: "center"}} /> : <Router>
        <div>
          <header className="fixed w-full">
            <Header1 dataLatest={dataLatest} formatter={formatter} auth={auth}
              createUserWithEmailAndPassword={createUserWithEmailAndPassword}
              signInWithEmailAndPassword={signInWithEmailAndPassword}
              collection={collection} addDoc={addDoc} db={db} doc={doc} setDoc={setDoc} updateDoc={updateDoc} getDoc={getDoc}
              serverTimestamp={serverTimestamp} arrayUnion={arrayUnion} arrayRemove={arrayRemove} currentUser={currentUser}
              signOut={signOut}
            />
          </header>
          {/* Run block */}
          <Routes>
            <Route path="/buy-api" element={<BuyAPI />} />
            <Route path='/page/:id' element={<Page Socket={Socket} />} >
              <Route path="overview" element={<Overview cryptocurrencyListings={cryptocurrencyListings} />} />
              <Route path='markets' element={<Markets />} />
              <Route path='historical-data' element={<HistoricalData />} />
              <Route path='news' element={<News />} />
              <Route path='price-estimates' element={<PriceEstimates />} />
              <Route path='more-info' element={<MoreInfo />} />
            </Route>
            <Route path="/login" element={<LoginPage auth={auth} signInWithEmailAndPassword={signInWithEmailAndPassword} />} />
            <Route path="/register" element={<Register auth={auth} createUserWithEmailAndPassword={createUserWithEmailAndPassword}
              collection={collection} addDoc={addDoc} db={db} doc={doc} setDoc={setDoc} updateDoc={updateDoc} getDoc={getDoc}
              serverTimestamp={serverTimestamp} arrayUnion={arrayUnion} arrayRemove={arrayRemove} />} />
            <Route path="/categories" element={<Categories cryptocurrencyCategories={cryptocurrencyCategories} formatter={formatter} />} />
            <Route path="/" element={
              <div>
                <section className="bg-gray-50 dark:bg-gray-800" >
                  <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6" >
                    <h3 style={{ fontWeight: "700" }}>Today's Cryptocurrency Price by Market Cap</h3>
                    <span style={{ color: "rgb(88, 102, 126)", marginTop: "0" }}>The global crypto market cap is {dataLatest ? formatter.format(dataLatest.quote.USD.total_market_cap).substring(0, 5) + "T" : "..."}
                      , a <span style={{ color: "green", fontWeight: "bold" }}>{dataLatest ? dataLatest.quote.USD.total_market_cap_yesterday_percentage_change.toFixed(2) : "..."}</span> increase over the last day. </span>
                    <a href="" className="readMore" style={{ color: "rgb(128, 138, 157)", fontSize: "17px", textDecoration: "underline !important" }}>Read More</a>
                  </div>
                  <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6" style={{ marginTop: "-80px" }}>
                    <label className="switch">
                      <span className="highLightBtn">Highlights</span>
                      <input type="checkbox" defaultChecked />
                      <span className="slider round" onClick={handleClick} />
                    </label>
                  </div>
                </section>
                {/* Start block */}
                <section>
                  <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                    {showSlide ?
                      <div className='slideContainer'>
                        <SlideTbl />
                        <SlideTbl />
                        <PostComponent cryptocurrencyListings={cryptocurrencyListings} currentUser={currentUser} />
                      </div> : null
                    }
                  </div>
                </section>
                {/* End block */}
                {/* Start block */}

                <section className="bg-white dark:bg-gray-900">
                  <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg" style={{ marginBottom: "-100px", marginLeft: "-50px" }}>
                      <div className='scroll-indicator'>
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
                              <button className='btnFake2' id='btnFake' style={{ backgroundColor: " rgb(207 214 228)" }}>Cryptocurrencies</button>
                            </Link>
                            <Link to="/categories">
                              <button className='btnFake2'>Categories</button>
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
                    </div>

                    <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th scope="col" className="px-6 py-3">
                            </th>
                            <th scope="col" className="px-6 py-3">
                              #
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                              24h %
                            </th>
                            <th scope="col" className="px-6 py-3">
                              H24h
                            </th>
                            <th scope="col" className="px-6 py-3">
                              MKC 24h %
                            </th>
                            <th scope="col" className="px-6 py-3">
                              ATL
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Market Cap
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Circulating Supply
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Last 7 Days
                            </th>

                          </tr>
                        </thead>
                        <tbody>

                          {/* {
                    cryptocurrencyListings.map((element, index) => (
                      <tr>
                        <td key={index} style={{ color: listingsPriceColors[index] }}>
                          {element.current_price}
                        </td>
                      </tr>
                    ))
                  } */}
                          {
                          }
                          {cryptocurrencyListings ? cryptocurrencyListings.map((element, index) => (
                            <tr key={element.id} style={{ textAlign: "end" }} className="hoverRow bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
                              <th scope="row" className="px-6 py-4 boldListingCrypto font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <i className="fa-solid fa-star"></i>
                              </th>
                              <td className="px-6 py-4 boldListingCrypto">
                                {index + 1}
                              </td>


                              <Link to={`/page/${element.id}`} style={{ color: "rgb(34, 37, 49)" }}>
                                <td className="px-6 py-4 boldListingCrypto" style={{ display: "flex", marginTop: "16px" }}>
                                  <img src={element.image} alt="" className="imageCoinInLists" /> {element.name.length < 10 ? element.name : `${element.name.substring(0, 10)}...`} <span className="symbolOfName">{element.symbol.toUpperCase()}</span>
                                </td>
                              </Link>



                              <td className="px-6 py-4 boldListingCrypto" style={{ color: listingsPriceColors[index] }} >
                                {formatter.format(element.current_price)}
                              </td>
                              <td className="px-6 py-4 boldListingCrypto" style={{ color: listingsPercentChange1HColors[index] }}>
                                <p className="percentage">{`${element.market_cap_change_percentage_24h}%`}</p>
                                <i style={{ color: listingsPercentChange1HColors[index] }} className={listingsPercentChange1HIcon[index]}></i>{`${element.price_change_24h || element.price_change_24h !== null ? formatter.format(element.price_change_24h) : 0}`}
                              </td>
                              <td className="px-6 py-4 boldListingCrypto">
                                {formatter.format(element.high_24h)}
                              </td>
                              <td className="px-6 py-4 boldListingCrypto" style={{ color: listingsPercentChange24HColors[index] }} >
                                <p className="percentage">{`${element.market_cap_change_percentage_24h}%`}</p>
                                <i style={{ color: listingsPercentChange24HColors[index] }} className={listingsPercentChange24HIcon[index]}></i>{`$${Intl.NumberFormat('en-US', {
                                  minimumFractionDigits: 0,
                                  maximumFractionDigits: 0,
                                }).format(element.market_cap_change_24h)}`}
                              </td>
                              <td className="px-6 py-4 boldListingCrypto" style={{ color: listingsPercentChange7DColors[index] }}>
                                <p style={{ color: element.atl_change_percentage > 0 ? "#52CCCE" : "#5416B4" }} className="percentage">{parseFloat(element.atl_change_percentage).toFixed(0).length < 10 ? `${parseFloat(element.atl_change_percentage).toFixed(0)}%` : "GI...%"}</p>
                                <i style={{ color: listingsPercentChange7DColors[index] }} className={listingsPercentChange7DIcon[index]}></i>{formatter.format(element.atl)}
                              </td>
                              <td className="px-6 py-4 boldListingCrypto">
                                {formatter.format(element.market_cap.toFixed(0))}
                              </td>
                              <td className="px-6 py-4 boldListingCrypto">
                                {`${Intl.NumberFormat('en-US', {
                                  minimumFractionDigits: 0,
                                  maximumFractionDigits: 0,
                                }).format(element.circulating_supply).substring(0, 13)} ${element.symbol.toUpperCase()}`}
                              </td>
                              <td className="px-6 py-4 boldListingCrypto">
                                <LineChartTradingView sparkline={element.sparkline_in_7d.price} />
                              </td>
                            </tr>
                          )) : ""}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
                {/* End block */}
                {/* <div className="box">
          <div>
            <span><img src alt="" /></span>
            <span >hello </span>
            <span />
            <span />
            <span />
          </div>
        </div> */}
                {/* Start block */}
                <section data-hydration-on-demand="true" style={{ display: "flex" }} className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                  <div className="sc-aef7b723-0 cuJRNG" style={{ display: "flex", marginTop: "80px" }}>
                    <div className="sc-aef7b723-0 gJZIKm grid" display="flex">
                      <div className="sc-aef7b723-0 gWujNO " >
                        <h2 fontSize="24px,32px" color="text" data-sensors-click="true" className="sc-aba8b85a-0 bFVIJH " style={{ display: "flex" }}>
                          <span style={{ fontWeight: 300 }}>Be the first to know about  <div display="block,,inline" className="sc-aef7b723-0 OvibX" style={{ fontWeight: "700" }}>crypto news every day</div></span>
                        </h2>
                        <p color="lights.0" fontSize="1,2" data-sensors-click="true" className="sc-e225a64a-0 ifqZhW">Get crypto analysis, news and updates right to your inbox! Sign up here so you don't miss a single newsletter.</p>
                        <button type="button" className="cryptoNewsBtn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" style={{ width: "30%", height: "50px", background: "rgb(108 43 217)" }}>Default</button>

                      </div>
                    </div>
                  </div>
                  <div className="sc-aef7b723-0 cuJRNG" style={{ display: "flex" }}>
                    <div className="sc-aef7b723-0 gJZIKm grid" display="flex">
                      <div className="sc-aef7b723-0 gWujNO" >
                        <h2 fontSize="24px,32px" color="text" data-sensors-click="true" className="sc-aba8b85a-0 bFVIJH" style={{ display: "flex" }}>

                        </h2>
                        <div display="block,inline-block" className="sc-aef7b723-0 gZbvzE">
                          <button className="sc-a4a6801b-0 cXksaI sc-a6ff633a-0 cwfaiL newsletter-btn" type="submit" data-sensors-click="true">Subscribe now</button>
                        </div>
                      </div>
                      <img src="https://s2.coinmarketcap.com/static/cloud/img/newsletter_bg_light.svg?_=a137273" loading="lazy" />
                    </div>
                  </div>
                </section>
                <Footer />
              </div>
            } />
          </Routes >
        </div >
      </Router >

      }


    </div >





  )

}


export default App;
