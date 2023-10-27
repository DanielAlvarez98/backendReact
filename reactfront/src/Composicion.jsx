import React from "react";

function Welcome (props){
    return <h1>Tienda,{props.name}</h1>;
}

function App(){
    return (
        <div>
            <Welcome name="Menestra"/>
            <Welcome name="Lacteros"/>
            <Welcome name="Adrezo"/>

        </div>
    );
}
ReactDOM.render(
    <App/>, document.getElementById('root')
);