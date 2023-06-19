//const helloWorld = React.createElement('h1', {}, 'Hello world!');

const first = 'dimitri';
const last = 'Fontenelle';

const helloWorld = <p><span className="red">{last} </span> <span className="up">{first}</span></p>





ReactDOM.render(helloWorld, document.querySelector('#app'));

