import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Pokemon from '../components/PokeCard';

const GridPoke = () => {
	const [pokemons, setPokemons] = useState([]);

	useEffect(() => {
		let url = 'https://pokeapi.co/api/v2/pokemon/';

		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				//console.log(json);
				json.results.forEach((pokemon) => {
					fetch(pokemon.url)
						.then((res) => res.json())
						.then((json) => {
							console.log(json);
							let pokemon = {
								id: json.id * -1,
								name: json.name,
								avatar: json.sprites.front_default,
							};

							setPokemons((pokemons) => [...pokemons, pokemon]);
						});
				});
			});
	}, []);

	return (
		<Container>
			<Row>
				{pokemons.map((pokemon) => (
					<Pokemon key={pokemon.id} name={pokemon.name} avatar={pokemon.avatar} />
				))}
			</Row>
		</Container>
	);
};

export default GridPoke;
