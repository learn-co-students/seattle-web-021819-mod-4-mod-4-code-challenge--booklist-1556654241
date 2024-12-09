import React from "react";
import Cocktail from "../components/Cocktail";

const CocktailDisplay = props => {
  return (
    <div>
      <h1>Cocktail Display</h1>
      <ul>{
          props.myCocktails.map((cocktail)=> {
            return <Cocktail
                    cocktail={cocktail}
                
                    />
          })
        }</ul>
    </div>
  );
};

export default CocktailDisplay;
