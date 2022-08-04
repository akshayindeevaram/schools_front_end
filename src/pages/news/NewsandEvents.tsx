import React from 'react';
import Footer from '../../component/footer/Footer';
import Header from '../../component/header/Header';
import Nav from '../../component/nav/Nav';
import './NewsandEvents.css';

export default function NewsandEvents() {
	return (
		<div>
			<Header />
			<Nav />
			<h1 className="main_heading">News and Events</h1>
			<div className="main_details">
				<h3>Panchanga Sikshan</h3>
				<p>
					As a part of curriculum and to ensure all round development
					of children, this School is following Panchanga Sikshan of
					Vidyabharathi
				</p>
				<h3>
					The COVID-19 has resulted in schools shut all across the
					world.
				</h3>
				<p>
					The COVID-19 has resulted in schools shut all across the
					world.
				</p>
				<h3>Tree Planting</h3>
				<p>
					Praesent malesuada tortor nulla, nec ultrices orci pretium.
					sit amet. Integer elementum diam eget sem placerat eleifend.
					Nulla nec suscipit
				</p>
				<h3>Atal Tinkering Laboratory</h3>
				<p>
					ATL is a work space where young minds can give shape to
					their ideas through hands on do-it-yourself mode; and learn
					innovation skills. Our children will get a chance to work
					with tools and equipment to understand the concepts of STEM
					(Science, Technology, Engineering and Math), with our fully
					equipped ATL Laboratory.
				</p>
			</div>
			<Footer />
		</div>
	);
}
