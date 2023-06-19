// const firstName = 'r0ulito';
// const lastName = 'formateur';

// function FirstName(props) {

//     /*
//     // Solution avec bonus
//     const formatFirstName = (firstName) => {
//         return firstName[0].toUpperCase() + firstName.substr(1);
//     }

//     return <span>{formatFirstName(props.text)}</span>
//     */

//     // Solution sans bonus
//     return <span>{props.text[0].toUpperCase() + props.text.substr(1)}</span>
// }

// function LastName(props) {

//     /*
//     // Solution avec bonus
//     const formatLastName = (lastName) => {
//         return lastName.toUpperCase();
//     }

//     return <span>{formatLastName(props.text)}</span>
//     */

//     // Solution sans bonus
//     return <span className="red-text">{props.text.toUpperCase()}</span>

// }

// const helloWorld = <h1>Hello <FirstName text={firstName}/> <LastName text={lastName}/></h1>;

// Exo 5

// function Clock(props) {
//         return (
//             <div>
//             <h1>Bonjour, monde !</h1>
//             <h2>Il est {props.date.toLocaleTimeString()}.</h2>
//             </div>
//         );
//         }

//         function tick() {
//         ReactDOM.render(
//             <Clock date={new Date()} />,
//             document.getElementById('root')
//         );
//     }
//     setInterval(tick, 1000);  

// test

function Clock() {

    const [actualDate, setActualDate] = React.useState(new Date())

    React.useEffect(() => {

        const interval = setInterval(() => {
            setActualDate(new Date());
        }, 1000);
    
        return () => {
            clearInterval(interval);
        };


    }, [actualDate])

    return (
       <div>
        <h1>hello {actualDate.toLocaleTimeString()}</h1>
       </div> 
    )
}

ReactDOM.render(<Clock />, document.getElementById('root'))