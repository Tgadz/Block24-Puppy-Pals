import { puppyList } from "./data.js";
import { useState } from "react";

const ListPuppies = () => {
  const [puppies, setPuppies] = useState(puppyList); 
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup)

  return (
    <> {
      puppies.map((puppy) => {
        return <p onClick={()=> {
          //console.log("puppy id: ", puppy.id)
          setFeatPupId(puppy.id)
        }} key={puppy.id}>{puppy.name}</p>
      })
      }

      {featPupId && (
      <div>
        <h2>{featuredPup.name}</h2>
        <ul>
          <li>Age: {featuredPup.age}</li>
          <li>Email: {featuredPup.email}</li>
          <li>ID: {featuredPup.id}</li>
        </ul>
      </div>
    )}
    </>
  )
}


export default ListPuppies