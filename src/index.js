import React from 'react';
import ReactDOM from 'react-dom';
import SocialCard from './components/social_card';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

const App = () => {
	return (
		<div>
			<SocialCard />
			<SocialCard />
			<SocialCard />
		</div>
		)
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
