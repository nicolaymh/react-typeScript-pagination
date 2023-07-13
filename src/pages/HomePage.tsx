import { useState } from "react";
import { Loading } from "../components/Loading";
import { usePokemon } from "../hooks/usePokemon";
import { Pokemon } from "../interfaces/fetchAllPokemonResponse";

export const HomePage = () => {
   const { isLoading, pokemons } = usePokemon();
   const [currentPage, setCurrentPage] = useState(0);

   const filterPokemons = (): Pokemon[] => {
      return pokemons.slice(currentPage, currentPage + 5);
   };

   const nextPage = () => {
      setCurrentPage(currentPage + 5);
   };

   const prevPage = () => {
      if (currentPage > 0) setCurrentPage(currentPage - 5);
   };

   return (
      <div className="mt-5">
         <h1>Pokemon List</h1>
         <hr />
         <button className="btn btn-primary" onClick={prevPage}>
            Previous
         </button>
         &nbsp;
         <button className="btn btn-primary" onClick={nextPage}>
            Next
         </button>
         <table className="table">
            <thead>
               <tr>
                  <th style={{ width: 100 }}>ID</th>
                  <th style={{ width: 100 }}>Name</th>
                  <th>Image</th>
               </tr>
            </thead>

            <tbody>
               {filterPokemons().map(({ id, name, pic }) => (
                  <tr key={id}>
                     <td>{id}</td>
                     <td>{name}</td>
                     <td>
                        <img src={pic} alt={name} style={{ height: 75 }} />
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
         {isLoading && <Loading />}
      </div>
   );
};
