//  CakeRecipe component

const CakeRecipe = ({cakeRecipe}) => {                     // cakeRecipe is a function that takes ina variable "cakeRecipe"

    const {cakeName, ingredients, rating} =cakeRecipe     // destructuring cakeRecipe so we can get access to its properties + be able to use them directly instead of doing cakeRecipe.cakeName etc
    
    const [ ...x]= ingredients                            // I wanted the ingredients to show up with commas- I could have just used ingredients + `` in its corresponding p element, but I just deciced to deconstruct it further - so ...x just means remaining ingredients, whhich is basically all ingredients anyway- recall for desconstructing an array (ingredients is an array) you use []
                      

    
    // our CakeRecipe returns a h3 element, a p element and breaks

    return (


        <>
               

            <h3>Cake Name: {cakeName}</h3>           {/* cake recipe uses the name in our deconstructued  */}   
            <p>Ingredients: { x + ','} </p>           {/* `` will give commas between each ingredient* - but small problem- when I add new recipe, ingredients word is broken up by character- separated!/}
            <p>Rating: {rating}</p>
            <br></br>                                {/* break */}
            
            <hr/>                                    {/* note: </hr> is a thematic break so for each member we get we will have a break between them  */}

            <br></br>
        </>      
    )
}

// export cakeRecipe function

export default CakeRecipe;











// good website for destructuring arrays: https://www.freecodecamp.org/news/array-and-object-destructuring-in-javascript/