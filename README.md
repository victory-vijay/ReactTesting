
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
                - local state variables - maintains the state of the component
                - whenever a state variable updates, react rerenders the component 
                - Never create state hooks outside components
                - always try to create usestate on first of the component
                - never create a usestate in a if-else , forloop, or function (we create only in functional components)

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
- When ever there is a change in state variable, react triggers a reconcialiation cycle(rerender of component)

# useEffect()
- it will two args, callback fun and dependency array
# When will it render
- when a component is called, it will render the component. and as soon as the render cycle is finished, it will just quickly call useEffect.
# dependency array in useEffect
- if no dependency array, its called on every component render 
- if empty array [], its called on only initial render(just once)
- if something is array, it will only be called when that variable changes

# CORS
- Our browser wont allow us to call another origin

# 2 types routing in web apps
- Client side routing 
    - when we route to a page, we are only rendering that component instead of entire page.
- Server side routing 
    - make a network call and the entire page reloads, then it is server side rendering.


# class based components   