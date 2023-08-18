import { useNavigate, } from "react-router"
export const PersonHome = () => {
    const naviage = useNavigate()

    return (
        <>
            <main
                className="d-flex justify-content-center align-items-center animated-background"
                style={{ minHeight: "100vh" }}
            >
                <div
                    className="d-flex bg-white p-4 justify-content-center align-items-center"
                    style={{ height: '240px', width: '500px' }}
                >
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => naviage('/list')}
                    >
                        Redirect to person list
                    </button>
                </div>
            </main>
        </>
    )
}
