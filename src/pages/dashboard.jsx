import { useState } from 'react';

import { PokemonList } from '../components/Pokemon/PokemonList';
import { Page } from "../components/Page";

import { getPokemonList } from '../services/pokemonapi';

export const DashboardPage = () => {
    const pokemons = getPokemonList();

    return (
        <Page title="DashBoard Page">
            <section>
                <PokemonList pokemonList={pokemons.results} />
            </section>
        </Page>
    );
};
