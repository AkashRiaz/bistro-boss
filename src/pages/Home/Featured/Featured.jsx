import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImage from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle subHeading={'Check it out'} heading={'FROM OUR MENU'}></SectionTitle>
            <div className='md:flex justify-center bg-slate-500 bg-opacity-40 items-center pb-20 pt-16 px-36'>
                <div>
                    <img src={featuredImage} alt="" />
                </div>
                <div className='md:ml-10 text-white'>
                    <p>March 20, 2023</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus deleniti pariatur qui fuga nihil tempore perferendis quasi iste, illo aspernatur sit? Corrupti quasi modi maiores unde aut cum eveniet adipisci ex, reprehenderit ratione, sint mollitia, ducimus exercitationem. Tempora temporibus, quam quibusdam reprehenderit corporis neque veniam numquam illum quae. Deleniti, at!</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;