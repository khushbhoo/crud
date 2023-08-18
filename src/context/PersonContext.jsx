import { createContext, useState, useEffect } from 'react';

export const PersonContext = createContext();

// eslint-disable-next-line react/prop-types
export function PersonProvider({ children }) {
    const getPersons = JSON.parse(localStorage.getItem('persons'))
    const [persons, setPersons] = useState(getPersons ? getPersons : []);

    useEffect(() => {
        localStorage.setItem('persons', JSON.stringify(persons));
    }, [persons]);

    const addPerson = (person) => {
        setPersons([...persons, person]);
    };

    return (
        <PersonContext.Provider value={{ persons, addPerson }}>
            {children}
        </PersonContext.Provider>
    );
}
