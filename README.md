
/*
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search Bar
 *  - Restaurant Container
 *   - Restaurant Card
 *    - Image
 *    - Name
 *    - Rating, cuisin, delivery time
 * Footer
 *  - Links
 *  - Copyright
 *  - Address
 *  - Contact
 */

# why react is fast ?
- becaue react is doing efficient DOM manipulation 
- How ? => because it has vDOM

# React Hooks:
- Normal JS utility functions 
- two very important hooks
- useState()  - powerful state variables in react 
                - state variables - maintains the state of the component
                -  whenever a state variable updates, react rerenders the component 
- useEffect() 

# how react works behind the scenes:
Reconciliation algorithm(React fibre):
- in react 16 , new algo came called react fiber.
- Its a new way of finding the diffs and update the vDOM

# Virtual DOM:
- Not an actual DOM 
- is representation of actual DOM 
- for a react component, an object is created (eg. console.log(<Body />)) - this is normal JS object , called vDOM

# Diff Algo:
- finds the difference between the two vDOMs (actual and the new )

# Monolith vs MicroService Arch
Monolith:
- all services are under same project
Microservice:
- individual servcices for individual usecase
- follows single responsibility principle

# two ways we can fetch the data in FE 
- 1. as soon as our page loads, we can call the api and wait for the api call to respond, then we render
- 2. As soon as the page loads, we will render the page quickly(skeleton), now we will make an API call, and as soon as we get the data from API then we will render the data

- in react, we will always be using second approach.
React renders the UI very fast, so we no need to bother about 2 time render 

# what is a hook in react ?
- it is nothing but a normal JS function
- usd for specific purpose

# useEffect()
- it will two args, callback fun and dependency array
# When will it render
- when a component is called, it will render the component. and as soon as the render cycle is finished, it will just quickly useEffect is called.

# CORS
- Our browser wont allow us to call another origin

