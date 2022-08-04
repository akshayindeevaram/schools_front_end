import React from 'react';
import { useDispatch } from 'react-redux';
import logo from '../images/logo.png';
import './Header.css';
import { getLogout } from '../../redux/login/actions/loginActions';

export default function Header() {
	const dispatch = useDispatch();
	return (
		<div className="Container">
			<div className="App-header">
				<div className="School-logo">
					<img src={logo} className="App-logo" alt="logo" />
				</div>
				<div className="School-name">
					<h2>Coddle Vidyalaya</h2>
					<h5>(English Medium HSS)</h5>
				</div>
				<div>
					<button type="button" onClick={() => dispatch(getLogout())}>
						LogOut
					</button>
				</div>
				<div className="School-location">
					<h5>Govt. Cyberpark</h5>
					<h5>Thondayad Byepass</h5>
					<h5>Kozhikode 673017</h5>
				</div>
			</div>
		</div>
	);
}
