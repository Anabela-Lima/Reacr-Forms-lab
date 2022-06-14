/*

RecipeList component
RecipeList is  responsible for rendering (i.e. displaying) CakeRecipe component so lets import it :

*/

import CakeRecipe from "./CakeRecipe";


 
const RecipeList = ({listOfRecipes}) => {    // function RecipeList takes in some props (a variable) called listOfRecipes - we destructured it 


    /*
    using map so: for each Recipe we return a Recipe component

    listOfRecipes is a variable which holds an array  with  5 element objects in it {}{}...{}
    we then map this listOfRecipes, so we end up with another array (let that be called "cakeRecipeComponents"), that has a Recipe component 
    for each of the 5 element objects


   +  Result of mapping: 

    ListOfRecipes=        cakeRecipeComponents=
    [                     [
     {}                    <cakeRecipe>
     {}                    <cakeRecipe>
     {}                    <cakeRecipe>
     {}                    <cakeRecipe>
     {}                    <cakeRecipe>
    ]                     ]

 
    */

    const cakeRecipeComponents = listOfRecipes.map((cakeRecipe, index)=> {  
        return <CakeRecipe cakeRecipe=  {cakeRecipe} key={index}/>    // cakeRecipe, the container, takes in a property or "prop" called  "cakeRecipe" and this Recipe property stores the Recipe and its index  that was passed on from the mapping
    });



    /*
      our function Recipe List returns:
      returns the RecipeComponents i.e each of the 5 Recipe components + displays them on the page

    */ 
   
    return(
        <>
        {cakeRecipeComponents}
        </>
    )

}

export default RecipeList;