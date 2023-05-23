import Banner from "../Banner/Banner";
import Gellary from "../Gellary/Gellary";
import ShopByCate from "../ShopByCate/ShopByCate";
import TopSellingToys from "../TopSellingToys/TopSellingToys";
import Banner3 from "./Banner3/Banner3";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <ShopByCate></ShopByCate>
          <Gellary></Gellary>
          <TopSellingToys></TopSellingToys>
          <Banner3></Banner3>
        </div>
    );
};

export default Home;