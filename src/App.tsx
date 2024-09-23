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
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value.toLowerCase();
        setSearchTerm(inputValue);

        // Filter characters based on the search term
        const filtered = response.results.filter((character) =>
            character.name.toLowerCase().includes(inputValue)
        );

        // Update the characters state based on the search
        setCharacters(filtered);
    };

    return (
        <div>
            <h1>Rick and Morty Gallery</h1>
            <input
                type="text"
                placeholder="Search for a character..."
                value={searchTerm}
                onChange={handleSearch}
            />
            {characters.length === 0 ? (
                <p>No characters found for "{searchTerm}".</p>
            ) : (
                <div className="character-list">
                    {characters.map((character) => (
                        <CharacterCard key={character.id} character={character} />
                    ))}
                </div>
            )}
        </div>
    );
}