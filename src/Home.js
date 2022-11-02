import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className="home__container">
            <img
            className='home__image'
            src='https://m.media-amazon.com/images/I/71KQoVy+V0L._SX3000_.jpg'
            alt=''
            />
            <div className="home__row">
                <Product 
                title="The Lean Startup" 
                price={199} 
                image="https://m.media-amazon.com/images/I/81-QB7nDh4L.jpg"
                rating={3}
                />
                <Product 
                title="Samsung Watch"
                price={20000}
                image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                rating={4}
                />
            </div>
            <div className="home__row">
                <Product 
                title="Samsung Watch"
                price={20000}
                image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                rating={4}
                />
                <Product 
                title="The Lean Startup" 
                price={29.99} 
                image="https://m.media-amazon.com/images/I/81-QB7nDh4L.jpg"
                rating={5}
                />
                <Product 
                title="iPad"
                price={40000}
                image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                rating={4}
                />
            </div>
            <div className="home__row">
                <Product 
                title="Amazon Echo"
                price={25000}
                image="https://m.media-amazon.com/images/I/61UnzwX+4NL._SL1000_.jpg"
                rating={4}
                />
            </div>
        </div>
    </div>
  )
}

export default Home;