import React, {useState, useEffect}from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"


const Details = () => {
    const{id}=useParams()
    const [coctail, setCoctail] = useState({})

    const {strIngredient1,strIngredient2,strIngredient3,
        strIngredient4,strIngredient5,strIngredient6,strIngredient7,
        strIngredient8,strIngredient9,strIngredient10,
        strIngredient11}=coctail

        const ingred = [strIngredient1,strIngredient2,strIngredient3,
            strIngredient4,strIngredient5,strIngredient6,strIngredient7,
            strIngredient8,strIngredient9,strIngredient10,
            strIngredient11]
            console.log(ingred)
        
    useEffect(() => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res=>setCoctail(res.data.drinks[0] ))
        .catch(err=>console.log(err))
      }, [id])
    return (
        <div>
          <h2>{coctail.strDrink}</h2> 
          <ul>
              {ingred.filter((el)=>el != null).map((el)=>
              <li>
                  {el}
              </li>)}
          </ul> 
        </div>
    )
}

export default Details
