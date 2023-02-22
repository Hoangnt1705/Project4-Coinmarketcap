import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import TblTop from './TblTop';

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
            url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
            caption: 'Slide 1'
        },
        {
            title: 'Recently Added',
            url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
            caption: 'Slide 2'
        },
        {
            title: 'Biggest Gainers',
            url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
            caption: 'Slide 3'
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
                                    <img src="https://s2.coinmarketcap.com/static/cloud/img/GainnerIcon.png?_=2cbfbbf" alt="" />
                                    <h5>Title</h5>
                                </div>
                                <div className='slideTopRight'>
                                    <span>More</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" height={8} width={6} viewBox="0 0 6 8" className="sc-aef7b723-0 kZybLy" style={{ marginLeft: '6px' }}><path d="M1.5 1L4.5 4L1.5 7" stroke="#3861FB" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </div>
                            </div>
                            <TblTop />
                            <TblTop />
                            <TblTop />
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}
export default SlideTbl;