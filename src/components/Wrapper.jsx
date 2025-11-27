import React, { useContext } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";
import { pokemonContext } from "../Data/Data";
// import Loader from "./DataNotLoad";
// import NetworkError from "./DataNotLoad";
import StatusOverlay from "./DataNotLoad";
import PokemonNotFound from "./PokemonNotFound";

export default function Wrapper() {

  const { data, searchPokemon, filteredPokemon, filterPokemon, userSearchList } = useContext(pokemonContext);
  console.log(filteredPokemon);
  console.log(userSearchList);

  return (
    <>

      <div
        style={{
          background: "#0f172a", // Changed to a deep dark blue background
          minHeight: "100vh",
          fontFamily: "Inter, sans-serif", // Updated font for modern dark theme aesthetic
          padding: "0 20px 40px",
        }}
      >
        <SearchBar searchPokemon={searchPokemon} filterPokemon={filterPokemon} />
        {
          (filteredPokemon === 0 || searchPokemon === "")
            ? (
              (data.length > 0 && data !== 'undefined') ? (

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
                    gap: "25px",
                    justifyContent: "center",
                    maxWidth: "1200px",
                    margin: "0 auto",
                  }}
                >
                  {data.map((pokemon) => {

                    const typeNames = pokemon.types
                      .map((t) => t.type.name)
                      .join(", ");

                    const speed = pokemon.stats.find(s => s.stat.name === "speed")?.base_stat;
                    const attack = pokemon.stats.find(s => s.stat.name === "attack")?.base_stat;

                    const abilities = pokemon.abilities
                      .map((a) => a.ability.name)
                      .slice(0,1)
                      .join(", ");

                    return (
                      <Card
                        key={pokemon.id}
                        name={pokemon.name}
                        type={typeNames}
                        height={pokemon.height}
                        weight={pokemon.weight}
                        speed={speed}
                        experience={pokemon.base_experience}
                        attack={attack}
                        abilities={abilities}
                        imageUrl={pokemon.sprites.other.dream_world.front_default}
                      />
                    );
                  })}
                </div>
              )
                : <StatusOverlay loading={true} message="Fetching data..." />
            )
            // search result
            : (
              (userSearchList.length > 0 && data !== 'undefined') ? (

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
                    gap: "25px",
                    justifyContent: "center",
                    maxWidth: "1200px",
                    margin: "0 auto",
                  }}
                >
                  {userSearchList.map((pokemon) => {

                    const typeNames = pokemon.types
                      .map((t) => t.type.name)
                      .join(", ");

                    const speed = pokemon.stats.find(s => s.stat.name === "speed")?.base_stat;
                    const attack = pokemon.stats.find(s => s.stat.name === "attack")?.base_stat;

                    const abilities = pokemon.abilities
                      .map((a) => a.ability.name)
                      .join(", ");

                    return (
                      <Card
                        key={pokemon.id}
                        name={pokemon.name}
                        type={typeNames}
                        height={pokemon.height}
                        weight={pokemon.weight}
                        speed={speed}
                        experience={pokemon.base_experience}
                        attack={attack}
                        abilities={abilities}
                        imageUrl={pokemon.sprites.other.dream_world.front_default}
                      />
                    );
                  })}
                </div>
              )
                : <PokemonNotFound />
            )
        }
      </div>
    </>
  );
}