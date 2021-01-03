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
				console.log(json.results[0].name);
				//json.results.forEach((pokemon) => {
				fetch(json.results[pokemonId].url)
					.then((res) => res.json())
					.then((json) => {
						//console.log(json);
						let pokemon = {
							id: json.id * 1,
							name: json.name,
							avatar: json.sprites.front_default,
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
				<Pokemon key={pokemon.id} name={pokemon.name} avatar={pokemon.avatar} />
			))}
		</Container>
	);
};

export default AllPoke;
