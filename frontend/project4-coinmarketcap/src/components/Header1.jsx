import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from './LoginPage';
import Register from './Register';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


let Header1 =(props)=>{
    let {dataLatest, auth, formatter, db, signInWithEmailAndPassword, createUserWithEmailAndPassword} = props;
    
    
   return(
    <>
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
          <Link to="/login">
            <a className="bg-transparent login-register hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" style={{ borderRadius: "8px" }}>Login</a>
          </Link>
        </div>
        <Routes>
          <Route path="/login" element={<LoginPage auth={auth} signInWithEmailAndPassword={signInWithEmailAndPassword} />} />
          <Route path="/register" element={<Register auth={auth} createUserWithEmailAndPassword={createUserWithEmailAndPassword} collection={collection} addDoc={addDoc} db={db} />} />
        </Routes>
        <div className="hidden mt-2 mr-4 sm:inline-block">
          <Link to="/register">
            <a className="text-white bg-purple-700 login-register hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Sign up</a>
          </Link>
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

             </NavDropdown>
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
    </>
   )
}
export default Header1;