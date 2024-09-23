import './App.css'
import {useState} from "react";
import {response} from "./data.ts";
import CharacterCard from "./CharacterCard.tsx";

interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
}

export default function App() {
    // Set the initial state with the imported characters
    const [characters, setCharacters] = useState<Character[]>(response.results);


    return (
        <div>
            <h1>Rick and Morty Gallery</h1>
            <div>
                {characters.map((character) => (
                    <CharacterCard key={character.id} character={character}/>
                ))}
            </div>

        </div>
    );
}