import { NavBar } from "./Navbar";
import imagenInicial from "../images/pikachu.png";
import imagenFinal from "../images/charmander.png";

export const Page = ({ title, children }) => {
    return (
        <>
            <header className="bg-red-600 text-white py-2 px-4 border-yellow-400 border-4">
                <div className="text-lg text-center font-bold font-mono">{title}</div>
                <NavBar />
            </header>
            <main className="grow bg-gray-100 border-blue-400 border-4 shadow-lg">
                {children}
            </main>
            <footer className="p-4 bg-black text-yellow-300 border-red-500 border-4 flex items-center justify-between">
                <img
                    src={imagenInicial}
                    alt="Pikachu imagen inicial"
                    className="w-16 h-16"
                />
                <p className="flex-grow text-center">
                    "Captura tus sueños y entrena tu espíritu. ¡Atrápalos todos!"
                </p>
                <img
                    src={imagenFinal}
                    alt="Charmander imagen final"
                    className="w-16 h-16"
                />
            </footer>
        </>
    );
};