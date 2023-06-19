// const helloWorld = <h1>Hello <span>{firstName[0].toUpperCase() + firstName.slice(1)}</span> <span className="red-text">{lastName.toUpperCase()}</span></h1>;
//const helloWorld = React.createElement('h1', {}, 'Hello world!');

// Solution sans bonus

const FirstName = ({firstFromApp}) => {

  return (
    <span className= "red">{firstFromApp}</span>
  )
} 
const LastName = ({lastFromApp}) => {
  return (
    <span className="up">{lastFromApp}</span>
    )
} 


const App = () => {
const first = 'r0ulito';
const last = 'formateur';
  
  return (
    <div>
  <FirstName
  firstFromApp={first}
  />
  <lastName
  lastFromApp={last}
  />
 </div>
)
}

/**
 * 
 * Solution avec bonus
 */

/*
 const formatFirstName = (value) => value[0].toUpperCase() + value.slice(1);

 const formatLastName = (value) => value.toUpperCase();
 
 // Solution avec bonus
 const helloWorld = (
   <h1>
     Hello <span>{formatFirstName(firstName)}</span>{" "}
     <span className="red-text">{formatLastName(lastName)}</span>
   </h1>
 );

 */

ReactDOM.render(App, document.querySelector('#app'));
