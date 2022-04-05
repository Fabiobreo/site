import React from 'react';
import { Link } from 'react-router-dom';

export default function Educations() {
	return (
		<div>
			<div className='card'>
				<div className='card-content'>
					<h6>
						<strong>EDUCATION</strong>
					</h6>
					<table className='striped'>
						<thead>
							<tr>
								<th>Certificate</th>
								<th>Date</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Second Certification</td>
								<td>Feb 2022</td>
								<td>
									<Link to='/details' className='btn blue lighten-2'>
										View
									</Link>
								</td>
							</tr>
							<tr>
								<td>First Certification</td>
								<td>Jan 2022</td>
								<td>
									<Link to='/details' className='btn blue lighten-2'>
										View
									</Link>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
