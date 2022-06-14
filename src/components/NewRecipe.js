import { useState } from "react"

const NewRecipe = ({addNewRecipe}) => {


    // part 2: [Submitting THE FORM ]


    // lets initiate 3 variables that are going to keep track of the  state 
    // we use this state so that we can mirror the input to the state variable - see [Read Me:]
    
    const [cakeName, setCakeName] = useState("");             //cakeNme, and we can set its name, it first starts off as emoty string
    const [ingredients, setIngredients] = useState("");       //ingredients, and we can set it using setIngredients, it first starts off as emoty string
    const [rating, setRating] = useState(0);                  // raintg is initially set to 0 


    // lets define what happens when the form is submitted

    const handleFormSubmit = (event) => {                   // handleFormSubmit is a function that takes in an event
        event.preventDefault();                             // forms have their own default behaviour they want to execute on submission which is to refresh- let us prevent this default

     // lets take our information that we have in state which also equals to our input
     // and actually use it to create a new recippe object.

        const newRecipe = {                                          // new Recipe is a function
            cakeName: cakeName,                                      // it has a cakeName key, and its value is the  one that we have in state - recall: input and state are mirrors of eachother so value coming from state is same as input
            ingredients: ingredients,                                // similarly ingredients and its value is one that we  defined in the state
            rating: rating
        }

        // upon submission- we want the fields to reset:

        setCakeName("");                                          //setCakeName goes back to an empty string
        setIngredients("");                                       // setIngredients goes back to an empty string
        setRating(0);                                             // rating value goes back to 0
        addNewRecipe(newRecipe);                                  // lets take that newRecipe that we created using the form and pass it through to the addNewRecipe object i.e. the input argument of the NewRecipefunction
    }


    // part 1: [ CREATING THE FORM ]

    /*
      [Read ME:]

     - Forms have submit buttons, the submit button is defined by an input tag, with a type : submit- this is 
       what allows this to be a submit button- the type! When the button is clicked, it will fire a submit event
       we want to be able to catch that submit event, so use an onSubmit event inside the form tag. 
       and when we submit, we call our handleFormSubmit  event handler - which is resposible for adding the new student
       it takes the provided details and uses them to create the new Recipe.
    
     -inside the return we use htmlFor instead for because for in javascript is a reserved
     keyword

     - the type in ingredients is ingredients so only inputs with an @ sign will be accepted

     - we want whatever is going on in the state to reflect whatever is going on in the input
       and whatever's going on in the input to reflect whatever is going on the state:
       the two are mirrors of eachother

     - we added event handlers so when somebody adds an input, it will update the value in the state also
       recall we want state and input to be mirrors of eachother, a change in input must therefore result in 
       a change in the state variables. We used onchange- to specify: when user makes a change in the input field 
       do this (i.e. whatever is defined on RHS- so for example: for name input field, when user makes a change,
       their input will be passed on to the state too- "updating the state". Now, the input and state are mirrors.)
       Note: these event handlers could have been defined with .addeventListener as a callbackfunction
       but for simplicity, we just defined them in line 
       
    */



       function updateTextInput(val) {
        let ratingRange = document.querySelector("#rating").value=val 
      }

     const limiter = (rating) => {
        let ratingRange = document.querySelector("#rating") 
        if (ratingRange.value < 0) ratingRange.value =0
        if (ratingRange.value<5) ratingRange.value = 5;
       }




    return(

        
        
        <>
            <form onSubmit={handleFormSubmit}>                                               
                
                <label id="cakeName-label" htmlFor="cakeName">Cake Name:</label>
                <input 
                    type="text"                                              // datatype =text
                    id="cakename"                                             // this input field has an id= "name"
                    value={cakeName}                                          // set value of name = value of state, so add name variable
                    onChange={(event) => setCakeName(event.target.value)}     // adding an event handler: takes an event, and sets name (using setName function- with argumnet of event value) to be equal to the input provided by client- now input = state (they are mirrors)
                />
                <label id="ingredients-label" htmlFor="ingredients">Ingredients:</label>
                <input 
                    type="text"                                                 // datatype =text
                    id="ingredients"                                            // this input field has an id= "ingredients"
                    value={ingredients}                                         // set value of ingredients = value of state, so add ingredients variable
                    onChange={(event) => setIngredients(event.target.value)}
                />
                <label id="rating-label" htmlFor="rating" > Rating:</label>
                <input 
                    type="range" min= "0" max="5" step="1"   oninput="num.value = this.value"              // datatype = number
                    id="rating"                                             // this input field has an id= "rating"
                    value={rating}                                          // set value of rating = value of state, so add rating variable
                    onChange={(event) => setRating(event.target.value)}
                    
                />

                <output id="num">{rating}</output>
                
                
                <div id= "submit-form-button">
                    
                 <input                                                      // this input is basically the submit form button
                 type="submit"                                              // we have defined it as such by using a type of "submit"- what that means is that its going to fire a submit event
                 value="add Recipe"                                         // text that appears on the submit button
                />

                </div>
                

                

                
            </form>


            
        </>
    )



   
}

// exporting the NewRecipe function 

export default NewRecipe;




// webpage on slider ranges: https://css-tricks.com/value-bubbles-for-range-inputs/