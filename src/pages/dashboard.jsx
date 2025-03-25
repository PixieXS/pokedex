import { useState } from 'react';
import { PokemonList } from '../components/Pokemon/PokemonList';
import { Page } from "../components/Page";
import { usePokemonList } from '../services/pokemonapi'; 

export const DashboardPage = () => {
    const { results } = usePokemonList(); 

    return (
        <Page title="DashBoard Page">
            <section>
                <PokemonList pokemonList={results} />
            </section>
        </Page>
    );
};
