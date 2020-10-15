import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { List, Avatar, PageHeader } from 'antd'
import axios from 'axios'

const PatientsList = () => {

	const [patients, setPatients] = useState([])

	useEffect(() => {
		axios.get('http://192.168.10.10/api/patient')
			.then((response) => {
				console.log(response.data)
				setPatients(response.data)
			})
	}, [])

	return <div>
		<PageHeader title='Patients'/>
		<List
			bordered
			size='small'
			itemLayout="horizontal"
			dataSource={patients}
			renderItem={patient => (
				<List.Item actions={[<Link to={'/patients/' + patient.id}>Details</Link>]}>
					<List.Item.Meta
						avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
						title={patient.first_name + ' ' + patient.last_name}
					/>
				</List.Item>
			)}
		/>
	</div>

}

export default PatientsList