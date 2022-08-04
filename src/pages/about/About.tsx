import React, { useEffect } from 'react';
import Footer from '../../component/footer/Footer';
import Header from '../../component/header/Header';
import Nav from '../../component/nav/Nav';
import { fetchAbout } from '../../redux/about/actions/aboutActions';
import './About.css';
import { connect } from 'react-redux';
import { reduxModel } from '../../model';

function About({ aboutData, fetchAbout }: any) {
	const data = aboutData?.message;
	console.log(data && data[0], 'fffffffffffffffffffffffff');

	useEffect(() => {
		fetchAbout();
	}, []);

	return (
		<div>
			<Header />
			<Nav />

			<h1 className="main_heading">{data && data[0].main_heading}</h1>
			<div className="main_details">{data && data[0].description}</div>
			<Footer />
		</div>
	);
}

const mapStateToProps = (state: reduxModel) => {
	// console.log(state.about.about,"mmmmmmmmmmmmmmmmmmmmm");

	return {
		aboutData: state.about.about,
		// aboutData: state.reducer.about
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		fetchAbout: () => dispatch(fetchAbout()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
