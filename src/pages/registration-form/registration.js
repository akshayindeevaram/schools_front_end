import React, { useState } from 'react';
import axios from 'axios';
import './registration.css';
import { Link } from 'react-router-dom';

function RegistrationForm() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const handleInputChange = (e) => {
		const { id, value } = e.target;
		if (id === 'firstName') {
			setFirstName(value);
		}
		if (id === 'lastName') {
			setLastName(value);
		}
		if (id === 'email') {
			setEmail(value);
		}
		if (id === 'password') {
			setPassword(value);
		}
		if (id === 'confirmPassword') {
			setConfirmPassword(value);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			console.log('Password is not matching!');
		} else {
			console.log('Successfully submitted');
		}

		console.log(firstName, lastName, email, password, confirmPassword);
		const formdata = {
			firstName: firstName,
			lastName: lastName,
			email: email,
			password: password,
		};
		// console.log(formdata);
		axios
			.post('http://localhost:5000/api/v1/register', formdata)
			.then((res) => console.log(res));
	};

	return (
		<div className="form">
			<div className="form-body">
				<div className="username">
					<label className="form__label" for="firstName">
						First Name{' '}
					</label>
					<input
						className="form__input"
						type="text"
						onChange={(e) => handleInputChange(e)}
						id="firstName"
						placeholder="First Name"
					/>
				</div>
				<div className="lastname">
					<label className="form__label" for="lastName">
						Last Name{' '}
					</label>
					<input
						type="text"
						name=""
						id="lastName"
						className="form__input"
						onChange={(e) => handleInputChange(e)}
						placeholder="LastName"
					/>
				</div>
				<div className="email">
					<label className="form__label" for="email">
						Email{' '}
					</label>
					<input
						type="email"
						id="email"
						className="form__input"
						onChange={(e) => handleInputChange(e)}
						placeholder="Email"
					/>
				</div>
				<div className="password">
					<label className="form__label" for="password">
						Password{' '}
					</label>
					<input
						className="form__input"
						type="password"
						id="password"
						onChange={(e) => handleInputChange(e)}
						placeholder="Password"
					/>
				</div>
				<div className="confirm-password">
					<label className="form__label" for="confirmPassword">
						Confirm Password{' '}
					</label>
					<input
						className="form__input"
						type="password"
						id="confirmPassword"
						onChange={(e) => handleInputChange(e)}
						placeholder="Confirm Password"
					/>
				</div>
			</div>
			<div class="footer">
				<button
					onClick={(e) => handleSubmit(e)}
					type="submit"
					class="btn">
					Register
				</button>
			</div>
			<Link to="/login">{'Have an account?'}</Link>
		</div>
	);
}
export default RegistrationForm;
