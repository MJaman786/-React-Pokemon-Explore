import { createContext, useEffect, useState } from "react";

export const pokemonContext = createContext();

export default function PokemonContextProvider({ children }) {

    const [pokemonList, setList] = useState([]); // for extracting names
    const [data, setData] = useState([]); // detailed data 

    const API = 'https://pokeapi.co/api/v2/pokemon?limit=100';

    const fetchData = async () => {
        try {
            const response = await fetch(API);
            // overall api data
            const resData = await response.json();
            // console.log(resData);

            // map() because results promperty is an Array of Objects
            setList(resData.results.map((res) => res.name));
            console.log(resData.results.map((res) => res.name));


            // Fetch detailed Pokémon data
            const allPokemon = await Promise.all(
                resData.results.map(async (poke) => {
                    const res = await fetch(poke.url);
                    return await res.json();
                })
            );

            setData(allPokemon);
            console.log(allPokemon);


        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // search filter (finding pokemon)
    // const [searchPokemon, setPokemeon] = useState([]);

    const [searchPokemon, setSearchPokemon] = useState("");   // input text
    const [filteredPokemon, setFilteredPokemon] = useState([]); // result list

    // filter function
    const filterPokemon = (searchInput) => {
        setSearchPokemon(searchInput);  // keep normal input text

        const userPokemon = pokemonList.filter((pokemon) =>
            pokemon.toLowerCase().includes(searchInput.toLowerCase())
        );

        setFilteredPokemon(userPokemon);  // save result array
    };

    const [userSearchList, setUserSeacrhList] = useState([]);

    useEffect(() => {
        const userSearchResult = data.filter((pokemonObj) =>
            filteredPokemon.includes(pokemonObj.name)
        );

        setUserSeacrhList(userSearchResult);
    }, [filteredPokemon]);


    return (
        <pokemonContext.Provider value={{ data, searchPokemon, filteredPokemon, filterPokemon, userSearchList }}>
            {children}
        </pokemonContext.Provider>
    );
}
