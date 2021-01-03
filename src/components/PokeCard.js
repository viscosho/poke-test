import React from 'react';
import { Col } from 'react-bootstrap';

export default function Pokemon({ avatar, name }) {
	return (
		<Col>
			<figure>
				<img src={avatar} alt={name} />
				<figcaption>{name}</figcaption>
			</figure>
		</Col>
	);
}
