import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import  menuImg from '../../../assets/menu/banner3.jpg'
import  pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import  saladImg from '../../../assets/menu/salad-bg.jpg'
import  soupImg from '../../../assets/menu/soup-bg.jpg'
import  dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategoy/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter(item => item.category ==='dessert')
  const soup = menu.filter(item => item.category ==='soup')
  const salad = menu.filter(item => item.category ==='salad')
  const pizza = menu.filter(item => item.category ==='pizza')
  const offered = menu.filter(item => item.category ==='offered')
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
    {/* main cover */}
      <Cover image={menuImg} title='our menu'></Cover>
      {/* todays offer */}
      <SectionTitle subHeading={"'Don't miss"} heading={"Todays offer"}></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert section */}
      <MenuCategory items={dessert} title={"dessert"} coverImg={dessertImg}></MenuCategory>
      <MenuCategory  items={pizza} title={"pizza"} coverImg={pizzaImg}></MenuCategory>
      <MenuCategory  items={soup} title={"soup"} coverImg={soupImg}></MenuCategory>
      <MenuCategory  items={salad} title={"salad"} coverImg={saladImg}></MenuCategory>
    </div>
  );
};

export default Menu;
