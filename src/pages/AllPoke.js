import React, { useState, useEffect } from 'react';
import Pokemon from '../components/PokeCard';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

const AllPoke = () => {
	const [pokemons, setPokemons] = useState([]);
	const [pokemonId, setPokemonId] = useState(0);

	useEffect(() => {
		let url = 'https://pokeapi.co/api/v2/pokemon/';

		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				//json.results.forEach((pokemon) => {
				fetch(json.results[pokemonId].url)
					.then((res) => res.json())
					.then((json) => {
						//console.log(json);
						let pokemon = {
							id: json.id,
							name: json.name,
							avatar: json.sprites.front_default,
							type: json.types[0].type.name,
						};
						//console.log(pokemon);
						setPokemons((pokemons) => [pokemon]);
					});
				//});
			});
	}, [pokemonId]);

	const nextPoke = () => {
		setPokemonId(pokemonId + 1);
	};

	const prevPoke = () => {
		setPokemonId(pokemonId - 1);
	};

	//console.log(pokemonId);

	return (
		<Container>
			<Button variant='info' onClick={prevPoke}>
				Prev Pokemon
			</Button>
			<Button variant='info' onClick={nextPoke}>
				Next Pokemon
			</Button>
			{pokemons.map((pokemon) => (
				<Pokemon key={pokemon.id} name={pokemon.name} avatar={pokemon.avatar} type={pokemon.type} />
			))}
		</Container>
	);
};

export default AllPoke;
