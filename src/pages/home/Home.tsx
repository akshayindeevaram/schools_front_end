import React from 'react';
import Features from '../../component/features/Features';
import Slider from '../../component/slider/Slider';
import Header from '../../component/header/Header';
import Nav from '../../component/nav/Nav';
import Footer from '../../component/footer/Footer';
import AboutSection from '../../component/about/AboutSection';

export default function Home() {
	return (
		<div>
			<Header />
			<Nav />
			<Slider />
			<AboutSection />
			<Features />
			<Footer />
		</div>
	);
}
