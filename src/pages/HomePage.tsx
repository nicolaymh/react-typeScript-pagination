import { usePokemon } from "../hooks/usePokemon";

export const HomePage = () => {
   usePokemon();

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
         </table>
      </div>
   );
};
