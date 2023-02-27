import React, { useState } from 'react';
import PostComponent from "./PostComponent";
function Community(props) {
    let { cryptocurrencyListings, currentUser } = props;
    console.log(props);
    return (
        <><div className='coinInfo items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6'>
            <div className='community'>
            <PostComponent cryptocurrencyListings={cryptocurrencyListings} currentUser={currentUser} />
            <div className='listPost'>
                <h2>Recommended feed</h2>
                <div className="userPost">
                    <div className="userPostTop">
                        <div className="userPostLeft">
                            <img className="avatar" src="https://s3.coinmarketcap.com/static-gravity/image/880956de8bc145b39b2a1525e53bd788.png" alt="" />
                            <span className="user-name">user's name</span>
                            <span className="datePost">date post</span>
                            <button className="bullish">Bullish</button>
                        </div>
                        <button className="follow">Follow</button>
                    </div>
                    <span className="postDetails">
                        details Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, atque doloremque ratione aut vel adipisci consectetur, nisi molestiae accusantium aliquid perspiciatis! Dicta accusantium accusamus odit, voluptatibus voluptates alias inventore excepturi.
                    </span>
                    <div className="postFooter">
                        <div className="postFooterLeft">
                            <i className="fa-regular fa-comment" />
                            <span className="numberCmt">10</span>
                        </div>
                        <div className="postFooterRight">
                            <i className="fa-solid fa-heart" />
                            <span className="numberLike">12</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>

        </>
    )
}
export default Community;