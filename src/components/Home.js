import '../App.css';
import React, { props } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
    return (
        <div>
            <Header {...props}
                title="SWE @ UCSD"
                subtitle="Aspire | Advance | Achieve" />
            <h3 id="about">UC San Diego Society of Women Engineers informs, nurtures, and encourages women to attain high levels of education and professional achievement. Our members serve as role models to pre-college and engineering students.</h3>
            <h3 id="title">Upcoming Events:</h3>
            <Footer />
        </div>
    );
}

export default Home;