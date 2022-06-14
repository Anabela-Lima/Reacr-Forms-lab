/*
set up a component as you would normally
Recipe container is responsible for rendering RecipeList so import it.
Recipe container is also responsible for rendering NewRecipe so import it.
Recipe container is also responsible for rendering Status so import it 
Let us also import the useState from the react library. "useState" is a function, when called it gives us 2 things
1. variable we can use to track value of applicationsopen variable, and gives us a value, we can update it- returns an array and a function

*/
import RecipeList from "../components/RecipeList"
import CakeRecipe from "../components/CakeRecipe"
import NewRecipe from "../components/NewRecipe"
import { Component, useState } from "react"



const RecipeContainer = () => {                 // RecipeContainer = a function


    /* 
    
    lets add some data:

    a set of cakeRecipe - array of 4 objects each object has a set of keys- cakeName, ingredients + rating
    our Recipe container knows about those cakeRecipes, list needs to know about these cakeRecipes
    so we need to make that componenet + get info to it 

    */


    const [cakes, setCakeRecipe] = useState([        // changed format : our array uses useState so adding new cakeRecipe is actually going to do something to our array of cakes- we will use setCake)


        {
            cakeName: "Lemon Drizzle",
            ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
            rating: 5
        },
        {
            cakeName: "Tea Loaf",
            ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
            rating: 3
        },
        {
            cakeName: "Brownie",
            ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
            rating: 4
        },
        {
            cakeName: "Carrot Cake",
            ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
            rating: 5
        }



    ])



    /*
     Recipe container returns:

     1. NewMember
     2. MemberList
     3. Status


    */

    // addding a new Recipe 

    const addNewRecipe = (addNewRecipe)=> {          // takes addNewRecipe - instead of hardcoding it as we did with Cem

        setCakeRecipe([...cakes, addNewRecipe]);

        console.log("Added a new Recipe")

    }


    // our function returns a RecipeList, and an addNewRecipe

   
    return(
        <>
    §
        <RecipeList listOfRecipes={cakes}/>          {/* RecipeList RecipeContainer, takes a property called listOfRecipes and that list of recipes holds cakes */}

        <NewRecipe addNewRecipe= {addNewRecipe} />   {/* NewRecipe Container, takes a property called addNewRecipe and that property holds inside it the addNewRecipe variable*/}
        
        </>

    )




}


 export default RecipeContainer;