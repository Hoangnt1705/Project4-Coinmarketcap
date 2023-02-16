let PostComponent = () => {
    return (
        <div className="postComponent">
            <marquee>This text will scroll from right to left</marquee>
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
            <input className="cmt" type="text" placeholder="Select a hashtag for your Community post" />
        </div>

    )
}
export default PostComponent;