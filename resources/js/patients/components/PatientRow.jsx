import React from 'react';
import { Link } from 'react-router-dom'

import './PatientRow.scss'

const PatientRow = ({id, firstName, lastName}) => {
	return (
		<li className="PatientRow" key={id}>{firstName} {lastName} - <Link to={'/patients/'+id}>Details</Link></li>
	)
}

export {PatientRow}