import { useEffect, useState } from "react";
import { fetchAllPokemons } from "../helpers/fetchAllPokemons";

export const usePokemon = () => {
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      // Pokemons load
      fetchAllPokemons();
   }, []);

   return {
      isLoading,
   };
};
