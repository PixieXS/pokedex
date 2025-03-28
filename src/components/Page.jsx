import { NavBar } from "./Navbar";
import pokeball from './Images/pokeball.png'; 
import pikachu from './Images/pikachu.png';  

export const Page = ({ title, children }) => {
    return (
        <>
            <header className="bg-red-600 text-white py-4 px-6">
                <div className="text-2xl font-bold text-center">{title}</div>
                <NavBar />
            </header>
            <main className="grow bg-white text-black">
                {children}
            </main>
            <footer className="bg-gray-800 text-white text-center p-6 mt-4 border-t border-gray-600">
                <div className="flex justify-center items-center space-x-4">
                    <img
                        src={pokeball}
                        alt="Pokeball"
                        className="w-8 h-8"
                    />
                    <p className="text-sm text-yellow-500 font-semibold">
                        ¡Atrápalos Todos!
                    </p>
                    <img
                        src={pikachu}
                        alt="Pikachu"
                        className="w-8 h-8"
                    />
                </div>
            </footer>
        </>
    );
};
