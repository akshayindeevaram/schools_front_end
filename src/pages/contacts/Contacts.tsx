import React from 'react';
import Footer from '../../component/footer/Footer';
import Header from '../../component/header/Header';
import Nav from '../../component/nav/Nav';
import './Contacts.css';

export default function Contacts() {
	return (
		<div>
			<Header />
			<Nav />
			<h1 className="main_heading">Contact Us</h1>
			<div className="main_details">
				<p>
					Thank you for visiting our website. Feel free to connect
					with us for sharing your feedback, suggestions, enquiries
					with the form given below.
				</p>
				<h4>
					Entry- 7:55 am. Class Timing- 8:00 am to 2:00 pm Break-
					11.00 am to 11:20 am Meet the Principal.
				</h4>
				<h4>
					For Parents 8:30 am to 9:30 am, 1:30 pm to 2:30pm On Working
					days Only. Prior appointment to be confirmed from the
					office.
				</h4>
				<h4>
					Fr. John Mannarathara Principal 9349 03 03 00 Silver Hills
					Public School 0495 2370075 Account Section 8301900075 Silver
					Hills H S S : 0495 2370615
				</h4>
			</div>
			<Footer />
		</div>
	);
}
