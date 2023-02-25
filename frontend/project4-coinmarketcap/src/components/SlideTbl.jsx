import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


let SlideTbl = () => {
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
            title: "Trending",
            img: "https://s2.coinmarketcap.com/static/cloud/img/TrendingIcon.png?_=56fec67",
            link: "",
            top1Icon:"https://s2.coinmarketcap.com/static/img/coins/64x64/18069.png",
            top1Name:"STEPN",
            top1Token:"GMT",
            top1Value:"9.37%",
            top2Icon:"https://s2.coinmarketcap.com/static/img/coins/64x64/23121.png",
            top2Name:"Blur",
            top2Token:"BLUR",
            top2Value:"10.52%",
            top3Icon:"https://s2.coinmarketcap.com/static/img/coins/64x64/5994.png",
            top3Name:"Shiba Inu",
            top3Token:"SHIB",
            top3Value:"4.11%",
        },
        {
            title: 'Recently Added',
            img: "https://s2.coinmarketcap.com/static/cloud/img/AddIcon.png?_=56fec67",
            link: "",
            top1Icon:"https://s2.coinmarketcap.com/static/img/coins/64x64/23655.png",
            top1Name:"Ordinal BTC",
            top1Token:"OBTC",
            top1Value:"$0.06916",
            top2Icon:"https://s2.coinmarketcap.com/static/img/coins/64x64/23654.png",
            top2Name:"Savant AI",
            top2Token:"SAVANTAI",
            top2Value:"$0.00009464",
            top3Icon:"https://s2.coinmarketcap.com/static/img/coins/64x64/23653.png",
            top3Name:"Totocat",
            top3Token:"TOTOCAT",
            top3Value:"$0.000000000462",
        },
        {
            title: 'Buy API',
            img: "https://s2.coinmarketcap.com/static/cloud/img/GainnerIcon.png?_=56fec67",
            link: "http://localhost:3006/buy-api",
            top1Icon:null,
            top1Name:"STARTUP",
            top1Token:null,
            top1Value:"$79/month",
            top2Icon:null,
            top2Name:"STANDARD",
            top2Token:null,
            top2Value:"$299/month",
            top3Icon:null,
            top3Name:"PROFESSIONAL",
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
export default SlideTbl;