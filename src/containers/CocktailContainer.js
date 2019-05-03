import React, { Component } from "react";
import Cocktail from "../components/Cocktail";
import CocktailForm from "../components/CocktailForm";

class CocktailContainer extends Component {
  render() {
    return (
      <div className="book-list">
        <h1>Cocktail Container</h1>
        <CocktailForm createNewCocktail={this.props.createNewCocktail}/>
        <ul>{
            this.props.cocktails.map((cocktail)=> {
              return <Cocktail
                      cocktail={cocktail}
                      addCocktail={this.props.addCocktail}
                      />
            })
          }</ul>
      </div>
    );
  }
}

export default CocktailContainer;
