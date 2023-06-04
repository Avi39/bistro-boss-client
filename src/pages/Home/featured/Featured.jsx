/* eslint-disable no-unused-vars */
import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featured from '../../../assets/home/featured.jpg';
import './featured.css';

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle subHeading="check it out" heading="Featured Item"></SectionTitle>
            <div className='md:flex justify-center bg-slate-500 bg-opacity-60 items-center pb-20 pt-12 px-36'>
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20,2029</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, maiores dolor quibusdam exercitationem asperiores error? Consequatur ratione dolore facere vel animi fugiat repellat veritatis laborum eos laboriosam incidunt culpa non est neque omnis quisquam harum alias, fuga illum earum debitis. Id, doloribus iste. Inventore accusantium debitis molestiae id consectetur minima.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;