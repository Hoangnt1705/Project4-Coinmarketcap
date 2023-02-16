import './App.css';
import React, { useRef, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Socket from './components/Socket';
import SlideTbl from './components/SlideTbl';
import PostComponent from './components/PostComponent';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from './components/LoginPage';
import Register from './components/Register';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
let App = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyADD7SOk6lYqXZczh--7rydg7LR4Mj9OYM",
    authDomain: "project-4-64893.firebaseapp.com",
    projectId: "project-4-64893",
    storageBucket: "project-4-64893.appspot.com",
    messagingSenderId: "265891814289",
    appId: "1:265891814289:web:15747ca5a313e1442ed830",
    measurementId: "G-ND7TVZPFRN"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const [dataLatest, setDataLatest] = useState('');
  const [cryptocurrencyListings, setCryptocurrencyListings] = useState([]);



  useEffect(() => {
    Socket.on('global-metrics-quotes', (latest) => {
      console.log('Received data from server:', latest);
      setDataLatest(latest);
      console.log("a", latest);
    },);

    Socket.on('cryptocurrency-listings', (latest) => {
      console.log('Received data:', latest);
      setCryptocurrencyListings(latest);
      console.log("b", latest);
    });

    return () => {
      Socket.off('global-metrics-quotes');
    };
  },);



  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return (
    <div>
      {/* <div> {cryptocurrencyListings ? cryptocurrencyListings[0].quote.USD.price : "..."}</div> */}

      <div>
        <header className="fixed w-full">
          <nav className="bg-white bg-white-detail border-gray-200 py-2.5 dark:bg-gray-900">
            <div className="flex flex-wrap flex-wrap-detail items-center justify-between max-w-screen-xl px-4 mx-auto">
              <div className="flex items-center lg:order-2">

                <div>
                  <form id="app-cover">
                    <div id="select-box">
                      <input type="checkbox" id="options-view-button" />
                      <div id="select-button" className="brd">
                        <div id="selected-value">
                          <span className="sc-ef9b67cf-0 efYxya"></span>
                          <span className="sc-591b9f6d-1 bmTSjI">USD</span>
                        </div>
                        <div id="chevrons">
                          <i className="fas fa-chevron-up" />
                          <i className="fas fa-chevron-down" />
                        </div>
                      </div>
                      <div id="options">
                        <div className="option">
                          <input className="s-c top" type="radio" name="platform" defaultValue="codepen" />
                          <input className="s-c bottom" type="radio" name="platform" defaultValue="codepen" />
                          <i className="fa-brands fa-ethereum"></i>
                          <span className="label">Ethereum</span>
                          <span className="opt-val"><a className="paddingIcon fa-brands fa-ethereum"></a>Ethereum</span>
                        </div>
                        <div className="option">
                          <input className="s-c top" type="radio" name="platform" defaultValue="dribbble" />
                          <input className="s-c bottom" type="radio" name="platform" defaultValue="dribbble" />
                          <i className="fa-solid fa-sterling-sign"></i>
                          <span className="label">Pound Sterling</span>
                          <span className="opt-val"><a className="paddingIcon fa-solid fa-sterling-sign"></a>Pound Sterling</span>
                        </div>
                        <div className="option">
                          <input className="s-c top" type="radio" name="platform" defaultValue="behance" />
                          <input className="s-c bottom" type="radio" name="platform" defaultValue="behance" />
                          <i className="fa-solid fa-euro-sign"></i>
                          <span className="label">Euro</span>
                          <span className="opt-val"><a className="paddingIcon fa-solid fa-euro-sign"></a>Euro</span>
                        </div>
                        <div className="option">
                          <input className="s-c top" type="radio" name="platform" defaultValue="hackerrank" />
                          <input className="s-c bottom" type="radio" name="platform" defaultValue="hackerrank" />
                          <i className="fa-solid fa-dollar-sign"></i>
                          <span className="label">United States Dollar</span>
                          <span className="opt-val"><a className="paddingIcon fa-solid fa-dollar-sign"></a>United States Dollar</span>
                        </div>
                        <div className="option">
                          <input className="s-c top" type="radio" name="platform" defaultValue="stackoverflow" />
                          <input className="s-c bottom" type="radio" name="platform" defaultValue="stackoverflow" />
                          <i className="fa-brands fa-bitcoin"></i>
                          <span className="label">Bitcoin</span>
                          <span className="opt-val"><a className="paddingIcon fa-brands fa-bitcoin"></a>Bitcoin</span>
                        </div>
                        <div className="option">
                          <input className="s-c top" type="radio" name="platform" defaultValue="freecodecamp" />
                          <input className="s-c bottom" type="radio" name="platform" defaultValue="freecodecamp" />
                          <i className="fa-solid fa-brazilian-real-sign"></i>
                          <span className="label">Brazilian Real</span>
                          <span className="opt-val"><a className="paddingIcon fa-solid fa-brazilian-real-sign"></a>Brazilian Real</span>
                        </div>
                        <div id="option-bg" />
                      </div>
                    </div>
                  </form>
                </div>

                <button type="button" className="sc-476bb07-0 sc-e0d8c65e-7 fuFPKs cmc-theme-picker cmc-theme-picker--day" style={{ marginLeft: '8px' }}>
                  <i className="fa-solid fa-moon"></i>
                </button>

                <div className="sc-a32ed5b3-1 kHTgCr">
                  <div className="cmc-popover">
                    <div className="cmc-popover__trigger">
                      <a href="/account/my-diamonds/" className="sc-a32ed5b3-2 joAEnE">
                        <img src="https://static.vecteezy.com/system/resources/previews/009/380/797/original/diamond-clipart-design-illustration-free-png.png" width={23} height={23} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="hidden mt-2 mr-4 sm:inline-block">
                  <a className="bg-transparent login-register hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" style={{ borderRadius: "8px" }}>Login</a>
                </div>
                <div className="hidden mt-2 mr-4 sm:inline-block">
                  <a className="text-white bg-purple-700 login-register hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Sign up</a>
                </div>
                {/* <a href="#" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a> */}
                <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                  <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </button>
              </div>
              <div className="items-center justify-between justify-between-detail hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul className="nonPadding flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                  <li>
                    <a href="#" className="block block-detail " aria-current="page">Cryptos: <a className="globalMetrics">{dataLatest ? dataLatest.total_cryptocurrencies : "..."}</a></a>
                  </li>
                  <li>
                    <a href="#" className="block block-detail">Exchange: <a className="globalMetrics">{dataLatest ? dataLatest.active_exchanges : "..."}</a></a>
                  </li>
                  <li>
                    <a href="#" className="block block-detail">Market Cap: <a className="globalMetrics">{dataLatest ? formatter.format(dataLatest.quote.USD.total_market_cap) : "..."}</a></a>
                  </li>
                  <li>
                    <a href="#" className="block block-detail">24h Vol: <a className="globalMetrics">{dataLatest ? formatter.format(dataLatest.quote.USD.total_volume_24h) : "..."}</a></a>
                  </li>
                  {/* <li>
                    <a href="#" className="block block-detail">Dominance: <a className="globalMetrics">{dataLatest ? `BTC:${dataLatest.btc_dominance_yesterday.toFixed(0)}% ETH: ${dataLatest.eth_dominance_yesterday.toFixed(0)}%` : "..."}</a></a>
                  </li> */}
                  <li>
                    <a href="#" className="block block-detail">ETH Gas: <a className="globalMetrics">{dataLatest ? "24 Gwei" : "..."}</a></a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">

              <div className="sc-3d8b2893-1 gNjbNn card-rendered" >
                <a id='logo' href="/" title="Go to homepage">
                  <svg width="168" height="29" fill="var(--text-color)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168 29" className="cmc-logo-img">
                    <path d="M28.442 14.445v-.056C28.414 6.466 22.032 0 14.221 0S0 6.466 0 14.445c0 7.98 6.381 14.433 14.221 14.433a13.978 13.978 0 0 0 9.66-3.866 1.309 1.309 0 0 0-1.766-1.933l-.028.028a11.5 11.5 0 0 1-16.572-.755l6.075-9.742v4.508c0 2.154.84 2.855 1.546 3.051.706.196 1.765.054 2.912-1.765l3.333-5.412c.089-.158.192-.308.306-.449v2.745c0 2.015.812 3.639 2.211 4.422a4.071 4.071 0 0 0 4.173-.167c1.616-1.049 2.484-2.886 2.371-5.098Zm-3.696 2.835a1.529 1.529 0 0 1-1.546.111c-.56-.335-.897-1.09-.897-2.126v-3.173c0-1.51-.588-2.603-1.595-2.881-1.709-.516-2.995 1.595-3.472 2.379l-3.015 4.842V10.47c-.028-1.371-.477-2.183-1.317-2.436-.56-.167-1.4-.082-2.211 1.15L3.946 19.989a11.971 11.971 0 0 1-1.371-5.544c0-6.523 5.234-11.814 11.646-11.814 6.412 0 11.646 5.291 11.646 11.814v.057c.067 1.258-.337 2.268-1.12 2.77v.008ZM48.263 9.518a1.407 1.407 0 0 1 .645 1.092 1.24 1.24 0 0 1-1.204 1.232 2.062 2.062 0 0 1-.449-.085 4.61 4.61 0 0 0-2.716-.922c-2.379 0-4.002 1.93-4.002 4.337s1.652 4.312 4.002 4.312a4.34 4.34 0 0 0 3.023-1.232c.206-.145.45-.223.701-.224a1.134 1.134 0 0 1 .99 1.709c-.097.17-.235.315-.402.42a6.647 6.647 0 1 1-4.283-11.758c1.318-.02 2.61.37 3.695 1.119ZM54.925 12.309a4.745 4.745 0 0 0-4.765 4.71 4.82 4.82 0 0 0 4.76 4.79c2.464 0 4.564-2.212 4.564-4.79 0-2.576-2.067-4.71-4.559-4.71Zm-.028 7.167c-1.175 0-2.155-1.064-2.155-2.436 0-1.427.98-2.296 2.155-2.296 1.093 0 2.015.897 2.015 2.296 0 1.4-.922 2.444-2.015 2.444v-.008ZM61.056 20.352v-6.608a1.29 1.29 0 0 1 1.289-1.314 1.306 1.306 0 0 1 1.289 1.314v6.608a1.306 1.306 0 0 1-1.289 1.315 1.328 1.328 0 0 1-1.289-1.315ZM60.86 9.938a1.505 1.505 0 0 1 1.485-1.547 1.528 1.528 0 0 1 1.51 1.547 1.497 1.497 0 0 1-2.994 0ZM68.559 16.77v3.582a1.289 1.289 0 1 1-2.578 0v-6.915a.994.994 0 1 1 1.988 0 3.738 3.738 0 0 1 2.835-1.12c2.577 0 3.724 1.932 3.724 4.144v3.891a1.289 1.289 0 1 1-2.578 0V16.77c0-1.121-.139-2.062-1.763-2.062-1.146 0-1.623.951-1.623 2.062h-.005ZM82.865 18.141a.835.835 0 0 1-.673-.338l-2.995-3.247v5.796a1.289 1.289 0 1 1-2.577 0V8.873a.546.546 0 0 1 .477-.335.9.9 0 0 1 .56.335l4.788 5.376a.624.624 0 0 0 .42.258.701.701 0 0 0 .42-.258l4.786-5.376a.843.843 0 0 1 .559-.335.49.49 0 0 1 .477.335v11.48a1.29 1.29 0 0 1-1.289 1.314 1.307 1.307 0 0 1-1.288-1.315v-5.796l-2.998 3.247a1.031 1.031 0 0 1-.67.338h.003ZM107.08 14.698h-.281c-1.623.082-1.93 1.008-1.93 2.062v3.582a1.29 1.29 0 0 1-1.289 1.289 1.29 1.29 0 0 1-1.288-1.29v-6.903a.997.997 0 0 1 .995-.995.996.996 0 0 1 .994.995c.951-.897 1.735-1.093 2.518-1.122h.258a1.207 1.207 0 0 1 1.175 1.204 1.18 1.18 0 0 1-1.147 1.178h-.005ZM117.018 19.736c.118.185.186.397.196.616a1.346 1.346 0 0 1-1.289 1.289c-.446 0-.84-.338-1.147-.73l-2.966-3.448v2.86a1.288 1.288 0 0 1-2.577 0V9.828a1.287 1.287 0 0 1 2.199-.911c.242.241.378.57.378.91v6.55l2.966-3.274c.307-.337.673-.7 1.119-.7a1.289 1.289 0 0 1 1.232 1.26 1.09 1.09 0 0 1-.168.587l-2.35 2.577 2.407 2.913v-.003ZM132.584 21.78h-.701c-1.959 0-3.108-.869-3.108-3.92v-3.162h-.67a1.19 1.19 0 1 1 0-2.382h.66V9.881a1.282 1.282 0 0 1 .789-1.214c.158-.066.328-.1.499-.1a1.311 1.311 0 0 1 1.289 1.314v2.428h1.062a1.185 1.185 0 0 1 1.149 1.203 1.222 1.222 0 0 1-1.149 1.178h-1.062v2.66c0 1.763.082 2.126.866 2.126h.366a1.152 1.152 0 0 1 1.147 1.15 1.174 1.174 0 0 1-1.147 1.147l.01.007ZM145.04 9.518a1.41 1.41 0 0 1 .644 1.092 1.239 1.239 0 0 1-1.204 1.232 2.135 2.135 0 0 1-.448-.085 4.597 4.597 0 0 0-2.714-.922c-2.381 0-4.005 1.93-4.005 4.337s1.652 4.312 4.005 4.312a4.34 4.34 0 0 0 3.023-1.232c.205-.144.449-.222.699-.224a1.143 1.143 0 0 1 .816.332 1.134 1.134 0 0 1 .176 1.378 1.184 1.184 0 0 1-.405.418 6.639 6.639 0 0 1-5.978 1.3 6.642 6.642 0 0 1-4.853-7.268 6.642 6.642 0 0 1 6.548-5.789 6.27 6.27 0 0 1 3.696 1.119ZM98.99 12.402a.982.982 0 0 0-.982 1.007l-.054.31a4.026 4.026 0 0 0-2.997-1.428c-2.518 0-4.337 2.126-4.337 4.7 0 2.575 1.79 4.789 4.198 4.789 1.008 0 2.603-.449 3.108-1.428l.057.307a.964.964 0 0 0 1.007.982 1.006 1.006 0 0 0 1.008-1.008v-7.216a1.03 1.03 0 0 0-1.008-1.015Zm-3.752 7.082c-1.147 0-2.044-1.09-2.044-2.436 0-1.345.923-2.32 2.044-2.32 1.12 0 2.129.923 2.129 2.32 0 1.397-.982 2.436-2.13 2.436ZM126.425 16.824c-.057-2.884-1.933-4.508-4.423-4.508-3.092 0-4.397 2.24-4.397 4.817 0 3.276 2.158 4.675 4.761 4.675.979 0 2.015-.141 2.798-.729a1.135 1.135 0 0 0 .56-.923 1.057 1.057 0 0 0-1.031-1.064c-.237.002-.469.07-.67.196a4.173 4.173 0 0 1-1.681.335c-.644 0-2.128-.258-2.128-1.791h5.2a1.031 1.031 0 0 0 1.011-1.008Zm-6.217-.65c0-1.09 1.15-1.453 1.848-1.453.699 0 1.848.363 1.876 1.453h-3.724ZM155.31 12.402a.984.984 0 0 0-.703.296.976.976 0 0 0-.277.711l-.056.31a4.02 4.02 0 0 0-2.995-1.428c-2.52 0-4.34 2.126-4.34 4.7 0 2.575 1.804 4.789 4.198 4.789 1.008 0 2.606-.449 3.108-1.428l.057.307a.974.974 0 0 0 .292.708.965.965 0 0 0 .716.274 1.01 1.01 0 0 0 .932-.622c.05-.122.076-.253.076-.386v-7.216a1.032 1.032 0 0 0-1.008-1.015Zm-3.753 7.082c-1.118 0-2.043-1.09-2.043-2.436 0-1.345.897-2.32 2.043-2.32 1.147 0 2.129.923 2.129 2.32 0 1.397-.974 2.436-2.123 2.436h-.006ZM163.657 12.309a4.14 4.14 0 0 0-3.023 1.232c0-.642-.42-1.119-.979-1.119a1.007 1.007 0 0 0-1.01 1.008v10.863a1.291 1.291 0 0 0 1.288 1.288 1.29 1.29 0 0 0 1.289-1.288v-3.268c.698.53 1.819.755 2.577.773 2.436 0 4.201-2.211 4.201-4.788 0-2.578-1.85-4.701-4.343-4.701Zm-.309 7.167c-1.147 0-2.126-1.03-2.126-2.435s.979-2.32 2.126-2.32c1.147 0 2.044.923 2.044 2.32 0 1.352-.894 2.443-2.044 2.443v-.008Z">
                    </path>
                  </svg>
                </a>
              </div>

              <Navbar bg="light" id="bg-light" expand="lg">
                <Container>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <NavDropdown title="Cryptocurrencies" id="basic-nav-dropdown">
                        <div className='dropdownTbl'>
                          <div>
                            <h6 className='dropdownTblTitle'>CRYPTOCURRENCIES</h6>
                            <NavDropdown.Item href="#action/3.1">
                              <div className='dropdownTblBlock'>
                                <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCmcIcon.svg" className='dropdownTblBlockImg' />
                                <p className='dropdownTblText'>Ranking</p>
                              </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                              <div className='dropdownTblBlock'>
                                <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuRecentlyAddedIcon.svg" className='dropdownTblBlockImg' />
                                <p className='dropdownTblText'>Recently Added</p>
                              </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                              <div className='dropdownTblBlock'>
                                <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCategoriesIcon.svg" className='dropdownTblBlockImg' />
                                <p className='dropdownTblText'>Categories</p>
                              </div>

                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                              <div className='dropdownTblBlock'>
                                <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuSpotlightIcon.svg" className='dropdownTblBlockImg' />
                                <p className='dropdownTblText'>Spotlight</p>
                              </div>

                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                              <div className='dropdownTblBlock'>
                                <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuGainersLosersIcon.svg" className='dropdownTblBlockImg' />
                                <p className='dropdownTblText'>Gainers & Losers</p>
                              </div>

                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                              <div className='dropdownTblBlock'>
                                <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuGlobalChartsIcon.svg" className='dropdownTblBlockImg' />
                                <p className='dropdownTblText'>Global Charts</p>
                              </div>

                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                              <div className='dropdownTblBlock'>
                                <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuHistoryIcon.svg" className='dropdownTblBlockImg' />
                                <p className='dropdownTblText'>Historical Snapshots</p>
                              </div>

                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                              <div className='dropdownTblBlock'>
                                <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuPriceEstimateIcon.svg" className='dropdownTblBlockImg' />
                                <p className='dropdownTblText'>Price Estimates</p>
                              </div>

                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                              <div className='dropdownTblBlock'>
                                <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuPolkadotIcon.svg" className='dropdownTblBlockImg' />
                                <p className='dropdownTblText'>Polkadot Parachains</p>
                              </div>

                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                              <div className='dropdownTblBlock'>
                                <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuLegalIcon.svg" className='dropdownTblBlockImg' />
                                <p className='dropdownTblText'>Legal Tender Countries</p>
                              </div>

                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                              <div className='dropdownTblBlock'>
                                <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuFiatsIcon.svg" className='dropdownTblBlockImg' />
                                <p className='dropdownTblText'>Fiats/ Companies Ranking</p>
                              </div>

                            </NavDropdown.Item>
                          </div>
                          <div>
                            <h6 className='dropdownTblTitle' >NFT</h6>
                            <NavDropdown.Item href="#action/3.1">
                              <div className='dropdownTblBlock'>
                                <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuNFTOverview.svg" className='dropdownTblBlockImg' />
                                <p className='dropdownTblText'>Overall NFT Stats</p>
                              </div>

                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                              <div className='dropdownTblBlock'>
                                <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuNFTCollections.svg" className='dropdownTblBlockImg' />
                                <p className='dropdownTblText'>Top Collections</p>
                              </div>

                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                              <div className='dropdownTblBlock'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height={40} width={40} viewBox="0 0 40 40" className="dropdownTblBlockImg"><svg width={40} height={40} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx={16} cy={16} r={16} fill="#16C784" /><path fillRule="evenodd" clipRule="evenodd" d="M12.6667 9.33325C12.2065 9.33325 11.8334 9.70635 11.8334 10.1666V10.9999H11C10.0796 10.9999 9.33337 11.7461 9.33337 12.6666V20.9999C9.33337 21.9204 10.0796 22.6666 11 22.6666H21C21.9205 22.6666 22.6667 21.9204 22.6667 20.9999V12.6666C22.6667 11.7461 21.9205 10.9999 21 10.9999H20.1667V10.1666C20.1667 9.70635 19.7936 9.33325 19.3334 9.33325C18.8731 9.33325 18.5 9.70635 18.5 10.1666V10.9999H13.5V10.1666C13.5 9.70635 13.1269 9.33325 12.6667 9.33325ZM12.6667 13.4999C12.2065 13.4999 11.8334 13.873 11.8334 14.3333C11.8334 14.7935 12.2065 15.1666 12.6667 15.1666H19.3334C19.7936 15.1666 20.1667 14.7935 20.1667 14.3333C20.1667 13.873 19.7936 13.4999 19.3334 13.4999H12.6667Z" fill="white" /></svg></svg>
                                <p className='dropdownTblText'>Upcoming Sales</p>
                              </div>

                            </NavDropdown.Item>

                            <h6 className='dropdownTblTitle' id='NFT'>On Chain Data</h6>
                            <NavDropdown.Item href="#action/3.3">
                              <div className='dropdownTblBlock'>
                                <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuDexscan.svg" className='dropdownTblBlockImg' />
                                <p className='dropdownTblText'>Dex Pairs</p>
                              </div>

                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                              <div className='dropdownTblBlock'>
                                <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuChainRanking.svg" className='dropdownTblBlockImg' />
                                <p className='dropdownTblText'>Chain Ranking</p>
                              </div>

                            </NavDropdown.Item>
                          </div>

                        </div>

                      </NavDropdown>
                    </Nav>

                    <Nav className="me-auto">
                      <NavDropdown title="Products" id="basic-nav-dropdown">
                        <div className='dropdownTbl'>
                          <div>
                            <h6 className='dropdownTblTitle'>PRODUCTS</h6>
                            <NavDropdown.Item href="#action/3.1">
                              <div className='dropdownTblBlock'>
                                <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuConverterIcon.svg" className='dropdownTblBlockImg' />
                                <p className='dropdownTblText'>Converter</p>
                              </div>

                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                              <div className='dropdownTblBlock'>
                                <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuMobileAppIcon.svg" className='dropdownTblBlockImg' />
                                <p className='dropdownTblText'>Mobile Apps</p>
                              </div>

                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                              <div className='dropdownTblBlock'>
                                <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuExplorerIcon.svg" className='dropdownTblBlockImg' />
                                <p className='dropdownTblText'>Blockchain Explorer</p>
                              </div>

                            </NavDropdown.Item>
                            <NavDropdown.Item>
                              <div className='dropdownTblBlock'>
                                <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuJobsBoardIcon.svg" className='dropdownTblBlockImg' />
                                <p className='dropdownTblText'>Jobs Board</p>
                              </div>

                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                              <div className='dropdownTblBlock'>
                                <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCryptoApiIcon.light.svg" className='dropdownTblBlockImg' />
                                <p className='dropdownTblText'>Crypto API</p>
                              </div>

                            </NavDropdown.Item>
                            <NavDropdown.Item>
                              <div className='dropdownTblBlock'>
                                <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuWidgetsIcon.light.svg" className='dropdownTblBlockImg' />
                                <p className='dropdownTblText'>Site Widgets</p>
                              </div>

                            </NavDropdown.Item>
                          </div>
                          <div>
                            <h6 className='dropdownTblTitle'>CAMPAIGNS</h6>
                            <NavDropdown.Item href="#action/3.1">
                              <div className='dropdownTblBlock'>
                                <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuAirdropsIcon.svg" className='dropdownTblBlockImg' />
                                <p className='dropdownTblText'>Free Airdrops</p>
                              </div>

                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                              <div className='dropdownTblBlock'>
                                <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuRewardsIcon.svg" className='dropdownTblBlockImg' />
                                <p className='dropdownTblText'>Diamond Rewards</p>
                              </div>

                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                              <div className='dropdownTblBlock'>
                                <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuReferralIcon.svg" className='dropdownTblBlockImg' />
                                <p className='dropdownTblText'>Referral Program</p>
                              </div>

                            </NavDropdown.Item>
                            <NavDropdown.Item>
                              <div className='dropdownTblBlock'>
                                <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuEarnCryptoIcon.svg" className='dropdownTblBlockImg' />
                                <p className='dropdownTblText'>Learn & Earn</p>
                              </div>

                            </NavDropdown.Item>
                          </div>
                          <div>
                            <h6 className='dropdownTblTitle'>CALENDARS</h6>
                            <NavDropdown.Item href="#action/3.1">
                              <div className='dropdownTblBlock'>
                                <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuICOIcon.svg" className='dropdownTblBlockImg' />
                                <p className='dropdownTblText'>ICO Calendar</p>
                              </div>

                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                              <div className='dropdownTblBlock'>
                                <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuEvents2Icon.svg" className='dropdownTblBlockImg' />
                                <p className='dropdownTblText'>Events Calendar</p>
                              </div>

                            </NavDropdown.Item>
                          </div>
                        </div>

                      </NavDropdown>
                    </Nav>

                    <Nav className="me-auto">
                      <NavDropdown title="Exchanges" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                          <div className='dropdownTblBlock'>
                            <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuSpotIcon.svg" className='dropdownTblBlockImg' />
                            <p className='dropdownTblText'>Spot</p>
                          </div>

                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          <div className='dropdownTblBlock'>
                            <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuDerivativesIcon.svg" className='dropdownTblBlockImg' />
                            <p className='dropdownTblText'>Derivatives</p>
                          </div>

                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          <div className='dropdownTblBlock'>
                            <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuDexIcon.svg" className='dropdownTblBlockImg' />
                            <p className='dropdownTblText'>DEX</p>
                          </div>

                        </NavDropdown.Item>

                        `` </NavDropdown>
                    </Nav>
                    <Nav className="me-auto">
                      <NavDropdown title="Community" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                          <div className='dropdownTblBlock'>
                            <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/feed.svg" className='dropdownTblBlockImg' />
                            <p className='dropdownTblText'>Feeds</p>
                          </div>

                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          <div className='dropdownTblBlock'>
                            <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/articles.svg" className='dropdownTblBlockImg' />
                            <p className='dropdownTblText'>Articles</p>
                          </div>

                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>



                    <Nav className="me-auto">
                      <NavDropdown title="Learn" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                          <div className='dropdownTblBlock'>
                            <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuAlexandriaIcon.svg" className='dropdownTblBlockImg' />
                            <p className='dropdownTblText'>Alexandria</p>
                          </div>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          <div className='dropdownTblBlock'>
                            <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuNewsIcon.svg" className='dropdownTblBlockImg' />
                            <p className='dropdownTblText'>News</p>
                          </div>

                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          <div className='dropdownTblBlock'>
                            <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCMCResearch.svg" className='dropdownTblBlockImg' />
                            <p className='dropdownTblText'>Research</p>
                          </div>

                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          <div className='dropdownTblBlock'>
                            <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuConferenceIcon.svg" className='dropdownTblBlockImg' />
                            <p className='dropdownTblText'>Conference</p>
                          </div>

                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          <div className='dropdownTblBlock'>
                            <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuVideosIcon.svg" className='dropdownTblBlockImg' />
                            <p className='dropdownTblText'>Video</p>
                          </div>

                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          <div className='dropdownTblBlock'>
                            <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuMarketUpdatesIcon.svg" className='dropdownTblBlockImg' />
                            <p className='dropdownTblText'>Marker Updates</p>
                          </div>

                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          <div className='dropdownTblBlock'>
                            <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuGlossaryIcon.svg" className='dropdownTblBlockImg' />
                            <p className='dropdownTblText'>Glossary</p>
                          </div>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          <div className='dropdownTblBlock'>
                            <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuBuyIcon.svg" className='dropdownTblBlockImg' />
                            <p className='dropdownTblText'>Where to Buy</p>
                          </div>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                          <div className='dropdownTblBlock'>
                            <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuNewsletterIcon.light.svg" className='dropdownTblBlockImg' />
                            <p className='dropdownTblText'>Newsletter</p>
                          </div>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          <div className='dropdownTblBlock'>
                            <img src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuMethodologyIcon.light.svg" className='dropdownTblBlockImg' />
                            <p className='dropdownTblText'>Methodology</p>
                          </div>
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>

            </div>
          </nav>

        </header>
        {/* Run block */}
        <section className="bg-gray-50 dark:bg-gray-800">
          <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
            <h3 style={{ fontWeight: "700" }}>Today's Cryptocurrency Price by Market Cap</h3>
            <span style={{ color: "rgb(88, 102, 126)", marginTop: "0" }}>The global crypto market cap is {dataLatest ? formatter.format(dataLatest.quote.USD.total_market_cap).substring(0, 5) + "T" : "..."}
              , a {dataLatest ? dataLatest.quote.USD.total_market_cap_yesterday_percentage_change.toFixed(2) : "..."} increase over the last day. </span>
            <a href="" className="readMore" style={{ color: "rgb(128, 138, 157)", fontSize: "17px", textDecoration: "underline !important" }}>Read More</a>
          </div>
        </section>
        {/* Start block */}
        <div className='slideContainer'>
          <SlideTbl />
          <SlideTbl />
          <PostComponent />
        </div>
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
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                  {/* <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th> */}
                </tr>
              </thead>
              <tbody>
                {cryptocurrencyListings.map((element, index) => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <i class="fa-solid fa-star"></i>
                    </th>
                    <td className="px-6 py-4" key={element.id}>
                      {index}
                    </td>
                    <td className="px-6 py-4">
                      {element.name}
                    </td>
                    <td className="px-6 py-4">
                      {formatter.format(element.quote.USD.price)}
                    </td>
                    <td className="px-6 py-4">
                      {`${element.quote.USD.percent_change_1h.toFixed(2)}%`}
                    </td>
                    <td className="px-6 py-4">
                      {`${element.quote.USD.percent_change_24h.toFixed(2)}%`}
                    </td>
                    <td className="px-6 py-4">
                      {`${element.quote.USD.percent_change_7d.toFixed(2)}%`}
                    </td>
                    <td className="px-6 py-4">
                      {formatter.format(element.quote.USD.market_cap)}
                    </td>
                    <td className="px-6 py-4">
                      {formatter.format(element.quote.USD.volume_24h)}
                    </td>
                    <td className="px-6 py-4">
                      {`${element.circulating_supply} ${element.symbol}`}
                    </td>
                    <td className="px-6 py-4">
                      19,292,012 BTC
                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
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
      </div >
      <div>
        <Link to="/login" id='login1'>Đăng nhập</Link>
      </div>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage auth={auth} signInWithEmailAndPassword={signInWithEmailAndPassword} />} />
          <Route path="/register" element={<Register auth={auth} createUserWithEmailAndPassword={createUserWithEmailAndPassword} />} />
        </Routes>
      </Router>
    </div >
  )

}


export default App;
