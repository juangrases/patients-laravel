import React from 'react';
import { Route, Switch } from 'react-router-dom'
import PatientsList from './components/PatientsList';
import PatientView from './components/PatientView';

class Routes extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path='/' component={PatientsList} />
				<Route path='/patients/:id' component={PatientView} />
				<Route path='/patients' component={PatientsList} />
			</Switch>
		)
	}
}

export default Routes;