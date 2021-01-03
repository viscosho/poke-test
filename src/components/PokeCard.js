import React from 'react';
import { Col } from 'react-bootstrap';

export default function Pokemon({ avatar, name, type }) {
	return (
		<Col>
			<figure>
				<img src={avatar} alt={name} />
				<figcaption>Name: {name}</figcaption>
				<figcaption>Type: {type}</figcaption>
			</figure>
		</Col>
	);
}
