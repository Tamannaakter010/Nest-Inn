import ExclusiveOffers from "../Components/ExclusiveOffers/ExclusiveOffers";
import FeatureDestination from "../Components/FeatureDestination/FeatureDestination";
import Hero from "../Components/Hero/Hero"

import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Testimonial from "../Components/Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
       
            <Hero />
               <FeatureDestination />
               <ExclusiveOffers />
               <Testimonial />
               <NewsLetter />
        </div>
    );
};

export default Home;