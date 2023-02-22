import './App.css';
import React, { useRef, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Socket from './components/Socket';
import SlideTbl from './components/SlideTbl';
import PostComponent from './components/PostComponent';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, addDoc, doc, setDoc, updateDoc, getDoc, serverTimestamp, field, arrayUnion, arrayRemove } from "firebase/firestore";
import SimpleLineChart from './components/SimpleLineChart'
import Header1 from './components/Header1';
import Categories from './components/Categories';


let App = (props) => {
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

  const [listingsPriceColors, setListingsPriceColors] = useState('');
  const [listingsPercentChange1HColors, setListingsPercentChange1HColors] = useState('');
  const [listingsPercentChange24HColors, setListingsPercentChange24HColors] = useState('');
  const [listingsPercentChange7DColors, setListingsPercentChange7DColors] = useState('');

  let check = (newCryptocurrencyListings) => {
    const newListingsPriceColors = [];
    const newListingsPercentChange1HColors = [];
    const newListingsPercentChange24HColors = [];
    const newListingsPercentChange7DColors = [];
    const newListingsPriceIcons = [];
    const newListingsPercentChange1HIcons = [];
    const newListingsPercentChange24HIcons = [];
    const newListingsPercentChange7DIcons = [];
    for (let i = 0; i < cryptocurrencyListings.length; i++) {
      if (cryptocurrencyListings[i].quote.USD.price > newCryptocurrencyListings[i].quote.USD.price) {
        newListingsPriceColors.push('#16c784');
        newListingsPriceIcons.push('')
      }
      else if (cryptocurrencyListings[i].quote.USD.price < newCryptocurrencyListings[i].quote.USD.price) {
        newListingsPriceColors.push('#ea3943');
      }
      else {
        newListingsPriceColors.push(listingsPriceColors[i]);
      }
      //
      if (cryptocurrencyListings[i].quote.USD.percent_change_1h > newCryptocurrencyListings[i].quote.USD.percent_change_1h) {
        newListingsPercentChange1HColors.push('#16c784');
      }
      else if (cryptocurrencyListings[i].quote.USD.price < newCryptocurrencyListings[i].quote.USD.price) {
        newListingsPercentChange1HColors.push('#ea3943');
      }
      else {
        newListingsPercentChange1HColors.push(listingsPercentChange1HColors[i]);
      }
      //
      if (cryptocurrencyListings[i].quote.USD.percent_change_24h > newCryptocurrencyListings[i].quote.USD.percent_change_24h) {
        newListingsPercentChange24HColors.push('#16c784');
      }
      else if (cryptocurrencyListings[i].quote.USD.percent_change_24h < newCryptocurrencyListings[i].quote.USD.percent_change_24h) {
        newListingsPercentChange24HColors.push('#ea3943');
      }
      else {
        newListingsPercentChange24HColors.push(listingsPercentChange24HColors[i]);
      }
      //
      if (cryptocurrencyListings[i].quote.USD.percent_change_7d > newCryptocurrencyListings[i].quote.USD.percent_change_7d) {
        newListingsPercentChange7DColors.push('#16c784');
      }
      else if (cryptocurrencyListings[i].quote.USD.percent_change_7d < newCryptocurrencyListings[i].quote.USD.percent_change_7d) {
        newListingsPercentChange7DColors.push('#ea3943');
      }
      else {
        newListingsPercentChange7DColors.push(listingsPercentChange7DColors[i]);
      }
    };
    setListingsPriceColors(newListingsPriceColors);
    setListingsPercentChange1HColors(newListingsPercentChange1HColors);
    setListingsPercentChange24HColors(newListingsPercentChange24HColors);
    setListingsPercentChange7DColors(newListingsPercentChange7DColors);
    setCryptocurrencyListings(newCryptocurrencyListings);
    console.log(listingsPriceColors);
    console.log(cryptocurrencyListings);
  };
  useEffect(() => {
    Socket.on('cryptocurrency-listings', (latest) => {
      const newCryptocurrencyListings = latest
      setCryptocurrencyListings(newCryptocurrencyListings)
      check(newCryptocurrencyListings);

    });
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    unsubscribe();
    Socket.on('global-metrics-quotes', (latest) => {
      setDataLatest(latest);
    });
    Socket.on('cryptocurrency-categories', (latest) => {
      setCryptocurrencyCategories(latest);
    });
    return () => {
      Socket.off('global-metrics-quotes');
    };
  });

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return (
    <div>
      <Router>
        <div>
          <header className="fixed w-full">
            <Header1 dataLatest={dataLatest} formatter={formatter} auth={auth}
              createUserWithEmailAndPassword={createUserWithEmailAndPassword}
              signInWithEmailAndPassword={signInWithEmailAndPassword}
              collection={collection} addDoc={addDoc} db={db} doc={doc} setDoc={setDoc} updateDoc={updateDoc} getDoc={getDoc}
              serverTimestamp={serverTimestamp} arrayUnion={arrayUnion} arrayRemove={arrayRemove} currentUser={currentUser}
            />
          </header>
          {/* Run block */}
          <Routes>
            <Route path="/categories" element={<Categories cryptocurrencyCategories={cryptocurrencyCategories} formatter={formatter} />} />
            <Route path="/" element={
              <div>
                <section className="bg-gray-50 dark:bg-gray-800">
                  <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                    <h3 style={{ fontWeight: "700" }}>Today's Cryptocurrency Price by Market Cap</h3>
                    <span style={{ color: "rgb(88, 102, 126)", marginTop: "0" }}>The global crypto market cap is {dataLatest ? formatter.format(dataLatest.quote.USD.total_market_cap).substring(0, 5) + "T" : "..."}
                      , a {dataLatest ? dataLatest.quote.USD.total_market_cap_yesterday_percentage_change.toFixed(2) : "..."} increase over the last day. </span>
                    <a href="" className="readMore" style={{ color: "rgb(128, 138, 157)", fontSize: "17px", textDecoration: "underline !important" }}>Read More</a>
                  </div>
                </section>
                {/* Start block */}
                <section>
                  <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                    <div className='slideContainer'>
                      <SlideTbl />
                      <SlideTbl />
                      <PostComponent cryptocurrencyListings={cryptocurrencyListings} />
                    </div>
                  </div>
                </section>
                <section className="bg-white dark:bg-gray-900">
                  <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div className="mr-auto place-self-center lg:col-span-7">
                      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">Building digital <br />products &amp; brands.</h1>
                      <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                        <a href="https://github.com/themesberg/landwind" className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                          <svg className="w-4 h-4 mr-2 text-gray-500 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">{/* Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) */}<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg> View on GitHub
                        </a>
                        <a href="https://www.figma.com/community/file/1125744163617429490" className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800  dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                          <svg className="w-4 h-4 mr-2" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300" width={1667} height={2500}><style type="text/css" dangerouslySetInnerHTML={{ __html: ".st0{fill:#0acf83}.st1{fill:#a259ff}.st2{fill:#f24e1e}.st3{fill:#ff7262}.st4{fill:#1abcfe}" }} /><title>Figma.logo</title><desc>Created using Figma</desc><path id="path0_fill" className="st0" d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z" /><path id="path1_fill" className="st1" d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z" /><path id="path1_fill_1_" className="st2" d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z" /><path id="path2_fill" className="st3" d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z" /><path id="path3_fill" className="st4" d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z" /></svg> Get Figma file
                        </a>
                      </div>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                      <img src="./images/hero.png" alt="hero image" />
                    </div>
                  </div>
                </section>

                {/* End block */}
                {/* Start block */}

                <section className="bg-white dark:bg-gray-900">
                  <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg" style={{ marginBottom: "-100px" }}>
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
                            <th scope="col" className="px-7 py-3">
                              Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                              1h %
                            </th>
                            <th scope="col" className="px-6 py-3">
                              24h %
                            </th>
                            <th scope="col" className="px-6 py-3">
                              7d %
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Market Cap
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Volum(24h)
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
                                  {element.quote.USD.price}
                                </td>
                              </tr>
                            ))
                          } */}


                          {cryptocurrencyListings ? cryptocurrencyListings.map((element, index) => (
                            <tr className="hoverRow bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
                              <th scope="row" className="px-6 py-4 boldListingCrypto font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <i className="fa-solid fa-star"></i>
                              </th>
                              <td className="px-6 py-4 boldListingCrypto" key={element.id}>
                                {index}
                              </td>
                              <td className="px-6 py-4 boldListingCrypto">
                                {element.name}
                              </td>
                              <td className="px-6 py-4 boldListingCrypto" style={{ color: listingsPriceColors[index] }}>
                                {formatter.format(element.quote.USD.price)}
                              </td>
                              <td className="px-6 py-4 boldListingCrypto" style={{ color: listingsPercentChange1HColors[index] }}>
                                {`${element.quote.USD.percent_change_1h.toFixed(2)}%`}
                              </td>
                              <td className="px-6 py-4 boldListingCrypto" style={{ color: listingsPercentChange24HColors[index] }}>
                                {`${element.quote.USD.percent_change_24h.toFixed(2)}%`}
                              </td>
                              <td className="px-6 py-4 boldListingCrypto" style={{ color: listingsPercentChange7DColors[index] }}>
                                {`${element.quote.USD.percent_change_7d.toFixed(2)}%`}
                              </td>
                              <td className="px-6 py-4 boldListingCrypto">
                                {formatter.format(element.quote.USD.market_cap)}
                              </td>
                              <td className="px-6 py-4 boldListingCrypto">
                                {formatter.format(element.quote.USD.volume_24h)}
                              </td>
                              <td className="px-6 py-4 boldListingCrypto">
                                {`${element.circulating_supply} ${element.symbol}`}
                              </td>
                              <td className="px-6 py-4 boldListingCrypto">
                                19,292,012 BTC
                              </td>
                            </tr>
                          )) : ""}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
                {/* End block */}

                {/* Start block */}
                <section className="bg-gray-50 dark:bg-gray-800">
                  <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                    {/* Row */}
                    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                      <div className="text-gray-500 sm:text-lg ">
                        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Work with tools you already use</h2>
                        <p className="mb-8 font-light lg:text-xl">Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
                        {/* List */}
                        <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                          <li className="flex space-x-3">
                            {/* Icon */}
                            <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Continuous integration and deployment</span>
                          </li>
                          <li className="flex space-x-3">
                            {/* Icon */}
                            <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Development workflow</span>
                          </li>
                          <li className="flex space-x-3">
                            {/* Icon */}
                            <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Knowledge management</span>
                          </li>
                        </ul>
                        <p className="mb-8 font-light lg:text-xl">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p>
                      </div>
                      <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="./images/feature-1.png" alt="dashboard feature image" />
                    </div>
                    {/* Row */}
                    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                      <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="./images/feature-2.png" alt="feature image 2" />
                      <div className="text-gray-500 sm:text-lg ">
                        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">We invest in the world’s potential</h2>
                        <p className="mb-8 font-light lg:text-xl">Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
                        {/* List */}
                        <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                          <li className="flex space-x-3">
                            {/* Icon */}
                            <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Dynamic reports and dashboards</span>
                          </li>
                          <li className="flex space-x-3">
                            {/* Icon */}
                            <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Templates for everyone</span>
                          </li>
                          <li className="flex space-x-3">
                            {/* Icon */}
                            <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Development workflow</span>
                          </li>
                          <li className="flex space-x-3">
                            {/* Icon */}
                            <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Limitless business automation</span>
                          </li>
                          <li className="flex space-x-3">
                            {/* Icon */}
                            <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Knowledge management</span>
                          </li>
                        </ul>
                        <p className="font-light lg:text-xl">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p>
                      </div>
                    </div>
                  </div>
                </section>
                {/* End block */}
                {/* Start block */}
                <section className="bg-white dark:bg-gray-900">
                  <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
                    <div className="col-span-2 mb-8">
                      <p className="text-lg font-medium text-purple-600 dark:text-purple-500">Trusted Worldwide</p>
                      <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">Trusted by over 600 million users and 10,000 teams</h2>
                      <p className="font-light text-gray-500 sm:text-xl ">Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly to protect you and your customers.</p>
                      <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
                        <div>
                          <a href="#" className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700">
                            Explore Legality Guide
                            <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                          </a>
                        </div>
                        <div>
                          <a href="#" className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700">
                            Visit the Trust Center
                            <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
                      <div>
                        <svg className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" /></svg>
                        <h3 className="mb-2 text-2xl font-bold dark:text-white">99.99% uptime</h3>
                        <p className="font-light text-gray-500 ">For Landwind, with zero maintenance downtime</p>
                      </div>
                      <div>
                        <svg className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" /></svg>
                        <h3 className="mb-2 text-2xl font-bold dark:text-white">600M+ Users</h3>
                        <p className="font-light text-gray-500 ">Trusted by over 600 milion users around the world</p>
                      </div>
                      <div>
                        <svg className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" /></svg>
                        <h3 className="mb-2 text-2xl font-bold dark:text-white">100+ countries</h3>
                        <p className="font-light text-gray-500 ">Have used Landwind to create functional websites</p>
                      </div>
                      <div>
                        <svg className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" /></svg>
                        <h3 className="mb-2 text-2xl font-bold dark:text-white">5+ Million</h3>
                        <p className="font-light text-gray-500 ">Transactions per day</p>
                      </div>
                    </div>
                  </div>
                </section>
                {/* End block */}
                {/* Start block */}
                <section className="bg-gray-50 dark:bg-gray-800">
                  <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
                    <figure className="max-w-screen-md mx-auto">
                      <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                      </svg>
                      <blockquote>
                        <p className="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">"Landwind is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                      </blockquote>
                      <figcaption className="flex items-center justify-center mt-6 space-x-3">
                        <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
                        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                          <div className="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</div>
                          <div className="pl-3 text-sm font-light text-gray-500 ">CEO at Google</div>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </section>
                {/* End block */}
                {/* Start block */}
                <section className="bg-white dark:bg-gray-900">
                  <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
                    <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
                      <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Designed for business teams like yours</h2>
                      <p className="mb-5 font-light text-gray-500 sm:text-xl ">Here at Landwind we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                    </div>
                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                      {/* Pricing Card */}
                      <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                        <h3 className="mb-4 text-2xl font-semibold">Starter</h3>
                        <p className="font-light text-gray-500 sm:text-lg ">Best option for personal use &amp; for your next project.</p>
                        <div className="flex items-baseline justify-center my-8">
                          <span className="mr-2 text-5xl font-extrabold">$29</span>
                          <span className="text-gray-500 ">/month</span>
                        </div>
                        {/* List */}
                        <ul role="list" className="mb-8 space-y-4 text-left">
                          <li className="flex items-center space-x-3">
                            {/* Icon */}
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            <span>Individual configuration</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            {/* Icon */}
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            <span>No setup, or hidden fees</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            {/* Icon */}
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            <span>Team size: <span className="font-semibold">1 developer</span></span>
                          </li>
                          <li className="flex items-center space-x-3">
                            {/* Icon */}
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            <span>Premium support: <span className="font-semibold">6 months</span></span>
                          </li>
                          <li className="flex items-center space-x-3">
                            {/* Icon */}
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            <span>Free updates: <span className="font-semibold">6 months</span></span>
                          </li>
                        </ul>
                        <a href="#" className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">Get started</a>
                      </div>
                      {/* Pricing Card */}
                      <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                        <h3 className="mb-4 text-2xl font-semibold">Company</h3>
                        <p className="font-light text-gray-500 sm:text-lg ">Relevant for multiple users, extended &amp; premium support.</p>
                        <div className="flex items-baseline justify-center my-8">
                          <span className="mr-2 text-5xl font-extrabold">$99</span>
                          <span className="text-gray-500 " >/month</span>
                        </div>
                        {/* List */}
                        <ul role="list" className="mb-8 space-y-4 text-left">
                          <li className="flex items-center space-x-3">
                            {/* Icon */}
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            <span>Individual configuration</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            {/* Icon */}
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            <span>No setup, or hidden fees</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            {/* Icon */}
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            <span>Team size: <span className="font-semibold">10 developers</span></span>
                          </li>
                          <li className="flex items-center space-x-3">
                            {/* Icon */}
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            <span>Premium support: <span className="font-semibold">24 months</span></span>
                          </li>
                          <li className="flex items-center space-x-3">
                            {/* Icon */}
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            <span>Free updates: <span className="font-semibold">24 months</span></span>
                          </li>
                        </ul>
                        <a href="#" className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">Get started</a>
                      </div>
                      {/* Pricing Card */}
                      <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                        <h3 className="mb-4 text-2xl font-semibold">Enterprise</h3>
                        <p className="font-light text-gray-500 sm:text-lg ">Best for large scale uses and extended redistribution rights.</p>
                        <div className="flex items-baseline justify-center my-8">
                          <span className="mr-2 text-5xl font-extrabold">$499</span>
                          <span className="text-gray-500 ">/month</span>
                        </div>
                        {/* List */}
                        <ul role="list" className="mb-8 space-y-4 text-left">
                          <li className="flex items-center space-x-3">
                            {/* Icon */}
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            <span>Individual configuration</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            {/* Icon */}
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            <span>No setup, or hidden fees</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            {/* Icon */}
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            <span>Team size: <span className="font-semibold">100+ developers</span></span>
                          </li>
                          <li className="flex items-center space-x-3">
                            {/* Icon */}
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            <span>Premium support: <span className="font-semibold">36 months</span></span>
                          </li>
                          <li className="flex items-center space-x-3">
                            {/* Icon */}
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            <span>Free updates: <span className="font-semibold">36 months</span></span>
                          </li>
                        </ul>
                        <a href="#" className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">Get started</a>
                      </div>
                    </div>
                  </div>
                </section>
                {/* End block */}
                {/* Start block */}
                {/* End block */}
                {/* Start block */}
                <section className="bg-gray-50 dark:bg-gray-800">
                  <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
                    <div className="max-w-screen-sm mx-auto text-center">
                      <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">Start your free trial today</h2>
                      <p className="mb-6 font-light text-gray-500  md:text-lg">Try Landwind Platform for 30 days. No credit card required.</p>
                      <a href="#" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Free trial for 30 days</a>
                    </div>
                  </div>
                </section>
                {/* End block */}
                <footer className="bg-white dark:bg-gray-800">
                  <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
                      <div>
                        <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h3>
                        <ul className="text-gray-500 ">
                          <li className="mb-4">
                            <a href="#" className=" hover:underline">About</a>
                          </li>
                          <li className="mb-4">
                            <a href="#" className="hover:underline">Careers</a>
                          </li>
                          <li className="mb-4">
                            <a href="#" className="hover:underline">Brand Center</a>
                          </li>
                          <li className="mb-4">
                            <a href="#" className="hover:underline">Blog</a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h3>
                        <ul className="text-gray-500 ">
                          <li className="mb-4">
                            <a href="#" className="hover:underline">Discord Server</a>
                          </li>
                          <li className="mb-4">
                            <a href="#" className="hover:underline">Twitter</a>
                          </li>
                          <li className="mb-4">
                            <a href="#" className="hover:underline">Facebook
                            </a></li><a href="#" className="hover:underline">
                          </a><li className="mb-4"><a href="#" className="hover:underline">
                          </a><a href="#" className="hover:underline">Contact Us</a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h3>
                        <ul className="text-gray-500 ">
                          <li className="mb-4">
                            <a href="#" className="hover:underline">Privacy Policy</a>
                          </li>
                          <li className="mb-4">
                            <a href="#" className="hover:underline">Licensing</a>
                          </li>
                          <li className="mb-4">
                            <a href="#" className="hover:underline">Terms</a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h3>
                        <ul className="text-gray-500 ">
                          <li className="mb-4">
                            <a href="#" className=" hover:underline">About</a>
                          </li>
                          <li className="mb-4">
                            <a href="#" className="hover:underline">Careers</a>
                          </li>
                          <li className="mb-4">
                            <a href="#" className="hover:underline">Brand Center</a>
                          </li>
                          <li className="mb-4">
                            <a href="#" className="hover:underline">Blog</a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h3>
                        <ul className="text-gray-500 ">
                          <li className="mb-4">
                            <a href="#" className="hover:underline">iOS</a>
                          </li>
                          <li className="mb-4">
                            <a href="#" className="hover:underline">Android</a>
                          </li>
                          <li className="mb-4">
                            <a href="#" className="hover:underline">Windows</a>
                          </li>
                          <li className="mb-4">
                            <a href="#" className="hover:underline">MacOS</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="text-center">
                      <a href="#" className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img src="./images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                        Landwind
                      </a>
                      <span className="block text-sm text-center text-gray-500 ">© 2021-2022 Landwind™. All Rights Reserved. Built with <a href="https://flowbite.com" className="text-purple-600 hover:underline dark:text-purple-500">Flowbite</a> and <a href="https://tailwindcss.com" className="text-purple-600 hover:underline dark:text-purple-500">Tailwind CSS</a>.
                      </span>
                      <ul className="flex justify-center mt-5 space-x-5">
                        <li>
                          <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" /></svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </footer>
              </div>
            } />
          </Routes>

        </div >


      </Router>
    </div >
  )

}


export default App;
