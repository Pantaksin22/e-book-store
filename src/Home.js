import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
         {/*image show is 1800x300 and fading for rest of it */}
        <img className='home_image' 
        src='https://stmarksdp.org/app/uploads/Banner-1800x600-image.jpg'></img>  

        <div className='home_row'>
            <Product title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" price= "29.99" image='https://m.media-amazon.com/images/I/61BFOf9Ap-L._AC_UF1000,1000_QL80_.jpg' rating={5}/>
            <Product title='The lean start up ' price= "29.99" image='https://m.media-amazon.com/images/I/61BFOf9Ap-L._AC_UF1000,1000_QL80_.jpg' rating={5}/>
        </div>

        <div className='home_row'>
            <Product title='The lean start up ' price= "29.99" image='https://m.media-amazon.com/images/I/61BFOf9Ap-L._AC_UF1000,1000_QL80_.jpg' rating={5}/>
            <Product title='The lean start up ' price= "29.99" image='https://m.media-amazon.com/images/I/61BFOf9Ap-L._AC_UF1000,1000_QL80_.jpg' rating={5}/>
            <Product title='The lean start up ' price= "29.99" image='https://m.media-amazon.com/images/I/61BFOf9Ap-L._AC_UF1000,1000_QL80_.jpg' rating={5}/>
        </div>

        <div className='home_row'>
            <Product title='The lean start up ' price= "29.99" image='https://m.media-amazon.com/images/I/61BFOf9Ap-L._AC_UF1000,1000_QL80_.jpg' rating={5}/>
        </div>

      </div>
    </div>
  )
}

export default Home
