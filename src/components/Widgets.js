import { FiberManualRecord, Info } from '@mui/icons-material';
import '../styles/Widgets.css';


function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div class="widgets__article">
            <div class="widget__article-left">
                <FiberManualRecord/>
            </div>

            <div class="widget__article-right">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className='widgets'>
            <div class="widgets__header">
                <h2>LinkedIn News</h2>
                <Info />
            </div>

            {newsArticle('CoronaVirus: UK updates', 'Top News - 9999 readers')}
            {newsArticle('Tesla hits new highs', 'Cars & Auto - 929 readers')}
            {newsArticle('BitCoin breaks $22K', 'Crypto - 891 readers')}
            {newsArticle('Is Redux too good?', 'Code - 123 readers')}
            {newsArticle('Is Python the trend?', 'Code - 1908 readers')}
            {newsArticle('COVID-19 Guidelines', 'Health Care News - 1093379 readers')}

        </div>
    )
}

export default Widgets