import { useParams } from 'react-router-dom';

function Markets() {
    const { id } = useParams();

    return (
        <>
        <coingecko-coin-heatmap-widget  height="400" locale="en"></coingecko-coin-heatmap-widget>
        </>
    )
}
export default Markets;