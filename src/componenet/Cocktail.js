import React from 'react'
import {Link} from 'react-router-dom'

const Cocktail = ({cocktail}) => {
    return (
        <div >
            <Link to = {`/cocktail/${cocktail.idDrink}`}>
            <img src={cocktail.strDrinkThumb} style={{width:"200px"}}/></Link>
            <h1>{cocktail.strDrink}</h1>
        </div>
    )
}

export default Cocktail
