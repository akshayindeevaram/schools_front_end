import React, { Component } from 'react';
// import { Sliderdata } from "../data";
import './Slider.css';
import slide1 from '../images/slide1.jpg';
import slide2 from '../images/slide2.jpg';
import slide3 from '../images/slide3.jpg';
// import axios from "axios"

export default class Slider extends Component {
	// constructor(){
	//   super();
	//   this.state={
	//     images : []
	//   }
	// }

	// componentDidMount(){
	//   axios.get("http://localhost:3001/images").then(response=>{
	//     this.setState({images:response.data})
	//   })
	// }

	// axios({
	//   method:"get",
	//   url:"http://localhost:3001/images",
	// })
	// .then(function(response){
	//   const data = response.data
	// });

	state = {
		index: 0,
		images: [
			{
				image: slide1,
			},
			{
				image: slide2,
			},
			{
				image: slide3,
			},
			{
				image: slide2,
			},
		],
	};

	// nextImage = () => {
	//   if(this.state.currentImage.index === 0){
	//     this.setState({
	//       currentImage: this.state.images[1]
	//     })
	//   }
	//   else if(this.state.currentImage.index === 1){
	//     this.setState({
	//       currentImage: this.state.images[2]
	//     })
	//   }
	//   else if(this.state.currentImage.index === 2){
	//     this.setState({
	//       currentImage: this.state.images[0]
	//     })
	//   }
	// };

	// nextImage = () => {
	//   if (this.state.index >= this.state.images.length - 1) {
	//     this.setState({
	//       index: 0,
	//     });
	//   } else {
	//     this.setState({
	//       index: this.state.index + 1,
	//     });
	//   }
	// };
	// prevImage = () => {
	//   if (this.state.index <= 0) {
	//     this.setState({
	//       index: this.state.images.length - 1,
	//     });
	//   } else {
	//     this.setState({
	//       index: this.state.index - 1,
	//     });
	//   }
	// };

	nextImage = () => {
		if (this.state.index >= this.state.images.length - 1)
			return this.setState({ index: 0 });
		return this.setState({ index: this.state.index + 1 });
	};
	prevImage = () => {
		if (this.state.index <= 0)
			return this.setState({ index: this.state.images.length - 1 });
		return this.setState({ index: this.state.index - 1 });
	};

	render() {
		return (
			<div>
				{/* <Sliderdata /> */}
				<div id="sliding">
					<img
						src={this.state.images[this.state.index].image}
						className="slideimg"
						alt="images"
					/>
				</div>
				<button onClick={this.prevImage} id="prev">
					prev
				</button>
				<button onClick={this.nextImage} id="next">
					next
				</button>
			</div>
		);
	}
}
