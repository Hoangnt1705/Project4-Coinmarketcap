import React, { useState } from 'react';
let PostComponent = (props) => {
    let { cryptocurrencyListings } = props;
    console.log(cryptocurrencyListings);
    return (
        <div className="postComponent">
            <marquee>
                {cryptocurrencyListings.map((element) => (
                    <span className="tagPostComponent">#{element.symbol}</span>
                ))}
            </marquee>
            <div className="posComponentTop">
                <div className="posComponentTopLeft">
                    <img className="postComponentImg" src="https://s2.coinmarketcap.com/static/cloud/img/avatars/default.png" />
                    <h6>Guest</h6>
                </div>
                <div className="posComponentTopRight">
                    <button className="bullish">Bullish</button>
                    <button className="bearish">Bearish</button>
                </div>
            </div>
            <form>
                <input className="cmt" type="text" placeholder="Select a hashtag for your Community post" />
                <button className='cmtBtn'>POST
                </button>
            </form>
        </div>

    )
}
export default PostComponent;