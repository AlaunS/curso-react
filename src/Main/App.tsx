import {useEffect, useState} from "react";

// Funciones
// Arreglos

// Ciclos
// Objetos
// Clases y Tipos

export const App = () => {

    // Funciones para inicializar el programa y controlar
    // Los recursos necesarios para su uso basico
    const [init, setInit] = useState(false);
    useEffect(() => setInit(true), []);
    useEffect(() => {
        if (init)
            OnStart();
    }, [init]);

    // Función donde vamos a programar toda la lógica en consola
    const OnStart = () => {

        // Funciones
        // const nombreFuncion = () => { codigo }

        // Funciones sin parametros
        // Funciones con parametros
        // Funciones de retorno
        // Funciones con variables temporales

        // const funcion = () => {}
    }

    return (
        <div className="p-3">

        </div>
    )
}