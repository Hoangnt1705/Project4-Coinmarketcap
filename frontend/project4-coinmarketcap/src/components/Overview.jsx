import PostComponent from "./PostComponent";
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import ChartComponent from './Chart';
import ChartTrandingView from './ChartTrandingView';
const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
const data = [10, 15, 12, 8, 20];

function Overview(props) {
    let { cryptocurrencyListings } = props;
    return (
        <div className='coinInfo items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6'>
            <div className="overviewContainer">
                <h3 className="bitcoinChart">Bitcoin to USD Chart</h3>
                <div className="overviewBody">
                    <div className="chart-btn-container">
                        <div className="chartBtnContainer">
                            <div className="chartBtns">
                                <button className="chartBtn">Price</button>
                                <button className="chartBtn">Market Cap</button>
                                <button className="chartBtn">TradingView</button>
                            </div>
                        </div>
                        <div className="chartBtnContainer">
                            <div className="searchContainer">
                                <input className="search" placeholder="Search" />
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <div className="chartBtns">
                                <button className="chartBtn">1D</button>
                                <button className="chartBtn">7D</button>
                                <button className="chartBtn">1M</button>
                                <button className="chartBtn">3M</button>
                                <button className="chartBtn">1Y</button>
                                <button className="chartBtn">YTD</button>
                                <button className="chartBtn">ALL</button>
                                <button className="chartBtn"><i className="fa-regular fa-calendar"></i></button>
                                <button className="chartBtn">LOG</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="chart">

                    {/* Đổ biểu đồ vào đây nhé */}

                    {/* <div classname="App">
                        <ChartComponent labels={labels} data={data} />

                    </div> */}
                    <ChartTrandingView />

                </div>
                <div>
                    <h2>BTC Price Live Data</h2>
                    <p>The live Bitcoin price today is $24.319,42 USD with a 24-hour trading volume of $27.588.923.353 USD. We update our BTC to USD price in real-time. Bitcoin is down 0,06% in the last 24 hours. The current CoinMarketCap ranking is #1, with a live market cap of $469.353.810.976 USD. It has a circulating supply of 19.299.550 BTC coins and a max. supply of 21.000.000 BTC coins.</p>
                    <p>If you would like to know where to buy Bitcoin at the current rate, the top cryptocurrency exchanges for trading in Bitcoin stock are
                        currently <a href="https://coinmarketcap.com/exchanges/binance/">Binance</a>, <a href="https://coinmarketcap.com/exchanges/okx/">OKX</a>, <a href="https://coinmarketcap.com/exchanges/deepcoin/">Deepcoin</a>, <a href="https://coinmarketcap.com/exchanges/btcex-exchange/">BTCEX</a>,
                        and <a href="https://coinmarketcap.com/exchanges/bybit/">Bybit</a>. You can find others listed on
                        our <a href="https://coinmarketcap.com/rankings/exchanges/">crypto exchanges page</a>.</p>
                    <h2>What Is Bitcoin (BTC)?</h2>
                    <p><a href="https://coinmarketcap.com/alexandria/article/an-intro-to-bitcoin">Bitcoin </a>
                        is a decentralized <a href="https://coinmarketcap.com/alexandria/article/what-are-cryptocurrencies">cryptocurrency </a>
                        originally described in a 2008 <a href="https://coinmarketcap.com/alexandria/glossary/whitepaper">whitepaper</a> by a person, or group of people, using the
                        alias <a href="https://coinmarketcap.com/alexandria/article/who-is-satoshi-nakamoto">Satoshi Nakamoto</a>. It was launched soon after, in January 2009.</p>
                    <p>
                        <a href="https://coinmarketcap.com/alexandria/article/what-is-bitcoin">Bitcoin</a> is a peer-to-peer online currency, meaning that
                        all <a href="https://coinmarketcap.com/alexandria/article/how-long-does-a-bitcoin-transaction-take">transactions</a> happen directly between equal, independent
                        network participants, without the need for any intermediary to permit or facilitate them. Bitcoin was created, according to Nakamoto's own words, to allow “online
                        payments to be sent directly from one party to another without going through a financial institution.”
                    </p>
                    <p>
                        Some concepts for a similar type of a decentralized electronic currency precede BTC, but Bitcoin holds the distinction of being
                        the <a href="https://coinmarketcap.com/alexandria/article/a-beginner-s-guide-to-investing-in-cryptocurrencies">first-ever cryptocurrency</a> to come into actual use.
                    </p>
                    <h3>Who Are the Founders of Bitcoin?</h3>
                    <p>Bitcoin's original inventor is known under a pseudonym, Satoshi Nakamoto. As of 2021, the true identity of the person — or organization — that is behind the alias remains unknown.</p>
                    <p>On October 31, 2008, Nakamoto published Bitcoin's whitepaper, which described in detail how a
                        peer-to-peer, online currency could be implemented. They proposed to use a decentralized ledger
                        of transactions packaged in batches (called “blocks”) and secured by cryptographic algorithms — the whole
                        system would later be dubbed “<a href="https://coinmarketcap.com/alexandria/glossary/blockchain">blockchain</a>.”
                    </p>
                    <p>
                        Just two months later, on January 3, 2009, Nakamoto mined the first block on the Bitcoin
                        network, known as the <a href="https://coinmarketcap.com/alexandria/glossary/genesis-block">genesis block</a>, thus launching
                        the world's first cryptocurrency. Bitcoin
                        price was $0 when first introduced, and most Bitcoins were obtained via mining, which only
                        required moderately powerful devices (e.g. PCs) and mining software. The first known Bitcoin
                        commercial transaction occurred on May 22, 2010, when programmer Laszlo Hanyecz traded
                        10,000 Bitcoins for two pizzas. At Bitcoin price today in mid-September 2021, those pizzas
                        would be worth an astonishing $478 million. This event is now known as “Bitcoin Pizza Day.”
                        In July 2010, Bitcoin first started trading, with the Bitcoin price ranging from $0.0008 to
                        $0.08 at that time.
                    </p>
                    <p>
                        However, while Nakamoto was the original inventor of Bitcoin, as well as the author of its very
                        first implementation, he handed the network alert key and control of the code repository to
                        Gavin Andresen, who later became lead developer at the Bitcoin Foundation. Over the years a
                        large number of people have contributed to improving the cryptocurrency's software by patching
                        vulnerabilities and adding new features.
                    </p>
                    <p>
                        Bitcoin's source code repository on GitHub lists more than 750 contributors, with some of the key ones being Wladimir J. van der Laan, Marco Falke, Pieter Wuille,
                        Gavin Andresen, Jonas Schnelli and others.
                    </p>
                    <h3>What Makes Bitcoin Unique?</h3>
                    <p>
                        Bitcoin's most unique advantage comes from the fact that it was the very first cryptocurrency to appear on the market.
                    </p>
                    <p>
                        It has managed to create a global community and give birth to an entirely new industry of millions
                        of enthusiasts who create, invest in, trade and use Bitcoin and other cryptocurrencies in their
                        everyday lives. The emergence of the first cryptocurrency has created a conceptual and
                        technological basis that subsequently inspired the development of thousands of competing projects.
                    </p>
                    <p>
                        <a href="https://coinmarketcap.com/">The entire cryptocurrency market</a> — now worth more than $2 trillion — is
                        based on the idea realized by Bitcoin: money that can be sent and received by anyone, anywhere in
                        the world without reliance on trusted intermediaries, such as banks and financial services
                        companies.
                    </p>
                    <p>
                        Thanks to its pioneering nature, BTC remains at the top of this energetic market after over
                        a decade of existence. Even after Bitcoin has lost its undisputed dominance, it remains the
                        largest <a href="https://coinmarketcap.com/alexandria/article/what-are-cryptocurrencies">cryptocurrency</a>, with a
                        <a href="https://coinmarketcap.com/alexandria/glossary/market-capitalization-market-cap-mcap">market capitalization</a> that surpassed the $1 trillion mark in
                        2021, after Bitcoin price hit an all-time high of $64,863.10 on April 14, 2021. This is owing
                        in large part to growing institutional interest in Bitcoin, and the ubiquitousness of platforms
                        that provide use-cases for BTC: <a href="https://coinmarketcap.com/alexandria/article/how-to-use-a-bitcoin-wallet">wallets</a>, exchanges, payment services, online games and more.
                    </p>
                    <h5>Related Pages:</h5>
                    <p>
                        Looking for market and blockchain data for BTC? Visit our <a href="https://blockchain.coinmarketcap.com/chain/bitcoin">block explorer</a>.
                    </p>
                    <p>
                        Want to buy Bitcoin? Use CoinMarketCap's <a href="https://coinmarketcap.com/how-to-buy-bitcoin/">guide</a>.
                    </p>
                    <p>
                        Want to keep track of Bitcoin prices live? Download the <a href="https://coinmarketcap.com/mobile/">CoinMarketCap mobile app</a>!
                    </p>
                    <p>
                        Want to convert Bitcoin price today to your desired fiat currency? Check out <a href="https://coinmarketcap.com/converter/">CoinMarketCap exchange rate calculator</a>.
                    </p>
                    <p>
                        <a href="https://coinmarketcap.com/alexandria/article/if-you-buy-bitcoin-on-paypal-you-didnt-buy-bitcoin-crypto-expert-claims">Should you buy Bitcoin with PayPal?</a>
                    </p>
                    <p>
                        <a href="https://coinmarketcap.com/alexandria/article/what-is-wrapped-bitcoin">What is wrapped Bitcoin?</a>
                    </p>
                    <p>
                        <a href="https://coinmarketcap.com/alexandria/article/will-bitcoin-volatility-ever-reduce">Will Bitcoin volatility ever reduce?</a>
                    </p>
                    <p>
                        <a href="https://coinmarketcap.com/alexandria/article/how-to-use-a-bitcoin-atm">How to use a Bitcoin ATM</a>
                    </p>
                    <h3>How Much Bitcoin Is in Circulation?</h3>
                    <p>
                        Bitcoin's <a href="https://coinmarketcap.com/alexandria/article/what-is-tokenomics">total supply</a> is
                        limited by its software and will never exceed 21,000,000 coins.
                        New coins are created during the process known as “<a href="https://coinmarketcap.com/alexandria/article/how-long-does-it-take-to-mine-one-bitcoin">mining</a>”: as transactions are relayed across
                        the network, they get picked up by miners and packaged into blocks, which are in turn protected by
                        complex cryptographic calculations.
                    </p>
                    <p>
                        As compensation for spending their computational resources, the miners receive rewards for every
                        block that they successfully add to the blockchain. At the moment of Bitcoin's launch, the reward
                        was 50 bitcoins per block: this number gets <a href="https://coinmarketcap.com/halving/bitcoin/">halved</a> with every 210,000 new blocks
                        mined — which takes the network roughly four years. As of 2020, the block reward has been halved
                        three times and comprises 6.25 bitcoins.
                    </p>
                    <p>
                        Bitcoin has not been premined, meaning that no coins have been mined and/or distributed between the founders
                        before it became available to the public. However, during the first few years of BTC's existence, the competition
                        between miners was relatively low, allowing the earliest network participants to accumulate significant amounts
                        of coins via regular mining: Satoshi Nakamoto alone is believed to own over a million Bitcoin.
                    </p>
                    <p>
                        <a href="https://coinmarketcap.com/alexandria/article/how-to-mine-bitcoin">Mining Bitcoins</a> can be very profitable
                        for miners, depending on the current hash rate and the price of Bitcoin. While the process of mining Bitcoins is
                        complex, we discuss <a href="https://coinmarketcap.com/alexandria/article/how-long-does-it-take-to-mine-one-bitcoin">how long it takes</a> to
                        mine one Bitcoin on CoinMarketCap <a href="https://coinmarketcap.com/alexandria">Alexandria</a> — as
                        we wrote above, mining Bitcoin is best understood as how long it takes to mine one block, as opposed
                        to one Bitcoin. As of mid-September 2021, the Bitcoin mining reward is capped to 6.25 BTC after
                        the <a href="https://coinmarketcap.com/alexandria/article/bitcoin-halvings-what-they-are-why-they-happen-and-why-you-should-care">2020 halving</a>, which is roughly $299,200 in Bitcoin price today.
                    </p>

                </div>
            </div>

        </div>

    )
}
export default Overview;