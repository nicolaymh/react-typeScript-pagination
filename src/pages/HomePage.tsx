import { useState, ChangeEvent } from "react";
import { Loading } from "../components/Loading";
import { usePokemon } from "../hooks/usePokemon";
import { Pokemon } from "../interfaces/fetchAllPokemonResponse";

export const HomePage = () => {
   const { isLoading, pokemons } = usePokemon();
   const [currentPage, setCurrentPage] = useState(0);
   const [search, setSearch] = useState("");

   const filterPokemons = (): Pokemon[] => {
      if (search.length === 0) pokemons.slice(currentPage, currentPage + 5);

      // There is something in the input
      const filtered = pokemons.filter((poke) => poke.name.includes(search));
      return filtered.slice(currentPage, currentPage + 5);
   };

   const nextPage = () => {
      if (pokemons.filter((poke) => poke.name.includes(search)).length > currentPage + 5)
         setCurrentPage(currentPage + 5);
   };

   const prevPage = () => {
      if (currentPage > 0) setCurrentPage(currentPage - 5);
   };

   const onSearchChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
      setCurrentPage(0);
      setSearch(target.value);
   };

   return (
      <div className="mt-5">
         <h1>Pokemon List</h1>
         <hr />
         <input
            type="text"
            className="mb-2 form-control"
            placeholder="Search Pokemon"
            onChange={onSearchChange}
         />
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
