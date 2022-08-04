import axios from 'axios';
import { useState } from 'react';
import Footer from '../../component/footer/Footer';
import Header from '../../component/header/Header';
import Nav from '../../component/nav/Nav';

export default function Admission() {
	const [name, setName] = useState('');
	const [phoneno, setPhoneno] = useState('');
	const [qualification, setQualification] = useState('');
	const [resultfile, setResultfile] = useState('');
	const handleSubmit = (e: any) => {
		e.preventDefault();

		setName('');
		setPhoneno('');
		setQualification('');
		setResultfile('');

		async function admissionVerify() {
			const userLocal: any = localStorage.getItem('token');
			console.log(userLocal, 'llllllllllllllllllll');

			if (userLocal) {
				const formdata = {
					name: name,
					phoneno: phoneno,
					qualification: qualification,
					resultfile: resultfile,
				};
				console.log(formdata, '444444444444444');
				const uploadData = new FormData();
				uploadData.append('resultfile', resultfile[0]);
				uploadData.append('name', name);
				uploadData.append('phoneno', phoneno);
				uploadData.append('qualification', qualification);

				const user: any = JSON.parse(userLocal);
				try {
					axios({
						method: 'post',
						url: 'http://localhost:5000/api/v1/admission',
						data: uploadData,
						headers: {
							Authorization: `Bearer ${user}`,
							'Content-Type': 'multipart/form-data',
						},
					});

					// const response = await axios.post("http://localhost:5000/api/v1/admission",formdata);
				} catch (err) {
					console.log(err);
				}
			}
		}
		admissionVerify();

		// axios.post("http://localhost:5000/api/v1/admission",formdata)
		// .then(res => console.log(res));
	};
	return (
		<div>
			<Header />
			<Nav />

			<div className="admission">
				<h1 className="main_heading">Admission Details</h1>
				<div className="form">
					<form className="admission_form" onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="Enter your name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<input
							type="text"
							placeholder="Enter phone number"
							value={phoneno}
							onChange={(e) => setPhoneno(e.target.value)}
						/>
						<input
							type="text"
							placeholder="Enter your qualification"
							value={qualification}
							onChange={(e) => setQualification(e.target.value)}
						/>
						<input
							type="file"
							name="uploaded_file"
							onChange={(e: any) => setResultfile(e.target.files)}
							// value={resultfile}
						/>
						<button type="submit" className="submit_button">
							Submit
						</button>
					</form>
				</div>
			</div>

			<Footer />
		</div>
	);
}
