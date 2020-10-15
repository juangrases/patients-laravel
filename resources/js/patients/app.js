import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Routes from './routes';

class App extends React.Component {
	render() {
		return (
			<Router>
				<div style={{margin: "30px"}}>
					<Routes />
				</div>
			</Router>
		)
	}
}

export default App;

if (document.getElementById('app')) {
	ReactDOM.render(
		<App />
		, document.getElementById('app'));
}