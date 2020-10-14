import React, { useState, useEffect } from 'react';
import PatientsList from './PatientsList'
const axios = require('axios');
import { useParams } from "react-router-dom";


function PatientView() {

	let { id } = useParams();
	const [patient, setPatient] = useState({appointments: []});

	useEffect(() => {
		axios.get('http://192.168.10.10/api/patient/'+id+'?includeAppointments=true')
			.then( (response) => {
				console.log(response.data)
				setPatient(response.data)
			})
	}, []);

	const appointments = patient.appointments.map(a => <li key={a.id}>Appointment with id {a.id}</li>)


	return (
		<div>
			<h2>Page of patient {patient.name}</h2>
			<h3>Appointments</h3>
			<ul>{appointments}</ul>
		</div>
	)

}

export default PatientView;