import { Loading } from "../components/Loading";
import { usePokemon } from "../hooks/usePokemon";

export const HomePage = () => {
   const { isLoading, pokemons } = usePokemon();

   return (
      <div className="mt-5">
         <h1>Pokemon List</h1>
         <hr />

         <table className="table">
            <thead>
               <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Image</th>
               </tr>
            </thead>

            <tbody>
               {pokemons.map(({ id, name, pic }) => (
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
