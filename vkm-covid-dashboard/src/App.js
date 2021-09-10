import React, { useState, useEffect } from 'react';
import './styles.css';

function App() {
	const [ allCase, setAllCase ] = useState([]);
	const [ totalCase, setTotalCase ] = useState([]);

	const BarStyling = {
		width: '25rem',
		margin: '0 auto',
		marginTop: '10%',
		marginBottom: '5%',
		background: '#F1F1F1',
		border: 'none',
		padding: '0.5rem',
	};

	useEffect(() => {
		fetch('https://covidnigeria.herokuapp.com/api', { crossdomain: true })
			.then((response) => response.json())
			.then((data) => {
				setAllCase(data.data.states);
				setTotalCase(data.data);
			});
	}, []);

	return (
		<div className="container">
			<h1>VKM Covid-19 Dashboard</h1>
			<div>
				{allCase.map((data, index) => {
					return (
						<div key={data.state}>
							<ul>
								<li className="state">
									<div className="state-header">
										<span className="title">{data.state}</span>
										<span className="description">{data.confirmedCases}</span>
										<span className="description">{data.casesOnAdmission}</span>
										<span className="description">{data.discharged}</span>
										<span className="description">{data.death}</span>
									</div>
								</li>
							</ul>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;
