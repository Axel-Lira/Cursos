/*const element =document.createElement('h1');
element.innerText='Hello React';
const container = document.getElementById('root');
container.appendChild(element);*/

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App'

/*function formatName(persona){
  return persona.nombre + ' ' +persona.apellido;
}

function getGreeting(user){
  if(user){
    return <h1>Hola, {formatName(user)}</h1>;
  }
  return <h1>Hola, extraño</h1>
}
const persona = {
  nombre:'Haxmell',
  apellido:'Corp',
  avatar: 'https://diaryofacrasian.files.wordpress.com/2012/08/gackt-malice-mizer.jpg'
};
const element = (<div>{getGreeting(persona)}<img src={persona.avatar} alt="Avatar" /></div>);
const container = document.getElementById('root');
ReactDOM.render(element,container);//que va a renderisar y donde lo hará*/
const container = document.getElementById('root');
ReactDOM.render(<App />,container);