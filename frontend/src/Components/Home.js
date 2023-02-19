//import { HomeImage } from '../Images/HomeImage.avif'

const Home = () => {
    return (
        <div className='bg-white p-2 shadow rounded'>
            <img src='../Images/HomeImage.avif' alt='HomeImage' />
            <div>
            Photo by <a href="https://unsplash.com/es/@itscassy_wassy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Cassidy Mills</a> on <a href="https://unsplash.com/photos/LPTUjv9l8BE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
        </div>
    )
}

export default Home