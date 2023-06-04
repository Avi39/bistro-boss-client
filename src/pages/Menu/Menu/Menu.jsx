/* eslint-disable no-unused-vars */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro  Boss | Menu</title>
            </Helmet>
            <Cover img = {menuImg} title="Our menu"></Cover>
            {/* main cover */}
            <SectionTitle subHeading="Don't miss" heading="Today's Offer"></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* desert menu items */}
            <MenuCategory items={desserts} title="dessert" Img={dessertImg}></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory items={pizza} title={"pizza"} Img={pizzaImg}></MenuCategory>
            {/* salad menu items */}
            <MenuCategory items={salad} title={"salad"} Img={saladImg}></MenuCategory>
            {/* soup menu items */}
            <MenuCategory items={soup} title={"soup"} Img={soupImg }></MenuCategory>
        </div>
    );
};

export default Menu;