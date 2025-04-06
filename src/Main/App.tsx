import {useEffect, useState} from "react";

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
        console.log("Hola mundo");
    }

    // Función para imprimir hola mundo
    const PrintAdiosMundo = () => {
        console.log("Adios mundo");
    }

    return (
        <div className="p-3">
            <button
                className="bg-zinc-300 rounded-lg hover:cursor-pointer p-3"
                onClick={() => PrintAdiosMundo()}
            >Imprimir</button>
        </div>
    )
}