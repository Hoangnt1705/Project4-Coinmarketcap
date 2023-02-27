import { useParams } from 'react-router-dom';

function HistoricalData() {
    const { id } = useParams();


    return (
        <>
            {console.log(id)}
            <coingecko-coin-converter-widget  coin-id="bitcoin" currency="usd" background-color="#ffffff" font-color="#4c4c4c" locale="en"></coingecko-coin-converter-widget>
        </>
    )
}
export default HistoricalData;