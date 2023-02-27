import React, { useState } from 'react';
let PostComponent = (props) => {
    let { cryptocurrencyListings, currentUser } = props;
    return (
        <div className="postComponent">
            <marquee>
                {cryptocurrencyListings.map((element, index) => (
                    <span key={index} className="tagPostComponent">#{element.symbol.toUpperCase()}</span>
                ))}
            </marquee>
            <div className="posComponentTop">
                <div className="posComponentTopLeft">
                    <img className="postComponentImg" src={currentUser ? "https://s3.coinmarketcap.com/static/img/portraits/633520289b613d3454890381.png" : "https://s2.coinmarketcap.com/static/cloud/img/avatars/default.png"} />
                    {currentUser ? <marquee direction="right">{currentUser.email}</marquee> : <h6>Guest</h6>}
                </div>
                <div className="posComponentTopRight">
                    <button className="bullish">Bullish</button>
                    <button className="bearish">Bearish</button>
                </div>
            </div>
            <form className='posComponentBody'>
                <input className="cmt" type="text" placeholder="Select a hashtag for your Community post" />
                <button className='cmtBtn'>POST
                </button>
            </form>
        </div>

    )
}
export default PostComponent;