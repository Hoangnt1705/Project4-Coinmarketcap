import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


let SlideTbl2 = () => {
    // const spanStyle = {
    //     padding: '20px',
    //     background: '#efefef',
    //     color: '#000000'
    // }

    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '200px',

    }
    const slideImages = [
        {
            title: "Top design",
            img: "https://s2.coinmarketcap.com/static/cloud/img/TrendingIcon.png?_=56fec67",
            link: "",
            top1Icon:"https://s2.coinmarketcap.com/static/img/coins/64x64/23625.png",
            top1Name:"ShibFalcon",
            top1Token:"SHFLCN",
            top1Value:"$0.0000001375",
            top2Icon:"https://s2.coinmarketcap.com/static/img/coins/64x64/22581.png",
            top2Name:"Cryptofi",
            top2Token:"CFI",
            top2Value:"$0.0000009597",
            top3Icon:"https://s2.coinmarketcap.com/static/img/coins/64x64/23331.png",
            top3Name:"DogPad Finance",
            top3Token:"DOGPAD",
            top3Value:"$0.00000396",
        },
        {
            title: 'Loser',
            img: "https://s2.coinmarketcap.com/static/cloud/img/AddIcon.png?_=56fec67",
            link: "",
            top1Icon:"https://s2.coinmarketcap.com/static/img/coins/64x64/23662.png",
            top1Name:"SB Group",
            top1Token:"SBG",
            top1Value:"-$0.003486",
            top2Icon:"https://s2.coinmarketcap.com/static/img/coins/64x64/23549.png",
            top2Name:"AiWallet Toke",
            top2Token:"AIWALLET",
            top2Value:"-$0.0002755",
            top3Icon:"https://s2.coinmarketcap.com/static/img/coins/64x64/23664.png",
            top3Name:"Strelka AI",
            top3Token:"STRELKA AI",
            top3Value:"-$0.001807",
        },
        {
            title: 'Top build',
            img: "https://s2.coinmarketcap.com/static/cloud/img/GainnerIcon.png?_=56fec67",
            link: "http://localhost:3006/buy-api",
            top1Icon:"https://s3.coinmarketcap.com/static/img/portraits/62cf664ffa2fdf1d6f615aca.png",
            top1Name:"DeFiChain",
            top1Token:"",
            top1Value:"$79/month",
            top2Icon:"https://s3.coinmarketcap.com/static-gravity/image/328b729e1c6a4a4a91cce4c91f340413.png",
            top2Name:"IOTA",
            top2Token:null,
            top2Value:"$299/month",
            top3Icon:"https://s3.coinmarketcap.com/static-gravity/image/fa0cdb0ffe8848b49e12ba2889769b33.png",
            top3Name:"Qtum_Foundation",
            top3Token:null,
            top3Value:"$699/month",
        },
    ];
    return (
        <div className="slide-container">
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <div className='slide-body' style={{ ...divStyle }}>
                            <div className='slideTop'>
                                <div className='slideTopLeft'>
                                    <img src={slideImage.img} alt="" />
                                    <h5>{slideImage.title}</h5>
                                </div>
                                <div className='slideTopRight'>
                                    <span><a href={slideImage.link}>More</a></span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" height={8} width={6} viewBox="0 0 6 8" className="sc-aef7b723-0 kZybLy" style={{ marginLeft: '6px' }}><path d="M1.5 1L4.5 4L1.5 7" stroke="#3861FB" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </div>
                            </div>
                            <div className='top'>
                                <div className='topLeft'>
                                    <span>1</span>
                                    <img src={slideImage.top1Icon} alt="" />
                                    <p className='coinName'>{slideImage.top1Name}</p>
                                    <span className='coinToken'>{slideImage.top1Token}</span>
                                </div>
                                <div className='topRight'>
                                    <span>{slideImage.top1Value}</span>
                                </div>
                            </div>
                            <div className='top'>
                                <div className='topLeft'>
                                    <span>2</span>
                                    <img src={slideImage.top2Icon} alt="" />
                                    <p className='coinName'>{slideImage.top2Name}</p>
                                    <span className='coinToken'>{slideImage.top2Token}</span>
                                </div>
                                <div className='topRight'>
                                    <span>{slideImage.top2Value}</span>
                                </div>
                            </div>
                            <div className='top'>
                                <div className='topLeft'>
                                    <span>3</span>
                                    <img src={slideImage.top3Icon} alt="" />
                                    <p className='coinName'>{slideImage.top3Name}</p>
                                    <span className='coinToken'>{slideImage.top3Token}</span>
                                </div>
                                <div className='topRight'>
                                    <span>{slideImage.top3Value}</span>
                                </div>
                            </div>


                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}
export default SlideTbl2;