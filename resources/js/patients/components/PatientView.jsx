import React, { useState, useEffect } from 'react'
import { PageHeader, Descriptions, Divider, Row, Col, Table } from 'antd'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'

function PatientView () {

	const history = useHistory();
	let {id} = useParams()
	const [patient, setPatient] = useState({appointments: []})

	useEffect(() => {
		axios.get('http://192.168.10.10/api/patient/' + id + '?includeAppointments=true')
			.then((response) => {
				console.log(response.data)
				setPatient(response.data)
			})
	}, [])

	// const appointments = patient.appointments.map(a => <li key={a.id}>Appointment with id {a.id}</li>)


	const columns = [
		{
			title: 'Type',
			dataIndex: 'type',
			key: 'type',
		},
		{
			title: 'Start Date',
			dataIndex: 'start_date',
			key: 'start_date',
		}
	];

	return (
		<div>
			<PageHeader onBack={() => history.push("/")}
									title='Patient Details'
			/>
					<Descriptions column={2}>
						<Descriptions.Item label="First Name">{patient.first_name}</Descriptions.Item>
						<Descriptions.Item label="Last Name">{patient.last_name}</Descriptions.Item>
						<Descriptions.Item label="Phone Number">{patient.phone_number}</Descriptions.Item>
						<Descriptions.Item label="Birth Date">{patient.birth_date}</Descriptions.Item>
					</Descriptions>
					<Divider dashed/>
			<h3>Appointments</h3>
			<Table dataSource={patient.appointments} columns={columns}/>

		</div>
	)

}

export default PatientView