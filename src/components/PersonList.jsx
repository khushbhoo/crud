
import { PersonContext } from "../context/PersonContext"
import { useContext } from "react"

export const PersonList = () => {
    const { persons } = useContext(PersonContext)
    console.log(persons)

    return (
        <>
            <main
                className="d-flex flex-column px-4 py-2"
                style={{ minHeight: "100vh" }}
            >
                <h1 className="h1">Person List</h1>
                <table className="table mt-4">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Email</th>
                            <th scope="col">City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {persons?.map((person, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index}</th>
                                    <td>{person.name}</td>
                                    <td>{person.age}</td>
                                    <td>{person.email}</td>
                                    <td>{person.city}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </main>
        </>
    )
}
