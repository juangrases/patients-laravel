import React from 'react';
import { Link } from 'react-router-dom'
const axios = require('axios');

class PatientsList extends React.Component {


	constructor(props) {
		super(props);
		this.state = {patients: []}
	}

	componentDidMount () {
		axios.get('http://192.168.10.10/api/patient')
			.then( (response) => {
				this.setState({patients: response.data})
			})
	}

	render() {
		const listPatients = this.state.patients.map((patient) =>
			<li key={patient.id}>Name: {patient.name}  - <Link to={'/patients/'+patient.id}>Details</Link></li>
		)
		return <div>
			<h3>Welcome to the Item List page.</h3>
			<ul>
				{listPatients}
			</ul>
		</div>
	}
}

export default PatientsList;