import React from "react";

import Navbar from "./navbar.jsx";

import Jumbotron from "./jumbotron.jsx";

import Form from "./form.jsx";

import Footer from "./footer.jsx";

import Carousel from "./carousel.jsx";

import Topcard from "./topcard.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar title="Landing page by R.A"/>
			<Topcard/>
			<Carousel/>
			<Jumbotron
			 button="Take a look" 
			 description="Here is lying a search on Google about these images"
			 title1="Astronaut images"
			 title2="Aircraft images"
			 title3="Airplane images"
			 title4="Space images"/>
			<Form/>
			<Footer/>
		</div>
	);
};

export default Home;
