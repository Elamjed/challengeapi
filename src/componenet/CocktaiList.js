import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Cocktail from './Cocktail'

const CocktaiList = ({searchFinal}) => {
    const [cocktails,setCocktails]=useState([])
    useEffect(() => {
      axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchFinal}`)
      .then(res=>setCocktails(res.data.drinks))
      .catch(err=>console.log(err))
    }, [searchFinal])
    return (
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'} }>
            {cocktails?cocktails.map(cocktail=><Cocktail cocktail={cocktail} key={cocktail.idDrink}/>) : <h1>notfound</h1>}
        </div>
    )
}

export default CocktaiList
