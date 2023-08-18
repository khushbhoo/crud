import { useState, useContext } from "react";
import { PersonContext } from "../context/PersonContext"

export const PersonAdd = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const { addPerson } = useContext(PersonContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        addPerson({ name, age, email, city })
        setName('');
        setAge('');
        setEmail('');
        setCity('');
    };

    return (
        <>
            <main
                className="d-flex flex-column py-2 px-4"
                style={{ minHeight: "100vh" }}
            >
                <h1 className="h1 mb-4">Add Person</h1>

                <form onSubmit={handleSubmit} style={{ maxWidth: '60vh' }}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="age" className="form-label">
                            Age
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="age"
                            placeholder="Enter age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="city" className="form-label">
                            City
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="city"
                            placeholder="Enter city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Add Person
                    </button>
                </form>
            </main>
        </>
    )
}
