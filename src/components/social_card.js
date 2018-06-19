import React, { Component } from 'react';
import './social_card.css';

class SocialCard extends Component {
	render() {
		return (
			<div className="container bg-light-green dib pa3 ma2 grow shadow-5">
				<img className="photo" src="https://bit.ly/2JOe4wt" alt="photo"/>
				<div>
					<h2>Jane Doe</h2>
					<p>jane.doe@gmail.com</p>
				</div>
			</div>
		)	
	}
}

export default SocialCard;