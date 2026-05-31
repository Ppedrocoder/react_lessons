import React from 'react'
import { useEffect, useState } from 'react'
import * as services from '../../services/APIservice'

const index = () => {
  const pokedexs = [
    { id: 1, name: "Kanto" },
    { id: 2, name: "Johto" },
    { id: 3, name: "Hoenn" },
    { id: 4, name: "Sinnoh" },
    { id: 5, name: "Unova" },
    { id: 6, name: "Kalos" },
    { id: 7, name: "Alola" },
    { id: 8, name: "Galar" }
  ];
  const pageSize = 20;
  const [selectedPokedex, setSelectedPokedex] = useState(0);
  const [page, setPage] = useState(1);
  const [allPokemons, setAllPokemons] = useState(null);
  const [pokedex, setPokedex] = useState(null);

  const isAllPokemonsView = selectedPokedex === 0;
  const pokedexEntries = pokedex?.pokemon_entries ?? [];
  const allPokemonResults = allPokemons?.results ?? [];

  const totalPages = isAllPokemonsView
    ? Math.max(1, Math.ceil((allPokemons?.count ?? 0) / pageSize))
    : Math.max(1, Math.ceil(pokedexEntries.length / pageSize));

  const paginatedPokedexEntries = pokedexEntries.slice((page - 1) * pageSize, page * pageSize);

  useEffect(() => {
    let active = true;

    if (selectedPokedex === 0) {
      setPokedex(null);
      services.getPokemons(pageSize, (page - 1) * pageSize)
        .then((data) => {
          if (active) {
            setAllPokemons(data);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setAllPokemons(null);
      services.getPokemonsByPokedex(selectedPokedex)
        .then((data) => {
          if (active) {
            setPokedex(data);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }

    return () => {
      active = false;
    };
  }, [selectedPokedex, page]);

  return (
    <main className="width-container">
        <h1>Pokémons</h1>
        <select
          value={selectedPokedex}
          onChange={(e) => {
            setSelectedPokedex(Number(e.target.value));
            setPage(1);
          }}
        >
          <option value={0}>Todos os pokémons</option>
          {pokedexs.map((pokedexOption) => (
            <option key={pokedexOption.id} value={pokedexOption.id}>
              Pokédex de {pokedexOption.name}
            </option>
          ))}
        </select>
        {isAllPokemonsView && !allPokemons && <p>Carregando pokémons...</p>}
        {!isAllPokemonsView && !pokedex && <p>Carregando pokédex...</p>}

        {isAllPokemonsView && allPokemons && (
          <>
            <p>Página {page} de {totalPages}</p>
            <button type="button" onClick={() => setPage((currentPage) => Math.max(1, currentPage - 1))} disabled={page === 1}>
              Anterior
            </button>
            <button type="button" onClick={() => setPage((currentPage) => Math.min(totalPages, currentPage + 1))} disabled={page === totalPages}>
              Próxima
            </button>
            {allPokemonResults.map((pokemon) => (
              <div key={pokemon.name}>
                {pokemon.name}
              </div>
            ))}
          </>
        )}

        {!isAllPokemonsView && pokedex && (
          <>
            <p>Página {page} de {totalPages}</p>
            <button type="button" onClick={() => setPage((currentPage) => Math.max(1, currentPage - 1))} disabled={page === 1}>
              Anterior
            </button>
            <button type="button" onClick={() => setPage((currentPage) => Math.min(totalPages, currentPage + 1))} disabled={page === totalPages}>
              Próxima
            </button>
            {paginatedPokedexEntries.map((entry) => (
              <div key={entry.entry_number}>
                  {entry.pokemon_species.name}
              </div>
            ))}
          </>
        )}
    </main>
  )
}

export default index